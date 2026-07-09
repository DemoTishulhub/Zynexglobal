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
      <section className="bg-brand py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="mb-2 inline-block text-sm font-bold uppercase tracking-widest text-accent">
            Get in Touch
          </span>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            Have a question about our products or want to place an order? Reach
            out to our team and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 rounded-xl border border-border bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <info.icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand">{info.title}</h3>
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
                            className="block text-textMuted transition-colors hover:text-accent"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  title="Zynex Global Location - Ghaziabad, India"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.45!3d28.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQwJzEyLjAiTiA3N8KwMjcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-brand">
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
