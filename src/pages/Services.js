import React from 'react';
import './Services.css';
import Footer from './Footer';
import Navbar from './Navbar';

function Services() {
    return (
        <div>
            <Navbar />
            <div className="services-wrapper" id="services">

                {/* Section 1: Hero section with Background Image */}
                <section className="services-hero-services" style={{ backgroundImage: `url('/Images/services_main.jpg')` }}>
                    <div className="hero-overlay-services">
                        <h1 className="services-title-services">Our Services</h1>
                        <p className="services-subtext-services">
                            Everything you need from ground-breaking to house-warming — completely customizable.
                        </p>
                    </div>
                </section>


                {/* Section 2: Foundation & Structure */}
                <section className="structure" aria-label="Foundation and structure">
                    <div className="structure-inner">
                        <div className="structure-grid">
                            <div className="structure-left">
                                <h2 className="structure-title">Foundation & Structure</h2>
                                <div className="structure-underline" />
                                <p className="structure-lead">
                                    A strong home starts with a strong base. We plan and execute every structural stage with clean workmanship and
                                    reliable checks.
                                </p>

                                <div className="structure-points">
                                    <div className="structure-point">
                                        <span className="structure-badge">01</span>
                                        <div className="structure-point-text">
                                            <div className="structure-point-title">Planning & Layout</div>
                                            <div className="structure-point-desc">Site measurements, footing layout, and clear execution plan.</div>
                                        </div>
                                    </div>

                                    <div className="structure-point">
                                        <span className="structure-badge">02</span>
                                        <div className="structure-point-text">
                                            <div className="structure-point-title">Concrete & Reinforcement</div>
                                            <div className="structure-point-desc">Steel placement and concrete work done with proper standards.</div>
                                        </div>
                                    </div>

                                    <div className="structure-point">
                                        <span className="structure-badge">03</span>
                                        <div className="structure-point-text">
                                            <div className="structure-point-title">Beam, Slab, Pillar</div>
                                            <div className="structure-point-desc">Accurate levels, clean edges, and stable structural alignment.</div>
                                        </div>
                                    </div>

                                    <div className="structure-point">
                                        <span className="structure-badge">04</span>
                                        <div className="structure-point-text">
                                            <div className="structure-point-title">Stage Checks</div>
                                            <div className="structure-point-desc">Quality inspections at key stages for safety and durability.</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="structure-right" aria-label="Foundation gallery">
                                <div className="structure-gallery">
                                    <figure className="structure-card">
                                        <img src="/Images/s1.jpg" alt="Foundation work 1" />
                                        <figcaption>Strong base work</figcaption>
                                    </figure>

                                    <figure className="structure-card">
                                        <img src="/Images/s2.jpg" alt="Foundation work 2" />
                                        <figcaption>Clean structure</figcaption>
                                    </figure>

                                    <figure className="structure-card">
                                        <img src="/Images/s3.jpg" alt="Foundation work 3" />
                                        <figcaption>Safe build</figcaption>
                                    </figure>

                                    <figure className="structure-card">
                                        <img src="/Images/s4.jpg" alt="Foundation work 4" />
                                        <figcaption>Quality finish</figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Section 3: Split Layout - Electrical & Plumbing */}
                <section className="svcspot" aria-label="Our services spotlight">
                    <div className="svcspot-inner">
                        <div className="svcspot-head">
                            <h2 className="svcspot-title">Our Home Services</h2>
                            <div className="svcspot-underline" />
                            <p className="svcspot-sub">
                                From planning to finishing, we deliver complete home works with premium quality and clean detailing.
                            </p>
                        </div>

                        <div className="svcspot-grid">
                            <div className="svcspot-visual">
                                <div className="svcspot-frame">
                                    <img src="/Images/theme.jpg" alt="Home service showcase" className="svcspot-mainimg" />
                                    <div className="svcspot-tag">Complete Home Works</div>
                                </div>

                                <div className="svcspot-thumbs">
                                    <div className="svcspot-thumb">
                                        <img src="/Images/slide-show1.jpg" alt="Work preview 1" />
                                    </div>
                                    <div className="svcspot-thumb">
                                        <img src="/Images/slide-show2.jpg" alt="Work preview 2" />
                                    </div>
                                    <div className="svcspot-thumb">
                                        <img src="/Images/slide-show3.jpg" alt="Work preview 3" />
                                    </div>
                                    <div className="svcspot-thumb">
                                        <img src="/Images/slide-show4.jpg" alt="Work preview 4" />
                                    </div>
                                </div>
                            </div>

                            <div className="svcspot-card">
                                <div className="svcspot-badge">THE HOME CONCEPTS</div>

                                <h3 className="svcspot-cardtitle">End to End Home Solutions</h3>
                                <p className="svcspot-text">
                                    We handle planning, structure, interiors, and finishing with a smooth process and reliable timelines.
                                </p>

                                <div className="svcspot-list">
                                    <div className="svcspot-item">
                                        <span className="svcspot-dot" />
                                        <div>
                                            <div className="svcspot-item-title">House Construction</div>
                                            <div className="svcspot-item-sub">Strong foundation, clean structure, safe build.</div>
                                        </div>
                                    </div>

                                    <div className="svcspot-item">
                                        <span className="svcspot-dot" />
                                        <div>
                                            <div className="svcspot-item-title">Interior Works</div>
                                            <div className="svcspot-item-sub">Ceiling panels, wardrobes, modular works, lighting.</div>
                                        </div>
                                    </div>

                                    <div className="svcspot-item">
                                        <span className="svcspot-dot" />
                                        <div>
                                            <div className="svcspot-item-title">Renovation & Repairs</div>
                                            <div className="svcspot-item-sub">Upgrade spaces with premium finish and neat work.</div>
                                        </div>
                                    </div>

                                    <div className="svcspot-item">
                                        <span className="svcspot-dot" />
                                        <div>
                                            <div className="svcspot-item-title">Plan & Elevation</div>
                                            <div className="svcspot-item-sub">Practical layouts designed for real home living.</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>




                {/* Section 4: Interior Design - Modular Kitchen Grid */}
                <section className="signature" aria-label="Signature spaces">
                    <div className="signature-inner">
                        <div className="signature-head">
                            <h2 className="signature-title">Signature Spaces</h2>
                            <div className="signature-underline" />
                            <p className="signature-sub">
                                A premium look comes from strong planning, clean lines, and a finish that feels calm and complete.
                            </p>
                        </div>

                        <div className="signature-grid">
                            <div className="signature-card signature-a">
                                <img src="/Images/slide-show1.jpg" alt="Living Room" />
                                <div className="signature-cap">
                                    <div className="signature-cap-title">Living Room</div>

                                </div>
                            </div>

                            <div className="signature-card signature-b">
                                <img src="/Images/slide-show2.jpg" alt="Bedroom" />
                                <div className="signature-cap">
                                    <div className="signature-cap-title">Bedroom</div>

                                </div>
                            </div>

                            <div className="signature-card signature-c">
                                <img src="/Images/slide-show3.jpg" alt="Elevation" />
                                <div className="signature-cap">
                                    <div className="signature-cap-title">Elevation</div>
                                </div>
                            </div>

                            <div className="signature-card signature-d">
                                <img src="/Images/slide-show4.jpg" alt="Work Area" />
                                <div className="signature-cap">
                                    <div className="signature-cap-title">Work Area</div>
                                </div>
                            </div>

                            <div className="signature-copy">
                                <h3 className="signature-copy-title">Designed for Real Living</h3>
                                <p className="signature-copy-text">
                                    We design homes that feel open, balanced, and easy to live in. Every detail is planned for comfort, clean
                                    finishing, and long-term value.
                                </p>

                                <ul className="signature-points">
                                    <li><span className="signature-tick" />Balanced layouts with smooth flow</li>
                                    <li><span className="signature-tick" />Premium materials with clean detailing</li>
                                    <li><span className="signature-tick" />Lighting and colors that feel calm</li>
                                    <li><span className="signature-tick" />Smart storage and space usage</li>
                                </ul>

                                <div className="signature-actions">
                                    <a className="signature-btn signature-btn-solid" href="/contact">Talk to Us</a>
                                    <a className="signature-btn signature-btn-outline" href="tel:+917032383138">Call Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                {/* Section 5: Interior Design - Circular Animation & Text */}
                <section className="interior-split" aria-label="Interior design">
                    <div className="interior-split-left">
                        <div className="interior-rot-wrap">
                            <div className="interior-rot-inner" style={{ "--quantity": 8 }}>
                                {[
                                    "interior1.jpg",
                                    "interior2.jpg",
                                    "interior3.jpg",
                                    "interior4.jpg",
                                    "interior5.jpg",
                                    "interior6.jpg",
                                    "interior7.jpg",
                                    "interior8.jpg",
                                ].map((img, index) => (
                                    <div className="interior-rot-card" key={index} style={{ "--index": index }}>
                                        <img className="interior-rot-img" src={`/Images/${img}`} alt={`interior-${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="interior-split-right">
                        <div className="interior-copy">
                            <h2 className="interior-title">Interior Design</h2>
                            <div className="interior-underline" />
                            <p className="interior-desc">
                                From cozy corners to elegant wardrobes, we blend design and practicality to match your lifestyle, space, and
                                budget.
                            </p>

                            <ul className="interior-points">
                                <li><span className="interior-dot" />Modular kitchen and smart storage planning</li>
                                <li><span className="interior-dot" />False ceiling with lighting layout and clean finishing</li>
                                <li><span className="interior-dot" />Wardrobes, TV unit, and custom furniture works</li>
                                <li><span className="interior-dot" />Material selection support and color combination guidance</li>
                                <li><span className="interior-dot" />On-time execution with neat detailing</li>
                            </ul>
                        </div>
                    </div>
                </section>


                {/* Section 6: Garden Showcase - 3D Parallax Fly-In */}
                <section className="showcase-new" aria-label="Project showcase">
                    <div className="showcase-new-inner">
                        <header className="showcase-new-head">
                            <h2 className="showcase-new-title">Project Showcase</h2>
                            <div className="showcase-new-underline" />
                            <p className="showcase-new-sub">
                                A clean, modern finish with smart planning, strong execution, and a look that feels calm and premium.
                            </p>
                        </header>

                        <div className="showcase-new-grid">
                            <div className="showcase-new-left">
                                <article className="showcase-new-hero">
                                    <img src="/Images/modern-spacious-room-with-large-panoramic-window.jpg" alt="Modern home showcase" />
                                    <div className="showcase-new-hero-overlay" />
                                    <div className="showcase-new-hero-cap">
                                        <div className="showcase-new-hero-kicker">THE HOME CONCEPTS</div>
                                        <div className="showcase-new-hero-title">Modern Homes, Made Practical</div>
                                        <div className="showcase-new-hero-sub">Neat detailing, balanced layouts, and a finish that lasts.</div>
                                    </div>
                                </article>

                                <div className="showcase-new-tiles">
                                    <article className="showcase-new-tile">
                                        <img src="/Images/interior2.jpg" alt="Premium interior" />
                                        <div className="showcase-new-tile-cap">
                                            <div className="showcase-new-tile-title">Premium Interiors</div>
                                           
                                        </div>
                                    </article>

                                    <article className="showcase-new-tile">
                                        <img src="/Images/interior6.jpg" alt="Smart layout" />
                                        <div className="showcase-new-tile-cap">
                                            <div className="showcase-new-tile-title">Smart Layout Planning</div>
                                            
                                        </div>
                                    </article>
                                </div>
                            </div>

                            <aside className="showcase-new-right" aria-label="Showcase highlights">
                                <div className="showcase-new-panel">
                                    <h3 className="showcase-new-panel-title">What You Can Expect</h3>
                                    <p className="showcase-new-panel-text">
                                        We focus on clarity and finish. From the first layout to the final touch, every step is planned, tracked,
                                        and executed with care.
                                    </p>

                                    <ul className="showcase-new-points">
                                        <li><span className="showcase-new-bullet" />Modern elevation and clean lines</li>
                                        <li><span className="showcase-new-bullet" />Strong structure with quality materials</li>
                                        <li><span className="showcase-new-bullet" />Interior works with neat detailing</li>
                                        <li><span className="showcase-new-bullet" />Lighting and storage planned for daily living</li>
                                        <li><span className="showcase-new-bullet" />Timely delivery with regular updates</li>
                                    </ul>

                                    <div className="showcase-new-actions">
                                        <a className="showcase-new-btn showcase-new-btn-solid" href="/contact">Get Quote</a>
                                        <a className="showcase-new-btn" href="/services">Explore Services</a>
                                    </div>

                                    <div className="showcase-new-meta">
                                        <div className="showcase-new-meta-title">Srikakulam, Andhra Pradesh</div>
                                        <div className="showcase-new-meta-sub">
                                            <a className="showcase-new-link" href="tel:+917032383138">+91-7032383138</a>
                                            <span className="showcase-new-sep">|</span>
                                            <a className="showcase-new-link" href="mailto:thehomeconcepts.11@gmail.com">thehomeconcepts.11@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>






                <Footer />
            </div>
        </div>
    );
}

export default Services;
