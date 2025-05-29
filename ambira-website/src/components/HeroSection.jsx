// src/components/HeroSection.jsx
import React from "react";
import ambiraImage from "../assets/images/ambira.jpg"; // Adjust the path if necessary

const HeroSection = () => {
  console.log("HeroSection rendered");
  return (
    <section className="hero bg-base is-fullheight">
      <div 
        className="hero-body" 
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "100vh",
          position: "relative"
        }}
      >
        <img
          className="image"
          src={ambiraImage}
          alt="Ambira Pradhan"
          style={{ width: "50rem", maxWidth: "100%", height: "auto", marginBottom: "1rem" }}
        />
        <p 
          className="title has-text-white" 
          style={{ fontFamily: "'Request Coffee', sans-serif", fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Ambira Pradhan
        </p>
        <p 
          className="subtitle mt-3" 
          style={{ fontFamily: "'Request Coffee', sans-serif", fontSize: "1.25rem", color: "#d3d3d3" }}
        >
          Hello
        </p>
        <p 
          className="subtitle mt-3" 
          style={{ fontFamily: "'Request Coffee', sans-serif" }}
        >
          Welcome to my personal website! Feel free to explore and get to know more about me.
        </p>
        <div className="buttons mt-4">
          <a href="/about" className="button is-primary">About Me</a>
          <a href="/contact" className="button is-info">Contact</a>
          <a href="/portfolio" className="button is-warning">Portfolio</a>
        </div>
        {/* Scroll Down Element now placed after the buttons */}
        <div
          className="has-text-centered mt-4"
          data-tippy-content="Scroll Down"
        >
          <a href="#hello">
            <i className="fa-solid fa-circle-chevron-down fa-lg vert-move2" style={{ color: "#BFD641" }}></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
