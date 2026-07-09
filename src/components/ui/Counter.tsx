"use client";

import { useInView, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

export default function Counter({ end, suffix = "", label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, end, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });
    return () => controls.stop();
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {count.toLocaleString()}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-gray-500">{label}</p>
    </div>
  );
}
