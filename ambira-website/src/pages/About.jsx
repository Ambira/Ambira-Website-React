// src/pages/About.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";       // Common navbar component
import Footer from "../components/Footer";       // Common footer component
import BackToTop from "../components/BackToTop";   // Common back-to-top component
import HeroWaves from "../components/HeroWaves";   // Component that renders the SVG waves

const About = () => {
  // Optionally initialize external libraries (e.g., AOS) here.
  useEffect(() => {
    // AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Back To Top Button */}
      <BackToTop />

      {/* Navbar that is shared across pages */}
      <Navbar />

      {/* About Hero Section */}
      <section className="hero is-fullheight bg-base">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="has-text-centered">
                  <h1 className="title is-size-2 has-text-white">
                    Ambira Pradhan
                  </h1>
                  <p className="subtitle has-text-grey-light is-size-5 mt-3">
                    Hello! I'm Ambira Pradhan, a passionate cook, artist, traveler,
                    and writer. Through this website, I aim to share my journey,
                    experiences, and creations with the world. Welcome to my corner
                    of the internet!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </section>
       {/* Instead of hardcoding the SVG waves, we now import a shared HeroWaves component */}
        <HeroWaves />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default About;
