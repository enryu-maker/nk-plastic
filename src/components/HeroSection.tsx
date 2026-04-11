"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Shield, Zap } from "lucide-react";
import Image from "next/image";
import heroImg from "@/assets/factory-actual.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90dvh] md:min-h-dvh flex items-center overflow-hidden bg-industrial-950">
      {/* Background image container with more complex overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={heroImg}
          alt="NK Plastics Granules Manufacturing Factory in Ahmednagar, Maharashtra"
          className="w-full h-full object-cover opacity-60"
          fill
          priority
        />
        {/* Dynamic Multi-layered Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-950 via-industrial-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-industrial-950/20" />

        {/* Animated Glow Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl px-5 py-2.5 mb-10 shadow-2xl"
          >
            <div className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
            <span className="text-xs font-black text-white uppercase tracking-[0.3em]">Premium Industrial Plastic Recycling</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tighter text-white mb-10 font-display"
          >
            RECYCLED <span className="text-brand-500 drop-shadow-2xl">LDPE & HDPE</span> PLASTIC GRANULES
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white leading-relaxed font-medium border-l-4 border-brand-500 pl-8 drop-shadow-lg"
            >
              We provide high-purity recycled plastic for industrial manufacturing.
              Helping businesses build a more sustainable future since 2005.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <a
                href="#products"
                className="group relative inline-flex items-center gap-3 bg-brand-500 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-brand-400 transition-all shadow-2xl glow-brand active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  OUR PRODUCTS <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>

              <a
                href="#sell-scrap"
                className="inline-flex items-center gap-4 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all border border-white/20 backdrop-blur-xl"
              >
                CONTACT US
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-32 flex flex-wrap gap-12"
          >
            {[
              { icon: Shield, label: "Quality Assurance", value: "Verified Testing" },
              { icon: Zap, label: "Storage Capacity", value: "2000 Tons/Month" },
              { icon: Leaf, label: "Environment", value: "100% Recyclable" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all border border-white/10">
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/70">{stat.label}</p>
                  <p className="text-white font-bold">{stat.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
