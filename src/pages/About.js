import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Navbar />

      <main className="about8">
        <section className="about8-hero" aria-label="About hero">
          <img className="about8-hero-img" src="/Images/about.jpg" alt="About The Home Concepts" />
          <div className="about8-hero-overlay" />
          <div className="about8-hero-content">
            <div className="about8-hero-pill">THE HOME CONCEPTS</div>
            <h1 className="about8-hero-title">About</h1>
            <p className="about8-hero-sub">
              Homes that feel premium, practical, and built to last.
            </p>
          </div>
        </section>

        <section className="about8-s1" aria-label="Who we are">
          <div className="about8-container">
            <div className="about8-s1-grid">
              <div className="about8-s1-left">
                <h2 className="about8-h2">Who We Are</h2>
                <div className="about8-underline" />
                <p className="about8-p">
                  The Home Concepts is led by <span className="about8-strong">B. Siva Teja</span>, Managing Partner. We focus on
                  interior works and designs that match your lifestyle, your space, and your budget.
                </p>

                <div className="about8-kpi">
                  <div className="about8-kpi-box">
                    <div className="about8-kpi-num">01</div>
                    <div className="about8-kpi-label">Clean execution</div>
                  </div>
                  <div className="about8-kpi-box">
                    <div className="about8-kpi-num">02</div>
                    <div className="about8-kpi-label">Premium finishing</div>
                  </div>
                  <div className="about8-kpi-box">
                    <div className="about8-kpi-num">03</div>
                    <div className="about8-kpi-label">Friendly support</div>
                  </div>
                </div>
              </div>

              <div className="about8-s1-right" aria-label="Team preview">
                <div className="about8-photo-frame">
                  <img src="/Images/about3.jpg" alt="Interior and planning" />
                </div>
                <div className="about8-mini-row">
                  <div className="about8-mini">
                    <div className="about8-mini-top">Ceiling Panels</div>
                    <div className="about8-mini-sub">Neat lines, premium look</div>
                  </div>
                  <div className="about8-mini">
                    <div className="about8-mini-top">Pots</div>
                    <div className="about8-mini-sub">Small touches, big feel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s2" aria-label="Signature promise">
          <div className="about8-container">
            <div className="about8-s2-wrap">
              <div className="about8-s2-left">
                <h2 className="about8-h2 about8-h2-invert">Our Promise</h2>
                <div className="about8-underline about8-underline-invert" />
                <p className="about8-p about8-p-invert">
                  We plan every detail, keep the worksite clean, and deliver a finish that looks calm and premium.
                </p>

                <div className="about8-tags">
                  <span className="about8-tag">Design-first</span>
                  <span className="about8-tag">Quality materials</span>
                  <span className="about8-tag">Neat finishing</span>
                  <span className="about8-tag">On-time updates</span>
                </div>
              </div>

              <div className="about8-s2-right">
                <div className="about8-s2-card">
                  <div className="about8-s2-cardline">
                    <span className="about8-dot" />
                    <div>
                      <div className="about8-s2-title">Interior Works</div>
                      <div className="about8-s2-sub">Ceilings, wardrobes, lighting, and more.</div>
                    </div>
                  </div>

                  <div className="about8-s2-cardline">
                    <span className="about8-dot" />
                    <div>
                      <div className="about8-s2-title">Interior Designs</div>
                      <div className="about8-s2-sub">Layouts that feel modern and practical.</div>
                    </div>
                  </div>

                  <div className="about8-s2-cardline">
                    <span className="about8-dot" />
                    <div>
                      <div className="about8-s2-title">Complete Support</div>
                      <div className="about8-s2-sub">From first discussion to final handover.</div>
                    </div>
                  </div>

                  <div className="about8-s2-btm">
                    <a className="about8-btn about8-btn-solid" href="/contact">Get in Touch</a>
                    <a className="about8-btn about8-btn-outline" href="tel:+917032383138">Call +91-7032383138</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s3" aria-label="Services snapshot">
          <div className="about8-container">
            <div className="about8-s3-head">
              <h2 className="about8-h2">What We Do</h2>
              <div className="about8-underline" />
              <p className="about8-p">
                Interior-focused services that keep your home beautiful, functional, and easy to maintain.
              </p>
            </div>

            <div className="about8-s3-grid">
              <article className="about8-s3-card">
                <div className="about8-s3-kicker">01</div>
                <div className="about8-s3-title">Ceiling Panels</div>
                <div className="about8-s3-text">False ceilings, panels, and clean lighting cuts.</div>
              </article>

              <article className="about8-s3-card">
                <div className="about8-s3-kicker">02</div>
                <div className="about8-s3-title">Wardrobes & Storage</div>
                <div className="about8-s3-text">Space-saving layouts with a premium finish.</div>
              </article>

              <article className="about8-s3-card">
                <div className="about8-s3-kicker">03</div>
                <div className="about8-s3-title">Lighting & Electrical</div>
                <div className="about8-s3-text">Warm lighting plans that feel calm and modern.</div>
              </article>

              <article className="about8-s3-card">
                <div className="about8-s3-kicker">04</div>
                <div className="about8-s3-title">Decor Touches</div>
                <div className="about8-s3-text">Pots, accents, and small details that complete the look.</div>
              </article>
            </div>
          </div>
        </section>

        <section className="about8-s4" aria-label="Photo strip">
          <div className="about8-container">
            <div className="about8-s4-grid">
              <div className="about8-s4-copy">
                <h2 className="about8-h2 about8-h2-invert">Designed for Real Homes</h2>
                <div className="about8-underline about8-underline-invert" />
                <p className="about8-p about8-p-invert">
                  A premium home is not about heavy design. It is about clean lines, balanced layouts, and neat finishing.
                </p>

                <ul className="about8-list">
                  <li><span className="about8-check" />Practical layout planning</li>
                  <li><span className="about8-check" />Neat work with clean edges</li>
                  <li><span className="about8-check" />Material selection support</li>
                  <li><span className="about8-check" />Timely progress updates</li>
                </ul>
              </div>

              <div className="about8-s4-photos" aria-label="Work previews">
                <div className="about8-s4-photo">
                  <img src="/Images/interior1.jpg" alt="Interior preview 1" />
                </div>
                <div className="about8-s4-photo">
                  <img src="/Images/interior3.jpg" alt="Interior preview 2" />
                </div>
                <div className="about8-s4-photo">
                  <img src="/Images/interior6.jpg" alt="Interior preview 3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s5" aria-label="Address and contact">
          <div className="about8-container">
            <div className="about8-s5-grid">
              <div className="about8-s5-card">
                <h2 className="about8-h2">Contact</h2>
                <div className="about8-underline" />
                <div className="about8-contact">
                  <div className="about8-contact-row">
                    <div className="about8-contact-label">Managing Partner</div>
                    <div className="about8-contact-val">B. Siva Teja</div>
                  </div>
                  <div className="about8-contact-row">
                    <div className="about8-contact-label">Phone</div>
                    <a className="about8-contact-val about8-link" href="tel:+917032383138">+91-7032383138</a>
                  </div>
                  <div className="about8-contact-row">
                    <div className="about8-contact-label">Email</div>
                    <a className="about8-contact-val about8-link" href="mailto:thehomeconcepts.11@gmail.com">thehomeconcepts.11@gmail.com</a>
                  </div>
                </div>

                <div className="about8-s5-actions">
                  <a className="about8-btn about8-btn-solid" href="/contact">Send Message</a>
                  <a className="about8-btn about8-btn-outline" href="/services">View Services</a>
                </div>
              </div>

              <div className="about8-s5-card">
                <h2 className="about8-h2">Address</h2>
                <div className="about8-underline" />
                <p className="about8-p">
                  First Floor, Plot-30, Pedapadu Road, Near Rama Gedda, Srikakulam-532001, Andhra Pradesh
                </p>

                <div className="about8-mapline">
                  <span className="about8-mapdot" />
                  <span>Easy location, quick support, clean site visits.</span>
                </div>

                <div className="about8-s5-photo">
                  <img src="/Images/theme.jpg" alt="The Home Concepts theme" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s6" aria-label="How we work">
          <div className="about8-container">
            <div className="about8-s6-head">
              <h2 className="about8-h2 about8-h2-invert">How We Work</h2>
              <div className="about8-underline about8-underline-invert" />
              <p className="about8-p about8-p-invert">
                A simple process that keeps everything clear, smooth, and on track.
              </p>
            </div>

            <div className="about8-steps">
              <div className="about8-step">
                <div className="about8-step-no">01</div>
                <div className="about8-step-title">Discuss</div>
                <div className="about8-step-text">We understand your needs, style, and budget.</div>
              </div>
              <div className="about8-step">
                <div className="about8-step-no">02</div>
                <div className="about8-step-title">Design</div>
                <div className="about8-step-text">We plan layouts and materials for a clean finish.</div>
              </div>
              <div className="about8-step">
                <div className="about8-step-no">03</div>
                <div className="about8-step-title">Execute</div>
                <div className="about8-step-text">Skilled work with neat detailing and clean edges.</div>
              </div>
              <div className="about8-step">
                <div className="about8-step-no">04</div>
                <div className="about8-step-title">Handover</div>
                <div className="about8-step-text">Final checks, finishing, and a complete look.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s7" aria-label="Visiting card">
          <div className="about8-container">
            <div className="about8-card">
              <div className="about8-card-top">
                <div>
                  <div className="about8-card-brand">THE HOME CONCEPTS</div>
                  <div className="about8-card-name">B. Siva Teja</div>
                  <div className="about8-card-role">Managing Partner</div>
                </div>
                <div className="about8-card-mark" aria-hidden="true">
                  <span className="about8-mark-dot" />
                  <span className="about8-mark-dot" />
                  <span className="about8-mark-dot" />
                </div>
              </div>

              <div className="about8-card-mid">
                <div className="about8-card-col">
                  <div className="about8-card-label">Phone</div>
                  <a className="about8-card-val" href="tel:+917032383138">+91-7032383138</a>
                </div>
                <div className="about8-card-col">
                  <div className="about8-card-label">Email</div>
                  <a className="about8-card-val" href="mailto:thehomeconcepts.11@gmail.com">thehomeconcepts.11@gmail.com</a>
                </div>
                <div className="about8-card-col">
                  <div className="about8-card-label">Location</div>
                  <div className="about8-card-val">
                    Srikakulam, Andhra Pradesh
                  </div>
                </div>
              </div>

              <div className="about8-card-btm">
                <div className="about8-card-strip">
                  Interior Works • Interior Designs • Ceiling Panels • Pots
                </div>
                <a className="about8-card-cta" href="/contact">Contact Now</a>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s8" aria-label="Final call to action">
          <div className="about8-container">
            <div className="about8-final">
              <div className="about8-final-left">
                <h2 className="about8-final-title">Let’s Build a Clean, Premium Look</h2>
                <p className="about8-final-sub">
                  Share your idea, we will plan it clearly and finish it neatly.
                </p>
                <div className="about8-final-actions">
                  <a className="about8-btn about8-btn-solid" href="/contact">Get in Touch</a>
                  <a className="about8-btn about8-btn-outline" href="/services">Explore Services</a>
                </div>
              </div>
              <div className="about8-final-right" aria-label="Final image">
                <img src="/Images/about4.jpg" alt="Premium home" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
