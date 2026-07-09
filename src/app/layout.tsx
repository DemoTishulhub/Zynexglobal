import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zynexglobal.vercel.app"),
  title: {
    default: "Zynex Global — Premium Dehydrated Fruits, Vegetables & Food Ingredients",
    template: "%s | Zynex Global",
  },
  description:
    "Zynex Global delivers premium dehydrated fruits, vegetables, and food ingredients to global markets with a commitment to quality, reliability, and international export standards.",
  openGraph: {
    title: "Zynex Global — Premium Dehydrated Food Exporter from India",
    description:
      "Sourcing the world's finest dehydrated fruits, vegetables, and food ingredients. Delivering excellence worldwide.",
    url: "https://zynexglobal.vercel.app",
    siteName: "Zynex Global",
    type: "website",
    locale: "en_US",
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
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
