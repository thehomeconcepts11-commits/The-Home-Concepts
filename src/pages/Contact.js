import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />

      <main className="contact8" id="contact">
        <section className="contact8-hero" aria-label="Contact hero">
          <img className="contact8-hero-img" src="/Images/contact1.jpg" alt="Contact The Home Concepts" />
          <div className="contact8-hero-overlay" />
          <div className="contact8-hero-content">
            <div className="contact8-hero-pill">THE HOME CONCEPTS</div>
            <h1 className="contact8-hero-title">Contact Us</h1>
            <p className="contact8-hero-sub">
              Call, email, or visit us, we will guide you clearly from idea to finishing.
            </p>
          </div>
        </section>

        <section className="contact8-s1" aria-label="Quick contact">
          <div className="contact8-container">
            <div className="contact8-head">
              <h2 className="contact8-h2">Quick Contact</h2>
              <div className="contact8-underline" />
              <p className="contact8-p">
                Reach out the way you prefer. We respond fast and keep the discussion simple.
              </p>
            </div>

            <div className="contact8-cards">
              <a className="contact8-card" href="tel:+918179197108" aria-label="Call us">
                <div className="contact8-card-kicker">Phone</div>
                <div className="contact8-card-main">+91 81791 97108</div>
                <div className="contact8-card-sub">Tap to call now</div>
              </a>

              <a className="contact8-card" href="mailto:ganeshyadav.puli9010@gmail.com" aria-label="Email us">
                <div className="contact8-card-kicker">Email</div>
                <div className="contact8-card-main">ganeshyadav.puli9010@gmail.com</div>
                <div className="contact8-card-sub">Tap to email</div>
              </a>

              <div className="contact8-card" aria-label="Location">
                <div className="contact8-card-kicker">Location</div>
                <div className="contact8-card-main">Tirupathi, India</div>
                <div className="contact8-card-sub">Open for visits by appointment</div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s2" aria-label="Service coverage">
          <div className="contact8-container">
            <div className="contact8-s2-grid">
              <div className="contact8-s2-left">
                <h2 className="contact8-h2 contact8-h2-invert">All Works, One Place</h2>
                <div className="contact8-underline contact8-underline-invert" />
                <p className="contact8-p contact8-p-invert">
                  Interiors, electrical, drainage, and finishing, we help you plan the complete work without confusion.
                </p>

                <div className="contact8-tags">
                  <span className="contact8-tag">Interiors</span>
                  <span className="contact8-tag">Electrical</span>
                  <span className="contact8-tag">Drainage</span>
                  <span className="contact8-tag">Landscapes</span>
                  <span className="contact8-tag">Finishing</span>
                </div>

                <div className="contact8-s2-actions">
                  <a className="contact8-btn contact8-btn-solid" href="tel:+918179197108">Call Now</a>
                  <a className="contact8-btn contact8-btn-outline" href="mailto:ganeshyadav.puli9010@gmail.com">Email Us</a>
                </div>
              </div>

              <div className="contact8-s2-right">
                <div className="contact8-s2-tiles">
                  <div className="contact8-tile">
                    <div className="contact8-tile-top">Premium Finish</div>
                    <div className="contact8-tile-sub">Neat work, clean edges</div>
                  </div>
                  <div className="contact8-tile">
                    <div className="contact8-tile-top">Transparent Pricing</div>
                    <div className="contact8-tile-sub">Clear estimate guidance</div>
                  </div>
                  <div className="contact8-tile">
                    <div className="contact8-tile-top">On-Time Updates</div>
                    <div className="contact8-tile-sub">Regular progress follow-ups</div>
                  </div>
                  <div className="contact8-tile">
                    <div className="contact8-tile-top">Custom Options</div>
                    <div className="contact8-tile-sub">Design that matches your taste</div>
                  </div>
                </div>

                <div className="contact8-s2-photo">
                  <img src="/Images/theme.jpg" alt="Service preview" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s3" aria-label="Visit details">
          <div className="contact8-container">
            <div className="contact8-s3-grid">
              <div className="contact8-s3-card">
                <h2 className="contact8-h2">Visit Us</h2>
                <div className="contact8-underline" />
                <p className="contact8-p">
                  Prefer face-to-face? Visit us for a short discussion and a quick plan.
                </p>

                <div className="contact8-info">
                  <div className="contact8-info-row">
                    <div className="contact8-info-label">City</div>
                    <div className="contact8-info-val">Tirupathi, India</div>
                  </div>
                  <div className="contact8-info-row">
                    <div className="contact8-info-label">Best Time</div>
                    <div className="contact8-info-val">By appointment</div>
                  </div>
                  <div className="contact8-info-row">
                    <div className="contact8-info-label">Support</div>
                    <div className="contact8-info-val">Call or email anytime</div>
                  </div>
                </div>
              </div>

              <div className="contact8-s3-media" aria-label="Office photo">
                <img src="/Images/contact2.jpg" alt="Planning and consultation" />
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s4" aria-label="Project flow">
          <div className="contact8-container">
            <div className="contact8-head contact8-head-invert">
              <h2 className="contact8-h2 contact8-h2-invert">Project Flow</h2>
              <div className="contact8-underline contact8-underline-invert" />
              <p className="contact8-p contact8-p-invert">
                A simple step-by-step flow so you always know what is next.
              </p>
            </div>

            <div className="contact8-steps">
              <div className="contact8-step">
                <div className="contact8-step-no">01</div>
                <div className="contact8-step-title">Requirement Gathering</div>
                <div className="contact8-step-sub">Your needs, budget, and style.</div>
              </div>
              <div className="contact8-step">
                <div className="contact8-step-no">02</div>
                <div className="contact8-step-title">Layout Planning</div>
                <div className="contact8-step-sub">Practical layouts for real living.</div>
              </div>
              <div className="contact8-step">
                <div className="contact8-step-no">03</div>
                <div className="contact8-step-title">Cost Estimation</div>
                <div className="contact8-step-sub">Clear breakdown and options.</div>
              </div>
              <div className="contact8-step">
                <div className="contact8-step-no">04</div>
                <div className="contact8-step-title">Execution</div>
                <div className="contact8-step-sub">Clean work and regular updates.</div>
              </div>
              <div className="contact8-step">
                <div className="contact8-step-no">05</div>
                <div className="contact8-step-title">Handover</div>
                <div className="contact8-step-sub">Final checks and finishing.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s5" aria-label="Why contact us">
          <div className="contact8-container">
            <div className="contact8-s5-grid">
              <div className="contact8-s5-copy">
                <h2 className="contact8-h2">Why People Contact Us</h2>
                <div className="contact8-underline" />
                <p className="contact8-p">
                  We keep things clear and practical, from the first call to final finishing.
                </p>

                <ul className="contact8-list">
                  <li><span className="contact8-bullet" />Guidance on interiors and finishing</li>
                  <li><span className="contact8-bullet" />Quick site visit planning</li>
                  <li><span className="contact8-bullet" />Material and design suggestions</li>
                  <li><span className="contact8-bullet" />Clear timelines and updates</li>
                </ul>

                <div className="contact8-s5-actions">
                  <a className="contact8-btn contact8-btn-solid" href="/services">Explore Services</a>
                  <a className="contact8-btn" href="tel:+918179197108">Call Now</a>
                </div>
              </div>

              <div className="contact8-s5-gallery" aria-label="Gallery">
                <div className="contact8-gimg">
                  <img src="/Images/interior2.jpg" alt="Interior preview" />
                </div>
                <div className="contact8-gimg">
                  <img src="/Images/interior4.jpg" alt="Interior preview 2" />
                </div>
                <div className="contact8-gimg">
                  <img src="/Images/interior6.jpg" alt="Interior preview 3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s6" aria-label="Quick stats">
          <div className="contact8-container">
            <div className="contact8-head contact8-head-invert">
              <h2 className="contact8-h2 contact8-h2-invert">Quick Stats</h2>
              <div className="contact8-underline contact8-underline-invert" />
              <p className="contact8-p contact8-p-invert">
                A small snapshot of how we work and what we focus on.
              </p>
            </div>

            <div className="contact8-stats">
              <div className="contact8-stat">
                <div className="contact8-stat-num">50+</div>
                <div className="contact8-stat-sub">Homes Designed</div>
              </div>
              <div className="contact8-stat">
                <div className="contact8-stat-num">98%</div>
                <div className="contact8-stat-sub">Customer Satisfaction</div>
              </div>
              <div className="contact8-stat">
                <div className="contact8-stat-num">5+</div>
                <div className="contact8-stat-sub">Cities Served</div>
              </div>
              <div className="contact8-stat">
                <div className="contact8-stat-num">24/7</div>
                <div className="contact8-stat-sub">Call Support</div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s7" aria-label="Consultation">
          <div className="contact8-container">
            <div className="contact8-s7-grid">
              <div className="contact8-s7-media">
                <img src="/Images/contact3.jpg" alt="Consultation" />
              </div>
              <div className="contact8-s7-card">
                <h2 className="contact8-h2">Free Consultation</h2>
                <div className="contact8-underline" />
                <p className="contact8-p">
                  Want a quick plan? We can discuss your space, your needs, and the best design approach.
                </p>

                <div className="contact8-minirows">
                  <div className="contact8-minirow">
                    <div className="contact8-minirow-top">Call for a slot</div>
                    <div className="contact8-minirow-sub">Pick a convenient time</div>
                  </div>
                  <div className="contact8-minirow">
                    <div className="contact8-minirow-top">Share your idea</div>
                    <div className="contact8-minirow-sub">Reference photos help</div>
                  </div>
                  <div className="contact8-minirow">
                    <div className="contact8-minirow-top">Get clear guidance</div>
                    <div className="contact8-minirow-sub">Materials, cost, timeline</div>
                  </div>
                </div>

                <div className="contact8-s7-actions">
                  <a className="contact8-btn contact8-btn-solid" href="tel:+918179197108">Book by Call</a>
                  <a className="contact8-btn" href="mailto:ganeshyadav.puli9010@gmail.com">Book by Email</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s8" aria-label="Final CTA">
          <div className="contact8-container">
            <div className="contact8-final">
              <div className="contact8-final-left">
                <h2 className="contact8-final-title">Let’s Start Your Work</h2>
                <p className="contact8-final-sub">
                  Call now for quick guidance and the next steps.
                </p>
              </div>
              <div className="contact8-final-right">
                <a className="contact8-btn contact8-btn-solid" href="tel:+918179197108">Call Now</a>
                <a className="contact8-btn contact8-btn-outline-dark" href="mailto:ganeshyadav.puli9010@gmail.com">Email Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
