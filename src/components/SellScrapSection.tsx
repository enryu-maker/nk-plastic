"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Package, CheckCircle2 } from "lucide-react";

const SellScrapSection = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="sell-scrap" className="section-padding bg-industrial-950 relative overflow-hidden">
            {/* Background Branding Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                <div className="absolute -bottom-24 -left-24 text-[20rem] font-black text-white/5 select-none font-display italic">NK</div>
            </div>

            <div className="container mx-auto px-6 md:px-10 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-0.5 w-12 bg-brand-500" />
                            <span className="text-sm font-black text-brand-500 uppercase tracking-[0.5em]">Sell Your Plastic Waste</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black font-display text-white tracking-tighter leading-[0.9] mb-10">
                            GET PAID FOR <br /> <span className="text-brand-500">YOUR PLASTIC</span>.
                        </h2>
                        <p className="text-white text-xl font-bold leading-relaxed mb-12 border-l-2 border-brand-500 pl-8">
                            Turn your factory's plastic waste into money. We offer great prices and pick it up for you.
                        </p>
                        
                        <div className="space-y-8">
                            {[
                                "Competitive Bulk Market Pricing",
                                "Zero-Hassle Logistics Support",
                                "Immediate Settlement Terms",
                                "Certified Sustainable Processing"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all border border-white/10">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="text-white/40 group-hover:text-white font-bold transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Glow behind form */}
                        <div className="absolute inset-0 bg-brand-500/20 blur-[150px] rounded-full" />
                        
                        <form
                            onSubmit={handleSubmit}
                            className="bg-industrial-900/40 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-10 md:p-14 space-y-8 shadow-3xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 blur-3xl -z-10" />
                            
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight">Quick Inquiry</h3>
                                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Receive a quote within 24 hours</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] ml-1">Type of Material</label>
                                    <div className="relative group">
                                        <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-white focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all appearance-none cursor-pointer group-hover:bg-white/10">
                                           <option className="bg-industrial-900">Select material...</option>
                                           <option className="bg-industrial-900">LDPE Granules/Scrap</option>
                                           <option className="bg-industrial-900">HDPE Granules/Scrap</option>
                                           <option className="bg-industrial-900">PP Granules/Scrap</option>
                                           <option className="bg-industrial-900">ABS Grinding</option>
                                           <option className="bg-industrial-900">Trading Inquiry</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 group-hover:text-brand-500 transition-colors">
                                           <Package size={16} />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] ml-1">Volume Required (Tons)</label>
                                    <input
                                        type="number"
                                        placeholder="Quantity"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-white focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all hover:bg-white/10 placeholder:text-white/20"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 <div className="space-y-3">
                                     <label className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] ml-1">Trading Location</label>
                                     <input
                                         type="text"
                                         placeholder="Your City"
                                         className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-white focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all hover:bg-white/10 placeholder:text-white/20"
                                     />
                                 </div>
                                 <div className="space-y-3">
                                     <label className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] ml-1">Contact Number</label>
                                     <input
                                         type="tel"
                                         placeholder="+91"
                                         className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-white focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all hover:bg-white/10 placeholder:text-white/20"
                                     />
                                 </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-500 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-4 hover:bg-brand-400 transition-all shadow-xl hover:shadow-brand-500/20 active:scale-[0.98] mt-4"
                            >
                               {submitted ? (
                                   <div className="flex items-center gap-3 italic tracking-widest">
                                       SUBMITTED <CheckCircle2 size={24} className="animate-pulse" />
                                   </div>
                               ) : (
                                   <>
                                       REQUEST QUOTE <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
