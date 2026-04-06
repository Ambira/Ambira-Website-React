// src/pages/Portfolio.jsx
import React, { useEffect } from "react";
import BackToTop from "../components/BackToTop";   // Back To Top button
import HeroWaves from "../components/HeroWaves";   // Decorative SVG waves component

const Portfolio = () => {
  useEffect(() => {
    // Uncomment and configure if you're using AOS for animations:
    // import AOS from "aos";
    // AOS.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div style={{ backgroundColor: "#000", color: "#fff" }}>
        {/* Back To Top Button */}
        <BackToTop />


        {/* Inject interactive styles */}
        <style>{`
        .interactive-box {
          background-color: #1a1a1a;
          border-radius: 8px;
          transition: transform 0.3s, box-shadow 0.3s;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          color: #fff;
          cursor: pointer;
        }
        .interactive-box:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }
        .section-title {
          border-bottom: 2px solid #333;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }
      `}</style>

        {/* Hero Section */}
        <section className="hero is-fullheight has-background-black">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column has-text-centered">
                  <h1 className="title is-size-2">My Portfolio</h1>
                  <p className="subtitle is-size-5 mt-3">
                    Discover my work experience and projects which I've built.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="section" style={{ backgroundColor: "#000" }}>
          <div className="container">
            <h2 className="title is-3 has-text-centered section-title">Work Experience</h2>
            <div className="columns is-multiline">
              {/* Experience Card 1 – Aviation Nepal News */}
              <div className="column is-6" data-aos="fade-up">
                <div className="interactive-box">
                  <h3 className="title is-4">Aviation Nepal News</h3>
                  <p>
                    <strong>Role:</strong> Article Writer &amp; Voice Over Artist<br />
                    <strong>Duration:</strong> May – July 2023
                  </p>
                  <p>
                    I worked as an article writer and voice over artist, creating engaging content and narrations.
                  </p>
                </div>
              </div>
              {/* Experience Card 2 – Deerwalk Sifal School */}
              <div className="column is-6" data-aos="fade-up" data-aos-delay="100">
                <div className="interactive-box">
                  <h3 className="title is-4">Deerwalk Sifal School</h3>
                  <p>
                    <strong>Role:</strong> Admission Ambassador / Admission Department Intern<br />
                    <strong>Duration:</strong> 30 May – 31 July 2024
                  </p>
                  <p>
                    I served as an Admission Ambassador and intern, facilitating the admissions process and engaging with prospective students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section" style={{ backgroundColor: "#000" }}>
          <div className="container">
            <h2 className="title is-3 has-text-centered section-title">Projects</h2>
            <div className="columns is-multiline">
              {/* Project Card 1 – ORSN Website */}
              <div className="column is-6" data-aos="fade-up">
                <div className="interactive-box">
                  <h3 className="title is-4">ORSN Website</h3>
                  <p className="pb-2">Developed a dynamic and engaging website for ORSN.</p>
                  <a
                    href="https://orsn.org.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-link is-outlined"
                  >
                    View Project
                  </a>
                </div>
              </div>
              {/* Project Card 2 – NQPCN Website */}
              <div className="column is-6" data-aos="fade-up" data-aos-delay="50">
                <div className="interactive-box">
                  <h3 className="title is-4">NQPCN Website</h3>
                  <p className="pb-2">Created a modern website for NQPCN with a sleek, user-friendly design.</p>
                  <a
                    href="https://nqpcn.org.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-link is-outlined"
                  >
                    View Project
                  </a>
                </div>
              </div>
              {/* Project Card 3 – Sundar School Website */}
              <div className="column is-6" data-aos="fade-up" data-aos-delay="100">
                <div className="interactive-box">
                  <h3 className="title is-4">Sundar School Website</h3>
                  <p className="pb-2">Developed an informative website for Sundar School to highlight their academic excellence.</p>
                  <a
                    href="https://sundarschool.edu.np/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-link is-outlined"
                  >
                    View Project
                  </a>
                </div>
              </div>
              {/* Project Card 4 – NESS Website */}
              <div className="column is-6" data-aos="fade-up" data-aos-delay="150">
                <div className="interactive-box">
                  <h3 className="title is-4">NESS Website</h3>
                  <p className="pb-2">Built an engaging and interactive website for NESS.</p>
                  <a
                    href="https://ness.org.np/index"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-link is-outlined"
                  >
                    View Project
                  </a>
                </div>
              </div>
              {/* Project Card  – Bijay Website */}
              <div className="column is-6" data-aos="fade-up" data-aos-delay="150">
                <div className="interactive-box">
                  <h3 className="title is-4">Bijay Lal Pradhan Website</h3>
                  <p className="pb-2">An engaging website for Dr. Bijay Lal Pradhan with interactive design
                    with a password only access to Teaching and Learning as well as Training materials.</p>
                  <a
                    href="https://bijaylalpradhan.com.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-link is-outlined"
                  >
                    View Project
                  </a>
                </div>
              </div>
              {/* Project Card 6- Orchid Insights */}
              <div className="column is-6" data-aos="fade-up" data-aos-delay="150">
                <div className="interactive-box">
                  <h3 className="title is-4">Orchid Insights Vol I</h3>
                  <p className="pb-2">Worked on Design and Layout of Orchid Insights Vol I</p>
                  <a
                    href="https://www.oic.edu.np/wp-content/uploads/2025/07/Final-main-work.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-link is-outlined"
                  >
                    View Project
                  </a>
                </div>
              </div>
              {/* Project Card 7- Narendra Paudel Website */}
              <div className="column is-6" data-aos="fade-up" data-aos-delay="150">
                <div className="interactive-box">
                  <h3 className="title is-4">Narendra Raj Paudel Website</h3>
                  <p className="pb-2">Developed a professional website for Narendra Paudel with a focus on showcasing his work and achievements.</p>
                  <a
                    href="https://narendrarajpaudel.com.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-link is-outlined"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative SVG Waves no wake bc bad positioning */}

      </div>
      <HeroWaves />

    </section>
  );
};

export default Portfolio;
