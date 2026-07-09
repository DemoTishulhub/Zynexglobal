import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zynexglobal.vercel.app"),
  title: "Zynex Global — Premium Dehydrated Fruits, Vegetables & Food Ingredients",
  description:
    "Zynex Global is a leading B2B exporter of premium dehydrated fruits, vegetables, and food ingredients from India. Trusted by buyers in UAE, UK, Germany, Netherlands, and Saudi Arabia.",
  openGraph: {
    title: "Zynex Global — Premium Dehydrated Food Exporter from India",
    description:
      "Sourcing the world's finest dehydrated fruits, vegetables, and food ingredients. Delivering excellence worldwide.",
    url: "https://zynexglobal.vercel.app",
    siteName: "Zynex Global",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zynex Global — Premium Dehydrated Food Exporter",
    description:
      "Sourcing the world's finest dehydrated fruits, vegetables, and food ingredients.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
