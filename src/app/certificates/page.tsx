import type { Metadata } from "next";
import Section from "@/components/Section";
import Lightbox from "@/components/Lightbox";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "View Zynex Global's certifications including FSSAI, APEDA, ISO 9001:2015, and other food safety and export quality certificates.",
};

const certificates = [
  {
    src: "/images/certificates/cert-1.svg",
    alt: "FSSAI Certificate",
    caption:
      "FSSAI — Food Safety & Standards Authority of India",
  },
  {
    src: "/images/certificates/cert-2.svg",
    alt: "APEDA Certificate",
    caption:
      "APEDA — Agricultural & Processed Food Products Export Development Authority",
  },
  {
    src: "/images/certificates/cert-3.svg",
    alt: "ISO 9001:2015 Certificate",
    caption: "ISO 9001:2015 — Quality Management System",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Our Certificates
          </h1>
          <p className="mt-4 text-textMuted">
            Zynex Global operates under strict quality and safety standards. Below
            are our key certifications that demonstrate our commitment to food
            safety, export compliance, and quality excellence.
          </p>
        </div>
      </Section>

      <Section background="surface">
        <Lightbox images={certificates} />
        <p className="mt-6 text-center text-xs text-textMuted">
          Click any certificate to view it in full size.
        </p>
      </Section>
    </>
  );
}
