import React, { forwardRef } from "react";
import '../css/NavBar.css';



const NavBar = forwardRef(function NavBar(props, ref) {
  const navStyles = {
    display: props.windowSize == 'large' ? 'block' : 'none'
  }
  return (
    <div className="navbar" ref={ref} style={navStyles}>
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
  );
});

export default NavBar;
