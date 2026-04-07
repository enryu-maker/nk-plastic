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
        <section id="products" className="section-padding bg-brand-50/30">
            <div className="container mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-bold text-brand-500 uppercase tracking-[0.2em] mb-4 block">Industrial Catalog</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 font-display tracking-tight text-foreground">Premium Polymer Products</h2>
                    <div className="h-1.5 w-20 bg-brand-500 mx-auto mt-6 rounded-full" />
                </motion.div>

                <div className="flex justify-center mb-16">
                    <div className="flex p-1.5 bg-white rounded-2xl shadow-xl shadow-brand-500/5 border border-brand-100">
                        <button
                            onClick={() => setActiveTab("granules")}
                            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                                activeTab === "granules"
                                    ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20"
                                    : "text-muted-foreground hover:text-brand-500"
                            }`}
                        >
                            Polymer Granules
                        </button>
                        <button
                            onClick={() => setActiveTab("grinding")}
                            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                                activeTab === "grinding"
                                    ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20"
                                    : "text-muted-foreground hover:text-brand-500"
                            }`}
                        >
                            Industrial Grinding
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products[activeTab].map((product, i) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white rounded-[2.5rem] overflow-hidden border border-brand-100/50 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                   <span className="text-white text-sm font-bold uppercase tracking-widest">View Specifications</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h4 className="text-2xl font-bold text-foreground mb-3 font-display">{product.name}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {product.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
