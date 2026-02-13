import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => setOpenIndex(openIndex === index ? null : index);

  const quickLinks = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "About", to: "/about" },
      { label: "Contact Us", to: "/contact" }
    ],
    []
  );

  const services = useMemo(() => ["Interior Works", "Interior Designs", "Ceiling Panels", "Pots"], []);

  const social = useMemo(
    () => [
      { label: "Facebook", href: "https://facebook.com", icon: <FaFacebookF /> },
      { label: "Instagram", href: "https://instagram.com", icon: <FaInstagram /> },
      { label: "Twitter", href: "https://twitter.com", icon: <FaTwitter /> }
    ],
    []
  );

  const address =
    "First Floor, Plot-30, Pedapadu Road, Near Rama Gedda, Srikakulam-532001 Andhra Pradesh";

  const mobileSections = useMemo(
    () => [
      {
        title: "Quick Links",
        type: "links",
        items: quickLinks
      },
      {
        title: "Services",
        type: "text",
        items: services
      },
      {
        title: "Contact",
        type: "contact",
        items: [
          { icon: <FaPhoneAlt />, label: "+91-7032383138", href: "tel:+917032383138" },
          { icon: <FaEnvelope />, label: "thehomeconcepts.11@gmail.com", href: "mailto:thehomeconcepts.11@gmail.com" },
          { icon: <FaMapMarkerAlt />, label: address, href: "https://maps.google.com/?q=First%20Floor%2C%20Plot-30%2C%20Pedapadu%20Road%2C%20Near%20Rama%20Gedda%2C%20Srikakulam-532001%20Andhra%20Pradesh" }
        ]
      }
    ],
    [address, quickLinks, services]
  );

  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-desktop">
          <div className="footer-col footer-brand">
            <div className="brand-row">
              <img className="brand-logo" src="/Images/main-logo.png" alt="The Home Concepts" />
              <div className="brand-text">
                <h2 className="brand-title">THE HOME CONCEPTS</h2>
                <p className="brand-subtitle">Interior works and designs</p>
              </div>
            </div>

            <div className="brand-owner">
              <div className="owner-badge">Managing Partner</div>
              <div className="owner-name">B. SIVA TEJA</div>
            </div>

            <div className="brand-contact">
              <a className="footer-link" href="tel:+917032383138">
                <FaPhoneAlt />
                <span>+91-7032383138</span>
              </a>
              <a className="footer-link" href="mailto:thehomeconcepts.11@gmail.com">
                <FaEnvelope />
                <span>thehomeconcepts.11@gmail.com</span>
              </a>
              <a
                className="footer-link"
                href="https://maps.google.com/?q=First%20Floor%2C%20Plot-30%2C%20Pedapadu%20Road%2C%20Near%20Rama%20Gedda%2C%20Srikakulam-532001%20Andhra%20Pradesh"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarkerAlt />
                <span>{address}</span>
              </a>
            </div>

            <div className="brand-social">
              {social.map((s) => (
                <a key={s.label} className="social-btn" href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-h">Quick Links</h3>
            <ul className="footer-list">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link className="footer-btn" to={l.to}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-h">Services</h3>
            <ul className="footer-list">
              {services.map((t) => (
                <li key={t}>
                  <span className="footer-text">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-h">What we do</h3>
            <div className="footer-card">
              <div className="card-line">
                <span className="dot" />
                <span>Residential and commercial interiors</span>
              </div>
              <div className="card-line">
                <span className="dot" />
                <span>Custom designs with quality finishing</span>
              </div>
              <div className="card-line">
                <span className="dot" />
                <span>Ceiling panels, decor items, and more</span>
              </div>
              <div className="card-accent" />
            </div>
          </div>
        </div>

        <div className="footer-mobile">
          <div className="mobile-top">
            <img className="brand-logo" src="/Images/main-logo.png" alt="The Home Concepts" />
            <div className="mobile-top-text">
              <div className="brand-title-sm">THE HOME CONCEPTS</div>
              <div className="brand-subtitle-sm">Interior works and designs</div>
            </div>
          </div>

          <div className="mobile-owner">
            <div className="owner-badge">Managing Partner</div>
            <div className="owner-name">B. SIVA TEJA</div>
          </div>

          <div className="mobile-accordion">
            {mobileSections.map((sec, idx) => (
              <div className="acc-sec" key={sec.title}>
                <button type="button" className="acc-head" onClick={() => toggleSection(idx)} aria-expanded={openIndex === idx}>
                  <span>{sec.title}</span>
                  <span className="acc-icon">{openIndex === idx ? "−" : "+"}</span>
                </button>

                <div className={`acc-body ${openIndex === idx ? "open" : ""}`}>
                  {sec.type === "links" && (
                    <ul className="footer-list">
                      {sec.items.map((l) => (
                        <li key={l.label}>
                          <Link className="footer-btn" to={l.to} onClick={() => setOpenIndex(null)}>
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.type === "text" && (
                    <ul className="footer-list">
                      {sec.items.map((t) => (
                        <li key={t}>
                          <span className="footer-text">{t}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.type === "contact" && (
                    <div className="contact-stack">
                      {sec.items.map((c, i) => (
                        <a key={i} className="footer-link" href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                          {c.icon}
                          <span>{c.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="brand-social mobile-social">
            {social.map((s) => (
              <a key={s.label} className="social-btn" href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="mini-dot" />
            <span>© {new Date().getFullYear()} THE HOME CONCEPTS</span>
          </div>
          <div className="footer-bottom-right">
            <span className="tag">Black</span>
            <span className="tag">White</span>
            <span className="tag tag-red">Red</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
