import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body-font",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zynexglobal.vercel.app"),
  title: {
    default: "Zynex Global — Premium Dehydrated Fruits, Vegetables & Food Ingredients",
    template: "%s | Zynex Global",
  },
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-text antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
