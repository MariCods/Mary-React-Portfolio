import React from 'react';
import '../styles/Header.css';

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding



// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header>
      <h2>
        <img src="./flex/Pinkgirl.PNG" alt="me"></img>
        Maryam's Portfolio
      </h2>
      <div class="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Work</a>
        <a href="#">Commissions</a>
        <a href="#">Contact</a>
      </div>
      <div class="navbar">
        <div class="dropdown">
          <button class="dropbtn">Menu
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Work</a>
            <a href="#">Commissions</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
