import type { Metadata } from "next";
import Section from "@/components/Section";
import Lightbox from "@/components/Lightbox";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "View Zynex Global's certifications including FSSAI, APEDA, ISO, and other food safety and export quality certificates.",
};

const certificates = [
  {
    src: "/images/certificates/cert-1.jpg",
    alt: "FSSAI Certificate",
    caption: "FSSAI — Food Safety & Standards Authority of India",
  },
  {
    src: "/images/certificates/cert-2.jpg",
    alt: "APEDA Certificate",
    caption: "APEDA — Agricultural & Processed Food Products Export Development Authority",
  },
  {
    src: "/images/certificates/cert-3.jpg",
    alt: "ISO Certificate",
    caption: "ISO — International Organization for Standardization",
  },
  // TODO: confirm certificate name with client — add more certificates as provided
  // {
  //   src: "/images/certificates/cert-4.jpg",
  //   alt: "Certificate",
  //   caption: "TODO: confirm certificate name with client",
  // },
];

export default function CertificatesPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Our Certificates</h1>
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
          {/* TODO: confirm certificate name with client — update captions as needed */}
          Click any certificate to view it in full size.
        </p>
      </Section>
    </>
  );
}
