import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Accordion from "@/components/Accordion";
import Carousel from "@/components/Carousel";
import Counter from "@/components/Counter";
import {
  Leaf,
  Award,
  ShieldCheck,
  Globe,
  Check,
  ArrowRight,
  Package,
  Globe2,
  Users,
  Truck,
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
    desc: "We source directly from trusted farms across India, ensuring the freshest raw materials for every batch we process.",
  },
  {
    icon: Award,
    title: "Premium Export Grading",
    desc: "Every product undergoes rigorous quality grading to meet international food safety and export standards.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Shipments",
    desc: "ISO, FSSAI, and APEDA certified. Compliant with global food safety regulations and packaging standards.",
  },
  {
    icon: Globe,
    title: "Global Supply Partner",
    desc: "Consistent supply to 30+ countries with on-time delivery and dedicated account management.",
  },
];

const featuredProducts = [
  {
    name: "Dehydrated Onion Flakes",
    slug: "onion-flakes",
    desc: "White, red & pink varieties with ≤6% moisture and 24-month shelf life.",
    image: "/images/products/onion-flakes.jpg",
    href: "/products#onion-flakes",
  },
  {
    name: "Dehydrated Green Chilli Flakes",
    slug: "chilli-flakes",
    desc: "Air and freeze-dried with ≥99% purity for global seasoning needs.",
    image: "/images/products/chilli-flakes.jpg",
    href: "/products#chilli-flakes",
  },
  {
    name: "Banana Chips",
    slug: "banana-chips",
    desc: "Dehydrated, freeze-dried, and vacuum-fried in custom packaging.",
    image: "/images/products/banana-chips.jpg",
    href: "/products#banana-chips",
  },
  {
    name: "Dehydrated Mango Slices",
    slug: "mango-slices",
    desc: "Natural yellow-golden slices, dices, chunks, strips, and powder.",
    image: "/images/products/mango-slices.jpg",
    href: "/products#mango-slices",
  },
];

const aboutChecklist = [
  "24/7 Business Support & Dedicated Account Management",
  "Secure Transportation & Food-Grade Packaging",
  "Worldwide Export Network Across 30+ Countries",
  "Easy And Quick Quality Problem Resolution",
];

const quickContact = [
  { href: "https://wa.me/917983006995", label: "WhatsApp", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
  { href: "mailto:admin@zynexglobal.in", label: "Email", icon: <Mail size={16} /> },
  { href: "https://instagram.com/zynexglobal", label: "Instagram", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { href: "https://linkedin.com/company/zynexglobal", label: "LinkedIn", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
];

const testimonials = [
  { quote: "Zynex Global has been our most reliable dehydrated onion supplier. Consistent quality, on-time delivery, and excellent communication every time.", name: "Mohammed Al Mansoori", location: "UAE" },
  { quote: "We import large quantities of dehydrated mango and coconut products. Zynex Global's quality grading and packaging are always top-notch.", name: "James Thompson", location: "UK" },
  { quote: "Professional team, competitive pricing, and products that meet EU food safety standards. Zynex is our go-to supplier from India.", name: "Anna Schneider", location: "Germany" },
  { quote: "Working with Zynex Global for over 3 years now. Their chilli flakes and banana chips are always fresh, consistent, and well-packed.", name: "Lucas Van Dijk", location: "Netherlands" },
  { quote: "From initial inquiry to delivery, the process was seamless. Great product quality and a team that truly understands export logistics.", name: "Faisal Al Qahtani", location: "Saudi Arabia" },
];

const faqs = [
  { question: "What is your quality assurance process?", answer: "Every batch undergoes multi-stage quality checks including moisture analysis, purity testing, color grading, and microbiological testing. We comply with FSSAI, APEDA, and international food safety standards." },
  { question: "How do I place an order?", answer: "Simply reach out through our contact form, email, or WhatsApp with your product requirements, quantity, and preferred packaging. Our sales team responds within 24 hours." },
  { question: "What are your payment terms?", answer: "We offer flexible payment terms including advance payment, letter of credit (L/C), and T/T (telegraphic transfer). Terms are finalized based on order volume and buyer profile." },
  { question: "What are your shipping timelines?", answer: "Standard orders ship within 10-15 business days. Large or custom orders take 20-30 business days. We ship via sea freight and air cargo." },
];

const facilityImages = [
  { src: "/images/operations/facility-1.jpg", alt: "Food processing facility with industrial dehydration equipment" },
  { src: "/images/operations/facility-2.jpg", alt: "Quality control laboratory with testing instruments" },
  { src: "/images/operations/facility-3.jpg", alt: "Automated packaging line for export products" },
  { src: "/images/operations/facility-4.jpg", alt: "Warehouse and logistics center for global shipping" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Welcome to Zynex Global
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Sourcing the World&apos;s Finest,{" "}
              <span className="text-accent">Delivering Excellence.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">
              Premium dehydrated fruits, vegetables, and food ingredients — exported from India to buyers
              across the globe with uncompromising quality.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                View Products
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {quickContact.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:border-white/20 hover:text-white"
                >
                  {c.icon}
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                label="About Us"
                title="Modern And Trusted Food Export Company"
                center={false}
              />
              <p className="mt-4 text-base leading-relaxed text-textMuted max-w-2xl">
                Zynex Global is a leading B2B exporter of premium dehydrated fruits, vegetables, and food
                ingredients from India. We bridge the gap between India&apos;s finest agricultural produce
                and international buyers who demand uncompromising quality.
              </p>
              <ul className="mt-6 space-y-3">
                {aboutChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-text">
                    <Check size={16} className="shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about-us"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-light"
              >
                More About Us
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden rounded-lg border border-border">
                <img src="/images/operations/facility-1.jpg" alt="Processing facility" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-lg border border-border">
                <img src="/images/operations/facility-2.jpg" alt="Quality control lab" className="aspect-[4/3] w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Why Choose Us"
            title="We Are Trusted For Our Quality"
            description="From farm to shipment, every step is designed to deliver the finest quality."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop) => (
              <div key={prop.title} className="border border-border bg-white p-6 transition-shadow hover:shadow-sm">
                <prop.icon size={24} className="text-brand" />
                <h3 className="mt-3 text-sm font-semibold text-brand">{prop.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-textMuted">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Stats */}
      <section className="border-y border-border py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <Counter end={500} suffix="+" label="Delivered Shipments" icon={<Package size={28} />} />
            <Counter end={30} suffix="+" label="Countries Covered" icon={<Globe2 size={28} />} />
            <Counter end={120} suffix="+" label="Happy Clients" icon={<Users size={28} />} />
            <Counter end={2500} suffix="+" label="Tons of Goods" icon={<Truck size={28} />} />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Our Products"
            title="Explore Our Core Products"
            description="Discover our flagship products trusted by buyers across 30+ countries."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link key={product.slug} href={product.href} className="group overflow-hidden rounded-lg border border-border bg-white transition-shadow hover:shadow-sm">
                <div className="aspect-[4/3] overflow-hidden bg-surface">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-brand">{product.name}</h3>
                  <p className="mt-1.5 text-sm text-textMuted leading-relaxed">{product.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-surface">
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Operations Gallery */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Our Operations"
            title="Our Facilities"
            description="A glimpse into our processing, quality labs, and logistics."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilityImages.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg border border-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Are You Looking For a Reliable Export Partner?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/80">
            Get in touch to discuss requirements, request samples, or download our product catalog.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark">
              Make an Inquiry
            </Link>
            <a href="/catalog.pdf" download className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10">
              Download Catalog
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Testimonials"
            title="What Our Clients Say"
            description="Hear from our trusted partners across the globe."
          />
          <div className="mt-12">
            <Carousel items={testimonials} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle label="FAQ" title="Frequently Asked Questions" />
          <div className="mx-auto mt-10 max-w-2xl">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
