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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-sm font-bold text-brand-500 uppercase tracking-[0.2em] mb-4 block">Our Workflow</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground tracking-tight">Seamless Manufacturing Process</h2>
                    <div className="h-1.5 w-20 bg-brand-500 mx-auto mt-6 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-start gap-6 p-10 rounded-[2.5rem] bg-brand-50 border border-brand-100/50 relative group hover:bg-white hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500"
                        >
                            <div className="flex-shrink-0 relative">
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-500 shadow-xl shadow-brand-500/5 group-hover:bg-brand-500 group-hover:text-white transition-all">
                                    <step.icon size={32} />
                                </div>
                                <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center border-4 border-white shadow-lg">
                                    {i + 1}
                                </span>
                            </div>
                            
                            <div className="flex flex-col">
                                <h4 className="text-xl font-bold font-display text-foreground mb-3 transition-colors group-hover:text-brand-500">
                                    {step.label}
                                </h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
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
