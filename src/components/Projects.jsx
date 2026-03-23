import FadeIn from "./FadeIn";

export default function Projects({ projects }) {
  return (
    <section id="projects" style={{ padding: "100px 24px" }}>
      <div className="section-inner">
        <FadeIn>
          <div className="section-num">04 / PROJECTS</div>
          <h2 className="section-title" style={{ marginBottom: 14 }}>
            Things I've Built
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 15,
              marginBottom: 52,
              maxWidth: 480,
            }}
          >
            Real production systems for real banking operations — not side
            projects.
          </p>
        </FadeIn>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(460px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div className="proj-card">
                <div
                  style={{
                    fontSize: 11,
                    fontFamily: "'DM Mono', monospace",
                    color: "#64FFDA",
                    letterSpacing: "0.08em",
                    marginBottom: 12,
                  }}
                >
                  {p.company.toUpperCase()}
                </div>

                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: 16,
                    lineHeight: 1.3,
                  }}
                >
                  {p.name}
                </h3>

                <div style={{ marginBottom: 20 }}>
                  {p.bullets.map((b, j) => (
                    <div key={j} className="bullet">
                      {b}
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {p.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
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
