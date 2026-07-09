"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";

interface ContactFormProps {
  prefillProduct?: string;
}

export default function ContactForm({ prefillProduct }: ContactFormProps) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: prefillProduct
      ? `Product Inquiry: ${prefillProduct}`
      : "",
    message: prefillProduct
      ? `I am interested in ${prefillProduct}. Please share more details about pricing, minimum order quantity, and availability.`
      : "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (prefillProduct && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [prefillProduct]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-green-800">
          Message Sent Successfully!
        </h3>
        <p className="mt-2 text-sm text-green-700">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-green-700 underline hover:text-green-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-text transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="honeypot"
          value={formState.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-text">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formState.firstName}
            onChange={handleChange}
            className={inputClasses}
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-text">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formState.lastName}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-text">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formState.email}
          onChange={handleChange}
          className={inputClasses}
          placeholder="john@company.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-text">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formState.subject}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Product Inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-text">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className={`resize-y ${inputClasses}`}
          placeholder="Tell us about your requirements..."
        />
      </div>

      {status === "error" && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark active:scale-[0.98] disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
