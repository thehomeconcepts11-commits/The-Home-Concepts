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
                <section className="structure" aria-label="Products and categories">
                    <div className="structure-inner">
                        <div className="structure-grid">
                            <div className="structure-left">
                                <h2 className="structure-title">Products</h2>
                                <div className="structure-underline" />
                                <p className="structure-lead">
                                    Explore our curated range of interior and decor products. Quality materials, clean finishing, and styles that fit every space.
                                </p>

                                <div className="structure-points">
                                    <div className="structure-point">
                                        <span className="structure-badge">01</span>
                                        <div className="structure-point-text">
                                            <div className="structure-point-title">Wallpapers</div>
                                            <div className="structure-point-desc">Modern, classic, and textured designs for every room.</div>
                                        </div>
                                    </div>

                                    <div className="structure-point">
                                        <span className="structure-badge">02</span>
                                        <div className="structure-point-text">
                                            <div className="structure-point-title">Curtains & Blinds</div>
                                            <div className="structure-point-desc">Privacy, light control, and premium fabric options.</div>
                                        </div>
                                    </div>

                                    <div className="structure-point">
                                        <span className="structure-badge">03</span>
                                        <div className="structure-point-text">
                                            <div className="structure-point-title">Panels</div>
                                            <div className="structure-point-desc">PVC panels, ceiling panels, PU panels for stylish finishes.</div>
                                        </div>
                                    </div>

                                    <div className="structure-point">
                                        <span className="structure-badge">04</span>
                                        <div className="structure-point-text">
                                            <div className="structure-point-title">Flooring & Tiles</div>
                                            <div className="structure-point-desc">Mosaic tiles and laminated flooring with durable quality.</div>
                                        </div>
                                    </div>

                                    <div className="structure-point">
                                        <span className="structure-badge">05</span>
                                        <div className="structure-point-text">
                                            <div className="structure-point-title">Decor & Utility</div>
                                            <div className="structure-point-desc">Pots, artifacts, carpets, stools, and more essentials.</div>
                                        </div>
                                    </div>

                                    <div className="structure-point">
                                        <span className="structure-badge">06</span>
                                        <div className="structure-point-text">
                                            <div className="structure-point-title">Home Add-ons</div>
                                            <div className="structure-point-desc">Wall murals, artificial greenary, balcony hangers, mosquito mesh doors, AC partitions.</div>
                                        </div>
                                    </div>

                                    <div className="structure-point">
                                        <span className="structure-badge">07</span>
                                        <div className="structure-point-text">
                                            <div className="structure-point-title">Bedsheets & Comforters</div>
                                            <div className="structure-point-desc">Soft, stylish bedding sets for a fresh and cozy feel.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="structure-right" aria-label="Products gallery">
                                <div className="structure-gallery">
                                    <figure className="structure-card">
                                        <img src="/Images/s5.jpg" alt="Wallpapers and wall decor" />
                                        <figcaption>Wallpapers</figcaption>
                                    </figure>

                                    <figure className="structure-card">
                                        <img src="/Images/s6.jpg" alt="Curtains and blinds" />
                                        <figcaption>Curtains & Blinds</figcaption>
                                    </figure>

                                    <figure className="structure-card">
                                        <img src="/Images/s7.jpg" alt="Panels and ceiling work" />
                                        <figcaption>PVC, Ceiling, PU Panels</figcaption>
                                    </figure>

                                    <figure className="structure-card">
                                        <img src="/Images/s8.jpg" alt="Flooring and tiles" />
                                        <figcaption>Tiles & Flooring</figcaption>
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
                            <h2 className="svcspot-title">Our Product Range</h2>
                            <div className="svcspot-underline" />
                            <p className="svcspot-sub">
                                From walls to floors and decor to utility, explore premium products that make every space feel complete.
                            </p>
                        </div>

                        <div className="svcspot-grid">
                            <div className="svcspot-visual">
                                <div className="svcspot-frame">
                                    <img src="/Images/theme.jpg" alt="Product showcase" className="svcspot-mainimg" />
                                    <div className="svcspot-tag">Premium Home Products</div>
                                </div>

                                <div className="svcspot-thumbs">
                                    <div className="svcspot-thumb">
                                        <img src="/Images/show1.jpg" alt="Product preview 1" />
                                    </div>
                                    <div className="svcspot-thumb">
                                        <img src="/Images/show2.jpg" alt="Product preview 2" />
                                    </div>
                                    <div className="svcspot-thumb">
                                        <img src="/Images/show3.jpg" alt="Product preview 3" />
                                    </div>
                                    <div className="svcspot-thumb">
                                        <img src="/Images/show4.jpg" alt="Product preview 4" />
                                    </div>
                                </div>
                            </div>

                            <div className="svcspot-card">
                                <div className="svcspot-badge">THE HOME CONCEPTS</div>

                                <h3 className="svcspot-cardtitle">Everything for Your Home, in One Place</h3>
                                <p className="svcspot-text">
                                    Choose from trending designs and durable materials, selected to match modern interiors and everyday needs.
                                </p>

                                <div className="svcspot-list">
                                    <div className="svcspot-item">
                                        <span className="svcspot-dot" />
                                        <div>
                                            <div className="svcspot-item-title">Wall & Window</div>
                                            <div className="svcspot-item-sub">Wallpapers, wall murals, curtains, blinds, mosquito mesh doors.</div>
                                        </div>
                                    </div>

                                    <div className="svcspot-item">
                                        <span className="svcspot-dot" />
                                        <div>
                                            <div className="svcspot-item-title">Panels & Partitions</div>
                                            <div className="svcspot-item-sub">PVC panels, ceiling panels, PU panels, AC partitions.</div>
                                        </div>
                                    </div>

                                    <div className="svcspot-item">
                                        <span className="svcspot-dot" />
                                        <div>
                                            <div className="svcspot-item-title">Flooring & Tiles</div>
                                            <div className="svcspot-item-sub">Mosaic tiles, laminated flooring, carpets for a finished look.</div>
                                        </div>
                                    </div>

                                    <div className="svcspot-item">
                                        <span className="svcspot-dot" />
                                        <div>
                                            <div className="svcspot-item-title">Decor & Essentials</div>
                                            <div className="svcspot-item-sub">Artificial greenary, pots, artifacts, stools, bedsheets and comforters, balcony cloth hangers.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





                {/* Section 4: Interior Design - Modular Kitchen Grid */}
                <section className="signature-services" aria-label="Featured products">
                    <div className="signature-inner-services">
                        <div className="signature-head-services">
                            <h2 className="signature-title-services">Featured Collections</h2>
                            <div className="signature-underline-services" />
                            <p className="signature-sub-services">
                                Discover trending styles and premium finishes designed to elevate every corner of your home.
                            </p>
                        </div>

                        <div className="signature-grid-services">
                            <div className="signature-card-services signature-a-services">
                                <img src="/Images/show9.jpg" alt="Wallpapers and murals" />
                                <div className="signature-cap-services">
                                    <div className="signature-cap-title-services">Wallpapers & Murals</div>
                                </div>
                            </div>

                            <div className="signature-card-services signature-b-services">
                                <img src="/Images/show8.jpg" alt="Curtains and blinds" />
                                <div className="signature-cap-services">
                                    <div className="signature-cap-title-services">Curtains & Blinds</div>
                                </div>
                            </div>

                            <div className="signature-card-services signature-c-services">
                                <img src="/Images/show7.jpg" alt="Panels and partitions" />
                                <div className="signature-cap-services">
                                    <div className="signature-cap-title-services">Panels & Partitions</div>
                                </div>
                            </div>

                            <div className="signature-card-services signature-d-services">
                                <img src="/Images/show6.jpg" alt="Flooring and carpets" />
                                <div className="signature-cap-services">
                                    <div className="signature-cap-title-services">Flooring & Carpets</div>
                                </div>
                            </div>

                            <div className="signature-copy-services">
                                <h3 className="signature-copy-title-services">Complete Home Product Range</h3>
                                <p className="signature-copy-text-services">
                                    From decor accents to functional essentials, we bring together quality, style, and durability for modern living.
                                </p>

                                <ul className="signature-points-services">
                                    <li><span className="signature-tick-services" />PVC, Ceiling and PU Panels</li>
                                    <li><span className="signature-tick-services" />Mosaic Tiles & Laminated Flooring</li>
                                    <li><span className="signature-tick-services" />Artificial Greenary & Artifacts</li>
                                    <li><span className="signature-tick-services" />Bedsheets, Comforters, Stools and More</li>
                                </ul>

                                <div className="signature-actions-services">
                                    <a className="signature-btn-services signature-btn-solid-services" href="/contact">Enquire Now</a>
                                    <a className="signature-btn-services signature-btn-outline-services" href="tel:+917032383138">Call Us</a>
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
