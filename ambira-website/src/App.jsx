import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Make sure this path is correct
import About from "./pages/About";
import Blog from "./pages/Blog";
import Art from "./pages/Art";
import Food from "./pages/Food";
import Contact from "./pages/Contact";
// (and other pages)


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/art" element={<Art />} />
        <Route path="/food" element={<Food />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
    </Router>
  );
}

export default App;
