import { NextResponse } from "next/server";
import { initDB, insertSubmission } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "admin@zynexglobal.in";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ALLOWED_ORIGINS = ["https://zynexglobal.vercel.app", "http://localhost:3000"];

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\0/g, "")
    .trim();
}

function validateEmail(email: string): boolean {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
}

function containsSpam(text: string): boolean {
  const spamPatterns = [
    /viagra/i,
    /casino/i,
    /lottery/i,
    /bitcoin.*invest/i,
    /crypto.*invest/i,
    /make money.*fast/i,
    /http[s]?:\/\//i,
    /\[url/i,
    /\[link/i,
  ];
  return spamPatterns.some((p) => p.test(text));
}

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin") || "";
    if (ALLOWED_ORIGINS.length > 0 && !ALLOWED_ORIGINS.includes(origin) && !origin.includes("localhost")) {
      return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
    }

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

    if (firstName.length > 100 || lastName.length > 100 || email.length > 200 || subject.length > 300 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input exceeds maximum allowed length." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (containsSpam(subject) || containsSpam(message) || containsSpam(email)) {
      return NextResponse.json({ success: true });
    }

    const sanitizedData = {
      firstName: sanitize(firstName),
      lastName: sanitize(lastName),
      email: sanitize(email),
      subject: sanitize(subject),
      message: sanitize(message),
    };

    try {
      await initDB();
      await insertSubmission({
        first_name: sanitizedData.firstName,
        last_name: sanitizedData.lastName,
        email: sanitizedData.email,
        subject: sanitizedData.subject,
        message: sanitizedData.message,
        product_interest: body.product_interest ? sanitize(body.product_interest) : undefined,
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
            subject: `[Website] ${sanitizedData.subject}`,
            html: `
              <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #111827;">New Contact Form Submission</h2>
                <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 16px 0;" />
                <p><strong>Name:</strong> ${sanitizedData.firstName} ${sanitizedData.lastName}</p>
                <p><strong>Email:</strong> ${sanitizedData.email}</p>
                <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
                ${body.product_interest ? `<p><strong>Product Interest:</strong> ${sanitize(body.product_interest)}</p>` : ""}
                <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 16px 0;" />
                <p><strong>Message:</strong></p>
                <p>${sanitizedData.message.replace(/\n/g, "<br />")}</p>
              </div>
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
