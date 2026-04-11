"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "./NavLink";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const FooterCTA = () => {
  return (
    <>
      <section className="relative py-24 md:py-40 bg-white overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-500/5 blur-[120px] rounded-full" />

        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-industrial-950 rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden shadow-2xl border border-white/5"
          >
            {/* Animated Glow in background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-emerald-500/10 opacity-50" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-brand-500 text-sm font-black uppercase tracking-[0.5em] mb-10 block">Grow Your Business</span>
              <h2 className="text-4xl md:text-8xl font-black text-white mb-10 font-display tracking-tighter leading-[0.9]">
                PARTNER WITH <br /> US TODAY.
              </h2>
              <p className="text-white text-xl font-bold leading-relaxed mb-16 max-w-xl mx-auto opacity-80">
                Join the factories and businesses that use our high-quality recycled plastic materials for their products.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <a
                  href="https://wa.me/917770096944"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 bg-white text-industrial-950 px-12 py-6 rounded-2xl font-black text-xl transition-all hover:bg-brand-50 active:scale-95 shadow-2xl overflow-hidden"
                >
                  <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
                  WHATSAPP DIRECT
                </a>
                <NavLink
                  href="#sell-scrap"
                  className="inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all backdrop-blur-3xl border border-white/10 active:scale-95 leading-none"
                >
                  GET A QUOTE <ArrowRight size={24} />
                </NavLink>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-industrial-950 border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
        {/* Subtle background branding */}
        <div className="absolute top-0 right-0 pointer-events-none opacity-[0.02] select-none text-[25rem] font-black font-display translate-x-1/4 -translate-y-1/4 text-white">NK</div>

        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-24">
            {/* Column 1: Brand */}
            <div className="space-y-8">
              <Link href="#" className="flex items-center gap-4 group transition-all hover:opacity-80">
                <Image src={logo} alt="NK Plastics" className="h-12 w-auto drop-shadow-2xl" />
              </Link>
              <p className="text-white/80 text-lg leading-relaxed font-medium">
                Sustaining the industrial future through high-purity polymer recycling and precision granules since 2005.
              </p>
              <p className="text-brand-500 font-black text-xs uppercase tracking-widest">Quality You Can Trust.</p>
            </div>

            {/* Column 2: Sitemap */}
            <div className="space-y-8">
              <h5 className="font-black text-white uppercase tracking-[0.3em] text-[10px]">Navigation</h5>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-4">
                {["Home", "Services", "About", "Products", "Process"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-brand-500 transition-all font-bold text-sm group flex items-center gap-2">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal & Statutory */}
            <div className="space-y-8">
              <h5 className="font-black text-white uppercase tracking-[0.3em] text-[10px]">Legal Details</h5>
              <div className="space-y-6">
                <div>
                  <p className="text-white/50 text-[9px] font-black uppercase tracking-widest mb-1">GSTIN Identifier</p>
                  <p className="text-white/90 font-black tracking-widest text-sm uppercase">27ALWPK8344G1ZH</p>
                </div>
                <div>
                  <p className="text-white/50 text-[9px] font-black uppercase tracking-widest mb-1">PAN Number</p>
                  <p className="text-white/90 font-black tracking-widest text-sm uppercase">ALWPK8344G</p>
                </div>
                <div>
                  <p className="text-white/50 text-[9px] font-black uppercase tracking-widest mb-1">State Code</p>
                  <p className="text-white/90 font-black tracking-widest text-sm">27 (Maharashtra)</p>
                </div>
              </div>
            </div>

            {/* Column 4: Contact & Access */}
            <div className="space-y-8">
              <h5 className="font-black text-white uppercase tracking-[0.3em] text-[10px]">Headquarters</h5>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-brand-500 shrink-0 mt-1" size={18} />
                  <p className="text-white text-sm font-medium leading-relaxed">
                    Plot No. C.79/D.101 M.I.D.Supa, <br />
                    Dist. Ahmednagar, MH 414301
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-brand-500 shrink-0" size={18} />
                  <p className="text-white font-bold text-sm">+91 7770096944</p>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-brand-500 shrink-0" size={18} />
                  <p className="text-white font-bold text-sm">contact@nkplastic.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">
                © {new Date().getFullYear()} NK PLASTICS. ALL RIGHTS RESERVED.
              </p>

            </div>
            <Link href="https://nerdtech.in" target="_blank" className="text-[9px] text-white font-black uppercase tracking-[0.3em] hover:text-brand-500 transition-colors">
              designed with ❤️ by nerdtech
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCTA;
