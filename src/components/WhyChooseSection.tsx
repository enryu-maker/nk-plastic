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
    <section className="section-padding bg-brand-50/50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-500/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold text-brand-500 uppercase tracking-[0.2em] mb-4 block">Our Advantage</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground tracking-tight">Industry-Leading Standards</h2>
          <div className="h-1.5 w-20 bg-brand-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-white border border-brand-100 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                <reason.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-foreground font-display transition-colors group-hover:text-brand-500">
                {reason.text}
              </h4>
              <p className="text-muted-foreground text-sm mt-4 leading-relaxed font-medium">
                Ensuring excellence and reliability in every batch of recycled polymer materials we produce.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
