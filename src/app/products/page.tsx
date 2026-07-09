import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Zynex Global's range of premium dehydrated fruits, vegetables, and food ingredients — onion flakes, mango, banana chips, chilli flakes, coconut chips, and more.",
};

const products = [
  {
    name: "Onion Flakes",
    image: "/images/products/onion-flakes.jpg",
    desc: "White, red & pink varieties with ≤6% moisture and 24-month shelf life.",
    specs: {
      Varieties: "White, Red, Pink",
      "Drying Methods": "Air Dried, Vacuum Dried, Freeze Dried",
      Moisture: "≤6%",
      Purity: "≥99%",
      Color: "White to cream",
      "Shelf Life": "24 months",
      Packaging: "5kg, 10kg, 25kg food-grade bags",
    },
    uses: ["Soups", "Seasonings", "Sauces", "Instant Foods"],
  },
  {
    name: "Dehydrated Mango",
    image: "/images/products/mango-slices.jpg",
    desc: "Slices, dices, chunks, strips & powder with natural yellow-golden color.",
    specs: {
      Varieties: "Slices, Dices, Chunks, Strips, Powder",
      "Drying Methods": "Air Dried, Vacuum Dried, Freeze Dried",
      Moisture: "8–12%",
      Purity: "100% natural",
      Color: "Natural yellow-golden",
      "Shelf Life": "12–24 months",
      Packaging: "5kg, 10kg, 25kg food-grade bags",
    },
    uses: ["Bakery", "Cereals", "Snacks", "Smoothies", "Confectionery"],
  },
  {
    name: "Banana Chips",
    image: "/images/products/banana-chips.jpg",
    desc: "Dehydrated, freeze-dried, fried & vacuum-fried in custom packaging.",
    specs: {
      Varieties: "Dehydrated Slices, Freeze Dried, Fried, Vacuum Fried",
      "Drying Methods": "Dehydrated, Freeze Dried, Fried, Vacuum Fried",
      Moisture: "3–5%",
      Purity: "100% natural",
      Color: "Light yellow-golden",
      "Shelf Life": "Up to 12 months",
      Packaging: "Bulk / Custom export packaging",
    },
    uses: ["Snacks", "Trail Mix", "Retail", "Food Processing"],
  },
  {
    name: "Green Chilly Flakes",
    image: "/images/products/chilli-flakes.jpg",
    desc: "Flakes & crushed varieties with ≥99% purity and ≤6% moisture.",
    specs: {
      Varieties: "Flakes, Crushed",
      "Drying Methods": "Air Dried, Freeze Dried",
      Moisture: "≤6%",
      Purity: "≥99%",
      Color: "Natural green",
      "Shelf Life": "24 months",
      Packaging: "5kg, 10kg, 25kg food-grade bags",
    },
    uses: ["Seasonings", "Spice Blends", "Sauces", "Pickles", "Ready Meals"],
  },
  {
    name: "Coconut Chips",
    image: "/images/products/coconut-chips.jpg",
    desc: "Chips, shreds & flakes with ≤3% moisture and natural white color.",
    specs: {
      Varieties: "Chips, Shreds, Flakes",
      "Drying Methods": "Sun Dried, Air Dried, Toasted",
      Moisture: "≤3%",
      Purity: "100% natural",
      Color: "Natural white–light golden",
      "Shelf Life": "12 months",
      Packaging: "5kg, 10kg, 25kg vacuum / food-grade bags",
    },
    uses: ["Bakery", "Confectionery", "Snacks", "Cereals", "Desserts"],
  },
  {
    name: "Dehydrated Tomato",
    image: "/images/products/tomato-flakes.jpg",
    desc: "Flakes, granules & powder with ≤5% moisture and deep red color.",
    specs: {
      Varieties: "Flakes, Granules, Powder",
      "Drying Methods": "Air Dried, Freeze Dried",
      Moisture: "≤5%",
      Purity: "100% natural",
      Color: "Deep red–bright red",
      "Shelf Life": "18–24 months",
      Packaging: "5kg, 10kg, 25kg food-grade bags",
    },
    uses: ["Soups", "Sauces", "Seasonings", "Instant Noodles", "Spice Blends"],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            GET STARTED
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            OUR PRODUCTS
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-500">
            We export high-quality agricultural products from India to global
            markets with reliable sourcing, quality control, and efficient
            logistics to ensure smooth international trade.
          </p>
        </div>
      </section>

      {/* Quality Assured Products */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Range
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              QUALITY ASSURED PRODUCTS
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              We specialize in providing premium quality dehydrated fruits,
              vegetables, and spices, processed under strict quality control and
              meeting international food safety standards.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="overflow-hidden rounded-2xl border border-gray-100 transition-shadow hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {product.desc}
                  </p>
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-medium text-accent hover:text-accent-dark">
                      View Specifications →
                    </summary>
                    <div className="mt-3 divide-y divide-gray-100">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 text-sm">
                          <span className="text-gray-500">{key}</span>
                          <span className="font-medium text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <p className="text-sm font-medium text-gray-700">Applications</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {product.uses.map((use) => (
                          <span
                            key={use}
                            className="border border-gray-200 px-2 py-0.5 text-xs text-gray-500"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-100 bg-white p-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Product Catalog
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-500">
              Explore our dehydrated products, packaging options and export
              solutions.
            </p>
            <a
              href="/catalog.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              <Download size={16} />
              DOWNLOAD PDF
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Need a Custom Quote?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-gray-400">
            Get in touch with our team for product inquiries, samples, and export
            solutions tailored to your needs.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
