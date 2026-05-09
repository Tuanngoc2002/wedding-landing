"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
};

export default function Reveal({ children, delayMs = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  const style = useMemo(() => {
    const key = "--reveal-delay" as const;
    return { [key]: `${delayMs}ms` };
  }, [delayMs]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const merged = ["reveal", inView ? "is-in" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={merged} style={style}>
      {children}
    </div>
  );
}

