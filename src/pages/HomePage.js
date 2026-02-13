import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { FaHome, FaBuilding, FaRegBuilding } from "react-icons/fa";



const items = [
  { img: 'slide-show1.jpg' },
  { img: 'slide-show2.jpg' },
  { img: 'slide-show3.jpg' },
  { img: 'slide-show4.jpg' },
  { img: 'slide-show5.jpg' },
  { img: 'slide-show6.jpg' },
  { img: 'slide-show7.jpg' },
  { img: 'slide-show8.jpg' }
];

function HomePage() {
  const slides = Array.from({ length: 8 }, (_, i) => `/Images/slide-show${i + 1}.jpg`);;
  return (
    <>
      <Navbar />
      <main className="home">
        <section className="hero" aria-label="Main banner">
          <img className="hero-img" src="/Images/main-banner1.avif" alt="The Home Concepts banner" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="hero-title">
              Built for Modern
              <br />
              Living Solutions
            </h1>
            <p className="hero-subtitle">
              Discover modern property solutions
              <br />
              designed to support confident decisions,
              <br />
              simplify the buying process, and create
              <br />
              lasting value for every step forward.
            </p>
          </div>
        </section>



        <section className="showcase" aria-label="Project highlights">
          <div className="showcase-inner">
            <div className="showcase-head">
              <h2 className="showcase-title">Signature Spaces</h2>
              <p className="showcase-desc">Crafted interiors that feel timeless, bold, personal.</p>
            </div>

            <div className="showcase-grid">
              <article className="showcase-card">
                <div className="showcase-media">
                  <img className="showcase-img" src="/Images/part1.avif" alt="Modern Family Residence" />
                  <div className="showcase-shade" />
                  <div className="showcase-badge">Modern Family Residence</div>
                </div>
              </article>

              <article className="showcase-card">
                <div className="showcase-media">
                  <img className="showcase-img" src="/Images/part2.avif" alt="Exclusive Residential Villa" />
                  <div className="showcase-shade" />
                  <div className="showcase-badge">Exclusive Residential Villa</div>
                </div>
              </article>

              <article className="showcase-card">
                <div className="showcase-media">
                  <img className="showcase-img" src="/Images/part3.avif" alt="Premium Office Space" />
                  <div className="showcase-shade" />
                  <div className="showcase-badge">Premium Office Space</div>
                </div>
              </article>

              <article className="showcase-card">
                <div className="showcase-media">
                  <img className="showcase-img" src="/Images/part4.avif" alt="Urban Apartment Living" />
                  <div className="showcase-shade" />
                  <div className="showcase-badge">Urban Apartment Living</div>
                </div>
              </article>
            </div>
          </div>
        </section>


        <section className="home-section2">
          <h2 className="home-section2-title">Discover Our Finest Home Design Collections</h2>


          <Swiper
            className="home-section2-slider"
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            loop={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 40,
              depth: 200,
              stretch: 0,
              modifier: 1,
              slideShadows: false
            }}
            autoplay={{
              delay: 1700,
              disableOnInteraction: false,
              pauseOnMouseEnter: false
            }}
            speed={1000}
            allowTouchMove={false}
          >
            {slides.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>


        </section>




        <section className="visit-card" aria-label="Visiting card">
          <div className="visit-card-inner">
            <h2 className="visit-card-title">The Home Concepts</h2>

            <div className="visit-card-body">
              <div className="visit-card-left">
                <div className="visit-card-brand">Premium home planning and execution</div>
                <div className="visit-card-tagline">Homes built with clarity, comfort, and lasting value.</div>

                <div className="visit-card-points">
                  <div className="visit-card-point">
                    <span className="visit-card-dot" />
                    <span className="visit-card-point-text">Modern home design and planning support</span>
                  </div>
                  <div className="visit-card-point">
                    <span className="visit-card-dot" />
                    <span className="visit-card-point-text">Premium materials and clean finishing</span>
                  </div>
                  <div className="visit-card-point">
                    <span className="visit-card-dot" />
                    <span className="visit-card-point-text">Transparent timelines and reliable delivery</span>
                  </div>
                  <div className="visit-card-point">
                    <span className="visit-card-dot" />
                    <span className="visit-card-point-text">Consultation for tiles, granite, and interiors</span>
                  </div>
                </div>

                <div className="visit-card-footer">
                  <div className="visit-card-line">
                    <span className="visit-card-label">Phone</span>
                    <span className="visit-card-value">+91 70323 83138</span>
                  </div>
                  <div className="visit-card-line">
                    <span className="visit-card-label">Email</span>
                    <span className="visit-card-value">thehomecocepts.11@gmail.com</span>
                  </div>
                  <div className="visit-card-line">
                    <span className="visit-card-label">Location</span>
                    <span className="visit-card-value">First Floor, Plot-30, Pedapadu Road, Near Rama Gedda, Srikakulam</span>
                  </div>
                </div>
              </div>

              <div className="visit-card-right" aria-label="Visiting card image">
                <img className="visit-card-img" src="/Images/visiting-card.jpg" alt="The Home Concepts visiting card" />
                <div className="visit-card-frame" />
              </div>
            </div>

          </div>
        </section>






        <section className="grid-section" aria-label="Highlights grid">
          <div className="grid-wrap">
            <div className="grid-item grid-media">
              <img className="grid-img" src="/Images/grid1.jpg" alt="Grid 1" />
            </div>

            <div className="grid-item grid-text">
              <h4 className="grid-kicker">Premium Surfaces</h4>
              <p className="grid-copy">
                Curated marble and granite selections, matched with clean finishing standards for dependable, long term results.
              </p>
            </div>

            <div className="grid-item grid-media">
              <img className="grid-img" src="/Images/grid2.jpg" alt="Grid 2" />
            </div>

            <div className="grid-item grid-text">
              <h4 className="grid-kicker">Guided Selection</h4>
              <p className="grid-copy">
                Clear recommendations based on space, usage, and budget, so you choose confidently without second guessing.
              </p>
            </div>

            <div className="grid-item grid-title">
              <h2 className="grid-title-text">The <br />Home <br />Concepts</h2>
            </div>

            <div className="grid-item grid-text">
              <h4 className="grid-kicker">On Time Delivery</h4>
              <p className="grid-copy">
                Coordinated support from selection to dispatch, keeping timelines steady and outcomes consistent.
              </p>
            </div>

            <div className="grid-item grid-media">
              <img className="grid-img" src="/Images/grid3.jpg" alt="Grid 3" />
            </div>

            <div className="grid-item grid-text">
              <h4 className="grid-kicker">Detail First</h4>
              <p className="grid-copy">
                Clean edges, balanced patterns, and reliable placement advice to bring a polished finish to every project.
              </p>
            </div>

            <div className="grid-item grid-media">
              <img className="grid-img" src="/Images/grid4.jpg" alt="Grid 4" />
            </div>
          </div>
        </section>


        <section className="choose" aria-label="Why choose us">
          <div className="choose-inner">
            <div className="choose-grid">
              <div className="choose-left">
                <div className="choose-mosaic">
                  <div className="choose-col choose-col-split">
                    <div className="choose-media">
                      <img src="/Images/why-choose1.jpg" alt="Why choose us 1" />
                    </div>
                    <div className="choose-media">
                      <img src="/Images/why-choose2.jpg" alt="Why choose us 2" />
                    </div>
                  </div>

                  <div className="choose-col">
                    <div className="choose-media choose-media-tall">
                      <img src="/Images/why-choose3.jpg" alt="Why choose us 3" />
                      <div className="choose-tag">Trusted Work</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="choose-right">
                <div className="choose-head">
                  <h2 className="choose-title">Why Choose Us</h2>
                  <div className="choose-underline" />
                  <p className="choose-desc">We focus on clean workmanship and premium finishing. <br />Clear timelines, honest guidance, and smooth coordination.<br />Designed for real home living with lasting value.</p>

                </div>

                <ul className="choose-points">
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">Smart design planning with practical layouts</span>
                  </li>
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">Quality materials with skilled workmanship</span>
                  </li>
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">Clear timelines with regular progress updates</span>
                  </li>
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">Premium finish with neat detailing</span>
                  </li>
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">Affordable choices with honest pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>






        <section className="theme-band" aria-label="Theme banner">
          <img className="theme-band-img" src="/Images/theme.jpg" alt="The Home Concepts theme" />

          <h2 className="theme-band-title">Designed for Better Living</h2>

          <div className="theme-band-left">
            <div className="theme-band-stack">
              The <br /> Home <br /> Concepts
            </div>
            <p className="theme-band-desc">
              Premium finishes, reliable guidance, and thoughtful details that help you create a home you will love for years.
            </p>
          </div>

          <div className="theme-band-icons" aria-label="Home features">
            <FaHome />
            <FaBuilding />
            <FaRegBuilding />
          </div>
        </section>



        <section className="promise" aria-label="Why choose The Home Concepts">
          <div className="promise-inner">
            <header className="promise-head">
              <div className="promise-badge">Why Choose Us</div>
              <h2 className="promise-title">Built for quality, designed for everyday living.</h2>
              <p className="promise-subtitle">
                Premium materials, clean workmanship, and support you can rely on, from selection to installation.
              </p>
            </header>

            <div className="promise-grid">
              <article className="promise-card">
                <div className="promise-card-top">
                  <div className="promise-mark">
                    <span className="promise-mark-dot" />
                  </div>
                  <h3 className="promise-card-title">Design Guidance</h3>
                </div>
                <p className="promise-card-text">
                  Thoughtful recommendations for layout, shade matching, and finishes that work beautifully in real homes.
                </p>
                <div className="promise-list">
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Layout and space planning</span>
                  </div>
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Color and texture pairing</span>
                  </div>
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Clean, modern finishing</span>
                  </div>
                </div>
              </article>

              <article className="promise-card promise-card-featured">
                <div className="promise-card-top">
                  <div className="promise-mark">
                    <span className="promise-mark-dot" />
                  </div>
                  <h3 className="promise-card-title">Premium Quality</h3>
                </div>
                <p className="promise-card-text">
                  We select dependable materials and maintain strict standards so every surface feels premium and lasts longer.
                </p>
                <div className="promise-metrics">
                  <div className="promise-metric">
                    <div className="promise-metric-value">A+</div>
                    <div className="promise-metric-label">Finish</div>
                  </div>
                  <div className="promise-metric">
                    <div className="promise-metric-value">0</div>
                    <div className="promise-metric-label">Compromise</div>
                  </div>
                  <div className="promise-metric">
                    <div className="promise-metric-value">100%</div>
                    <div className="promise-metric-label">Support</div>
                  </div>
                </div>
              </article>

              <article className="promise-card">
                <div className="promise-card-top">
                  <div className="promise-mark">
                    <span className="promise-mark-dot" />
                  </div>
                  <h3 className="promise-card-title">On Time Delivery</h3>
                </div>
                <p className="promise-card-text">
                  Clear timelines, quick updates, and smooth coordination to keep your project moving without delays.
                </p>
                <div className="promise-list">
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Transparent schedules</span>
                  </div>
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Fast response support</span>
                  </div>
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Reliable handover</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>











        <section className="cta-hero" aria-label="Call to action banner">
          <img className="cta-hero-img" src="/Images/main-banner2.jpg" alt="The Home Concepts banner" />
          <div className="cta-hero-overlay" />
          <div className="cta-hero-content">
            <h2 className="cta-hero-title">Your Space, Elevated</h2>
            <p className="cta-hero-subtitle">Premium finishes and reliable support for every project.</p>

            <div className="cta-hero-actions">
              <Link to="/contact" className="cta-btn">
                <span>Get in Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43" aria-hidden="true">
                  <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5"></polygon>
                  <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5"></polygon>
                  <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5"></polygon>
                </svg>
              </Link>

              <Link to="/services" className="cta-btn cta-btn-secondary">
                <span>Explore Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43" aria-hidden="true">
                  <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5"></polygon>
                  <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5"></polygon>
                  <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5"></polygon>
                </svg>
              </Link>
            </div>
          </div>
        </section>








      </main>
      <Footer />
    </>
  );
}

export default HomePage;
