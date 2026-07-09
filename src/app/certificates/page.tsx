import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "View Zynex Global's certifications including FSSAI, APEDA, ISO 9001:2015, and other food safety and export quality certificates.",
};

// TODO: Replace with exact certificate images from zynexglobal.in
const certificates = [
  { name: "FSSAI", desc: "Food Safety & Standards Authority of India" },
  { name: "APEDA", desc: "Agricultural & Processed Food Products Export Development Authority" },
  { name: "ISO 9001:2015", desc: "Quality Management System" },
  { name: "Spice Board", desc: "Spices Board India Registration" },
];

export default function CertificatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            GET STARTED
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Certifications &amp; Compliance
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-500">
            Our certifications reflect our dedication to maintaining strict
            quality control, regulatory compliance, and responsible export
            practices, ensuring that our products meet global industry standards
            and customer expectations.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center rounded-2xl border border-gray-100 p-8 text-center transition-shadow hover:shadow-md"
              >
                {/* TODO: Replace with exact certificate image from zynexglobal.in */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-50">
                  <FileCheck size={32} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-gray-900">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Need Documentation or Samples?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-gray-400">
            Request full certificate copies, product specifications, or samples —
            our team is ready to assist with your compliance requirements.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
