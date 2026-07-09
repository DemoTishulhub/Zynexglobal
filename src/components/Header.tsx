"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about-us", label: "About Us" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold">
          <span className="text-brand">Zynex</span>
          <span className="text-accent2">Global</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-accent2"
                    : "text-brand-light hover:text-accent2"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact-us"
          className="hidden rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark lg:inline-flex"
        >
          GET STARTED
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-brand lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-accent2"
                      : "text-brand-light hover:text-accent2"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                GET STARTED
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
