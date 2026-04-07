"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import nkSeal from "@/assets/nk-seal.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#sell-scrap" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto mt-4 px-4 md:px-10">
        <div className="glass rounded-2xl md:rounded-3xl flex items-center justify-between h-16 md:h-20 px-6 shadow-xl shadow-brand-500/5">
          <Link href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              NK
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              Plastic
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground hover:text-brand-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#sell-scrap"
              className="bg-brand-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5 transition-all"
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 hover:bg-brand-50 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden px-4 mt-2"
          >
            <div className="glass rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-semibold text-muted-foreground hover:text-brand-500 transition-colors px-2 py-1"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#sell-scrap"
                  onClick={() => setIsOpen(false)}
                  className="bg-brand-500 text-white px-5 py-3 rounded-xl text-sm font-bold text-center shadow-lg shadow-brand-500/10"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
