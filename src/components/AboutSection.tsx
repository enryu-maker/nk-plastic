"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "@/assets/about-factory.jpg";
import { CheckCircle2 } from "lucide-react";

const stats = [
    { value: "5,000+", label: "Tons Processed" },
    { value: "200+", label: "Active Vendors" },
    { value: "10+", label: "Years of Trust" },
];

const AboutSection = () => {
    return (
        <section id="about" className="section-padding bg-white overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-4/3 rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-500/10">
                            <Image
                                src={aboutImg}
                                alt="NK Plastic recycling plant"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                fill
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-brand-500 text-white rounded-3xl p-8 shadow-2xl shadow-brand-500/30 hidden md:block">
                            <p className="text-5xl font-bold font-display">25+</p>
                            <p className="text-[10px] opacity-90 uppercase tracking-[0.3em] font-bold mt-2">Years of Excellence</p>
                        </div>
                        {/* Modern Decorative elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-500/5 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-1.5 w-8 bg-brand-500 rounded-full"></div>
                            <span className="text-xs font-bold text-brand-500 uppercase tracking-[0.4em]">Company Profile</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8 leading-tight font-display tracking-tight text-foreground">
                            Pioneering Sustainable <br /> 
                            <span className="text-brand-500">Polymer Engineering</span>
                        </h2>
                        
                        <p className="text-muted-foreground leading-relaxed mb-8 text-lg font-medium">
                            Established in 1998, NK Plastic Industries serves as a cornerstone of the global polymer recycling infrastructure.
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed mb-12 text-md">
                            We specialize in transforming industrial polymer waste into high-performance raw materials. Our manufacturing precision ensuring consistency across all batches, powering a circular industrial economy.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="p-6 rounded-2xl bg-brand-50 border border-brand-100/50">
                                    <p className="text-3xl font-bold font-display text-brand-900">{stat.value}</p>
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] mt-2">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
