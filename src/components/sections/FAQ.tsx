"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    question: "What is your quality assurance process?",
    answer:
      "Every batch undergoes multi-stage quality checks including moisture analysis, purity testing, color grading, and microbiological testing. We comply with FSSAI, APEDA, and international food safety standards.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply reach out through our contact form, email, or WhatsApp with your product requirements, quantity, and preferred packaging. Our sales team responds within 24 hours.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We offer flexible payment terms including advance payment, letter of credit (L/C), and T/T (telegraphic transfer). Terms are finalized based on order volume and buyer profile.",
  },
  {
    question: "What are your shipping timelines?",
    answer:
      "Standard orders ship within 10-15 business days. Large or custom orders take 20-30 business days. We ship via sea freight and air cargo.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-gray-100 bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span
                      className={`text-base font-medium transition-colors ${
                        isOpen ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-gray-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-base leading-relaxed text-gray-500">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
