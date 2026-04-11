"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
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
      <div className="container mx-auto mt-6 px-4 md:px-10">
        <div className="glass rounded-3xl flex items-center justify-between h-20 md:h-20 px-8 shadow-2xl shadow-brand-500/10">
          <Link href="#" className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
            <Image
              src={logo}
              alt="NK Plastics"
              className="h-10 md:h-14 w-auto drop-shadow-sm"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-black text-foreground hover:text-brand-500 transition-all relative group overflow-hidden py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            ))}
            <Link
              href="#sell-scrap"
              className="bg-brand-500 text-white px-8 py-3.5 rounded-2xl text-sm font-black hover:bg-brand-600 hover:shadow-2xl hover:shadow-brand-500/40 hover:-translate-y-1 transition-all active:scale-95"
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-3 hover:bg-brand-50 rounded-2xl transition-all"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden px-4 mt-4"
          >
            <div className="bg-white rounded-[2rem] p-8 shadow-2xl border border-white/50">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-muted-foreground hover:text-brand-500 transition-colors px-2 py-1"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#sell-scrap"
                  onClick={() => setIsOpen(false)}
                  className="bg-brand-500 text-white px-6 py-4 rounded-[1.5rem] font-black text-center shadow-xl shadow-brand-500/20 active:scale-95"
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
