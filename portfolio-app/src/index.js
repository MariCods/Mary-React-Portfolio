import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/components/styles/index.css';
import Works from "./components/Works";
import Section from "./components/Section";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

ReactDOM.render(<App />, document.getElementById('root'));

function Home() {
    return (
      <div>
        <Works />
        <Section />
        <Contact />
        <Resume />
        </div>
    );
  }
  
  export default Home;