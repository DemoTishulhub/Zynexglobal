import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Lightbox from "@/components/Lightbox";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "View Zynex Global's certifications including FSSAI, APEDA, ISO 9001:2015, and other food safety and export quality certificates.",
};

// TODO: replace with real scanned certificate images from client
const certificates = [
  {
    src: "/images/certificates/cert-1.svg",
    alt: "FSSAI Certificate",
    caption: "FSSAI — Food Safety & Standards Authority of India",
  },
  {
    src: "/images/certificates/cert-2.svg",
    alt: "APEDA Certificate",
    caption:
      "APEDA — Agricultural & Processed Food Products Export Development Authority",
  },
  {
    src: "/images/certificates/cert-3.svg",
    alt: "ISO Certificate",
    caption: "ISO 9001:2015 — Quality Management System",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Quality Assurance
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-brand sm:text-4xl">
            Our Certificates
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-textMuted">
            Zynex Global operates under strict quality and safety standards.
            Our certifications demonstrate an unwavering commitment to food
            safety, export compliance, and quality excellence.
          </p>
        </div>
      </section>

      <Section background="surface">
        <SectionTitle
          label="Certifications"
          title="Certified & Trusted Worldwide"
          description="Every shipment from Zynex Global is backed by internationally recognized certifications, ensuring the strictest food safety and quality standards are met."
        />
        <div className="mt-12">
          <Lightbox images={certificates} />
        </div>
        <p className="mt-6 text-center text-sm text-textMuted">
          Click any certificate to view it in full size.
        </p>
      </Section>

      <section className="bg-brand py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Need Documentation or Samples?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/80">
            Request full certificate copies, product specifications, or samples —
            our team is ready to assist with your compliance requirements.
          </p>
          <div className="mt-8">
            <Button href="/contact-us" className="bg-accent text-white hover:bg-accent-dark">
              Contact Us
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
