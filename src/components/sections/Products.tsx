"use client";

import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Dehydrated Onion Flakes",
    desc: "White, red & pink varieties with ≤6% moisture and 24-month shelf life.",
    image: "/images/products/onion-flakes.jpg",
  },
  {
    name: "Dehydrated Green Chilli Flakes",
    desc: "Air and freeze-dried with ≥99% purity for global seasoning needs.",
    image: "/images/products/chilli-flakes.jpg",
  },
  {
    name: "Banana Chips",
    desc: "Dehydrated, freeze-dried, and vacuum-fried in custom packaging.",
    image: "/images/products/banana-chips.jpg",
  },
  {
    name: "Dehydrated Mango Slices",
    desc: "Natural yellow-golden slices, dices, chunks, strips, and powder.",
    image: "/images/products/mango-slices.jpg",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Products
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Core Products
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Discover our flagship products trusted by buyers across 30+ countries.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-2xl border border-gray-100 transition-all hover:shadow-lg hover:shadow-gray-100">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {product.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
            >
              View All Products
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
