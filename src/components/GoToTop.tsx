"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white text-textMuted shadow-sm transition-colors hover:text-brand"
      aria-label="Go to top"
    >
      <ChevronUp size={18} />
    </button>
  );
}
