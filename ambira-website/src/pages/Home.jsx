// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";            
import HeroSection from "../components/HeroSection";      
import HeroWaves from "../components/HeroWaves";            
import HelloSection from "../components/HelloSection";      
import Footer from "../components/Footer";                  
import BackToTop from "../components/BackToTop";            

function Home() {
  return (
    <div className="App">
      <BackToTop />
      <Header />
      <HeroSection />
      <HeroWaves />
      <HelloSection />
      <Footer />
    </div>
  );
}

export default Home;
