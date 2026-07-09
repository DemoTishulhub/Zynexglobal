"use client";

import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            LET&apos;S GROW YOUR BUSINESS GLOBALLY
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-400">
            Get in touch to discuss requirements, request samples, or download
            our complete product catalog.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-light"
            >
              Get in Touch
              <ArrowRight size={16} />
            </a>
            <a
              href="/catalog.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Request Catalog
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
