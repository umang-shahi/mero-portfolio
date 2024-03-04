import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/containers/home/index";
import About from "../src/containers/about/index";
import Resume from "../src/containers/resume/index";
import Skills from "../src/containers/skills/index";
import Portfolio from "../src/containers/portfolio/index";
import Contact from "../src/containers/contact/index";
import Navbar from "../src/components/navbar/index";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
