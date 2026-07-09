import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Accordion from "@/components/Accordion";
import Carousel from "@/components/Carousel";
import {
  Leaf,
  Award,
  ShieldCheck,
  Globe,
  ExternalLink,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Zynex Global — Premium Dehydrated Fruits, Vegetables & Food Ingredients",
  description:
    "Zynex Global is a leading B2B exporter of premium dehydrated fruits, vegetables, and food ingredients from India. Trusted by buyers in UAE, UK, Germany, Netherlands, and Saudi Arabia.",
};

const valueProps = [
  {
    icon: Leaf,
    title: "Farm-Fresh Raw Materials",
    desc: "We source directly from trusted farms across India, ensuring the freshest raw materials for every batch.",
  },
  {
    icon: Award,
    title: "Premium Export Grading",
    desc: "Every product undergoes rigorous quality grading to meet international food safety and export standards.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Certified Shipments",
    desc: "ISO, FSSAI, and APEDA certified. Fully compliant with global food safety regulations and packaging standards.",
  },
  {
    icon: Globe,
    title: "Reliable Global Supply Partner",
    desc: "Consistent supply to 30+ countries with on-time delivery, flexible packaging, and dedicated account management.",
  },
];

const featuredProducts = [
  {
    name: "Dehydrated Onion Flakes",
    slug: "onion-flakes",
    desc: "White, red & pink varieties with ≤6% moisture and 24-month shelf life.",
    href: "/products#onion-flakes",
  },
  {
    name: "Dehydrated Green Chilli Flakes",
    slug: "chilli-flakes",
    desc: "Air and freeze-dried with ≥99% purity for global seasoning needs.",
    href: "/products#chilli-flakes",
  },
  {
    name: "Banana Chips",
    slug: "banana-chips",
    desc: "Dehydrated, freeze-dried, and vacuum-fried in custom packaging.",
    href: "/products#banana-chips",
  },
  {
    name: "Dehydrated Mango Slices",
    slug: "mango-slices",
    desc: "Natural yellow-golden slices, dices, chunks, strips, and powder.",
    href: "/products#mango-slices",
  },
];

const quickContact = [
  {
    href: "https://wa.me/917983006995",
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    href: "mailto:admin@zynexglobal.in",
    label: "Email",
    icon: <Mail size={20} />,
  },
  {
    href: "https://instagram.com/zynexglobal",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/company/zynexglobal",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Zynex Global has been our most reliable dehydrated onion supplier. Consistent quality, on-time delivery, and excellent communication every time.",
    name: "Mohammed Al Mansoori",
    location: "UAE",
  },
  {
    quote:
      "We import large quantities of dehydrated mango and coconut products. Zynex Global's quality grading and packaging are always top-notch.",
    name: "James Thompson",
    location: "UK",
  },
  {
    quote:
      "Professional team, competitive pricing, and products that meet EU food safety standards. Zynex is our go-to supplier from India.",
    name: "Anna Schneider",
    location: "Germany",
  },
  {
    quote:
      "Working with Zynex Global for over 3 years now. Their chilli flakes and banana chips are always fresh, consistent, and well-packed.",
    name: "Lucas Van Dijk",
    location: "Netherlands",
  },
  {
    quote:
      "From initial inquiry to delivery, the process was seamless. Great product quality and a team that truly understands export logistics.",
    name: "Faisal Al Qahtani",
    location: "Saudi Arabia",
  },
];

const faqs = [
  {
    question: "What is your quality assurance process?",
    answer:
      "Every batch undergoes multi-stage quality checks including moisture analysis, purity testing, color grading, and microbiological testing. We comply with FSSAI, APEDA, and international food safety standards to ensure every shipment meets buyer specifications.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply reach out through our contact form, email, or WhatsApp with your product requirements, quantity, and preferred packaging. Our sales team will respond within 24 hours with a detailed quotation and lead time.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We offer flexible payment terms including advance payment, letter of credit (L/C), and T/T (telegraphic transfer) for established clients. Payment terms are finalized based on order volume and buyer profile.",
  },
  {
    question: "What are your typical shipping timelines?",
    answer:
      "Standard orders are processed and shipped within 10-15 business days. Large or custom orders may take 20-30 business days. We ship via FCL and LCL sea freight as well as air cargo, depending on buyer preference and urgency.",
  },
];

const facilityImages = [
  { src: "/images/operations/facility-1.jpg", alt: "Processing facility" },
  { src: "/images/operations/facility-2.jpg", alt: "Quality control lab" },
  { src: "/images/operations/facility-3.jpg", alt: "Packaging line" },
  { src: "/images/operations/facility-4.jpg", alt: "Warehouse and logistics" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand">
        {/* TODO: replace placeholder with hero background image */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-dark to-brand" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-accent)_0%,_transparent_50%)] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Sourcing the World&apos;s Finest,{" "}
              <span className="text-accent">Delivering Excellence.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Premium dehydrated fruits, vegetables, and food ingredients — exported
              from India to buyers across the globe with uncompromising quality and
              reliability.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact-us">Contact Us</Button>
              <Button variant="secondary" href="/products">
                View Products
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {quickContact.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {c.icon}
                  {c.label}
                  <ExternalLink size={12} className="opacity-50" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Delivering Premium Quality Worldwide
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-textMuted">
            From farm to shipment, every step of our process is designed to deliver
            the finest quality to your doorstep.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="rounded-lg border border-border bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <prop.icon size={24} className="text-accent" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-brand">
                {prop.title}
              </h3>
              <p className="text-sm leading-relaxed text-textMuted">{prop.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Products */}
      <Section background="surface">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Our Core Business Verticals
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-textMuted">
            Explore our flagship products trusted by buyers across 30+ countries.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <a
              key={product.slug}
              href={product.href}
              className="group rounded-lg border border-border bg-white p-6 transition-shadow hover:shadow-md"
            >
              {/* TODO: replace placeholder image */}
              <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-surface">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface to-border-light">
                  <span className="text-xs text-textMuted">Product Image</span>
                </div>
              </div>
              <h3 className="mb-2 text-base font-semibold text-brand">
                {product.name}
              </h3>
              <p className="text-sm text-textMuted">{product.desc}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/products" variant="ghost">
            View All Products
          </Button>
        </div>
      </Section>

      {/* Operations Gallery */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Our Global Operations in Action
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-textMuted">
            A glimpse into our processing facilities, quality labs, and logistics operations.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilityImages.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border border-border"
            >
              {/* TODO: replace placeholder image */}
              <div className="aspect-[4/3] bg-surface">
                <div className="flex h-full items-center justify-center">
                  <span className="text-xs text-textMuted">{img.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="surface">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Trusted by Buyers Worldwide
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-textMuted">
            Hear from our partners across the globe.
          </p>
        </div>
        <Carousel items={testimonials} />
      </Section>

      {/* FAQ */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto max-w-2xl">
          <Accordion items={faqs} />
        </div>
      </Section>

      {/* Bottom CTA */}
      <section className="bg-brand py-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            LET&apos;S GROW YOUR BUSINESS GLOBALLY
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Get in touch today to discuss your requirements, request samples, or
            download our product catalog.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact-us">Request Catalog</Button>
            <Button variant="ghost" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
              <a href="/catalog.pdf" download className="flex items-center gap-2">
                Download PDF Catalog
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
