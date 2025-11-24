// src/pages/Contact.jsx
import React, { useState } from "react";
import BackToTop from "../components/BackToTop";
import HeroWaves from "../components/HeroWaves";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", hp: "" }); // hp = honeypot
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          honeypot: form.hp,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ ok: true, message: "✅ Your message has been sent. Thank you!" });
        setForm({ name: "", email: "", message: "", hp: "" });
      } else {
        setStatus({ ok: false, message: data.error || "Failed to send message." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ ok: false, message: "❌ Server error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BackToTop />
      <section className="hero bg-base is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2 mt-6">
                <div className="has-text-centered">
                  <h1 className="title is-size-2 has-text-white">Get in Touch</h1>
                  <p className="subtitle has-text-grey-light is-size-5 mt-3">
                    I'd love to hear from you! Feel free to reach out to me using the form below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroWaves />

      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <form onSubmit={handleSubmit}>

                {/* honeypot field - visually hidden */}
                <div style={{ display: "none" }}>
                  <label>Leave this empty</label>
                  <input name="hp" value={form.hp} onChange={handleChange} />
                </div>

                <div className="field">
                  <label className="label" htmlFor="name">Name:</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="email">Email:</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="message">Message:</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button className={`button is-primary ${loading ? "is-loading" : ""}`} type="submit" disabled={loading}>
                      Send
                    </button>
                  </div>
                </div>

                {status && (
                  <div className={`notification ${status.ok ? "is-success" : "is-danger"}`}>
                    {status.message}
                  </div>
                )}

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
