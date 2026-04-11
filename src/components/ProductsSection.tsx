"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ldpeGranulesImg from "@/assets/ldpe-granules.png";
import hdpeGranulesImg from "@/assets/hdpe-granules.png";
import ppGranulesImg from "@/assets/pp-granules.png";
import ppGrindingImg from "@/assets/pp-grinding.png";
import hdpeGrindingImg from "@/assets/hdpe-grinding.png";
import absGrindingImg from "@/assets/abs-grinding.png";

const products = {
  granules: [
    { name: "LDPE Granules", desc: "Premium low-density polyethylene granules, perfect for flexible industrial packaging and films.", image: ldpeGranulesImg },
    { name: "HDPE Granules", desc: "Industrial-strength high-density polyethylene for durable piping, bottles, and storage containers.", image: hdpeGranulesImg },
    { name: "PP Granules", desc: "Versatile polypropylene granules designed for automotive engineering and textile manufacturing.", image: ppGranulesImg },
  ],
  grinding: [
    { name: "PP Grinding", desc: "Efficiently processed polypropylene grinding, ideal for high-volume injection molding applications.", image: ppGrindingImg },
    { name: "HDPE Grinding", desc: "Treated high-density grinding material, optimized for recycled pipe and bin manufacturing.", image: hdpeGrindingImg },
    { name: "ABS Grinding", desc: "Precision ABS grinding solutions for automotive components and electronic enclosures.", image: absGrindingImg },
  ],
};

const ProductsSection = () => {
    const [activeTab, setActiveTab] = useState<"granules" | "grinding">("granules");

    return (
        <section id="products" className="section-padding bg-industrial-950 relative overflow-hidden">
            {/* Background Branding Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -right-24 text-[20rem] font-black text-white/5 select-none font-display italic">NK</div>
            </div>

            <div className="container mx-auto px-6 md:px-10 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-0.5 w-12 bg-brand-500" />
                            <span className="text-sm font-black text-brand-500 uppercase tracking-[0.4em]">Our Products</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black font-display text-white tracking-tighter leading-none mb-8">
                            PREMIUM RECYCLED <br /> 
                            <span className="text-brand-500">POLYMERS</span>.
                        </h2>
                        <p className="text-white/90 text-xl font-bold leading-relaxed">
                            Certified industrial-grade LDPE, HDPE, and PP granules manufactured for consistency and high-performance manufacturing.
                        </p>
                    </motion.div>

                    <div className="flex p-2 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10">
                        <button
                            onClick={() => setActiveTab("granules")}
                            className={`px-10 py-5 rounded-[1.5rem] text-sm font-black uppercase tracking-widest transition-all ${
                                activeTab === "granules"
                                    ? "bg-brand-500 text-white shadow-2xl shadow-brand-500/40"
                                    : "text-white/40 hover:text-white"
                            }`}
                        >
                            Granules
                        </button>
                        <button
                            onClick={() => setActiveTab("grinding")}
                            className={`px-10 py-5 rounded-[1.5rem] text-sm font-black uppercase tracking-widest transition-all ${
                                activeTab === "grinding"
                                    ? "bg-brand-500 text-white shadow-2xl shadow-brand-500/40"
                                    : "text-white/40 hover:text-white"
                            }`}
                        >
                            Grinding
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products[activeTab].map((product, i) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative h-[600px] rounded-[3rem] overflow-hidden bg-industrial-900 border border-white/5 hover:border-brand-500/30 transition-all duration-700"
                        >
                            <Image
                                src={product.image}
                                alt={`High-Quality ${product.name} for Industrial Manufacturing - NK Plastics`}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/20 to-transparent flex flex-col justify-end p-10">
                                <span className="text-brand-500 text-xs font-black uppercase tracking-[0.3em] mb-4 drop-shadow-lg">Industrial Grade</span>
                                <h3 className="text-3xl font-black text-white mb-4 font-display italic tracking-tight uppercase">{product.name}</h3>
                                <p className="text-white/60 text-sm font-medium leading-relaxed mb-8 max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {product.desc}
                                </p>
                                <div className="h-0.5 w-0 group-hover:w-full bg-brand-500 transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
