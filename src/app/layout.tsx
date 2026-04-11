import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import heroImg from "@/assets/factory-actual.jpg";

import SchemaMarkup from "@/components/SchemaMarkup";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NK Plastics | Recycled Plastic Granules (LDPE/HDPE) & Grinding Solutions",
  description: "Leading manufacturer and trader of high-purity recycled plastic granules (LDPE, HDPE) based in Ahmednagar, Maharashtra. Specialized in industrial polymer recycling, grinding, and sustainable material supply since 2005.",
  keywords: [
    "recycled plastic granules", 
    "LDPE granules manufacturer", 
    "HDPE granules production", 
    "plastic grinding services", 
    "polymer trading Maharashtra", 
    "industrial plastic recycling", 
    "NK Plastics Ahmednagar", 
    "sustainable plastic waste management"
  ],
  authors: [{ name: "NK Plastics Team" }],
  openGraph: {
    title: "NK Plastics | Premium Recycled Polymer Solutions",
    description: "High-purity recycled LDPE/HDPE granules and precision grinding services for industrial manufacturing. Join our sustainable supply chain.",
    url: "https://nkplastic.in",
    siteName: "NK Plastics",
    images: [{ url: heroImg.src }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased selection:bg-brand-500/20 selection:text-brand-950`}
      >
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
