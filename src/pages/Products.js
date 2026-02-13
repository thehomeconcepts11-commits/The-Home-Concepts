import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Products.css";

function Products() {
  const allItems = useMemo(
    () => [
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
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(allItems[0]);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems.slice(0, 8);
    return allItems.filter((x) => x.toLowerCase().includes(q)).slice(0, 8);
  }, [allItems, query]);

  const handlePick = (item) => {
    setSelected(item);
    setQuery(item);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) handlePick(suggestions[0]);
  };

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
              <button className="products-search-btn" type="submit">
                Search
              </button>
            </form>

            {suggestions.length > 0 && (
              <div className="products-suggest" role="listbox" aria-label="Suggestions">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`products-suggest-item ${selected === s ? "active" : ""}`}
                    onClick={() => handlePick(s)}
                    role="option"
                    aria-selected={selected === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}


            <div className="products-options" aria-label="All categories">
              {allItems.map((it) => (
                <button
                  key={it}
                  type="button"
                  className={`products-chip ${selected === it ? "active" : ""}`}
                  onClick={() => handlePick(it)}
                >
                  {it}
                </button>
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
