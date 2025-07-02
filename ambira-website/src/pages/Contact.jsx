// src/pages/Contact.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";       // Shared Navbar component
import Footer from "../components/Footer";       // Shared Footer component
import BackToTop from "../components/BackToTop";   // Shared Back To Top button
import HeroWaves from "../components/HeroWaves";   // Component rendering the SVG waves

const Contact = () => {
  useEffect(() => {
    // Optionally initialize libraries such as AOS
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
                    Get in Touch
                  </h1>
                  <p className="subtitle has-text-grey-light is-size-5 mt-3">
                    I'd love to hear from you! Feel free to reach out to me using the form below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <form>
                <div className="field">
                  <label className="label" htmlFor="name">
                    Name:
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="email">
                    Email:
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="message">
                    Message:
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      id="message"
                      name="message"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button className="button is-primary" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Waves & Footer */}
      <HeroWaves />
      <Footer />
    </>
  );
};

export default Contact;
