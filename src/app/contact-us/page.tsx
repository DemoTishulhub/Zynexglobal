import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zynex Global for product inquiries, quotations, and partnership opportunities. Based in Ghaziabad, India.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["G-08 Govindpuram, Ghaziabad,", "Uttar Pradesh 201013, India"],
  },
  {
    icon: Phone,
    title: "Phone",
    links: [
      { label: "+91 7983006995", href: "tel:+917983006995" },
      { label: "+91 9625289043", href: "tel:+919625289043" },
      { label: "+91 7668275436", href: "tel:+917668275436" },
    ],
  },
  {
    icon: Mail,
    title: "Email",
    links: [{ label: "admin@zynexglobal.in", href: "mailto:admin@zynexglobal.in" }],
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Get in Touch
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-brand sm:text-4xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-textMuted">
            Have a question about our products or want to place an order? Reach
            out to our team and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 border border-border bg-white p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border">
                    <info.icon size={18} className="text-brand" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand">{info.title}</h3>
                    {info.lines && (
                      <div className="mt-1 space-y-0.5 text-sm leading-relaxed text-textMuted">
                        {info.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    )}
                    {info.links && (
                      <div className="mt-1 space-y-0.5 text-sm leading-relaxed">
                        {info.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="block text-textMuted transition-colors hover:text-brand"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  title="Zynex Global Location - Ghaziabad, India"
                  src="https://maps.google.com/maps?q=G-08+Govindpuram,Ghaziabad,Uttar+Pradesh+201013,India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="border border-border bg-white p-6">
              <h2 className="mb-6 text-lg font-semibold text-brand">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
