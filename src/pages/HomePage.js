import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { FaHome, FaBuilding, FaRegBuilding } from "react-icons/fa";

function HomePage() {
  const slides = Array.from({ length: 8 }, (_, i) => `/Images/interior${i + 1}.jpg`);

  return (
    <>
      <Navbar />
      <main className="home">
        <section className="hero" aria-label="Main banner">
          <img className="hero-img" src="/Images/main-banner3.jpg" alt="The Home Concepts banner" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-badge">
              <img className="hero-logo" src="/Images/main-logo1.png" alt="The Home Concepts logo" />
            </div>

            <h1 className="hero-title">
              Turning Spaces
              <br />
              into Experiences
            </h1>

            <p className="hero-subtitle">
              Discover premium interior solutions
              <br />
              crafted to match your style and space,
              <br />
              with smart layouts, clean finishing, and
              <br />
              comfort that feels right every day.
            </p>

          </div>
        </section>


        <section className="showcase" aria-label="The Home Concepts offerings">
          <div className="showcase-inner">
            <div className="showcase-head">
              <h2 className="showcase-title">Crafted for Every Corner</h2>
              <p className="showcase-desc">
                From walls to floors, from soft furnishings to functional upgrades, we design spaces that feel premium and personal.
              </p>
            </div>

            <div className="showcase-grid">
              <article className="showcase-card">
                <div className="showcase-media">
                  <img className="showcase-img" src="/Images/products/wallpaper1.jpg" alt="Wallpapers" />
                  <div className="showcase-shade" />
                  <div className="showcase-topline" />
                  <div className="showcase-badge">
                    <div className="showcase-badge-title">Wallpapers</div>
                    <div className="showcase-badge-sub">Textures that change the mood</div>
                  </div>
                </div>
              </article>

              <article className="showcase-card">
                <div className="showcase-media">
                  <img className="showcase-img" src="/Images/products/home-curtain2.jpg" alt="Curtains" />
                  <div className="showcase-shade" />
                  <div className="showcase-topline" />
                  <div className="showcase-badge">
                    <div className="showcase-badge-title">Curtains</div>
                    <div className="showcase-badge-sub">Soft luxury, perfect fall</div>
                  </div>
                </div>
              </article>

              <article className="showcase-card">
                <div className="showcase-media">
                  <img className="showcase-img" src="/Images/products/blind3.jpg" alt="Blinds" />
                  <div className="showcase-shade" />
                  <div className="showcase-topline" />
                  <div className="showcase-badge">
                    <div className="showcase-badge-title">Blinds</div>
                    <div className="showcase-badge-sub">Light control, clean finish</div>
                  </div>
                </div>
              </article>

              <article className="showcase-card">
                <div className="showcase-media">
                  <img className="showcase-img" src="/Images/products/ceiling-panel1.jpg" alt="Ceiling Panels" />
                  <div className="showcase-shade" />
                  <div className="showcase-topline" />
                  <div className="showcase-badge">
                    <div className="showcase-badge-title">Ceiling Panels</div>
                    <div className="showcase-badge-sub">A premium look from above</div>
                  </div>
                </div>
              </article>

              <article className="showcase-card">
                <div className="showcase-media">
                  <img className="showcase-img" src="/Images/products/pu-panel2.jpg" alt="PU Panels" />
                  <div className="showcase-shade" />
                  <div className="showcase-topline" />
                  <div className="showcase-badge">
                    <div className="showcase-badge-title">PU Panels</div>
                    <div className="showcase-badge-sub">Bold walls, sculpted style</div>
                  </div>
                </div>
              </article>

              <article className="showcase-card">
                <div className="showcase-media">
                  <img className="showcase-img" src="/Images/products/mosiac-tiles2.jpg" alt="Mosaic Tiles" />
                  <div className="showcase-shade" />
                  <div className="showcase-topline" />
                  <div className="showcase-badge">
                    <div className="showcase-badge-title">Mosaic Tiles</div>
                    <div className="showcase-badge-sub">Details that steal attention</div>
                  </div>
                </div>
              </article>

              <article className="showcase-card">
                <div className="showcase-media">
                  <img className="showcase-img" src="/Images/products/laminated-flooring3.jpg" alt="Laminated Flooring" />
                  <div className="showcase-shade" />
                  <div className="showcase-topline" />
                  <div className="showcase-badge">
                    <div className="showcase-badge-title">Laminated Flooring</div>
                    <div className="showcase-badge-sub">Warmth under every step</div>
                  </div>
                </div>
              </article>

              <article className="showcase-card">
                <div className="showcase-media">
                  <img className="showcase-img" src="/Images/products/greenary-vertical-garden2.jpg" alt="Artificial Greenery" />
                  <div className="showcase-shade" />
                  <div className="showcase-topline" />
                  <div className="showcase-badge">
                    <div className="showcase-badge-title">Artificial Greenery</div>
                    <div className="showcase-badge-sub">Fresh vibes, zero effort</div>
                  </div>
                </div>
              </article>
            </div>

            <div className="showcase-cta" aria-label="Explore services">
              <div className="showcase-cta-line" />
              <p className="showcase-cta-text">
                Want more? We also do PVC panels, wall murals, mosquito mesh doors, carpets, pots, artifacts, and more.
              </p>
              <a className="showcase-cta-btn" href="/products" aria-label="View all categories">
                View All Categories
              </a>
            </div>
          </div>
        </section>






        <section className="categorywall" aria-label="The Home Concepts categories">
          <div className="categorywall-inner">
            <div className="categorywall-left">
              <div className="categorywall-kicker">The Home Concepts</div>
              <h2 className="categorywall-title">Everything you need to build a premium space</h2>
              <p className="categorywall-sub">
                Pick a category, explore options, and let us turn your idea into a finished look. Clean, bold, and built to last.
              </p>

              <div className="categorywall-metrics" aria-label="Highlights">
                <div className="categorywall-metric">
                  <div className="categorywall-num">18+</div>
                  <div className="categorywall-label">Categories</div>
                </div>
                <div className="categorywall-metric">
                  <div className="categorywall-num">100%</div>
                  <div className="categorywall-label">Custom Fit</div>
                </div>
                <div className="categorywall-metric">
                  <div className="categorywall-num">0</div>
                  <div className="categorywall-label">Compromise</div>
                </div>
              </div>

              <a className="categorywall-btn" href="/products" aria-label="Explore all categories">
                Explore Categories
                <span className="categorywall-btn-dot" aria-hidden="true" />
              </a>
            </div>

            <div className="categorywall-right" aria-label="Category list">
              <a className="categorywall-pill" href="/products#wallpapers">Wallpapers</a>
              <a className="categorywall-pill" href="/products#curtains">Curtains</a>
              <a className="categorywall-pill" href="/products#blinds">Blinds</a>
              <a className="categorywall-pill" href="/products#pvc-panels">PVC Panels</a>
              <a className="categorywall-pill" href="/products#ceiling-panels">Ceiling Panels</a>
              <a className="categorywall-pill" href="/products#pots">Pots</a>
              <a className="categorywall-pill" href="/products#artifacts">Artifacts</a>
              <a className="categorywall-pill" href="/products#pu-panels">PU Panels</a>
              <a className="categorywall-pill" href="/products#mosaic-tiles">Mosaic Tiles</a>
              <a className="categorywall-pill" href="/products#laminated-flooring">Laminated Flooring</a>
              <a className="categorywall-pill" href="/products#artificial-greenary-section">Artificial Greenery</a>
              <a className="categorywall-pill" href="/products#bedsheets-comforters">Bedsheets & Comforters</a>
              <a className="categorywall-pill" href="/products#wall-murals">Wall Murals</a>
              <a className="categorywall-pill" href="/products#balcony-cloth-hangers">Balcony Cloth Hangers</a>
              <a className="categorywall-pill" href="/products#mosquito-mesh-doors">Mosquito Mesh Doors</a>
              <a className="categorywall-pill" href="/products#ac-partitions">AC Partitions</a>
              <a className="categorywall-pill" href="/products#carpets">Carpets</a>
              <a className="categorywall-pill" href="/products#stools">Stools etc.</a>
            </div>
          </div>

          <div className="categorywall-frame" aria-hidden="true" />
        </section>




        <section className="studio" aria-label="Category studio preview">
          <div className="studio-inner">
            <div className="studio-head">
              <h2 className="studio-title">Category Studio</h2>
              <p className="studio-sub">
                Tap a category to preview the vibe. Premium materials, clean finishing, and a sharp look in every corner.
              </p>
            </div>

            <div className="studio-shell" aria-label="Studio selector">
              {/* Controls (no JS, pure CSS switching) */}
              <input className="studio-radio" type="radio" name="studio" id="st-wallpapers" defaultChecked />
              <input className="studio-radio" type="radio" name="studio" id="st-curtains" />
              <input className="studio-radio" type="radio" name="studio" id="st-blinds" />
              <input className="studio-radio" type="radio" name="studio" id="st-panels" />
              <input className="studio-radio" type="radio" name="studio" id="st-flooring" />
              <input className="studio-radio" type="radio" name="studio" id="st-greenery" />

              <div className="studio-grid">
                {/* Left selector */}
                <div className="studio-left" aria-label="Choose a category">
                  <div className="studio-note">
                    <span className="studio-note-dot" aria-hidden="true" />
                    Pick a category
                  </div>

                  <label className="studio-tab" htmlFor="st-wallpapers">
                    <span className="studio-tab-title">Wallpapers</span>
                    <span className="studio-tab-sub">Texture, depth, statement walls</span>
                  </label>

                  <label className="studio-tab" htmlFor="st-curtains">
                    <span className="studio-tab-title">Curtains</span>
                    <span className="studio-tab-sub">Soft luxury, perfect fall</span>
                  </label>

                  <label className="studio-tab" htmlFor="st-blinds">
                    <span className="studio-tab-title">Blinds</span>
                    <span className="studio-tab-sub">Light control, clean lines</span>
                  </label>

                  <label className="studio-tab" htmlFor="st-panels">
                    <span className="studio-tab-title">PU Panels</span>
                    <span className="studio-tab-sub">Bold surfaces, premium finish</span>
                  </label>

                  <label className="studio-tab" htmlFor="st-flooring">
                    <span className="studio-tab-title">Laminated Flooring</span>
                    <span className="studio-tab-sub">Warm, durable, elegant</span>
                  </label>

                  <label className="studio-tab" htmlFor="st-greenery">
                    <span className="studio-tab-title">Artificial Greenery</span>
                    <span className="studio-tab-sub">Fresh look, zero maintenance</span>
                  </label>

                  <div className="studio-cta">
                    <a className="studio-btn" href="/products" aria-label="View all categories">
                      View All Categories
                    </a>

                  </div>
                </div>

                {/* Right preview */}
                <div className="studio-right" aria-label="Preview">
                  {/* Wallpapers */}
                  <div className="studio-panel p-wallpapers" role="group" aria-label="Wallpapers preview">
                    <div className="studio-media">
                      <img src="/Images/products/wallpaper4.jpg" alt="Wallpapers preview" className="studio-img" />
                      <div className="studio-shade" />
                      <div className="studio-chip">Wallpapers</div>
                      <div className="studio-caption">
                        <div className="studio-caption-title">Make the first impression</div>
                        <div className="studio-caption-sub">Patterns that feel premium, not loud.</div>
                      </div>
                    </div>

                    <div className="studio-mini">
                      <img src="/Images/products/wallpaper1.jpg" alt="Wallpaper sample 1" />
                      <img src="/Images/products/wallpaper2.jpg" alt="Wallpaper sample 2" />
                      <img src="/Images/products/wallpaper3.jpg" alt="Wallpaper sample 3" />
                    </div>
                  </div>

                  {/* Curtains */}
                  <div className="studio-panel p-curtains" role="group" aria-label="Curtains preview">
                    <div className="studio-media">
                      <img src="/Images/products/home-curtain3.jpg" alt="Curtains preview" className="studio-img" />
                      <div className="studio-shade" />
                      <div className="studio-chip">Curtains</div>
                      <div className="studio-caption">
                        <div className="studio-caption-title">Softness with structure</div>
                        <div className="studio-caption-sub">Fall, folds, and clean finishing.</div>
                      </div>
                    </div>

                    <div className="studio-mini">
                      <img src="/Images/products/home-curtain1.jpg" alt="Curtain sample 1" />
                      <img src="/Images/products/home-curtain2.jpg" alt="Curtain sample 2" />
                      <img src="/Images/products/home-curtain4.jpg" alt="Curtain sample 3" />
                    </div>
                  </div>

                  {/* Blinds */}
                  <div className="studio-panel p-blinds" role="group" aria-label="Blinds preview">
                    <div className="studio-media">
                      <img src="/Images/products/blind4.jpg" alt="Blinds preview" className="studio-img" />
                      <div className="studio-shade" />
                      <div className="studio-chip">Blinds</div>
                      <div className="studio-caption">
                        <div className="studio-caption-title">Control light, keep it elegant</div>
                        <div className="studio-caption-sub">Minimal look, maximum comfort.</div>
                      </div>
                    </div>

                    <div className="studio-mini">
                      <img src="/Images/products/blind1.jpg" alt="Blind sample 1" />
                      <img src="/Images/products/blind2.jpg" alt="Blind sample 2" />
                      <img src="/Images/products/blind3.jpg" alt="Blind sample 3" />
                    </div>
                  </div>

                  {/* PU Panels */}
                  <div className="studio-panel p-panels" role="group" aria-label="PU Panels preview">
                    <div className="studio-media">
                      <img src="/Images/products/pu-panel4.jpg" alt="PU panels preview" className="studio-img" />
                      <div className="studio-shade" />
                      <div className="studio-chip">PU Panels</div>
                      <div className="studio-caption">
                        <div className="studio-caption-title">Walls with depth</div>
                        <div className="studio-caption-sub">A premium upgrade in minutes.</div>
                      </div>
                    </div>

                    <div className="studio-mini">
                      <img src="/Images/products/pu-panel1.jpg" alt="PU sample 1" />
                      <img src="/Images/products/pu-panel2.jpg" alt="PU sample 2" />
                      <img src="/Images/products/pu-panel3.jpg" alt="PU sample 3" />
                    </div>
                  </div>

                  {/* Flooring */}
                  <div className="studio-panel p-flooring" role="group" aria-label="Flooring preview">
                    <div className="studio-media">
                      <img src="/Images/products/laminated-flooring4.jpg" alt="Flooring preview" className="studio-img" />
                      <div className="studio-shade" />
                      <div className="studio-chip">Laminated Flooring</div>
                      <div className="studio-caption">
                        <div className="studio-caption-title">Warmth under every step</div>
                        <div className="studio-caption-sub">Durable, clean, and premium.</div>
                      </div>
                    </div>

                    <div className="studio-mini">
                      <img src="/Images/products/laminated-flooring1.jpg" alt="Flooring sample 1" />
                      <img src="/Images/products/laminated-flooring2.jpg" alt="Flooring sample 2" />
                      <img src="/Images/products/laminated-flooring3.jpg" alt="Flooring sample 3" />
                    </div>
                  </div>

                  {/* Greenery */}
                  <div className="studio-panel p-greenery" role="group" aria-label="Greenery preview">
                    <div className="studio-media">
                      <img src="/Images/products/artificial-greenary-section4.jpg" alt="Artificial greenery preview" className="studio-img" />
                      <div className="studio-shade" />
                      <div className="studio-chip">Artificial Greenery</div>
                      <div className="studio-caption">
                        <div className="studio-caption-title">Make spaces feel alive</div>
                        <div className="studio-caption-sub">Fresh look with zero maintenance.</div>
                      </div>
                    </div>

                    <div className="studio-mini">
                      <img src="/Images/products/artificial-greenary-section1.jpg" alt="Greenery sample 1" />
                      <img src="/Images/products/artificial-greenary-section2.jpg" alt="Greenery sample 2" />
                      <img src="/Images/products/artificial-greenary-section3.jpg" alt="Greenery sample 3" />
                    </div>
                  </div>
                </div>
              </div>
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
              slideShadows: false,
            }}
            autoplay={{
              delay: 1700,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={1000}
            allowTouchMove={false}
          >
            {slides.map((src, index) => (
              <SwiperSlide key={src}>
                <img src={src} alt={`interior ${index + 1}`} />
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
                    <span className="visit-card-value">
                      First Floor, Plot-30, Pedapadu Road, Near Rama Gedda, Srikakulam
                    </span>
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
              <img className="grid-img" src="/Images/grid5.jpg" alt="Grid 1" />
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
              <h2 className="grid-title-text">
                The <br />
                Home <br />
                Concepts
              </h2>
            </div>

            <div className="grid-item grid-text">
              <h4 className="grid-kicker">On Time Delivery</h4>
              <p className="grid-copy">
                Coordinated support from selection to dispatch, keeping timelines steady and outcomes consistent.
              </p>
            </div>

            <div className="grid-item grid-media">
              <img className="grid-img" src="/Images/grid6.jpg" alt="Grid 3" />
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
                      <img src="/Images/why-choose4.jpg" alt="Why choose us 1" />
                    </div>
                    <div className="choose-media">
                      <img src="/Images/why-choose5.jpg" alt="Why choose us 2" />
                    </div>
                  </div>

                  <div className="choose-col">
                    <div className="choose-media choose-media-tall">
                      <img src="/Images/why-choose6.jpg" alt="Why choose us 3" />
                      <div className="choose-tag">Trusted Work</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="choose-right">
                <div className="choose-head">
                  <h2 className="choose-title">Why Choose Us</h2>
                  <div className="choose-underline" />
                  <p className="choose-desc">
                    We focus on clean workmanship and premium finishing. <br />
                    Clear timelines, honest guidance, and smooth coordination.
                    <br />
                    Designed for real home living with lasting value.
                  </p>
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
                  <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
                  <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
                  <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
                </svg>
              </Link>

              <Link to="/services" className="cta-btn cta-btn-secondary">
                <span>Explore Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43" aria-hidden="true">
                  <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
                  <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
                  <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
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
