import FadeIn from "./FadeIn";

export default function Certifications({ certifications, education, achievements }) {
  return (
    <section
      id="certifications"
      className="section-dark"
      style={{ padding: "100px 24px" }}
    >
      <div className="section-inner">
        <FadeIn>
          <div className="section-num">05 / CERTIFICATIONS & EDUCATION</div>
          <h2 className="section-title" style={{ marginBottom: 52 }}>
            Learning Never Stops
          </h2>
        </FadeIn>

        <div
          className="cert-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}
        >
          {/* Left column — Certifications */}
          <div>
            <FadeIn>
              <h3
                style={{
                  fontSize: 14,
                  fontFamily: "'DM Mono', monospace",
                  color: "#64FFDA",
                  letterSpacing: "0.1em",
                  marginBottom: 20,
                }}
              >
                CERTIFICATIONS
              </h3>
            </FadeIn>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {certifications.map((c, i) => (
                <FadeIn key={c.name} delay={i * 0.07}>
                  <div className="cert-card">
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#fff",
                        marginBottom: 6,
                      }}
                    >
                      {c.name}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                        {c.issuer}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          fontFamily: "'DM Mono', monospace",
                          color: "#64FFDA",
                        }}
                      >
                        {c.year}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right column — Education + Achievements */}
          <div>
            <FadeIn delay={0.1}>
              <h3
                style={{
                  fontSize: 14,
                  fontFamily: "'DM Mono', monospace",
                  color: "#64FFDA",
                  letterSpacing: "0.1em",
                  marginBottom: 20,
                }}
              >
                EDUCATION
              </h3>
            </FadeIn>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 36,
              }}
            >
              {education.map((e, i) => (
                <FadeIn key={e.degree} delay={0.1 + i * 0.07}>
                  <div className="cert-card">
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#fff",
                        marginBottom: 4,
                      }}
                    >
                      {e.degree}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.4)",
                        marginBottom: 4,
                      }}
                    >
                      {e.school}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontFamily: "'DM Mono', monospace",
                        color: "#64FFDA",
                      }}
                    >
                      {e.period}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.2}>
              <h3
                style={{
                  fontSize: 14,
                  fontFamily: "'DM Mono', monospace",
                  color: "#64FFDA",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                }}
              >
                ACHIEVEMENTS
              </h3>
              {achievements.map((a, i) => (
                <div key={i} className="bullet" style={{ marginBottom: 10 }}>
                  {a}
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
