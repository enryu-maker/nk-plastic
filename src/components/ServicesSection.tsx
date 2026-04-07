"use client";

import { motion } from "framer-motion";
import { Recycle, Settings, TrendingUp, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Recycle,
    title: "Eco-Friendly Recycling",
    desc: "We transform post-industrial and post-consumer plastic scrap into high-purity granules, reducing environmental impact.",
    color: "brand"
  },
  {
    icon: Settings,
    title: "Precision Grinding",
    desc: "Advanced multi-polymer grinding for PP, HDPE, ABS, and Nylon — processed to meet your exact micron specifications.",
    color: "brand"
  },
  {
    icon: TrendingUp,
    title: "Bulk Trading",
    desc: "Reliable supply chain for recycled plastic materials with competitive pricing and consistent quality assurance.",
    color: "brand"
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-linear-to-b from-white to-brand-50/30">
      <div className="container mx-auto px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold text-green-800 uppercase tracking-[0.2em] mb-4 block">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            End-to-end plastic recycling solutions — from scrap collection to finished granules.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative bg-white rounded-3xl p-10 border border-border/60 hover:border-brand-500/30 transition-all hover:shadow-2xl hover:shadow-brand-500/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-8 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                <s.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">{s.desc}</p>
              <div className="h-1 w-12 bg-brand-50 rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
