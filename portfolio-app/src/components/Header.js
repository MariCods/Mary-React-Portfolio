import React from 'react';
import './styles/Header.css';
import Image from '../components/styles/img/Pinkgirl.PNG';

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
        <img src={Image} alt="me"></img>
        <div class="logo"> Maryam's Portfolio</div>
      </h2>
      <div className="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Work</a>
        <a href="#">Commissions</a>
        <a href="#">Contact</a>
      </div>
      <div className="navbar">
        <div className="dropdown">
          <button className="dropbtn">Menu
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
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
