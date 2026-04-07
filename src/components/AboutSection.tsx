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
        <section id="about" className="section-padding bg-white overflow-hidden">
            <div className="container mx-auto px-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-4/3 rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image
                                src={aboutImg}
                                alt="NK Plastic recycling plant"
                                className="w-full h-full object-cover grayscale-0 transition-all duration-700"
                                fill
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-green-800 text-white rounded-2xl px-5 py-3 shadow-xl hidden md:block">
                            <p className="text-4xl font-bold">10+</p>
                            <p className="text-sm opacity-90 uppercase tracking-widest font-semibold mt-1">Years of Trust</p>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-800/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-bold text-green-800 uppercase tracking-[0.2em] mb-4 block">About Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8 leading-tight">
                            Pioneers in Industrial <br /> Plastic Recycling
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                            NK Plastic stands as a beacon of sustainability in India's industrial landscape. We specialize in the high-precision conversion of polymer waste into premium-grade granules, powering the next generation of manufacturing.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                            Our proprietary recycling process ensures that every gram of material meets the highest global standards for purity and performance.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center sm:text-left bg-gray-100 p-4 rounded-2xl">
                                    <p className="text-3xl md:text-4xl font-bold text-green-800">{stat.value}</p>
                                    <p className="text-xs md:text-sm text-black font-bold uppercase tracking-wider mt-2">{stat.label}</p>
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
