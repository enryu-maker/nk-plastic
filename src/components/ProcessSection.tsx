"use client";

import { motion } from "framer-motion";
import { Truck, Layers, Settings, Circle, ShieldCheck, PackageCheck, ArrowRight } from "lucide-react";

const steps = [
    { icon: Truck, label: "Scrap Collection", desc: "Sourcing industrial waste" },
    { icon: Layers, label: "Smart Sorting", desc: "Polymer categorization" },
    { icon: Settings, label: "Precision Grinding", desc: "Micron-level processing" },
    { icon: Circle, label: "Granulation", desc: "High-purity extrusion" },
    { icon: ShieldCheck, label: "Quality Control", desc: "Batch testing" },
    { icon: PackageCheck, label: "Rapid Delivery", desc: "Nationwide logistics" },
];

const ProcessSection = () => {
    return (
        <section id="process" className="section-padding bg-brand-50/30">
            <div className="container mx-auto px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-bold text-brand-500 uppercase tracking-[0.2em] mb-4 block">Workflow</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Our Manufacturing Process</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        We maintain complete transparency and rigorous quality checks at every stage of the recycling lifecycle.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
                    {/* Background line for desktop */}
                    <div className="absolute top-10 left-0 w-full h-0.5 bg-brand-100 hidden lg:block z-0" />
                    
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center relative z-10"
                        >
                            <div className="relative group">
                                <div className="w-20 h-20 rounded-3xl bg-white shadow-xl shadow-brand-500/5 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 border border-brand-100/50">
                                    <step.icon size={32} />
                                </div>
                                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center shadow-lg border-4 border-white">
                                    {i + 1}
                                </span>
                            </div>
                            <h4 className="text-lg font-bold text-brand-950 mb-2">{step.label}</h4>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{step.desc}</p>
                            
                            {/* Desktop connector arrow */}
                            {i < steps.length - 1 && (
                               <div className="absolute top-10 -right-4 text-brand-100 hidden lg:block">
                                  <ArrowRight size={16} />
                               </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
