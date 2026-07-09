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
  ArrowRight,
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
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            About Zynex Global
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-brand sm:text-4xl">
            Who We Are
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-textMuted">
            Zynex Global is a leading B2B exporter of premium dehydrated fruits,
            vegetables, and food ingredients, bridging India&apos;s finest
            agricultural produce with international buyers who demand
            uncompromising quality.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src="/images/operations/facility-2.jpg"
              alt="Zynex Global food processing facility"
              className="w-full object-cover"
            />
          </div>

          <div>
            {/* TODO: client to provide final company story */}
            <SectionTitle
              label="Our Story"
              title="Modern And Trusted Food Export Company"
              center={false}
            />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-textMuted">
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
                <li key={item} className="flex items-center gap-3 text-base text-text">
                  <Check size={16} className="shrink-0 text-accent" />
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
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="border border-border bg-white p-6 transition-shadow hover:shadow-sm"
            >
              <p className="text-sm font-medium text-accent">
                STEP {String(index + 1).padStart(2, "0")}
              </p>
              <step.icon size={24} className="mt-3 text-brand" />
              <h3 className="mt-3 text-sm font-semibold text-brand">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-textMuted">{step.desc}</p>
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
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="border border-border bg-white p-6"
            >
              <h3 className="text-base font-semibold text-brand">{cert.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-textMuted">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/certificates">
            View All Certificates
            <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      <section className="bg-brand py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/80">
            Let&apos;s discuss how Zynex Global can be your trusted supply
            partner for premium dehydrated food products.
          </p>
          <div className="mt-8">
            <Button href="/contact-us" className="bg-accent text-white hover:bg-accent-dark">
              Get in Touch
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
