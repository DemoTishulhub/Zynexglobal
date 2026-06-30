import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zynex Global — Next-Gen Digital Solutions",
  description:
    "Zynex Global delivers world-class digital products, from web and mobile apps to AI-driven platforms. We build for scale, performance, and impact.",
  openGraph: {
    title: "Zynex Global",
    description:
      "Next-gen digital solutions — web, mobile, AI, and cloud.",
    url: "https://zynexglobal.vercel.app",
    siteName: "Zynex Global",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
