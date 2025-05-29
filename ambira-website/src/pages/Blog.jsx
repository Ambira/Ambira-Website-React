// src/pages/Blog.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";       // Common Navbar component
import Footer from "../components/Footer";       // Common Footer component
import BackToTop from "../components/BackToTop";   // Common Back To Top button
import HeroWaves from "../components/HeroWaves";   // Component rendering the SVG waves

const Blog = () => {
  // Optionally initialize libraries like AOS
  useEffect(() => {
    // Example: AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Back To Top Button */}
      <BackToTop />
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section for the Blog */}
      <section className="hero bg-base is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2 mt-6">
                <div className="has-text-centered">
                  <h1 className="title is-size-2 has-text-white">
                    Welcome to My Blog
                  </h1>
                  <p className="subtitle has-text-grey-light is-size-5 mt-3">
                    Here you'll find a collection of my thoughts, stories, and experiences as I navigate through life. Stay tuned for updates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Waves Section */}
      <HeroWaves />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Blog;
