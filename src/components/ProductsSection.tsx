"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";
import Image from "next/image";
import ldpeGranulesImg from "@/assets/ldpe-granules.png";
import hdpeGranulesImg from "@/assets/hdpe-granules.png";
import ppGranulesImg from "@/assets/pp-granules.png";
import ppGrindingImg from "@/assets/pp-grinding.png";
import hdpeGrindingImg from "@/assets/hdpe-grinding.png";
import absGrindingImg from "@/assets/abs-grinding.png";

const tabs = ["Granules", "Grinding"] as const;

const granuleProducts = [
  { name: "LDPE Granules", desc: "Premium low-density polyethylene granules, perfect for flexible industrial packaging and films.", image: ldpeGranulesImg },
  { name: "HDPE Granules", desc: "Industrial-strength high-density polyethylene for durable piping, bottles, and storage containers.", image: hdpeGranulesImg },
  { name: "PP Granules", desc: "Versatile polypropylene granules designed for automotive engineering and textile manufacturing.", image: ppGranulesImg },
];

const grindingProducts = [
  { name: "PP Grinding", desc: "Efficiently processed polypropylene grinding, ideal for high-volume injection molding applications.", image: ppGrindingImg },
  { name: "HDPE Grinding", desc: "Treated high-density grinding material, optimized for recycled pipe and bin manufacturing.", image: hdpeGrindingImg },
  { name: "ABS Grinding", desc: "Precision ABS grinding solutions for automotive components and electronic enclosures.", image: absGrindingImg },
];

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Granules");
  const products = activeTab === "Granules" ? granuleProducts : grindingProducts;

  return (
    <section id="products" className="section-padding bg-linear-to-b from-brand-50/30 to-white">
      <div className="container mx-auto px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-brand-500 uppercase tracking-[0.2em] mb-4 block">Product Catalog</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-brand-950">Precision Polymer Range</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Engineered for excellence. Our recycled plastic materials are processed to meet the highest industry standards for manufacturing performance.
          </p>
        </motion.div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white shadow-xl shadow-brand-500/5 rounded-2xl p-1.5 border border-brand-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 md:px-10 py-3.5 rounded-xl text-md font-bold transition-all duration-300 ${activeTab === tab
                    ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20"
                    : "text-muted-foreground hover:text-brand-500 hover:bg-brand-50"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-10"
          >
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-border/60 hover:border-brand-500/30 transition-all hover:shadow-2xl hover:shadow-brand-500/10"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    fill
                  />
                  <div className="absolute top-4 left-4">
                     <span className="bg-brand-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        In Stock
                     </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-brand-950 group-hover:text-brand-500 transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground text-md mb-8 leading-relaxed line-clamp-2">{product.desc}</p>
                  <a
                    href="#sell-scrap"
                    className="inline-flex items-center gap-3 font-bold text-brand-500 hover:text-brand-900 transition-all group/link"
                  >
                    Request Quote 
                    <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductsSection;
