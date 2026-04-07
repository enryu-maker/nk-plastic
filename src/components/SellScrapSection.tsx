"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Package } from "lucide-react";

const SellScrapSection = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="sell-scrap" className="section-padding bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-500/10 rounded-full blur-[100px] -translate-y-1/2 -ml-36 -z-10" />
            
            <div className="container mx-auto px-6 md:px-10 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                   <motion.div
                       initial={{ opacity: 0, x: -30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                   >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-1.5 w-8 bg-brand-500 rounded-full"></div>
                            <span className="text-sm font-bold text-brand-500 uppercase tracking-[0.4em]">Buyback Division</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground tracking-tight mb-8">
                            Industrial Scrap <br />
                            <span className="text-brand-500">Procurement Program</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12 leading-relaxed font-medium">
                            We offer the best market rates for high-quality industrial plastic scrap. Partner with us for a sustainable and profitable waste management solution.
                        </p>
                       
                       <div className="grid sm:grid-cols-2 gap-8 mb-10">
                          <div className="p-6 rounded-3xl bg-brand-50 border border-brand-100">
                              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-500 shadow-sm mb-4">
                                 <Phone size={20} />
                              </div>
                              <p className="text-sm font-bold text-foreground font-display">Quick Callback</p>
                              <p className="text-xs text-muted-foreground mt-1">Within 24 business hours</p>
                          </div>
                          <div className="p-6 rounded-3xl bg-brand-50 border border-brand-100">
                              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-500 shadow-sm mb-4">
                                 <Package size={20} />
                              </div>
                              <p className="text-sm font-bold text-foreground font-display">Bulk Purchasing</p>
                              <p className="text-xs text-muted-foreground mt-1">No quantity too large</p>
                          </div>
                       </div>
                   </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative glow behind form */}
                        <div className="absolute inset-0 bg-brand-500/10 blur-3xl rounded-[3rem] -z-10" />
                        
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-[2.5rem] border border-brand-100 shadow-2xl p-8 md:p-12 space-y-8"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="block text-xs font-bold text-foreground uppercase tracking-widest ml-1">Material Type</label>
                                    <div className="relative">
                                        <select className="w-full bg-brand-50/50 border border-brand-100 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all appearance-none cursor-pointer">
                                           <option value="">Select polymer...</option>
                                           <option>LDPE</option>
                                           <option>HDPE</option>
                                           <option>PP</option>
                                           <option>ABS</option>
                                           <option>Other</option>
                                       </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                                           <Send size={14} className="rotate-90" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-xs font-bold text-foreground uppercase tracking-widest ml-1">Quantity (kg)</label>
                                    <input
                                        type="number"
                                        placeholder="e.g. 1000"
                                        className="w-full bg-brand-50/50 border border-brand-100 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                 <div className="space-y-3">
                                     <label className="block text-xs font-bold text-foreground uppercase tracking-widest ml-1">Location</label>
                                     <input
                                         type="text"
                                         placeholder="Mumbai, etc."
                                         className="w-full bg-brand-50/50 border border-brand-100 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                                     />
                                 </div>
                                 <div className="space-y-3">
                                     <label className="block text-xs font-bold text-foreground uppercase tracking-widest ml-1">Mobile Number</label>
                                     <input
                                         type="tel"
                                         placeholder="+91 XXXXX XXXXX"
                                         className="w-full bg-brand-50/50 border border-brand-100 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                                     />
                                 </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-500 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/20 active:scale-95"
                            >
                               {submitted ? (
                                   <div className="flex items-center gap-2">
                                       Request Sent <Send size={20} className="animate-bounce" />
                                   </div>
                               ) : (
                                   <>
                                       Submit Procurement Request
                                   </>
                               )}
                           </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SellScrapSection;
