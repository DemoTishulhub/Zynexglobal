"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string; caption: string }[];
}

export default function Lightbox({ images }: LightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft")
        setActiveIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : null
        );
      if (e.key === "ArrowRight")
        setActiveIndex((prev) =>
          prev !== null ? (prev + 1) % images.length : null
        );
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  const prev = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + images.length) % images.length);
    }
  };

  const next = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % images.length);
    }
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="group overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            <div className="aspect-[4/3] bg-surface">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-3 text-center">
              <p className="text-sm font-medium text-text">{image.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setActiveIndex(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setActiveIndex(null)}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
          <div
            className="max-h-[80vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="max-h-[80vh] rounded-lg object-contain"
            />
            <p className="mt-2 text-center text-sm text-white/80">
              {images[activeIndex].caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
