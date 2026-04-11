"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "@/assets/factory-actual.jpg";

const stats = [
    { value: "5k+", label: "Tons Processed" },
    { value: "200+", label: "Global Vendors" },
    { value: "18+", label: "Years Excellence" },
];

const AboutSection = () => {
    return (
        <section id="about" className="section-padding bg-industrial-950 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-500/10 blur-[150px] rounded-full" />
            
            <div className="container mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-4/5 rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
                            <Image
                                src={aboutImg}
                                alt="NK Plastics Recycling Factory - Industrial Processing Facility in Maharashtra"
                                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110 opacity-80 group-hover:opacity-100"
                                fill
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 glass-dark text-white rounded-[3rem] p-10 shadow-2xl border border-white/10 hidden md:block">
                            <p className="text-7xl font-black font-display italic text-brand-500">18+</p>
                            <p className="text-xs opacity-70 uppercase tracking-[0.4em] font-black mt-4 text-white">Years of Excellence</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-0.5 w-12 bg-brand-500" />
                            <span className="text-sm font-black text-brand-500 uppercase tracking-[0.5em]">About NK Plastics</span>
                        </div>
                        
                        <h2 className="text-5xl md:text-7xl font-black mt-2 mb-10 leading-[0.9] font-display tracking-tighter text-white">
                            INDUSTRIAL PLASTIC <br /> 
                            <span className="text-brand-500">RECYCLING EXPERTS</span>.
                        </h2>
                        
                        <p className="text-white leading-relaxed mb-10 text-xl font-bold border-l-2 border-brand-500 pl-8">
                            Founded in 2005, NK Plastics helps businesses recycle plastic waste into high-quality materials.
                        </p>
                        
                        <p className="text-white/80 leading-relaxed mb-16 text-lg font-medium">
                            We specialize in the production of high-quality Low Density and High Density granules, as well as professional plastic grinding. Our trading division manages a strategic storehouse system to purchase and supply recycled materials globally.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl group hover:bg-brand-500 transition-all duration-500">
                                    <p className="text-4xl font-black font-display text-white group-hover:text-industrial-950 transition-colors">{stat.value}</p>
                                    <p className="text-[10px] text-white/40 group-hover:text-industrial-950/60 font-black uppercase tracking-[0.2em] mt-3">{stat.label}</p>
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
