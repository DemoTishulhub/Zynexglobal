import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Zynex Global privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-brand sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-textMuted">Last updated: July 2025</p>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-textMuted">
          <div>
            <h2 className="text-lg font-semibold text-text">
              1. Information We Collect
            </h2>
            <p className="mt-2">
              When you fill out our contact form, we collect your name, email
              address, and message content. We do not collect any payment
              information through this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              2. How We Use Your Information
            </h2>
            <p className="mt-2">
              We use the information you provide to respond to your inquiries,
              provide product quotations, and improve our services. We do not
              sell, rent, or share your personal information with third parties
              for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              3. Data Storage &amp; Security
            </h2>
            <p className="mt-2">
              Your data is stored securely and protected using industry-standard
              encryption and access controls. We take reasonable measures to
              safeguard your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              4. Cookies
            </h2>
            <p className="mt-2">
              This website may use essential cookies for basic functionality. We
              do not use tracking cookies for advertising purposes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              5. Third-Party Links
            </h2>
            <p className="mt-2">
              Our website may contain links to third-party sites (e.g., WhatsApp,
              Instagram, LinkedIn). We are not responsible for the privacy
              practices of those external websites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              6. Your Rights
            </h2>
            <p className="mt-2">
              You may request to view, modify, or delete your personal data at any
              time by contacting us at{" "}
              <a
                href="mailto:admin@zynexglobal.in"
                className="font-medium text-accent hover:underline"
              >
                admin@zynexglobal.in
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              7. Contact
            </h2>
            <p className="mt-2">
              For any privacy-related concerns, please contact us at:
              <br />
              <strong className="text-text">Zynex Global</strong>
              <br />
              G-08 Govindpuram, Ghaziabad, UP 201013, India
              <br />
              Email:{" "}
              <a
                href="mailto:admin@zynexglobal.in"
                className="font-medium text-accent hover:underline"
              >
                admin@zynexglobal.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
