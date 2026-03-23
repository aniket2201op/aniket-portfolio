export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.2)",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        Designed &amp; built by Aniket Shinde · {new Date().getFullYear()}
      </div>
    </footer>
  );
}
