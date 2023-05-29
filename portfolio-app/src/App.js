import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter ,Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Works from "./components/Works";
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Footer />
      {/* <Section /> */}
    

      { /* Route components are rendered if the path prop matches the current URL */}
      <Route path="/"><Section /></Route>
      <Route path="/Works"><Works /></Route>
     
  
    </div>
    </BrowserRouter>
  );
}

export default App;
