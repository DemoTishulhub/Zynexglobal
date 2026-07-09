"use client";

import { useState } from "react";
import Section from "@/components/Section";
import ProductModal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";

interface Product {
  name: string;
  slug: string;
  image: string;
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
    image: "/images/products/onion-flakes.svg",
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
    image: "/images/products/mango-slices.svg",
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
    image: "/images/products/banana-chips.svg",
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
    image: "/images/products/chilli-flakes.svg",
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
    image: "/images/products/coconut-chips.svg",
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
    image: "/images/products/tomato-flakes.svg",
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
      <Section>
        <SectionTitle
          label="Our Products"
          title="Premium Dehydrated Products"
          description="Zynex Global exports a wide range of premium dehydrated fruits, vegetables, and food ingredients from India. Every product is processed under strict quality control, meeting international food safety standards and customized to buyer specifications."
        />
      </Section>

      <Section background="surface">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.slug}
              id={product.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-brand transition-colors group-hover:text-accent">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-textMuted">
                  {product.shortDesc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.uses.slice(0, 3).map((use) => (
                    <span
                      key={use}
                      className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-textMuted"
                    >
                      {use}
                    </span>
                  ))}
                  {product.uses.length > 3 && (
                    <span className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-textMuted">
                      +{product.uses.length - 3} more
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-6 w-full rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-light hover:shadow-md active:scale-[0.98]"
                >
                  View Specifications
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-white p-8 text-center shadow-sm">
          <span className="mb-2 inline-block text-sm font-bold uppercase tracking-widest text-accent">
            Resources
          </span>
          <h2 className="text-2xl font-bold text-brand">Product Catalog</h2>
          <p className="mt-3 text-sm leading-relaxed text-textMuted">
            Download our complete product catalog with detailed specifications,
            pricing ranges, and packaging options for all our premium dehydrated
            products.
          </p>
          <a
            href="/catalog.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-accent-dark hover:shadow-md active:scale-[0.98]"
          >
            Download Catalog
          </a>
        </div>
      </Section>

      <Section background="surface" id="inquiry-form-section">
        <div className="mx-auto max-w-2xl">
          <SectionTitle
            label="Get in Touch"
            title={inquiryProduct ? `Inquiry: ${inquiryProduct}` : "Send a Product Inquiry"}
            description="Fill out the form below and our team will respond within 24 hours with detailed information on pricing, minimum order quantities, and availability."
          />
          <div className="mt-8">
            <ContactForm prefillProduct={inquiryProduct} />
          </div>
        </div>
      </Section>

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
