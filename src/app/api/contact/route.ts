import { NextResponse } from "next/server";
import { initDB, insertSubmission } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "admin@zynexglobal.in";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, email, subject, message, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (firstName.length > 100 || lastName.length > 100 || email.length > 200 || subject.length > 300 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input exceeds maximum allowed length." },
        { status: 400 }
      );
    }

    try {
      await initDB();
      await insertSubmission({
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        product_interest: body.product_interest || undefined,
      });
    } catch (dbError) {
      console.error("Database error:", dbError);
    }

    if (RESEND_API_KEY && RESEND_API_KEY !== "your_resend_api_key_here") {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Zynex Global Website <onboarding@resend.dev>",
            to: [CONTACT_EMAIL],
            subject: `Contact Form: ${subject}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${sanitize(firstName)} ${sanitize(lastName)}</p>
              <p><strong>Email:</strong> ${sanitize(email)}</p>
              <p><strong>Subject:</strong> ${sanitize(subject)}</p>
              <p><strong>Message:</strong></p>
              <p>${sanitize(message)}</p>
            `,
          }),
        });

        if (!resendRes.ok) {
          console.error("Resend API error:", await resendRes.text());
        }
      } catch (emailError) {
        console.error("Email send error:", emailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
