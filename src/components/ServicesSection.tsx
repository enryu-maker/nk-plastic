"use client";

import { motion } from "framer-motion";
import { Recycle, Settings, TrendingUp, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Recycle,
    title: "Granules Production",
    desc: "We produce high-purity recycled Low Density and High Density plastic granules for industrial manufacturing.",
    color: "brand"
  },
  {
    icon: Settings,
    title: "Plastic Grinding",
    desc: "Advanced grinding for various polymers including PP, HDPE, and ABS, processed to meet exact factory specifications.",
    color: "brand"
  },
  {
    icon: TrendingUp,
    title: "Plastic Trading",
    desc: "We purchase high-quality grinding material, utilize our storehouses for sorting, and supply it to customers globally.",
    color: "brand"
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 w-12 bg-brand-500" />
            <span className="text-sm font-black text-brand-500 uppercase tracking-[0.4em]">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black font-display text-foreground tracking-tighter leading-none mb-6">
            PLASTIC <br /> RECYCLING.
          </h2>
          <p className="text-foreground/80 text-xl max-w-xl font-bold leading-relaxed">
            We collect, sort, and process plastic waste into high-quality materials for factories and businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-12 rounded-[3.5rem] bg-brand-50/50 border border-brand-100 hover:border-brand-500/50 hover:bg-white hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-[1.5rem] bg-white border border-brand-100 flex items-center justify-center text-brand-500 mb-8 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 shadow-xl shadow-brand-500/5 group-hover:glow-brand">
                <service.icon size={40} />
              </div>
              <h3 className="text-2xl font-black mb-6 font-display text-foreground uppercase tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
