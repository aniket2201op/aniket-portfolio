export default function Hero({ data }) {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px 60px",
      }}
    >
      <div className="grid-dots" />
      <div className="hero-glow" />

      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="hero-grid"
          style={{ display: "flex", alignItems: "center", gap: 60 }}
        >
          {/* Left — text */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.1s forwards",
                fontFamily: "'DM Mono', monospace",
                fontSize: 13,
                color: "#64FFDA",
                letterSpacing: "0.12em",
                marginBottom: 16,
              }}
            >
              Hi, I'm
            </div>

            <h1
              style={{
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.2s forwards",
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(44px, 7vw, 76px)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "#fff",
                marginBottom: 12,
              }}
            >
              {data.name.split(" ")[0]}
              <br />
              {data.name.split(" ")[1]}
              <span style={{ color: "#64FFDA" }}>.</span>
            </h1>

            <div
              style={{
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.3s forwards",
                fontSize: "clamp(16px, 2.5vw, 22px)",
                color: "rgba(255,255,255,0.45)",
                fontWeight: 300,
                marginBottom: 20,
                lineHeight: 1.4,
              }}
            >
              {data.title}
            </div>

            <p
              style={{
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.4s forwards",
                fontSize: 15,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                maxWidth: 520,
                marginBottom: 36,
              }}
            >
              {data.summary}
            </p>

            <div
              style={{
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.5s forwards",
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href={`mailto:${data.email}`}
                className="contact-btn contact-btn-primary"
              >
                <span>Get in touch</span>
                <span style={{ fontSize: 16 }}>→</span>
              </a>
              <a
                href="/Aniket_Shinde_Resume.pdf"
                download="Aniket_Shinde_Resume.pdf"
                className="contact-btn contact-btn-download"
              >
                ↓ Download Resume
              </a>
              <a
                href={`https://${data.github}`}
                target="_blank"
                rel="noreferrer"
                className="contact-btn contact-btn-secondary"
              >
                GitHub
              </a>
            </div>

            <div
              style={{
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.6s forwards",
                marginTop: 36,
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {data.keySkills.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          {/* Right — stats card */}
          <div style={{ width: 260, flexShrink: 0 }}>
            <div
              style={{
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.5s forwards",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: 28,
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {data.heroStats.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "14px 0",
                      borderBottom:
                        i < data.heroStats.length - 1
                          ? "1px solid rgba(255,255,255,0.05)"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 32,
                        fontWeight: 700,
                        color: "#64FFDA",
                        minWidth: 56,
                      }}
                    >
                      {s.n}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.3,
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.35,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontFamily: "'DM Mono', monospace",
            letterSpacing: "0.1em",
            color: "#fff",
          }}
        >
          SCROLL
        </div>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
          }}
        />
      </div>
    </section>
  );
}
