"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Envoltorio de animación al hacer scroll: revela su contenido con un
 * fade + slide-up cuando entra en el viewport. Respeta prefers-reduced-motion
 * (ver .reveal en globals.css). Usado en la landing de campaña /sofi.
 */
export function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), delayMs);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
