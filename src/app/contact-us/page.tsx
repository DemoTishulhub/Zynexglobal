import type { Metadata } from "next";
import Section from "@/components/Section";
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
      {/* Contact Info */}
      <Section>
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-xl text-textMuted">
            Have a question about our products or want to place an order? Reach out
            and our team will respond within 24 hours.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold text-brand">
                Our Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-brand">Address</p>
                    <p className="text-sm text-textMuted">
                      G-08 Govindpuram, Ghaziabad, UP 201013, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-brand">Phone</p>
                    <p className="text-sm text-textMuted">
                      <a
                        href="tel:+917983006995"
                        className="transition-colors hover:text-accent"
                      >
                        +91 7983006995
                      </a>
                      {" / "}
                      <a
                        href="tel:+919625289043"
                        className="transition-colors hover:text-accent"
                      >
                        +91 9625289043
                      </a>
                      {" / "}
                      <a
                        href="tel:+917668275436"
                        className="transition-colors hover:text-accent"
                      >
                        +91 7668275436
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-brand">Email</p>
                    <a
                      href="mailto:admin@zynexglobal.in"
                      className="text-sm text-textMuted transition-colors hover:text-accent"
                    >
                      admin@zynexglobal.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                title="Zynex Global Location - Ghaziabad, India"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.45!3d28.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQwJzEyLjAiTiA3N8KwMjcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-border bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold text-brand">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
