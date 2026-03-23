import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Experience({ experience }) {
  const [active, setActive] = useState(0);

  return (
    <section
      id="experience"
      className="section-dark"
      style={{ padding: "100px 24px" }}
    >
      <div className="section-inner">
        <FadeIn>
          <div className="section-num">03 / EXPERIENCE</div>
          <h2 className="section-title" style={{ marginBottom: 14 }}>
            Where I've Worked
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 15,
              marginBottom: 52,
              maxWidth: 480,
            }}
          >
            2 years at IDBI Intech Ltd — enterprise banking and AML compliance
            systems.
          </p>
        </FadeIn>

        <div className="exp-layout" style={{ display: "flex", gap: 40 }}>
          {/* Tab column */}
          <div style={{ display: "flex", flexDirection: "column", minWidth: 200 }}>
            {experience.map((e, i) => (
              <button
                key={i}
                className={`exp-tab ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <div style={{ fontWeight: 500 }}>{e.role}</div>
                <div style={{ fontSize: 11, marginTop: 2, opacity: 0.6 }}>
                  {e.period}
                </div>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div style={{ flex: 1 }}>
            {experience.map((e, i) => (
              <div key={i} style={{ display: active === i ? "block" : "none" }}>
                <div style={{ marginBottom: 20 }}>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: 4,
                    }}
                  >
                    {e.role}
                    {e.tag && (
                      <span className="promoted-badge">{e.tag}</span>
                    )}
                  </h3>
                  <div style={{ fontSize: 14, color: "#64FFDA", marginBottom: 2 }}>
                    {e.company}
                  </div>
                  <div
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}
                  >
                    {e.location} · {e.period}
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  {e.bullets.map((b, j) => (
                    <div key={j} className="bullet">
                      {b}
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {e.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
