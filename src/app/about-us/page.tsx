import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import {
  Search,
  Factory,
  CheckCircle2,
  Truck,
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
    desc: "We partner with trusted farms across India to source the freshest, highest-quality raw materials.",
  },
  {
    icon: Factory,
    title: "Processing",
    desc: "State-of-the-art dehydration and processing facilities ensure consistent quality in every batch.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Control",
    desc: "Multi-stage quality checks including moisture analysis, purity testing, and microbiological screening.",
  },
  {
    icon: Truck,
    title: "Export",
    desc: "Secure, certified shipments with flexible logistics — sea freight, air cargo, and custom packaging.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Company Story */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">About Zynex Global</h1>
          <div className="mt-6 text-textMuted leading-relaxed space-y-4">
            <p>
              {/* TODO: client to provide final company story */}
              Zynex Global is a leading B2B exporter of premium dehydrated fruits,
              vegetables, and food ingredients, headquartered in Ghaziabad, Uttar
              Pradesh, India. Our mission is to bridge the gap between India&apos;s
              finest agricultural produce and international buyers who demand
              uncompromising quality, safety, and reliability.
            </p>
            <p>
              {/* TODO: client to provide final company story */}
              With a strong foundation in ethical sourcing, advanced processing
              technology, and a deep understanding of global food safety standards,
              we have built lasting partnerships with buyers across the UAE, UK,
              Germany, Netherlands, Saudi Arabia, and 25+ other countries.
            </p>
            <p>
              {/* TODO: client to provide final company story */}
              From dehydrated onion flakes to tropical mango slices, every product
              that leaves our facility carries the Zynex Global promise: freshness
              preserved, quality delivered.
            </p>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section background="surface">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Our Process
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-textMuted">
            From sourcing to shipment, here&apos;s how we ensure every product
            meets the highest standards.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative rounded-lg border border-border bg-white p-6">
              <div className="mb-1 text-xs font-bold text-accent">
                STEP {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <step.icon size={24} className="text-accent" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-brand">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-textMuted">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications / Trust */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Certifications & Trust
          </h2>
          <p className="mt-4 text-textMuted">
            Our operations are backed by internationally recognized certifications,
            ensuring every shipment meets the strictest food safety and quality
            standards.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-white p-6">
              <div className="text-2xl font-bold text-brand">FSSAI</div>
              <p className="mt-1 text-sm text-textMuted">Food Safety & Standards Authority of India</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <div className="text-2xl font-bold text-brand">APEDA</div>
              <p className="mt-1 text-sm text-textMuted">Agricultural & Processed Food Products Export Development Authority</p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6">
              <div className="text-2xl font-bold text-brand">ISO</div>
              <p className="mt-1 text-sm text-textMuted">International Organization for Standardization</p>
            </div>
          </div>
          <div className="mt-6">
            <Button href="/certificates">View All Certificates</Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-brand py-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Let&apos;s discuss how Zynex Global can be your trusted supply partner.
          </p>
          <div className="mt-8">
            <Button href="/contact-us">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
