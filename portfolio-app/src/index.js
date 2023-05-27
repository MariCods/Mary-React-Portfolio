import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/components/styles/index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(<App />, document.getElementById('root'));

function Work() {
    return (
      <div>
        <Header />
        <Footer />
        <Work />
      </div>
    );
  }
  
  export default Work;