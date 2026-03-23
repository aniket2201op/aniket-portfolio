import { useState, useEffect, useRef } from "react";

/**
 * Returns [ref, isVisible] — fires once when the element enters the viewport.
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/**
 * Animates a numeric string from 0 to its target value when `trigger` becomes true.
 * Handles suffixes like %, +, and decimal values.
 */
export function useCountUp(value, trigger) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!trigger) return;

    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");

    if (isNaN(num)) {
      setDisplay(value);
      return;
    }

    let current = 0;
    const duration = 1200;
    const step = 16;
    const increment = num / (duration / step);

    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        const rounded = num < 10 ? current.toFixed(1) : Math.round(current);
        setDisplay(rounded + suffix);
      }
    }, step);

    return () => clearInterval(timer);
  }, [trigger, value]);

  return display;
}

/**
 * Returns true when the page has scrolled past `threshold` pixels.
 */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

/**
 * Tracks which section is currently in view and returns its name.
 * `sectionIds` is an array of element IDs matching nav item labels (lowercased).
 */
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds.map((id) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    elements.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
