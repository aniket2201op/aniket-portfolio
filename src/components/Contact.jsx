import FadeIn from "./FadeIn";

export default function Contact({ data }) {
  return (
    <section id="contact" style={{ padding: "100px 24px 80px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <div
            className="section-num"
            style={{ justifyContent: "center", display: "flex" }}
          >
            06 / CONTACT
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Let's Work Together
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 15,
              lineHeight: 1.75,
              margin: "0 auto 48px",
              maxWidth: 460,
            }}
          >
            I'm actively looking for Java Developer roles in fintech and banking
            in Mumbai, Navi Mumbai, and Thane. Let's talk.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
              marginBottom: 52,
            }}
          >
            <a
              href={`mailto:${data.email}`}
              className="contact-btn contact-btn-primary"
            >
              ✉ {data.email}
            </a>
            <a
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="contact-btn contact-btn-secondary"
            >
              LinkedIn
            </a>
            <a
              href={`https://${data.github}`}
              target="_blank"
              rel="noreferrer"
              className="contact-btn contact-btn-secondary"
            >
              GitHub
            </a>
            <a
              href="/Aniket_Shinde_Resume.pdf"
              download="Aniket_Shinde_Resume.pdf"
              className="contact-btn contact-btn-download"
            >
              ↓ Download Resume
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {[
              { l: "Phone",    v: data.phone },
              { l: "Location", v: data.location },
              { l: "Status",   v: "Open to opportunities" },
            ].map((item) => (
              <div key={item.l} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontFamily: "'DM Mono', monospace",
                    color: "#64FFDA",
                    letterSpacing: "0.1em",
                    marginBottom: 4,
                  }}
                >
                  {item.l.toUpperCase()}
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
                  {item.v}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
