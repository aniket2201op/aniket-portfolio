import { useState } from "react";
import { useScrolled } from "../hooks/usePortfolio";

const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

export default function Navbar({ activeSection }) {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(10,15,30,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "background 0.3s, backdrop-filter 0.3s, border-bottom 0.3s",
        }}
      >
        {/* Logo */}
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>
          AS<span style={{ color: "#64FFDA" }}>.</span>
        </div>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ display: "flex", gap: 4 }}>
          {NAV_ITEMS.map((n) => (
            <button
              key={n}
              className={`nav-link ${activeSection === n ? "active" : ""}`}
              onClick={() => scrollTo(n)}
            >
              {n}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          className="contact-btn contact-btn-secondary hide-mobile"
          style={{ padding: "8px 18px", fontSize: 13 }}
          onClick={() => scrollTo("Contact")}
        >
          Hire me
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "#fff", fontSize: 22, display: "none",
          }}
          className="mobile-only"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 64, left: 0, right: 0,
            zIndex: 99,
            background: "rgba(10,15,30,0.98)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NAV_ITEMS.map((n) => (
            <button
              key={n}
              className={`nav-link ${activeSection === n ? "active" : ""}`}
              onClick={() => scrollTo(n)}
              style={{ textAlign: "left", borderRadius: 8 }}
            >
              {n}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
