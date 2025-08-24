// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";      
import HeroWaves from "../components/HeroWaves";            
import HelloSection from "../components/HelloSection";      
import BackToTop from "../components/BackToTop";            

function Home() {
  return (
    <div className="App">
      <BackToTop />
      <HeroSection />
      <HeroWaves />
      <HelloSection />
    </div>
  );
}

export default Home;
