"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl"
      aria-label="Go to top"
    >
      <ChevronUp size={22} />
    </button>
  );
}
