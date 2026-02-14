import React, { useRef, useState } from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [phone, setPhone] = useState("");

  const mapLink = "https://maps.app.goo.gl/2T2iT1VSjG3ofxmd6";
  const address = "First Floor, Plot-30, Pedapadu Road, Near Rama Gedda, Srikakulam-532001 Andhra Pradesh";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  const categories = [
    "Wallpapers",
    "Curtains",
    "Blinds",
    "PVC Panels",
    "Ceiling Panels",
    "Pots",
    "Artifacts",
    "PU Panels",
    "Mosaic Tiles",
    "Laminated Flooring",
    "Artificial Greenary Section",
    "Bedsheets & Comforters",
    "Wall Murals",
    "Balcony Cloth Hangers",
    "Mosquito Mesh Doors",
    "AC Partitions",
    "Carpets",
    "Stools etc..."
  ];

  const handlePhoneChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(onlyDigits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Please enter a valid 10 digit mobile number.");
      return;
    }

    const now = new Date();
    const submittedAt = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const timeInput = formRef.current?.querySelector('input[name="time"]');
    const sourceInput = formRef.current?.querySelector('input[name="source"]');
    const submittedAtInput = formRef.current?.querySelector('input[name="submitted_at"]');

    if (timeInput) timeInput.value = submittedAt;
    if (sourceInput) sourceInput.value = "Contact Page";
    if (submittedAtInput) submittedAtInput.value = submittedAt;

    setLoading(true);

    emailjs
      .sendForm("service_xj6kp6o", "template_gvzo194", formRef.current, "A3f67NO9h5O9f35Ls")
      .then(
        () => {
          setLoading(false);
          setPopupVisible(true);
          setPhone("");
          formRef.current?.reset();
        },
        () => {
          setLoading(false);
          alert("Failed to send. Please try again.");
        }
      );
  };

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
            <p className="contact8-hero-sub">Call, email, or visit us, we will guide you clearly from idea to finishing.</p>
          </div>
        </section>

        <section className="contact8-s1" aria-label="Quick contact">
          <div className="contact8-container">
            <div className="contact8-head">
              <h2 className="contact8-h2">Quick Contact</h2>
              <div className="contact8-underline" />
              <p className="contact8-p">Reach out the way you prefer. We respond fast and keep the discussion simple.</p>
            </div>

            <div className="contact8-cards">
              <a className="contact8-card" href="tel:+917032383138" aria-label="Call us">
                <div className="contact8-card-kicker">Phone</div>
                <div className="contact8-card-main">+91 70323 83138</div>
                <div className="contact8-card-sub">Tap to call now</div>
              </a>

              <a className="contact8-card" href="mailto:thehomeconcepts.11@gmail.com" aria-label="Email us">
                <div className="contact8-card-kicker">Email</div>
                <div className="contact8-card-main">thehomeconcepts.11@gmail.com</div>
                <div className="contact8-card-sub">Tap to email</div>
              </a>

              <div className="contact8-card" aria-label="Location">
                <div className="contact8-card-kicker">Location</div>
                <div className="contact8-card-main">{address}</div>
                <div className="contact8-card-sub">Open for visits by appointment</div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s9" aria-label="Send message and map">
          <div className="contact8-container">
            <div className="contact8-head">
              <h2 className="contact8-h2">Send a Message</h2>
              <div className="contact8-underline" />
              <p className="contact8-p">Share your details and we will contact you quickly.</p>
            </div>

            <div className="contact8-formmap">
              <div className="contact8-formwrap">
                <form ref={formRef} onSubmit={handleSubmit} className="contact8-form">
                  <input type="hidden" name="time" />
                  <input type="hidden" name="source" />
                  <input type="hidden" name="submitted_at" />

                  <div className="contact8-form-row">
                    <div className="contact8-field">
                      <label className="contact8-label">Name</label>
                      <input className="contact8-input" name="name" type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="contact8-field">
                      <label className="contact8-label">Phone</label>
                      <input
                        className="contact8-input"
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="Enter 10 digit mobile number"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact8-form-row">
                    <div className="contact8-field">
                      <label className="contact8-label">Email</label>
                      <input className="contact8-input" name="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="contact8-field">
                      <label className="contact8-label">Subject</label>
                      <input className="contact8-input" name="title" type="text" placeholder="Eg: Wallpaper quote" required />
                    </div>
                  </div>

                  <div className="contact8-field">
                    <label className="contact8-label">Category</label>
                    <select className="contact8-input" name="category" defaultValue="" required>
                      <option value="" disabled>
                        Select a category
                      </option>
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact8-field">
                    <label className="contact8-label">Message</label>
                    <textarea className="contact8-textarea" name="message" rows="5" placeholder="Tell us what you need" required />
                  </div>

                  <button type="submit" className="contact8-submit" disabled={loading}>
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </form>

                {popupVisible && (
                  <div className="contact8-popup">
                    <div className="contact8-popup-inner">
                      <h3 className="contact8-popup-title">Submitted Successfully</h3>
                      <p className="contact8-popup-text">Thank you. We will contact you soon.</p>
                      <button className="contact8-popup-btn" onClick={() => setPopupVisible(false)}>
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="contact8-mapwrap" aria-label="Google map">
                <iframe
                  title="The Home Concepts Location"
                  src={mapEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a className="contact8-maplink" href={mapLink} target="_blank" rel="noreferrer">
                  Open in Google Maps
                </a>
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
                  <a className="contact8-btn contact8-btn-solid" href="tel:+917032383138">
                    Call Now
                  </a>
                  <a className="contact8-btn contact8-btn-outline" href="mailto:thehomeconcepts.11@gmail.com">
                    Email Us
                  </a>
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
                <p className="contact8-p">Prefer face-to-face? Visit us for a short discussion and a quick plan.</p>

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
              <p className="contact8-p contact8-p-invert">A simple step-by-step flow so you always know what is next.</p>
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
                <p className="contact8-p">We keep things clear and practical, from the first call to final finishing.</p>

                <ul className="contact8-list">
                  <li>
                    <span className="contact8-bullet" />
                    Guidance on interiors and finishing
                  </li>
                  <li>
                    <span className="contact8-bullet" />
                    Quick site visit planning
                  </li>
                  <li>
                    <span className="contact8-bullet" />
                    Material and design suggestions
                  </li>
                  <li>
                    <span className="contact8-bullet" />
                    Clear timelines and updates
                  </li>
                </ul>

                <div className="contact8-s5-actions">
                  <a className="contact8-btn contact8-btn-solid" href="/services">
                    Explore Services
                  </a>
                  <a className="contact8-btn" href="tel:+918179197108">
                    Call Now
                  </a>
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
              <p className="contact8-p contact8-p-invert">A small snapshot of how we work and what we focus on.</p>
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
                <p className="contact8-p">Want a quick plan? We can discuss your space, your needs, and the best design approach.</p>

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
                  <a className="contact8-btn contact8-btn-solid" href="tel:+917032383138">
                    Book by Call
                  </a>
                  <a className="contact8-btn" href="mailto:thehomeconcepts.11@gmail.com">
                    Book by Email
                  </a>
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
                <p className="contact8-final-sub">Call now for quick guidance and the next steps.</p>
              </div>
              <div className="contact8-final-right">
                <a className="contact8-btn contact8-btn-solid" href="tel:+917032383138">
                  Call Now
                </a>
                <a className="contact8-btn contact8-btn-outline-dark" href="mailto:thehomeconcepts.11@gmail.com">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
