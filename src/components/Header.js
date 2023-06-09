import React from 'react';
import './styles/Header.css';
import Image from '../components/styles/img/pro.jpg';
import {Link} from 'react-router-dom';

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
        <Link to="/">About</Link>
        <Link to="/Works">Projects</Link>
        <Link to="/Resume">Resume</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <div className="navbar">
        <div className="dropdown">
          <button className="dropbtn">Menu
            <i class="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/">About</a>
            <a href="/Works">Projects</a>
            <a href="/Resume">Resume</a>
            <a href="/Contact">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
