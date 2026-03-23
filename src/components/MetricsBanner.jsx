import { useInView, useCountUp } from "../hooks/usePortfolio";

function MetricCard({ value, label, delay }) {
  const [ref, visible] = useInView();
  const display = useCountUp(value, visible);

  return (
    <div
      ref={ref}
      className="metric-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.85)",
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      }}
    >
      <div className="metric-value">{display}</div>
      <div className="metric-label">{label}</div>
    </div>
  );
}

export default function MetricsBanner({ metrics }) {
  return (
    <section
      style={{
        padding: "60px 24px",
        background: "rgba(100,255,218,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="section-inner">
        <div
          className="metrics-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 14,
          }}
        >
          {metrics.map((m, i) => (
            <MetricCard
              key={i}
              value={m.value}
              label={m.label}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
