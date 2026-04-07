"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, ShieldCheck, Users, Clock, Box } from "lucide-react";

const reasons = [
  { text: "Consistent Quality", icon: ShieldCheck },
  { text: "Bulk Supply", icon: Box },
  { text: "Strong Network", icon: Users },
  { text: "Best Pricing", icon: Zap },
  { text: "Fast Delivery", icon: Clock },
  { text: "Pure Granules", icon: Award },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-10">
        <div className="bg-green-900 rounded-5xl p-12 md:p-20 text-center relative overflow-hidden shadow-3xl">
          {/* Decorative radial gradient */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent)] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-sm block mb-4">Why Partner With Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industy-Leading Standards
            </h2>
            <p className="text-white/60 mb-16 max-w-xl mx-auto text-lg leading-relaxed">
              We combine years of expertise with cutting-edge technology to deliver the most reliable recycled plastic materials in the market.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto relative z-10">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-4 bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <reason.icon size={24} />
                </div>
                <span className="text-md md:text-lg font-bold text-white">{reason.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
