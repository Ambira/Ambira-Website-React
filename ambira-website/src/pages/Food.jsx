// src/pages/Food.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";       // Common Navbar component
import Footer from "../components/Footer";       // Common Footer component
import BackToTop from "../components/BackToTop";   // Back To Top button
import HeroWaves from "../components/HeroWaves";   // Component rendering the SVG waves

const Food = () => {
  useEffect(() => {
    // Uncomment and configure if using AOS (Animate On Scroll)
    // import AOS from "aos";
    // AOS.init({ duration: 1000 });
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
                    Delicious Delights
                  </h1>
                  <p className="subtitle has-text-grey-light is-size-5 mt-3">
                    Explore my culinary adventures, from traditional recipes to modern experiments. Cooking is an art, and I'm here to share my edible creations with you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {/* Recipe Card 1 */}
            <div className="column is-4" data-aos="fade-up">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="recipe1.jpg" alt="Recipe 1" />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">Spicy Masala Chicken</p>
                  <p className="subtitle is-6">
                    A fiery and flavorful chicken dish packed with spices.
                  </p>
                  <a href="#" className="button is-info">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Recipe Card 2 */}
            <div className="column is-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="food/cakeco.jpg" alt="Recipe 2" />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">Classic Chocolate Cake</p>
                  <p className="subtitle is-6">
                    A rich and moist chocolate cake with a velvety texture.
                  </p>
                  <a href="food/chococake.html" className="button is-info">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Recipe Card 3 */}
            <div className="column is-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="recipe3.jpg" alt="Recipe 3" />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">Refreshing Mango Lassi</p>
                  <p className="subtitle is-6">
                    A cool and creamy yogurt drink with the sweetness of ripe mangoes.
                  </p>
                  <a href="#" className="button is-info">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Waves and Footer */}
      <HeroWaves />
      <Footer />
    </>
  );
};

export default Food;
