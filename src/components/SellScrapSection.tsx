"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, MapPin, Package } from "lucide-react";

const SellScrapSection = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="sell-scrap" className="section-padding bg-linear-to-b from-white to-brand-50/50">
            <div className="container mx-auto px-10 max-w-4xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                   <motion.div
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                   >
                        <span className="text-sm font-bold text-brand-500 uppercase tracking-[0.2em] mb-4 block">Buyback Program</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Sell Your Plastic Scrap to Us</h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            We offer the best market rates for high-quality industrial plastic scrap. Partner with us for a sustainable and profitable waste management solution.
                        </p>
                       
                       <div className="space-y-6">
                          <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                                 <Phone size={20} />
                              </div>
                              <div>
                                 <p className="text-sm font-bold text-brand-950">Quick Callback</p>
                                 <p className="text-sm text-muted-foreground">Within 24 business hours</p>
                              </div>
                          </div>
                          <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                                 <Package size={20} />
                              </div>
                              <div>
                                 <p className="text-sm font-bold text-brand-950">Bulk Purchasing</p>
                                 <p className="text-sm text-muted-foreground">No quantity too large</p>
                              </div>
                          </div>
                       </div>
                   </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="bg-white rounded-3xl border border-brand-100 shadow-2xl shadow-brand-500/5 p-10 space-y-6"
                    >
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-brand-950 uppercase tracking-wider">Material Type</label>
                            <select className="w-full bg-brand-50/50 border border-brand-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all appearance-none cursor-pointer">
                               <option value="">Select material...</option>
                               <option>LDPE</option>
                               <option>HDPE</option>
                               <option>PP</option>
                               <option>ABS</option>
                               <option>Nylon</option>
                               <option>PET</option>
                               <option>Other</option>
                           </select>
                       </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                 <label className="block text-sm font-bold text-brand-950 uppercase tracking-wider">Quantity (kg)</label>
                                 <input
                                     type="number"
                                     placeholder="e.g. 1000"
                                     className="w-full bg-brand-50/50 border border-brand-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                                 />
                             </div>
                             <div className="space-y-2">
                                 <label className="block text-sm font-bold text-brand-950 uppercase tracking-wider">Location</label>
                                 <input
                                     type="text"
                                     placeholder="Your City"
                                     className="w-full bg-brand-50/50 border border-brand-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                                 />
                             </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-brand-950 uppercase tracking-wider">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full bg-brand-50/50 border border-brand-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-brand-500 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20 active:scale-95"
                        >
                           {submitted ? "Message Sent! ✓" : (
                               <>
                                   Submit Request <Send size={18} />
                               </>
                           )}
                       </button>
                   </motion.form>
                </div>
            </div>
        </section>
    );
};

export default SellScrapSection;
