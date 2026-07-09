"use client";

import Reveal from "@/components/ui/Reveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Zynex Global has been our most reliable dehydrated onion supplier. Consistent quality, on-time delivery, and excellent communication every time.",
    name: "Mohammed Al Mansoori",
    location: "UAE",
  },
  {
    quote: "We import large quantities of dehydrated mango and coconut products. Zynex Global's quality grading and packaging are always top-notch.",
    name: "James Thompson",
    location: "UK",
  },
  {
    quote: "Professional team, competitive pricing, and products that meet EU food safety standards. Zynex is our go-to supplier from India.",
    name: "Anna Schneider",
    location: "Germany",
  },
  {
    quote: "Working with Zynex Global for over 3 years now. Their chilli flakes and banana chips are always fresh, consistent, and well-packed.",
    name: "Lucas Van Dijk",
    location: "Netherlands",
  },
  {
    quote: "From initial inquiry to delivery, the process was seamless. Great product quality and a team that truly understands export logistics.",
    name: "Faisal Al Qahtani",
    location: "Saudi Arabia",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Hear from our trusted partners across the globe.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-gray-100 p-8 shadow-sm">
                <Quote size={32} className="text-accent/30" strokeWidth={1.5} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
