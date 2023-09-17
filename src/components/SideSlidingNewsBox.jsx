import React from "react";
import { useState } from "react";
import '../css/SideSlidingNewsBox.css'
export default function SideSlidingNews(props) {
  const [slideStyle, setSlideStyle] = useState({});

  const [slidePosition, setSlidePosition] = useState(0);

  function slideRight() {
    if (slidePosition == 0) {
      setSlideStyle({ transform: "translateX(-100%)" });
      setSlidePosition(1);
    }
    if (slidePosition == 1) {
      setSlideStyle({ transform: "translateX(-200%)" });
      setSlidePosition(2);
    }
  }
  function slideLeft() {
    if (slidePosition == 1) {
      setSlideStyle({ transform: "translateX(0%)" });
      setSlidePosition(0);
    }
    if (slidePosition == 2) {
      setSlideStyle({ transform: "translateX(-100%)" });
      setSlidePosition(1);
    }
  }

 

  return (
    <div className="side-sliding-container">
      <div className="side-sliding-news-container" style={slideStyle}>
        {props.news}
      </div>
      <div className="side-slide-controls">
        <button className="arrows-btn" onClick={slideLeft}>
          {"<"}
        </button>
        <button className="arrows-btn" onClick={slideRight}>
        {">"}
      </button>
      </div>
    </div>
  );
}
