import { useEffect, useState, useRef } from "react";

import "./css/topContainer.css";
import "./App.css";
import "./css/dividers.css";

import axios from "axios";
import NewsTemplates from "./components/NewsTemplates.jsx";
import NavBar from "./components/NavBar.jsx";
import HamburgerNav from "./components/HamburgerNav";
import { useInView } from "react-intersection-observer";
import FixedNavbar from "./components/FixedNavbar";

function App() {
  //This is the API key for the weather API : f0cf6ef4bdbc4bb6a7e100624231707 (if needed for the project correction, will be removed after)

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_WEATHER_KEY = import.meta.env.VITE_API_WEATHER_KEY;

  const [ref, inView] = useInView({});

  const [mainSectionsArr, setMainSectionsArr] = useState([]);
  const [sideSectionsArr, setSideSectionsArr] = useState([]);
  const [secondarySectionsArr, setSecondarySectionsArr] = useState([]);

  const [todayDate, setTodayDate] = useState();

  const API_HOMEPAGE = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
  const API_OPINION = `https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=${API_KEY}`;
  const API_WELL = "https://rss.nytimes.com/services/xml/rss/nyt/Well.xml";
  const API_SCIENCE = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${API_KEY}`;
  const API_SPORTS = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${API_KEY}`;
  const API_REALESTATE = `https://api.nytimes.com/svc/topstories/v2/realestate.json?api-key=${API_KEY}`;
  const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${API_WEATHER_KEY}&q=New-York`;

  const [fetchedStateArr, setFetchedStateArr] = useState(false);

  const [mainNews, setMainNews] = useState([]);
  const [sideOpinionNews, setSideOpinionNews] = useState([]);
  const [sideRealEstateNews, setSideRealEstateNews] = useState([]);
  const [scienceNews, setScienceNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [wellNews, setWellNews] = useState([]);

  const [weatherDatas, setWeatherDatas] = useState({});
  const [newsTitles, setNewsTitles] = useState([]);
  const [fixedNavState, setFixedNavState] = useState(false);

  const [windowSize, setWindowSize] = useState(null);

  const [hamburgerNavState, setHamburgerNavState] = useState(false);

  const homePageRef = useRef();
  const hamburgerNavRef = useRef();

  function showNavPage() {
    homePageRef.current.style.display = "none";
    hamburgerNavRef.current.style.display = "flex";
    setHamburgerNavState(true);
  }
  function hideNavPage() {
    homePageRef.current.style.display = "block";
    hamburgerNavRef.current.style.display = "none";
    setHamburgerNavState(false);
  }

  function addToSection(position, newsGroup) {
    if (position == "main") {
      setMainSectionsArr((prevElems) => [...prevElems, newsGroup]);
    } else if (position == "secondary") {
      setSecondarySectionsArr((prevElems) => [...prevElems, newsGroup]);
    } else if (position == "side") {
      setSideSectionsArr((prevElems) => [...prevElems, newsGroup]);
    }
  }

  function createNewsTemplate(position, newsType, newsArr) {
    return (
      <NewsTemplates
        key={newsArr[0].title + Math.random()}
        newsArray={newsArr}
        newsType={newsType}
        windowSize={windowSize}
        position={position}
      />
    );
  }

  //Takes all the fetched news and returns an array with only the first 'num' news ignoring the duplicated ones
  function selectNews(fetchedNewsArr, num) {
    let newsArray = [];
   
    for (let i = 0; newsArray.length < num; i++) {
      //If i checked all news received from API and cant still fill the array, 
      if (i == fetchedNewsArr.length){
        
        return ''
      }
      //If the news is not already in the main news section, push it
      if (!newsTitles.includes(fetchedNewsArr[i])) {
        

        if (fetchedNewsArr[i].item_type == "Article") {
          newsArray.push(fetchedNewsArr[i]);
        }

        setNewsTitles((prevArr) => [...prevArr, fetchedNewsArr[i].title]);
      }
      
    }

    return newsArray;
  }

  //Gets an array of news usually from 20 to 30 main news and adds them into mainNews state in groups of max 5 news each
  function groupNewsByTopic(newsArray) {
    let groupedNews = [];
    let remainingNews = [...newsArray];
    let topicFrequency = {};

    // Group news that share 2 or more topics
    for (let i = 0; i < remainingNews.length; i++) {
      let group = [remainingNews[i]];
      for (let j = i + 1; j < remainingNews.length; j++) {
        let sharedTopics = remainingNews[i].topics.filter((topic) =>
          remainingNews[j].topics.includes(topic)
        );
        if (sharedTopics.length >= 2) {
          group.push(remainingNews[j]);
          remainingNews.splice(j, 1);
          j--;
        }
      }
      if (group.length > 1) {
        groupedNews.push(group);
        remainingNews.splice(i, 1);
        i--;
      }
    }

    // Calculate topic frequency for remaining news
    for (let news of remainingNews) {
      for (let topic of news.topics) {
        if (topic in topicFrequency) {
          topicFrequency[topic]++;
        } else {
          topicFrequency[topic] = 1;
        }
      }
    }

    // Sort topics by frequency
    let sortedTopics = Object.keys(topicFrequency).sort(
      (a, b) => topicFrequency[b] - topicFrequency[a]
    );

    // Group remaining news by most frequent topic
    for (let topic of sortedTopics) {
      let group = remainingNews.filter((news) => news.topics.includes(topic));
      if (group.length > 0) {
        groupedNews.push(group);
        remainingNews = remainingNews.filter(
          (news) => !news.topics.includes(topic)
        );
      }
    }

    return groupedNews;
  }

  //Gets an array of grouped news elements and divides those with more than 5 elements in 2 or more groups
  //It also adds the groups to the main news
  function divideGroupsAndPush(groupedNews) {
    groupedNews.forEach((group) => {
      if (group.length >= 1 && group.length <= 5) {
        setMainNews((prevElems) => [...prevElems, [...group]]);
      } else if (group.length > 5) {
        for (let i = 0; i <= group.length; i += 5) {
          let groupSliced;
          if (group.length - i <= 5) {
            groupSliced = group.slice(i, group.length);
          } else {
            groupSliced = group.slice(i, i + 5);
          }

          setMainNews((prevElems) => [...prevElems, [...groupSliced]]);
        }
      }
    });
  }

  useEffect(() => {
    if (fetchedStateArr == true) {
      setMainSectionsArr([]);
      setSecondarySectionsArr([]);
      setSideSectionsArr([]);

      mainNews.forEach((newsGroup) => {
        const group = createNewsTemplate("main", "main", newsGroup);
        addToSection("main", group);
      });

      let group;

      //Side Sections are moved to the secondary section if navbar is not visible
      if (windowSize != "large") {
        group = createNewsTemplate("secondary", "opinion", sideOpinionNews);
        addToSection("secondary", group);

        if (windowSize == "medium") {
          group = createNewsTemplate("side", "realestate", sideRealEstateNews);
          addToSection("secondary", group);
        } else {
          group = createNewsTemplate(
            "secondary",
            "realestate",
            sideRealEstateNews
          );
          addToSection("secondary", group);
        }
      } else {
        group = createNewsTemplate("side", "opinion", sideOpinionNews);
        addToSection("side", group);

        group = createNewsTemplate("side", "realestate", sideRealEstateNews);
        addToSection("side", group);
      }

      group = createNewsTemplate("secondary", "well", wellNews);
      addToSection("secondary", group);

      group = createNewsTemplate("secondary", "science", scienceNews);
      addToSection("secondary", group);

      if (sportsNews.length != 0){
        group = createNewsTemplate("secondary", "sports", sportsNews);
        addToSection("secondary", group);
      }
    }
  }, [fetchedStateArr, windowSize]);

  //Shows the fixedNav if the default navbar is not visible and windowSize is large
  useEffect(() => {
    if (windowSize != "large") {
      setFixedNavState(false);
      return;
    }

    if (inView) {
      setFixedNavState(false);
    } else {
      setFixedNavState(true);
    }
  }, [inView, windowSize]);

  //Updates windows size
  useEffect(() => {
    const updateWindowSize = () => {
      if (window.innerWidth < 700) {
        setWindowSize("small");
      } else if (window.innerWidth >= 700 && window.innerWidth < 1050) {
        setWindowSize("medium");
      } else {
        setWindowSize("large");
      }
    };
    window.addEventListener("resize", updateWindowSize);
    return function () {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setWindowSize("small");
    } else if (window.innerWidth >= 700 && window.innerWidth < 1050) {
      setWindowSize("medium");
    } else {
      setWindowSize("large");
    }

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const daysNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const d = new Date();

    d.get;
    const dateString =
      daysNames[d.getDay()] +
      ", " +
      monthNames[d.getMonth()] +
      " " +
      d.getDate() +
      ", " +
      d.getFullYear();
    const date = new Date();

    setTodayDate(dateString);

    axios.get(API_WEATHER).then(function (response) {
      setWeatherDatas({
        icon: response.data.current.condition.icon,
        weather: response.data.current.condition.text,
        temperature: response.data.current.temp_c,
      });
    });

    axios
      .all([
        axios.get(API_HOMEPAGE),
        axios.get(API_OPINION),
        axios.get(API_REALESTATE),
        axios.get(API_WELL),
        axios.get(API_SCIENCE),
        axios.get(API_SPORTS),
      ])
      .then(
        axios.spread(
          (
            homepageRes,
            opinionRes,
            realestateRes,
            wellRes,
            scienceRes,
            sportsRes
          ) => {
            /* HomePage Response */

            let responseNews = [];

            homepageRes.data.results.forEach((news) => {
              setNewsTitles((prevElems) => [...prevElems, news.title]);
              responseNews.push({
                ...news,
                sharesWith: [],
                allShares: [],
                topics: [...news.des_facet],
              });
            });

            const groupedNews = groupNewsByTopic(responseNews);

            divideGroupsAndPush(groupedNews);

            //Creates groups of max 5 elements
            //If a group had 7 news, it divides them into two groups of 5 and 2.

            /* Opinion Response */

            const opinionNews = opinionRes.data.results;
            let sixteenOpinionNews = [];
            for (let i = 0; sixteenOpinionNews.length < 16; i++) {
              //Se la news non è gia presente tra le main, inseriscila
              if (!newsTitles.includes(opinionNews[i])) {
                sixteenOpinionNews.push(opinionNews[i]);
                setNewsTitles((prevArr) => [...prevArr, opinionNews[i].title]);
              }
            }
            setSideOpinionNews(sixteenOpinionNews);

            /* RealEstate Response */

            const realEstateNews = realestateRes.data.results;
            const selectedRealEstateNews = selectNews(realEstateNews, 5);
            if (selectedRealEstateNews != ''){
              setSideRealEstateNews(selectedRealEstateNews);
            }
            
            

            /* Well Response */

            //Leggo il file .xml e prendo i dati che mi servono
            const xmlDoc = new DOMParser().parseFromString(
              wellRes.data,
              "text/html"
            );
            const allNews = xmlDoc.querySelectorAll("item");

            let wellNewsArr = [];

            let index = 0;
            for (const news of allNews) {
              if (index == 5) {
                break;
              }
              console.log(news);
              const title = news.querySelector("title").textContent;
              const imgUrl = news
                .querySelector("media\\:content")
                .getAttribute("url");
              const imgCredit =
                news.querySelector("media\\:credit")?.textContent;
              const url = news.querySelector("guid").textContent;

              wellNewsArr.push({
                title: title,
                url: url,
                imgUrl: imgUrl,
                imgCredit: imgCredit,
              });
              index++;
            }

            setWellNews(wellNewsArr);

            /* Science Response */

            const scienceNews = scienceRes.data.results;

            const selectedScienceNews = selectNews(scienceNews, 4);

            setScienceNews(selectedScienceNews);

            /* Sport Response */
            const sportNews = sportsRes.data.results;
            
            const selectedSportNews = selectNews(sportNews, 6);
            if (selectedSportNews.length == 6){
              setSportsNews(selectedSportNews);
            }else{
              console.log('Unable to fetch enough valid Sports news')
            }

            

            //Fetched = true after the last fetch

            setFetchedStateArr(true);
          }
        )
      );

    //Side Opinions Fetch
  }, []);

  return (
    <>
      <FixedNavbar
        fixedNavState={fixedNavState}
        windowSize={windowSize}
        hamburgerNavState={hamburgerNavState}
      />
      <div className="hamburger-nav" ref={hamburgerNavRef}>
        <div className="hamburger-nav-top">
          <img className="main-logo" src="/assets/NYTLogo2.png" />
          <button className="hamburger-close-button" onClick={hideNavPage}>
            X
          </button>
        </div>
        <HamburgerNav />
      </div>
      <div className="homepage" ref={homePageRef}>
        <div className="top-container">
          <div className="left-side">
            {windowSize != "large" ? (
              <img
                className="hamburger-icon"
                src="/assets/hamburger-icon.png"
                onClick={showNavPage}
              />
            ) : (
              ""
            )}
            <div className="date">{todayDate}</div>
          </div>
          <div className="logo-container">
            <a href="https://nytimes.com">
              <img className="main-logo" src="/assets/NYTLogo2.png" />
            </a>
          </div>
          <div className="weather-box">
            <div className="weather-infos">
              <h4>New York</h4>
              <p id="temperature">{weatherDatas.temperature}°C</p>
              <p id="weather">{weatherDatas.weather}</p>
            </div>
            <img id="weather-icon" src={weatherDatas.icon} />
          </div>
        </div>
        <div className="divider-title-nav"></div>
        <NavBar ref={ref} windowSize={windowSize} />
        <div className="divider-doubleline"></div>
        <div className="main-container">
          <div className="main-news">{mainSectionsArr}</div>
          <div className="divider-main-sidebar"></div>
          <div className="sidebar">{sideSectionsArr}</div>
        </div>

        <div className="secondary-news">{secondarySectionsArr}</div>
        <p>
          <b>This is a CLONE website, not the real one</b>
        </p>
        <img className="api-img" src="/assets/nytimesapi.png" />
      </div>
    </>
  );
}

export default App;
