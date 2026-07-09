import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import {
  Search,
  Factory,
  CheckCircle2,
  Truck,
  Check,
  Globe,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zynex Global — a leading B2B exporter of premium dehydrated fruits, vegetables, and food ingredients based in Ghaziabad, India.",
};

const processSteps = [
  {
    icon: Search,
    title: "Sourcing",
    desc: "We partner with trusted farms across India to source the freshest, highest-quality raw materials for dehydration and processing.",
  },
  {
    icon: Factory,
    title: "Processing",
    desc: "State-of-the-art dehydration and processing facilities ensure consistent quality, texture, and flavor in every batch.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Control",
    desc: "Multi-stage quality checks including moisture analysis, purity testing, color grading, and microbiological screening.",
  },
  {
    icon: Truck,
    title: "Export",
    desc: "Secure, certified shipments with flexible logistics — sea freight, air cargo, and custom packaging to any destination.",
  },
];

const certifications = [
  {
    name: "FSSAI",
    desc: "Food Safety & Standards Authority of India — ensuring every product meets national food safety regulations.",
  },
  {
    name: "APEDA",
    desc: "Agricultural & Processed Food Products Export Development Authority — registered exporter of agro products.",
  },
  {
    name: "ISO 9001:2015",
    desc: "International Organization for Standardization — certified quality management systems for consistent excellence.",
  },
];

const checklist = [
  "24/7 Business Support & Dedicated Account Management",
  "Secure Transportation & Food-Grade Packaging",
  "World Wide Most Effective Export Network",
  "Easy And Quick Quality Problem Analysis",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-dark py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="mb-2 inline-block text-sm font-bold uppercase tracking-widest text-accent">
            About Zynex Global
          </span>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Who We Are
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            Zynex Global is a leading B2B exporter of premium dehydrated fruits,
            vegetables, and food ingredients, bridging India&apos;s finest
            agricultural produce with international buyers who demand
            uncompromising quality.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src="/images/operations/facility-2.svg"
                alt="Zynex Global Operations"
                className="w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-xl bg-accent px-6 py-4 shadow-xl sm:right-8">
              <Globe size={32} className="text-white" />
              <div>
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-xs text-white/70">Countries Served</div>
              </div>
            </div>
          </div>

          <div>
            {/* TODO: client to provide final company story */}
            <SectionTitle
              label="Our Story"
              title="Modern And Trusted Food Export Company"
              center={false}
            />
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-textMuted sm:text-base">
              <p>
                Zynex Global is a leading B2B exporter of premium dehydrated
                fruits, vegetables, and food ingredients, headquartered in
                Ghaziabad, Uttar Pradesh, India. Our mission is to bridge the gap
                between India&apos;s finest agricultural produce and international
                buyers who demand uncompromising quality, safety, and reliability.
              </p>
              <p>
                With a strong foundation in ethical sourcing, advanced processing
                technology, and a deep understanding of global food safety
                standards, we have built lasting partnerships with buyers across
                the UAE, UK, Germany, Netherlands, Saudi Arabia, and 25+ other
                countries.
              </p>
              <p>
                From dehydrated onion flakes to tropical mango slices, every
                product that leaves our facility carries the Zynex Global promise:
                freshness preserved, quality delivered.
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check size={13} className="text-accent" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section background="surface">
        <SectionTitle
          label="How We Work"
          title="Our Process"
          description="From sourcing to shipment, every step of our process is designed to deliver the finest quality to your doorstep."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="group rounded-xl border border-border bg-white p-7 transition-all hover:shadow-lg"
            >
              <div className="mb-1 text-xs font-bold text-accent">
                STEP {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand/5 transition-colors group-hover:bg-accent">
                <step.icon size={26} className="text-brand transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-base font-bold text-brand">{step.title}</h3>
              <p className="text-sm leading-relaxed text-textMuted">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          label="Certifications"
          title="Certified & Trusted Worldwide"
          description="Our operations are backed by internationally recognized certifications, ensuring every shipment meets the strictest food safety and quality standards."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-xl border border-border bg-white p-7"
            >
              <h3 className="text-xl font-bold text-brand">{cert.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-textMuted">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/certificates">
            View All Certificates
            <ChevronRight size={15} />
          </Button>
        </div>
      </Section>

      <section className="bg-brand-dark py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/60 sm:text-base">
            Let&apos;s discuss how Zynex Global can be your trusted supply
            partner for premium dehydrated food products.
          </p>
          <div className="mt-8">
            <Button href="/contact-us">
              Get in Touch
              <ChevronRight size={15} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
