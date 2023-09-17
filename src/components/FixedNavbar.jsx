import React from 'react'
import '../css/FixedNavbar.css'
export default function FixedNavbar(props) {
  
    const navStyles = {
        visibility: props.fixedNavState && props.windowSize  == "large" && props.hamburgerNavState == false ? "visible" : "hidden",
        
        
        transform: props.fixedNavState ? 'translateY(0px)' : 'translateY(-70px)' ,
      };
  return (
    <div className="fixed-navbar" style={navStyles}>
        <ul>
          <li>
            <a href="https://www.nytimes.com/section/world">World</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/us">U.S.</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/politics">Politics</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/nyregion">N.Y.</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/business">Business</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/opinion">Opinion</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/science">Science</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/health">Health</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/sports">Sports</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/arts">Arts</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/books">Books</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/style">Style</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/food">Food</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/travel">Travel</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/magazine">Magazine</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/section/realestate">Real Estate</a>
          </li>
        </ul>
      </div>
  )
}
