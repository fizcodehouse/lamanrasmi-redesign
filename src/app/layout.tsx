import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { UseCases } from "@/components/use-cases";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "LamanRasmi — Percuma Selamanya | Hosting & Sub Domain Percuma Malaysia",
  description:
    "LamanRasmi.com — Penyedia hosting percuma nombor satu Malaysia sejak 2015. Domain percuma, 1GB ruang, PHP8+, MySQL, tanpa iklan. Mulakan laman web anda hari ini!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ms" className="scroll-smooth">
      <body className="antialiased bg-cream text-charcoal font-body">
        {children}
      </body>
    </html>
  );
}
