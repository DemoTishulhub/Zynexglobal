"use client";

import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

const stats = [
  { end: 950, suffix: "+", label: "Delivered Shipments" },
  { end: 30, suffix: "+", label: "Countries Covered" },
  { end: 550, suffix: "+", label: "Happy Clients" },
  { end: 120, suffix: "+", label: "Tons of Goods" },
];

export default function Stats() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="lg:border-r lg:border-gray-200 lg:last:border-r-0">
                <Counter end={stat.end} suffix={stat.suffix} label={stat.label} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
