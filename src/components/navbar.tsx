"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Ciri-ciri", href: "#ciri-ciri" },
    { label: "Pembayaran", href: "#pembayaran" },
    { label: "Kesgunaan", href: "#kesgunaan" },
    { label: "Blog", href: "https://hub.lamanrasmi.com", target: "_blank" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-deep-teal/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-coral rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold font-display">L</span>
          </div>
          <span className="font-display font-semibold text-deep-teal text-lg tracking-tight">
            LamanRasmi
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              className="text-sm text-charcoal-light hover:text-coral transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://panel.lamanrasmi.com/register"
            target="_blank"
            className="bg-deep-teal text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-deep-teal-700 transition-colors font-body"
          >
            Mula Sekarang
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-deep-teal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-b border-deep-teal/10 mx-4 rounded-xl p-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              className="text-charcoal hover:text-coral py-2 text-sm font-body"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://panel.lamanrasmi.com/register"
            target="_blank"
            className="bg-deep-teal text-white text-sm font-medium px-4 py-2.5 rounded-lg text-center hover:bg-deep-teal-700 transition-colors font-body"
          >
            Mula Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}
