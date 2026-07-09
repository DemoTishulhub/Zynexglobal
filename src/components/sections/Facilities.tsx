"use client";

import Reveal from "@/components/ui/Reveal";

const facilities = [
  { src: "/images/operations/facility-1.jpg", alt: "Food processing facility with industrial dehydration equipment", label: "Processing" },
  { src: "/images/operations/facility-2.jpg", alt: "Quality control laboratory with testing instruments", label: "Quality Lab" },
  { src: "/images/operations/facility-3.jpg", alt: "Automated packaging line for export products", label: "Packaging" },
  { src: "/images/operations/facility-4.jpg", alt: "Warehouse and logistics center for global shipping", label: "Logistics" },
];

export default function Facilities() {
  return (
    <section id="facilities" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Operations
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Global Operations in Action
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              A glimpse into our processing, quality labs, and logistics infrastructure.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, i) => (
            <Reveal key={facility.label} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-100">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={facility.src}
                    alt={facility.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">{facility.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
