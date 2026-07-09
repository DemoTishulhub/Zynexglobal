"use client";

import { useState } from "react";
import Section from "@/components/Section";
import ProductModal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";

interface Product {
  name: string;
  slug: string;
  shortDesc: string;
  varieties: string;
  dryingMethods: string;
  moisture: string;
  purity: string;
  color: string;
  shelfLife: string;
  packaging: string;
  uses: string[];
}

const products: Product[] = [
  {
    name: "Onion Flakes",
    slug: "onion-flakes",
    shortDesc: "White, red & pink varieties with ≤6% moisture and 24-month shelf life.",
    varieties: "White, Red, Pink",
    dryingMethods: "Air Dried, Vacuum Dried, Freeze Dried",
    moisture: "≤6%",
    purity: "≥99%",
    color: "White to cream",
    shelfLife: "24 months",
    packaging: "5kg, 10kg, 25kg food-grade bags",
    uses: ["Soups", "Seasonings", "Sauces", "Instant Foods"],
  },
  {
    name: "Dehydrated Mango",
    slug: "mango-slices",
    shortDesc: "Slices, dices, chunks, strips & powder with natural yellow-golden color.",
    varieties: "Slices, Dices, Chunks, Strips, Powder",
    dryingMethods: "Air Dried, Vacuum Dried, Freeze Dried",
    moisture: "8–12%",
    purity: "100% natural",
    color: "Natural yellow-golden",
    shelfLife: "12–24 months",
    packaging: "5kg, 10kg, 25kg food-grade bags",
    uses: ["Bakery", "Cereals", "Snacks", "Smoothies", "Confectionery"],
  },
  {
    name: "Banana Chips",
    slug: "banana-chips",
    shortDesc: "Dehydrated, freeze-dried, fried & vacuum-fried in custom packaging.",
    varieties: "Dehydrated Slices, Freeze Dried, Fried, Vacuum Fried",
    dryingMethods: "Dehydrated, Freeze Dried, Fried, Vacuum Fried",
    moisture: "3–5%",
    purity: "100% natural",
    color: "Light yellow-golden",
    shelfLife: "Up to 12 months",
    packaging: "Bulk / Custom export packaging",
    uses: ["Snacks", "Trail Mix", "Retail", "Food Processing"],
  },
  {
    name: "Green Chilly Flakes",
    slug: "chilli-flakes",
    shortDesc: "Flakes & crushed varieties with ≥99% purity and ≤6% moisture.",
    varieties: "Flakes, Crushed",
    dryingMethods: "Air Dried, Freeze Dried",
    moisture: "≤6%",
    purity: "≥99%",
    color: "Natural green",
    shelfLife: "24 months",
    packaging: "5kg, 10kg, 25kg food-grade bags",
    uses: ["Seasonings", "Spice Blends", "Sauces", "Pickles", "Ready Meals"],
  },
  {
    name: "Coconut Chips",
    slug: "coconut-chips",
    shortDesc: "Chips, shreds & flakes with ≤3% moisture and natural white color.",
    varieties: "Chips, Shreds, Flakes",
    dryingMethods: "Sun Dried, Air Dried, Toasted",
    moisture: "≤3%",
    purity: "100% natural",
    color: "Natural white–light golden",
    shelfLife: "12 months",
    packaging: "5kg, 10kg, 25kg vacuum / food-grade bags",
    uses: ["Bakery", "Confectionery", "Snacks", "Cereals", "Desserts"],
  },
  {
    name: "Dehydrated Tomato",
    slug: "tomato-flakes",
    shortDesc: "Flakes, granules & powder with ≤5% moisture and deep red color.",
    varieties: "Flakes, Granules, Powder",
    dryingMethods: "Air Dried, Freeze Dried",
    moisture: "≤5%",
    purity: "100% natural",
    color: "Deep red–bright red",
    shelfLife: "18–24 months",
    packaging: "5kg, 10kg, 25kg food-grade bags",
    uses: ["Soups", "Sauces", "Seasonings", "Instant Noodles", "Spice Blends"],
  },
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [inquiryProduct, setInquiryProduct] = useState<string | undefined>(undefined);

  return (
    <>
      {/* Intro */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Our Products</h1>
          <p className="mt-4 text-textMuted leading-relaxed">
            Zynex Global exports a wide range of premium dehydrated fruits,
            vegetables, and food ingredients from India. Every product is processed
            under strict quality control, meeting international food safety
            standards and customized to buyer specifications. Click on any product
            to view full specifications and send an inquiry.
          </p>
        </div>
      </Section>

      {/* Product Grid */}
      <Section background="surface">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.slug}
              id={product.slug}
              className="rounded-lg border border-border bg-white transition-shadow hover:shadow-md"
            >
              {/* TODO: replace placeholder image */}
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg bg-surface">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface to-border-light">
                  <span className="text-xs text-textMuted">{product.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-brand">{product.name}</h2>
                <p className="mt-2 text-sm text-textMuted">{product.shortDesc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.uses.slice(0, 3).map((use) => (
                    <span
                      key={use}
                      className="rounded-full bg-surface px-3 py-1 text-xs text-textMuted"
                    >
                      {use}
                    </span>
                  ))}
                  {product.uses.length > 3 && (
                    <span className="rounded-full bg-surface px-3 py-1 text-xs text-textMuted">
                      +{product.uses.length - 3} more
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-4 w-full rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-light active:scale-[0.98]"
                >
                  View Specifications
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Catalog Download */}
      <Section>
        <div className="mx-auto max-w-2xl rounded-lg border border-border bg-white p-8 text-center">
          <h2 className="text-xl font-bold text-brand">Product Catalog</h2>
          <p className="mt-2 text-sm text-textMuted">
            Download our complete product catalog with detailed specifications,
            pricing ranges, and packaging options.
          </p>
          {/* TODO: client must supply the actual catalog.pdf file — place it in /public/catalog.pdf */}
          <a
            href="/catalog.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark active:scale-[0.98]"
          >
            Download PDF Catalog
          </a>
        </div>
      </Section>

      {/* Inquiry Form */}
      <Section background="surface">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-2 text-center text-2xl font-bold text-brand">
            {inquiryProduct ? `Inquiry: ${inquiryProduct}` : "Send a Product Inquiry"}
          </h2>
          <p className="mb-6 text-center text-sm text-textMuted">
            Fill out the form below and our team will respond within 24 hours.
          </p>
          <ContactForm prefillProduct={inquiryProduct} />
        </div>
      </Section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquiry={(name) => {
          setSelectedProduct(null);
          setInquiryProduct(name);
          setTimeout(() => {
            document
              .getElementById("inquiry-form-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
      />
    </>
  );
}
