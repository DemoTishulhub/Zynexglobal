import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zynex Global for product inquiries, quotations, and partnership opportunities. Based in Ghaziabad, India.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            GET IN TOUCH
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-500">
            Have a question about our products or want to place an order? Reach
            out to our team and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Get in Touch
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-500">
                We&apos;re here to help with any inquiries about our products,
                pricing, or export solutions.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Location</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      Address : G-08 Govindpuram, Ghaziabad , UP 201013 , India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Phone / Fax</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      <a href="tel:+917983006995" className="block hover:text-gray-900">+(91) 7983006995</a>
                      <a href="tel:+919625289043" className="block hover:text-gray-900">+(91) 9625289043</a>
                      <span className="block">/ +(91) 7668275436</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">E-mail</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      <a href="mailto:admin@zynexglobal.in" className="hover:text-gray-900">
                        admin@zynexglobal.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-xl border border-gray-100">
                <iframe
                  title="Zynex Global Location - Ghaziabad, India"
                  src="https://maps.google.com/maps?q=Govindpuram+Ghaziabad+Uttar+Pradesh+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8">
              <h2 className="text-xl font-bold tracking-tight text-gray-900">
                Quick Contact Form
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Fill out the form below and we&apos;ll respond within 24 hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
