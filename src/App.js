import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Footer />
        <Routes>
          {/* Route components are rendered if the path prop matches the current URL */}
          <Route path="/" element={<Section />} exact={true} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
