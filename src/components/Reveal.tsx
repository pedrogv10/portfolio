"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Scroll reveal that never leaves content invisible.
 * SSR / no-JS: content stays visible (no opacity:0 inline styles).
 * With JS: enhances with a short entrance animation, with a failsafe.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const show = () => {
      el.classList.add("reveal--in");
    };

    el.classList.add("reveal");

    const rect = el.getBoundingClientRect();
    const alreadyInView =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 40;

    if (alreadyInView) {
      const raf = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(show);
      });
      return () => window.cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);

    // Safety net: never stay at opacity 0 if the observer never fires
    const fallback = window.setTimeout(show, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}s` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
