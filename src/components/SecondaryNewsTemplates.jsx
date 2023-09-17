import React from 'react'
import '../css/SecondaryNewsTemplates.css'
export default function SecondaryNewsTemplates(props) {
    
    switch (props.newsArray.length){  
        case 5:
            return (
            <>
                <section className="well-section">
                <div className="section-title">Well</div>
                <div className="news-group">
                    <a href={props.newsArray[0].url}>
                    <div className="news well">
                        <div className="img-container">
                        <img
                            className="medium-img"
                            //Only Well News have different access to the url of the image due to different fetch
                            src={props.newsArray[0].imgUrl == null ? '' : props.newsArray[0].imgUrl}
                        />
                        </div>
                        <h3>{props.newsArray[0].title}</h3>
                    </div>
                    </a>
                    <div className="divider-news-y"></div>
                    <a href={props.newsArray[1].url}>
                    <div className="news well">
                        <div className="img-container">
                        <img
                            className="medium-img"
                            src={props.newsArray[1].imgUrl == null ? '' : props.newsArray[1].imgUrl}
                        />
                        </div>
                        <h3>{props.newsArray[1].title}</h3>
                    </div>
                    </a>
                    <div className="divider-news-y"></div>
                    <a href={props.newsArray[2].url}>
                    <div className="news well">
                        <div className="img-container">
                        <img
                            className="medium-img"
                            src={props.newsArray[2].imgUrl == null ? '' : props.newsArray[2].imgUrl}
                        />
                        </div>
                        <h3>{props.newsArray[2].title}</h3>
                    </div>
                    </a>
                    <div className="divider-news-y"></div>
                    <a href={props.newsArray[3].url}>
                    <div className="news well">
                        <div className="img-container">
                        <img
                            className="medium-img"
                            src={props.newsArray[3].imgUrl == null ? '' : props.newsArray[3].imgUrl}
                        />
                        </div>
                        <h3>{props.newsArray[3].title}</h3>
                    </div>
                    </a>
                    <div className="divider-news-y"></div>
                    <a href={props.newsArray[4].url}>
                    <div className="news well">
                        <div className="img-container">
                        <img
                            className="medium-img"
                            src={props.newsArray[4].imgUrl == null ? '' : props.newsArray[4].imgUrl}
                        />
                        </div>
                        <h3>{props.newsArray[4].title}</h3>
                    </div>
                    </a>
                </div>
                </section>
                <div className="divider-section"></div>
            </>
            );
    
        case 4:
            return (
            <>
                <section className="science-section">
                <div className="section-title">Science</div>
                <div className="science-container">
                    <a href={props.newsArray[0].url}>
                    <div className="main-news">
                        <div className="news">
                        <div className="news-info">
                            <h3 className="title">{props.newsArray[0].title}</h3>
                            <p>{props.newsArray[0].abstract}</p>
                        </div>
                        <div className="img-container">
                            <img
                            className="big-img"
                            src={props.newsArray[0].multimedia == null
                                ? ""
                                : props.newsArray[0].multimedia[0].url}
                            alt=""
                            />
                        </div>
                        </div>
                    </div>
                    </a>
                    {props.windowSize != 'large' ? <div className="divider-news-x"></div> : <div className="divider-news-y"></div> }
                    <div className="side-news">
                    <div className="news">
                        <a href={props.newsArray[1].url}>
                        <div className="news-info">
                            <h3 className="title">{props.newsArray[1].title}</h3>
                            <p>{props.newsArray[1].abstract}</p>
                        </div>
                        </a>
                        <div className="img-container">
                        <img
                            className="small-img"
                            src={props.newsArray[1].multimedia == null
                                ? ""
                                : props.newsArray[1].multimedia[0].url}
                            alt=""
                        />
                        </div>
                    </div>
                    <div className="divider-news-x"></div>
    
                    <div className="news">
                        <a href={props.newsArray[2].url}>
                        <div className="news-info">
                            <h3 className="title">{props.newsArray[2].title}</h3>
                            <p>{props.newsArray[2].abstract}</p>
                        </div>
                        </a>
                        <div className="img-container">
                        <img
                            className="small-img"
                            src={props.newsArray[2].multimedia == null
                                ? ""
                                : props.newsArray[2].multimedia[0].url}
                            alt=""
                        />
                        </div>
                    </div>
    
                    <div className="divider-news-x"></div>
    
                    <div className="news">
                        <a href={props.newsArray[3].url}>
                        <div className="news-info">
                            <h3 className="title">{props.newsArray[3].title}</h3>
                            <p>{props.newsArray[3].abstract}</p>
                        </div>
                        </a>
                        <div className="img-container">
                        <img
                            className="small-img"
                            src={props.newsArray[3].multimedia == null
                                ? ""
                                : props.newsArray[3].multimedia[0].url}
                            alt=""
                        />
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <div className="divider-section"></div>
            </>
            );
    
        case 6:
            
            return (
            <>
                <section className="sport-section">
                <div className="section-title">Sports</div>
                <div className="sport-container">
                    {props.windowSize != 'small' ?
                    <div className="left-section">
    
                        
                        <div className="news-couple">
                            <a href={props.newsArray[0].url}>
                                <div className="news-info">
                                    <h3 className="title">{props.newsArray[0].title}</h3>
                                    <p>{props.newsArray[0].abstract}</p>
                                </div>
                            </a>
                            <div className="divider-news-x"></div>
                            <a href={props.newsArray[1].url}>
                            <div className="news-info">
                                <h3 className="title">{props.newsArray[1].title}</h3>
                                <p>{props.newsArray[1].abstract}</p>
                            </div>
                            </a>
                        </div>
                        
                        <div className="img-container">
                        <img
                            className="big-img"
                            src={props.newsArray[0].multimedia == null
                                ? ""
                                : props.newsArray[0].multimedia[0].url}
                            alt=""
                        />
                        </div>
                    </div>
                    :
                    <div className="left-section">
                        <div className="news">
                        <h3>{props.newsArray[0].title}</h3>
                        <p>{props.newsArray[0].abstract}</p>
                        <img className='big-img' 
                          src={props.newsArray[0].multimedia == null
                            ? ""
                            : props.newsArray[0].multimedia[0].url} 
                        />
                        </div>
                        <div className="news">
                        <h3>{props.newsArray[1].title}</h3>
                        <p>{props.newsArray[1].title}</p>
                        </div>
                    </div>
                    }
                    {props.windowSize != 'large' ? <div className="divider-news-x"></div> : <div className="divider-news-y"></div> }
                    
                    <div className="mid-section">
                    <a href={props.newsArray[2].url}>
                        <div className="news-info">
                        <h3 className="title">{props.newsArray[2].title}</h3>
                        <p>{props.newsArray[2].abstract}</p>
                        </div>
                    </a>
                    </div>
                    {props.windowSize != 'large' ? <div className="divider-news-x"></div> : <div className="divider-news-y"></div> }
                    <div className="right-section">
                    <div className="news">
                        <a href={props.newsArray[3].url}>
                        <h3 className="title">{props.newsArray[3].title}</h3>
                        </a>
                    </div>
    
                    <div className="divider-news-x"></div>
    
                    <div className="news">
                        <a href={props.newsArray[4].url}>
                        <h3 className="title">{props.newsArray[4].title}</h3>
                        </a>
                    </div>
    
                    <div className="divider-news-x"></div>
    
                    <div className="news">
                        <a href={props.newsArray[5].url}>
                        <h3 className="title">{props.newsArray[5].title}</h3>
                        </a>
                    </div>
                    </div>
                </div>
                </section>
                <div className="divider-section"></div>
            </>
            );
        }
}
