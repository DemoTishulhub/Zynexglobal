"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-white">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-brand transition-colors hover:bg-surface/50"
          >
            <span>{item.question}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-textMuted transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-sm leading-relaxed text-textMuted">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
