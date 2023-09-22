import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import SideSlidingNewsBox from "./SideSlidingNewsBox"
import '../css/SideNewsTemplates.css'

export default function SideNewsTemplates(props) {
  
  const [sideOpinionNews, setSideOpinionNews] = useState([]);
  const [sideSlidingNews, setSideSlidingNews] = useState([]);
  console.log('side',props.newsArray)
  useEffect(() => {
    //Opinions sidebar section
    if (props.newsType == "opinion") {
      console.log("ci entro");

      //The first 10 opinion news are showed one per row, while the last 6 are grouped by 2 into a carousel
      setSideOpinionNews(
        props.newsArray.map((news, index) => {
          let sideImgUrl = "";
          let authors = news.byline.slice(3);
          let kickerLen = news.kicker.split(" ").length;

          

          if (news.kicker && !news.kicker.includes("Guest") && kickerLen != 1) {
            let kicker = news.kicker.replace(/\s/g, "");

            sideImgUrl = `https://static.nytimes.com/email-images/NYT-Newsletters-OP-${kicker}.png`;
          }

          if (index < 10) {
            return (
              <a href={news.url}>
                <div key={news.title + Math.random()} className="sidebar-news">
                  <div className="side-news-info">
                    <div className="news-author">{authors}</div>
                    <div className="side-news-title">{news.title}</div>
                  </div>
                  <div className="author-img-container">
                    <img
                      className="author-img"
                      src={sideImgUrl}
                      onError={(event) => {
                        event.target.style.display = "none";
                        event.target.src = "";
                      }}
                    />
                  </div>
                </div>
              </a>
            );
          } else {
            const elem = (
              <div
                key={news.title + Math.random()}
                className="side-sliding-news"
              >
                <div className="side-news-info">
                  <div className="news-author">{authors}</div>
                  <div className="side-news-title">
                    <a href={news.url}>{news.title}</a>
                  </div>
                </div>
              </div>
            );

            setSideSlidingNews((prevArray) => {
              return [...prevArray, elem];
            });
          }
        })
      );
    }
  }, []);
  switch (props.newsType) {
    case "opinion":
      return (
        <>
          <h4>Opinion</h4>
          <section className="side-opinion-section">
            {sideOpinionNews.map((news) => {
              if (news == undefined) {
                return;
              } else {
                return (
                  <div key={Math.random()}>
                    {news}
                    <div className="divider-news-x"></div>
                  </div>
                );
              }
            })}
            <SideSlidingNewsBox news={sideSlidingNews} />
            <div className="divider-news-x"></div>
          </section>
        </>
      );

    case "realestate":
      if (props.position == "secondary") {
        return (
          <>
            <h4>Real Estate</h4>

            <section className="side-realestate">
              <a href={props.newsArray[0].url}>
                <div className="single-side-news">
                  <div className="single-side-news-info">
                    <h4>{props.newsArray[0].title}</h4>
                    <p>{props.newsArray[0].abstract}</p>
                  </div>

                  <img
                    className="single-side-news-img"
                    src={props.newsArray[0].multimedia[0].url}
                  />
                </div>
              </a>
              <div className="divider-news-x"></div>

              <a href={props.newsArray[1].url}>
                <div className="single-side-news">
                  <div className="single-side-news-info">
                    <h4>{props.newsArray[1].title}</h4>
                    <p>{props.newsArray[1].abstract}</p>
                  </div>

                  <img
                    className="single-side-news-img"
                    src={props.newsArray[1].multimedia[0].url}
                  />
                </div>
              </a>

              <a href={props.newsArray[2].url}>
                <div className="single-side-news">
                  <div className="single-side-news-info">
                    <h4>{props.newsArray[2].title}</h4>
                    <p>{props.newsArray[2].abstract}</p>
                  </div>

                  <img
                    className="single-side-news-img"
                    src={props.newsArray[2].multimedia[0].url}
                  />
                </div>
              </a>

              <div className="divider-news-x"></div>

              <a href={props.newsArray[3].url}>
                <div className="single-side-news">
                  <div className="single-side-news-info">
                    <h4>{props.newsArray[3].title}</h4>
                    <p>{props.newsArray[3].abstract}</p>
                  </div>

                  <img
                    className="single-side-news-img"
                    src={props.newsArray[3].multimedia[0].url}
                  />
                </div>
              </a>

              <a href={props.newsArray[4].url}>
                <div className="single-side-news">
                  <div className="single-side-news-info">
                    <h4>{props.newsArray[4].title}</h4>
                    <p>{props.newsArray[4].abstract}</p>
                  </div>

                  <img
                    className="single-side-news-img"
                    src={props.newsArray[4].multimedia[0].url}
                  />
                </div>
              </a>

              <div className="divider-news-x"></div>
            </section>
          </>
        );
      }
      if (props.position == "side") {
        return (
          <>
            <h4>Real Estate</h4>

            <section className="side-realestate">
              <a href={props.newsArray[0].url}>
                <div className="single-side-news">
                  <div className="single-side-news-info">
                    <h4>{props.newsArray[0].title}</h4>
                    <p>{props.newsArray[0].abstract}</p>
                  </div>

                  <img
                    className="single-side-news-img"
                    src={
                      props.newsArray[0].multimedia == null
                        ? ""
                        : props.newsArray[0].multimedia[0].url
                    }
                  />
                </div>
              </a>
              <div className="divider-news-x"></div>
              <div className="double-side-news-container">
                <a href={props.newsArray[1].url}>
                  <div className="double-side-news">
                    <h4>{props.newsArray[1].title}</h4>
                    
                    <img
                      className="double-side-news-img"
                      src={
                        props.newsArray[1].multimedia == null
                          ? ""
                          : props.newsArray[1].multimedia[0].url
                      }
                    />
                  </div>
                </a>
                <div className="divider-news-y"></div>
                <a href={props.newsArray[2].url}>
                  <div className="double-side-news">
                    <h4>{props.newsArray[2].title}</h4>
                    <img
                      className="double-side-news-img"
                      src={
                        props.newsArray[2].multimedia == null
                          ? ""
                          : props.newsArray[2].multimedia[0].url
                      }
                    />
                  </div>
                </a>
              </div>
              <div className="divider-news-x"></div>
              <div className="double-side-news-container">
                <a href={props.newsArray[3].url}>
                  <div className="double-side-news">
                    <h4>{props.newsArray[3].title}</h4>
                    <img
                      className="double-side-news-img"
                      src={
                        props.newsArray[3].multimedia == null
                          ? ""
                          : props.newsArray[3].multimedia[0].url
                      }
                    />
                  </div>
                </a>
                <div className="divider-news-y"></div>
                <a href={props.newsArray[4].url}>
                  <div className="double-side-news">
                    <h4>{props.newsArray[4].title}</h4>
                    <img
                      className="double-side-news-img"
                      src={
                        props.newsArray[4].multimedia == null
                          ? ""
                          : props.newsArray[4].multimedia[0].url
                      }
                    />
                  </div>
                </a>
              </div>
              <div className="divider-news-x"></div>
            </section>
          </>
        );
      }
  }
}
