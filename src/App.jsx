import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Make sure this path is correct
import About from "./pages/About";
import Blog from "./pages/Blog";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// (and other pages)


function App() {
  return (
    <div>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/art" element={<Art />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
