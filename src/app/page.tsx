import Link from "next/link";
import { Leaf, Award, ShieldCheck, Globe, ArrowRight, Quote } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const qualityCards = [
  {
    icon: Leaf,
    title: "Farm-Fresh Raw Materials",
    desc: "We source carefully selected fruits, vegetables, and spices directly from trusted farms to ensure exceptional quality and consistency.",
  },
  {
    icon: Award,
    title: "Premium Export Grading",
    desc: "Every product undergoes strict quality checks and processing standards to meet global food safety requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Certified Shipments",
    desc: "Fully compliant with international trade laws for completely risk-free sourcing.",
  },
  {
    icon: Globe,
    title: "Reliable Global Supply Partner",
    desc: "From sourcing to delivery, we provide dependable export solutions with timely shipments and dedicated customer support.",
  },
];

const products = [
  {
    name: "Onion Flakes",
    desc: "White, red & pink varieties with ≤6% moisture and 24-month shelf life.",
    image: "/images/products/onion-flakes.jpg",
  },
  {
    name: "Green Chilli Flakes",
    desc: "Air and freeze-dried with ≥99% purity for global seasoning needs.",
    image: "/images/products/chilli-flakes.jpg",
  },
  {
    name: "Banana Chips",
    desc: "Dehydrated, freeze-dried, and vacuum-fried in custom packaging.",
    image: "/images/products/banana-chips.jpg",
  },
  {
    name: "Mango Slices",
    desc: "Natural yellow-golden slices, dices, chunks, strips, and powder.",
    image: "/images/products/mango-slices.jpg",
  },
];

const testimonials = [
  {
    quote: "Zynex Global has been our most reliable dehydrated onion supplier. Consistent quality, on-time delivery, and excellent communication every time.",
    name: "Mohammed Al Mansoori",
    title: "UAE",
  },
  {
    quote: "We import large quantities of dehydrated mango and coconut products. Zynex Global's quality grading and packaging are always top-notch.",
    name: "James Thompson",
    title: "UK",
  },
  {
    quote: "Professional team, competitive pricing, and products that meet EU food safety standards. Zynex is our go-to supplier from India.",
    name: "Anna Schneider",
    title: "Germany",
  },
  {
    quote: "Working with Zynex Global for over 3 years now. Their chilli flakes and banana chips are always fresh, consistent, and well-packed.",
    name: "Lucas Van Dijk",
    title: "Netherlands",
  },
  {
    quote: "From initial inquiry to delivery, the process was seamless. Great product quality and a team that truly understands export logistics.",
    name: "Faisal Al Qahtani",
    title: "Saudi Arabia",
  },
];

const faqs = [
  {
    question: "What is your quality assurance process?",
    answer: "Every batch undergoes multi-stage quality checks including moisture analysis, purity testing, color grading, and microbiological testing. We comply with FSSAI, APEDA, and international food safety standards.",
  },
  {
    question: "How do I place an order?",
    answer: "Simply reach out through our contact form, email, or WhatsApp with your product requirements, quantity, and preferred packaging. Our sales team responds within 24 hours.",
  },
  {
    question: "What are your payment terms?",
    answer: "We offer flexible payment terms including advance payment, letter of credit (L/C), and T/T (telegraphic transfer). Terms are finalized based on order volume and buyer profile.",
  },
  {
    question: "What are your shipping timelines?",
    answer: "Standard orders ship within 10-15 business days. Large or custom orders take 20-30 business days. We ship via sea freight and air cargo.",
  },
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Sourcing the World&apos;s Finest,{" "}
            <span className="text-accent">Delivering Excellence.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            Zynex Global delivers premium dehydrated fruits, vegetables, and food
            ingredients to global markets with a commitment to quality,
            reliability, and international export standards.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Delivering Premium Quality Worldwide */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Delivering Premium Quality Worldwide
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualityCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-md"
              >
                <card.icon size={28} className="text-accent" strokeWidth={1.5} />
                <h3 className="mt-5 text-base font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Business Verticals */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Products
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Business Verticals
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Supplying premium-quality dehydrated products worldwide with
              consistent quality, competitive pricing and reliable export
              solutions.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-2xl border border-gray-100 transition-shadow hover:shadow-md"
              >
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
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
            >
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Feedback */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Clients Feedback
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Hear from our trusted partners across the globe.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
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
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-12">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
