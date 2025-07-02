// src/pages/Art.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";       // Common Navbar component
import Footer from "../components/Footer";       // Common Footer component
import BackToTop from "../components/BackToTop";   // Back To Top button
import HeroWaves from "../components/HeroWaves";   // SVG waves component

const Art = () => {
  // Optionally initialize external libraries like AOS
  useEffect(() => {
    // For example: AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Back To Top Button */}
      <BackToTop />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero bg-base is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2 mt-6">
                <div className="has-text-centered">
                  <h1 className="title is-size-2 has-text-white">
                    Gallery of My Artwork
                  </h1>
                  <p className="subtitle has-text-grey-light is-size-5 mt-3">
                    Take a journey through my creative expressions. Here, you'll find a collection of my art pieces, showcasing my love for colors, forms, and imagination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Gallery Section */}
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {/* Art Piece 1 */}
            <div className="column is-4" data-aos="fade-up">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="art1.jpg" alt="Art Piece 1" />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">Abstract Beauty</p>
                  <p className="subtitle is-6">
                    A vibrant display of abstract forms and vivid colors.
                  </p>
                </div>
              </div>
            </div>

            {/* Art Piece 2 */}
            <div className="column is-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="art2.jpg" alt="Art Piece 2" />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">Serene Landscape</p>
                  <p className="subtitle is-6">
                    A calming landscape that captures the essence of nature.
                  </p>
                </div>
              </div>
            </div>

            {/* Art Piece 3 */}
            <div className="column is-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="food/cakeco.jpg" alt="Art Piece 3" />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">Cosmic Dream</p>
                  <p className="subtitle is-6">
                    An imaginative piece exploring the mysteries of the universe.
                  </p>
                </div>
              </div>
            </div>
            {/* Additional art pieces can be added similarly */}
          </div>
        </div>
      </section>

      {/* SVG Waves & Footer */}
      <HeroWaves />
      <Footer />
    </>
  );
};

export default Art;
