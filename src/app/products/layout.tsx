import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Zynex Global's range of premium dehydrated fruits, vegetables, and food ingredients — onion flakes, mango, banana chips, chilli flakes, coconut chips, and more.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
