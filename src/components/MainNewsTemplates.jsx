import React, { useEffect, useState } from "react";
import '../css/MainNewsTemplates.css'
// newsType = main,secondary,side | newsArr |

export default function MainNewsTemplates(props) {

  const [groupImage,setGroupImage] = useState(null);

  //Creare controllo per scelta main image nel caso in cui la prima news non ce l'abbia
  useEffect(()=>{
    //Checks for the first valid multimedia url in the news group and adds it as the main image. If none is found, leaves the image empty.
    let found = false;
    for (let i = 0; i<5; i++){
      
      if (props.newsArray[i]?.multimedia != null || props.newsArray[i]?.multimedia != undefined){
        setGroupImage(props.newsArray[i].multimedia[0].url)
        found = true;
        break;
      }else{
        continue
      }
    }
    if (found == false){
      setGroupImage('');
    }
  },[])
  
  if (props.windowSize == "small") {
    let newsDivArr = [];

    for (let i = 1; i < props.newsArray.length; i++) {
      const newsDiv = (
        <div key={props.newsArray[0].title+Math.random()}>
          <div className="divider-news-x"></div>
          <div className="news">
            <h3>{props.newsArray[i].title}</h3>
            <p>{props.newsArray[i].abstract}</p>
          </div>
        </div>
      );
      newsDivArr.push(newsDiv);
    }

    newsDivArr.push(<div key={Math.random()}className="divider-section"></div>);
    
    
    return (
      <div  className="main-news-section-mobile">
        <a href={props.newsArray[0].url}>
          <div className="main-news-mobile">
            <div className="main-news-info-mobile">
              <h3>{props.newsArray[0].title}</h3>
              <p>{props.newsArray[0].abstract}</p>
              <img
                className="main-news-img-mobile"
                src={groupImage}
              />
            </div>
          </div>
        </a>
        {newsDivArr}
      </div>
    );
  } else {
    switch (props.newsArray.length) {
      case 1:
        return (
          <>
            <section className="news-section-123">
              <div className="news">
                <a href={props.newsArray[0].url}>
                  <div className="news-title">{props.newsArray[0].title}</div>
                  <div className="news-info">
                    <p>{props.newsArray[0].abstract}</p>
                  </div>
                </a>
              </div>

              <div className="img-container">
                <img
                  src={groupImage}
                  className="big-img"
                />
              </div>
            </section>

            <div className="divider-section"></div>
          </>
        );
      case 2:
        return (
          <>
            <section className="news-section-123">
              <div className="double-news">
                <a href={props.newsArray[0].url}>
                  <div className="news">
                    <div className="news-title">{props.newsArray[0].title}</div>
                    <div className="news-info">
                      <p>{props.newsArray[0].abstract}</p>
                    </div>
                  </div>
                </a>
                <div className="divider-news-x"></div>
                <a href={props.newsArray[1].url}>
                  <div className="news">
                    <div className="news-title">{props.newsArray[1].title}</div>
                    <div className="news-info">
                      <p>{props.newsArray[1].abstract}</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="img-container">
                <img
                  src={groupImage}
                  className="big-img"
                />
              </div>
            </section>
            <div className="divider-section"></div>
          </>
        );
      case 3:
        return (
          <>
            <section className="news-section-123">
              <div className="triple-news">
                <a href={props.newsArray[0].url}>
                  <div className="news">
                    <div className="news-title">{props.newsArray[0].title}</div>
                    <div className="news-info">
                      <p>{props.newsArray[0].abstract}</p>
                    </div>
                  </div>
                </a>
                <div className="divider-news-x"></div>
                <a href={props.newsArray[1].url}>
                  <div className="news">
                    <div className="news-title">{props.newsArray[1].title}</div>
                    
                  </div>
                </a>
                <div className="divider-news-x"></div>
                <a href={props.newsArray[2].url}>
                  <div className="news">
                    <div className="news-title">{props.newsArray[2].title}</div>
                    
                  </div>
                </a>
              </div>
              <img
                src={groupImage}
                className="big-img"
              />
            </section>
            <div className="divider-section"></div>
          </>
        );
      case 4:
        return (
          <>
            <section className="news-section">
              <div className="quadruple-news">
                <a href={props.newsArray[1].url}>
                  <div className="quadruple-main">
                    <img
                      src={groupImage}
                      className="big-img"
                    />

                    <div className="news">
                      <div className="news-title">
                        {props.newsArray[0].title}
                      </div>
                      <div className="news-info">
                        <p>{props.newsArray[0].abstract}</p>
                      </div>
                    </div>
                  </div>
                </a>

                <div className="divider-news-y"></div>
                <div className="quadruple-secondary">
                  <a href={props.newsArray[1].url}>
                    <div className="news">
                      <div className="news-title">
                        {props.newsArray[1].title}
                      </div>
                      <div className="news-info">
                        <p>{props.newsArray[1].abstract}</p>
                      </div>
                    </div>
                  </a>
                  <div className="divider-news-x"></div>
                  <a href={props.newsArray[2].url}>
                    <div className="news">
                      <div className="news-title">
                        {props.newsArray[2].title}
                      </div>
                      <div className="news-info">
                        <p>{props.newsArray[2].abstract}</p>
                      </div>
                    </div>
                  </a>
                  <div className="divider-news-x"></div>
                  <a href={props.newsArray[3].url}>
                    <div className="news">
                      <div className="news-title">
                        {props.newsArray[3].title}
                      </div>
                      <div className="news-info">
                        <p>{props.newsArray[3].abstract}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <div className="divider-section"></div>
          </>
        );

      case 5:
        return (
          <>
            <section className="news-section">
              <div className="quintiple-news">
                <div className="quintuple-main">
                  <a href={props.newsArray[0].url}>
                    <div className="news">
                      <div className="news-title">
                        {props.newsArray[0].title}
                      </div>
                      <div className="news-info">
                        <p>{props.newsArray[0].abstract}</p>
                      </div>
                    </div>
                  </a>
                  <div className="quintuple-image-container">
                    <img
                      src={groupImage}
                      className="big-img"
                    />
                  </div>
                </div>

                <div className="quintuple-secondary">
                  <div className="left-group">
                    <a href={props.newsArray[1].url}>
                      <div className="news">
                        <div className="news-title">
                          {props.newsArray[1].title}
                        </div>
                        <div className="news-info">
                          <p>{props.newsArray[1].abstract}</p>
                        </div>
                      </div>
                    </a>

                    <div className="divider-news-x"></div>
                    <a href={props.newsArray[2].url}>
                      <div className="news">
                        <div className="news-title">
                          {props.newsArray[2].title}
                        </div>
                        <div className="news-info">
                          <p>{props.newsArray[2].abstract}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="divider-news-y"></div>
                  <div className="right-group">
                    <a href={props.newsArray[3].url}>
                      <div className="news">
                        <div className="news-title">
                          {props.newsArray[3].title}
                        </div>
                        <div className="news-info">
                          <p>{props.newsArray[3].abstract}</p>
                        </div>
                      </div>
                    </a>
                    <div className="divider-news-x"></div>
                    <a href={props.newsArray[4].url}>
                      <div className="news">
                        <div className="news-title">
                          {props.newsArray[4].title}
                        </div>
                        <div className="news-info">
                          <p>{props.newsArray[4].abstract}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <div className="divider-section"></div>
          </>
        );

      default:
        console.log("Default Section");
    }
  }
}
