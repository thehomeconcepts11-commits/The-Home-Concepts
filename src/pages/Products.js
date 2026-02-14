import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Products.css";

function Products() {
  const categories = useMemo(
    () => [
      {
        label: "Wallpapers",
        key: "wallpapers",
        images: ["wallpaper1.jpg", "wallpaper2.jpg", "wallpaper3.jpg", "wallpaper4.jpg"]
      },
      {
        label: "Curtains",
        key: "curtains",
        images: ["home-curtain1.jpg", "home-curtain2.jpg", "home-curtain3.jpg", "home-curtain4.jpg"]
      },
      {
        label: "Blinds",
        key: "blinds",
        images: ["blind1.jpg", "blind2.jpg", "blind3.jpg", "blind4.jpg"]
      },
      {
        label: "Ceiling Panels",
        key: "ceiling-panels",
        images: ["ceiling-panel1.jpg", "ceiling-panel2.jpg", "ceiling-panel3.jpg", "ceiling-panel4.jpg"]
      },
      {
        label: "Pots",
        key: "pots",
        images: ["pot1.jpg", "pot2.jpg", "pot3.jpg", "pot4.jpg"]
      },
      {
        label: "Artifacts",
        key: "artifacts",
        images: ["artifacts1.jpg", "artifacts2.jpg", "artifacts3.jpg", "artifacts4.jpg"]
      },
      {
        label: "PU Panels",
        key: "pu-panels",
        images: ["pu-panel1.jpg", "pu-panel2.jpg", "pu-panel3.jpg", "pu-panel4.jpg"]
      },
      {
        label: "Mosaic Tiles",
        key: "mosaic-tiles",
        images: ["mosiac-tiles1.jpg", "mosiac-tiles2.jpg", "mosiac-tiles3.jpg", "mosiac-tiles4.jpg"]
      },
      {
        label: "Laminated Flooring",
        key: "laminated-flooring",
        images: ["laminated-flooring1.jpg", "laminated-flooring2.jpg", "laminated-flooring3.jpg", "laminated-flooring4.jpg"]
      },
      {
        label: "Artificial Greenary Section",
        key: "artificial-greenary-section",
        images: [
          "artificial-greenary-section1.jpg",
          "artificial-greenary-section2.jpg",
          "artificial-greenary-section3.jpg",
          "artificial-greenary-section4.jpg"
        ]
      },
      {
        label: "Bedsheets & Comforters",
        key: "bedsheets-comforters",
        images: ["bedsheets-comforters1.jpg", "bedsheets-comforters2.jpg", "bedsheets-comforters3.jpg", "bedsheets-comforters4.jpg"]
      },
      {
        label: "Wall Murals",
        key: "wall-murals",
        images: ["wall-murals1.jpg", "wall-murals2.jpg", "wall-murals3.jpg", "wall-murals4.jpg"]
      },
      {
        label: "Balcony Cloth Hangers",
        key: "balcony-cloth-hangers",
        images: ["balcony-cloth-hangers1.jpg", "balcony-cloth-hangers2.jpg", "balcony-cloth-hangers3.jpg", "balcony-cloth-hangers4.jpg"]
      },
      {
        label: "Mosquito Mesh Doors",
        key: "mosquito-mesh-doors",
        images: ["mosquito-mesh-door1.jpg", "mosquito-mesh-door2.jpg", "mosquito-mesh-door3.jpg", "mosquito-mesh-door4.jpg"]
      },
      {
        label: "Carpets",
        key: "carpets",
        images: ["carpets1.jpg", "carpets2.jpg", "carpets3.jpg", "carpets4.jpg"]
      },
      {
        label: "Stools etc...",
        key: "stools",
        images: ["stool1.jpg", "stool2.jpg", "stool3.jpg", "stool4.jpg"]
      }
    ],
    []
  );

  const allLabels = useMemo(() => categories.map((c) => c.label), [categories]);

  const [query, setQuery] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allLabels.slice(0, 8);
    return allLabels.filter((x) => x.toLowerCase().includes(q)).slice(0, 8);
  }, [allLabels, query]);

  const handlePick = (label) => {
    setSelectedLabel(label);
    setQuery(label);
  };

  const clearAll = () => {
    setSelectedLabel("");
    setQuery("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) handlePick(suggestions[0]);
  };

  const showing = useMemo(() => {
    if (!selectedLabel) return categories;
    return categories.filter((c) => c.label === selectedLabel);
  }, [categories, selectedLabel]);

  return (
    <>
      <Navbar />

      <main className="products-page" aria-label="Products page">
        <section className="products-search" aria-label="Product search">
          <div className="products-search-inner">
            <div className="products-search-head">
              <h1 className="products-search-title">Products</h1>
              <p className="products-search-sub">Search and pick a category to view related products.</p>
            </div>

            <form className="products-searchbar" onSubmit={onSubmit} role="search" aria-label="Search products">
              <div className="products-search-inputwrap">
                <input
                  className="products-search-input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, like Wallpapers, Blinds..."
                  aria-label="Search"
                  autoComplete="off"
                />
              </div>

              <div className="products-search-actions">
                <button className="products-search-btn" type="submit">
                  Search
                </button>
                <button className="products-clear-btn" type="button" onClick={clearAll} disabled={!selectedLabel && !query}>
                  Clear
                </button>
              </div>
            </form>

            {suggestions.length > 0 && (
              <div className="products-suggest" role="listbox" aria-label="Suggestions">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`products-suggest-item ${selectedLabel === s ? "active" : ""}`}
                    onClick={() => handlePick(s)}
                    role="option"
                    aria-selected={selectedLabel === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="products-options" aria-label="All categories">
              {allLabels.map((it) => (
                <button
                  key={it}
                  type="button"
                  className={`products-chip ${selectedLabel === it ? "active" : ""}`}
                  onClick={() => handlePick(it)}
                >
                  {it}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="products-gallery" aria-label="Product gallery">
          <div className="products-gallery-inner">
            <div className="products-grid">
              {showing.map((cat) => (
                <article key={cat.key} className="products-row" aria-label={cat.label}>
                  <div className="products-cat">
                    <div className="products-cat-name">{cat.label}</div>
                    <div className="products-cat-arrow" aria-hidden="true">
                      →
                    </div>
                  </div>

                  {cat.images.map((img) => (
                    <div key={img} className="products-imgcard">
                      <img src={`/Images/products/${img}`} alt={`${cat.label}`} loading="lazy" />
                      <div className="products-imgshine" />
                    </div>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Products;
