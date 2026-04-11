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
        <section id="process" className="section-padding bg-white relative">
            <div className="container mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-0.5 w-12 bg-brand-500" />
                        <span className="text-sm font-black text-brand-500 uppercase tracking-[0.4em]">How We Work</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black font-display text-foreground tracking-tighter leading-none mb-6">
                        OUR SIMPLE <br /> PROCESS.
                    </h2>
                    <p className="text-muted-foreground text-xl max-w-xl font-bold leading-relaxed">
                        We collect, sort, and process plastic waste into clean, reusable materials in for industrial use.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-start gap-10 p-12 rounded-[3.5rem] bg-brand-50/50 border border-brand-100 relative group hover:bg-white hover:shadow-3xl hover:shadow-brand-500/10 transition-all duration-500"
                        >
                            <div className="flex-shrink-0 relative">
                                <div className="w-24 h-24 rounded-[2rem] bg-white flex items-center justify-center text-brand-500 shadow-xl shadow-brand-500/5 group-hover:bg-brand-500 group-hover:text-white group-hover:glow-brand transition-all duration-500 border border-brand-100/50">
                                    <step.icon size={44} strokeWidth={1.5} />
                                </div>
                                <span className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-foreground text-white text-sm font-black flex items-center justify-center border-4 border-white shadow-2xl">
                                    0{i + 1}
                                </span>
                            </div>
                            
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-black font-display text-foreground mb-4 transition-colors group-hover:text-brand-500 uppercase tracking-tight">
                                    {step.label}
                                </h3>
                                <p className="text-foreground/70 text-lg font-bold leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
