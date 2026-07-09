"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: {
    quote: string;
    name: string;
    location: string;
  }[];
}

export default function Carousel({ items }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 6000);
  }, [items.length]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  const goTo = (index: number) => {
    setCurrent(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoplay();
  };

  const prev = () => goTo((current - 1 + items.length) % items.length);
  const next = () => goTo((current + 1) % items.length);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full shrink-0 px-4">
              <div className="mx-auto max-w-2xl border border-border bg-white p-8 text-center lg:p-10">
                <p className="text-base leading-relaxed text-text sm:text-lg">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-5">
                  <p className="text-sm font-semibold text-brand">{item.name}</p>
                  <p className="mt-0.5 text-sm text-textMuted">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="rounded-md border border-border p-2 transition-colors hover:bg-surface"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={16} className="text-textMuted" />
        </button>
        <div className="flex gap-1.5">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === current ? "w-5 bg-brand" : "w-1.5 bg-border"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="rounded-md border border-border p-2 transition-colors hover:bg-surface"
          aria-label="Next testimonial"
        >
          <ChevronRight size={16} className="text-textMuted" />
        </button>
      </div>
    </div>
  );
}
