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
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[30%] h-[30%] bg-brand-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 w-12 bg-brand-500" />
            <span className="text-sm font-black text-brand-500 uppercase tracking-[0.4em]">Why Choose Us</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black font-display text-foreground tracking-tighter leading-none mb-6">
            HIGH QUALITY <br /> STANDARDS.
          </h2>
          <p className="text-muted-foreground text-xl max-w-xl font-bold leading-relaxed">
            We process plastic waste into high-quality materials that factories and businesses can rely on every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 auto-rows-[240px]">
          {/* Main Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8 row-span-2 rounded-[3.5rem] bg-brand-500 p-12 overflow-hidden relative group"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center text-white mb-8">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white font-display mb-6 leading-tight">
                  QUALITY YOU <br /> CAN TRUST.
                </h3>
                <p className="text-white text-xl max-w-lg font-bold">
                  Every batch is tested in our lab to make sure it is clean and has the perfect quality for your products.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs font-bold uppercase tracking-widest border border-white/20">Certified ISO Quality</span>
                <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs font-bold uppercase tracking-widest border border-white/20">Recycled Standards</span>
              </div>
            </div>
            {/* Animated background decoration */}
            <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 translate-x-1/2" />
          </motion.div>

          {/* Tall Secondary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 row-span-2 rounded-[3.5rem] bg-industrial-950 p-12 flex flex-col justify-between relative overflow-hidden group border border-white/10"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-brand-500 flex items-center justify-center text-white mb-8 glow-brand">
                <Zap size={32} />
              </div>
              <h3 className="text-3xl font-black text-white font-display mb-6">FAST AND <br /> LARGE ORDERS.</h3>
              <p className="text-white/80 text-lg font-bold leading-relaxed">
                Our heavy-duty machines can handle large orders of 100+ tons with very quick delivery times.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
               <div className="flex justify-between items-end">
                  <span className="text-4xl font-black text-white italic">24HRS</span>
                  <span className="text-[10px] font-black uppercase text-white/60 tracking-widest mb-2">Processing Time</span>
               </div>
            </div>
          </motion.div>

          {/* Bottom Row Cards */}
          {[
            { title: "Pure Materials", icon: Award, color: "bg-white", text: "Quality processing for clean plastic." },
            { title: "Custom Orders", icon: Box, color: "bg-white", text: "We make materials to your needs." },
            { title: "Quick Delivery", icon: Clock, color: "bg-white", text: "Fast shipping across the country." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className={`col-span-12 md:col-span-4 rounded-[2.5rem] ${item.color} p-8 border border-brand-100 flex flex-col justify-between group hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 shadow-xl shadow-brand-500/5`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all border border-brand-100">
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="text-xl font-black text-foreground font-display mb-2">{item.title}</h4>
                <p className="text-foreground/70 text-sm font-bold leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
