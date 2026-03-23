import { useInView } from "../hooks/usePortfolio";

/**
 * Wraps children in a div that fades up into view when scrolled to.
 * Props:
 *   delay     – transition delay in seconds (default 0)
 *   className – extra class names forwarded to the wrapper
 */
export default function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
