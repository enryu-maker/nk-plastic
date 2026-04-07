"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { NavLink } from "./NavLink";
import Link from "next/link";

const FooterCTA = () => {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-500 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 font-display tracking-tight">
                Ready to Optimize Your <br className="hidden md:block" /> Plastic Supply Chain?
              </h2>
              <p className="text-white/70 mb-12 max-w-xl mx-auto text-lg md:text-xl font-medium">
                Whether you're buying or selling, we offer the most reliable partnerships in the recycling industry.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-brand-500 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-50 hover:-translate-y-1 transition-all shadow-xl active:scale-95"
                >
                  <MessageCircle size={24} />
                  Chat on WhatsApp
                </a>
                <NavLink
                  href="#sell-scrap"
                  className="inline-flex items-center gap-3 bg-brand-950/20 hover:bg-brand-950/30 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all backdrop-blur-md border border-white/20 active:scale-95"
                >
                  Get a Quote <ArrowRight size={24} />
                </NavLink>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-brand-50/50 border-t border-brand-100 pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <Link href="#" className="flex items-center gap-2 mb-8 group">
                <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  NK
                </div>
                <span className="font-display text-2xl font-bold tracking-tight text-foreground">
                  Plastic
                </span>
              </Link>
              <p className="text-muted-foreground text-lg max-w-sm leading-relaxed font-medium">
                Leading the industry with precision-engineered recycled polymer solutions for a sustainable industrial future.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-foreground mb-8 uppercase tracking-widest text-xs">Navigation</h5>
              <ul className="space-y-4">
                {["Services", "About", "Products", "Process"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-brand-500 transition-colors font-semibold">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-foreground mb-8 uppercase tracking-widest text-xs">Contact</h5>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-500 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-all">
                    <Phone size={18} />
                  </div>
                  <span className="font-bold">+91 99999 99999</span>
                </li>
                <li className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-500 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-all">
                    <Mail size={18} />
                  </div>
                  <span className="font-bold">contact@nkplastic.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-200/50 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm text-muted-foreground font-medium">
              © {new Date().getFullYear()} NK Plastic. All rights reserved. Built with Precision.
            </p>
            <div className="flex gap-10">
              <a href="#" className="text-xs text-muted-foreground hover:text-brand-500 font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-brand-500 font-bold uppercase tracking-widest transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCTA;
