import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/components/styles/index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Works from "./components/Works";
import Section from "./components/Section";

ReactDOM.render(<App />, document.getElementById('root'));

function Home() {
    return (
      <div>
        <Header />
        <Footer />
        <Works />
        <Section />
        
      </div>
    );
  }
  
  export default Home;