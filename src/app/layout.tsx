import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import heroImg from "@/assets/hero-factory.jpg";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NK Plastic | Precision Polymer Solutions & Industrial Manufacturing",
  description: "Leading the industry in precision plastic injection molding, high-quality polymer compounds, and innovative manufacturing solutions for global industrial needs.",
  keywords: ["plastic manufacturing", "injection molding", "polymers", "NK Plastic", "industrial solutions", "precision molding"],
  authors: [{ name: "NK Plastic Team" }],
  openGraph: {
    title: "NK Plastic | Precision Polymer Solutions",
    description: "Leading industrial plastic manufacturing and precision injection molding services.",
    url: "https://nkplastic.com",
    siteName: "NK Plastic",
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
        {children}
      </body>
    </html>
  );
}
