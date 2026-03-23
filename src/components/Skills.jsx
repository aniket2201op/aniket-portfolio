import FadeIn from "./FadeIn";

export default function Skills({ skills }) {
  return (
    <section id="skills" style={{ padding: "100px 24px" }}>
      <div className="section-inner">
        <FadeIn>
          <div className="section-num">02 / SKILLS</div>
          <h2 className="section-title" style={{ marginBottom: 14 }}>
            Technical Stack
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 15,
              marginBottom: 52,
              maxWidth: 480,
            }}
          >
            Built through 2 years of production banking systems — not tutorials.
          </p>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {skills.map((sk, i) => (
            <FadeIn key={sk.cat} delay={i * 0.05}>
              <div className="skill-cat-card">
                <div
                  style={{
                    fontSize: 11,
                    fontFamily: "'DM Mono', monospace",
                    color: "#64FFDA",
                    letterSpacing: "0.1em",
                    marginBottom: 14,
                  }}
                >
                  {sk.cat.toUpperCase()}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {sk.items.map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
