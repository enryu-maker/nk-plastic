"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Shield, Zap } from "lucide-react";
import Image from "next/image";
import heroImg from "@/assets/hero-factory.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-dvh flex items-center overflow-hidden bg-background">
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="NK Plastic recycling facility"
          className="w-full h-full object-cover"
          fill
          priority
        />
        {/* Responsive Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-brand-950/50 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-8 shadow-2xl"
          >
            <Leaf size={16} className="text-emerald-400" />
            <span className="text-sm font-bold text-white uppercase tracking-[0.2em]">Sustainable Polymer Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-8 font-display"
          >
            Engineering <br />
            <span className="text-emerald-400">Precision</span> Polymers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/80 mb-12 max-w-xl leading-relaxed font-medium"
          >
            High-purity recycling and precision injection molding solutions for global industrial manufacturing. Empowering a circular economy since 1998.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-5"
          >
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-600 hover:-translate-y-1 transition-all shadow-xl shadow-brand-500/20"
            >
              Our Solutions
              <ArrowRight size={20} />
            </a>
            <a
              href="#sell-scrap"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all backdrop-blur-md border border-white/10"
            >
              Partner With Us
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 flex flex-wrap gap-10 text-white/40"
          >
            <div className="flex items-center gap-2">
              <Shield size={20} />
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">Quality Assured</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={20} />
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">High Efficiency</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
