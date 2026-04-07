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
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold text-brand-500 uppercase tracking-[0.2em] mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-display tracking-tight">Industrial Manufacturing Solutions</h2>
          <div className="h-1.5 w-20 bg-brand-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white border border-brand-100 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
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
