"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "./NavLink";

const FooterCTA = () => {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-900 rounded-5xl p-12 md:p-20 text-center relative overflow-hidden shadow-3xl"
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)]" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Optimize Your <br className="hidden md:block" /> Plastic Supply Chain?
              </h2>
              <p className="text-white/60 mb-12 max-w-xl mx-auto text-lg md:text-xl">
                Whether you're buying or selling, we offer the most reliable partnerships in the recycling industry.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-yellow-500 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-xl shadow-brand-500/20 active:scale-95"
                >
                  <MessageCircle size={24} />
                  Chat on WhatsApp
                </a>
                <NavLink
                  href="#sell-scrap"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all backdrop-blur-md border border-white/20 active:scale-95"
                >
                  Get a Quote <ArrowRight size={24} />
                </NavLink>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-brand-50/50 border-t border-brand-100 pt-20 pb-10">
        <div className="container mx-auto px-10">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <p className="font-bold text-2xl mb-6">
                <span className="text-brand-500">NK</span> Plastic
              </p>
              <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
                Leading the industry with precision-engineered recycled polymer solutions for a sustainable industrial future.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-brand-950 mb-6 uppercase tracking-widest text-sm">Navigation</h5>
              <ul className="space-y-4">
                {["Services", "About", "Products", "Process"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-brand-500 transition-colors font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-brand-950 mb-6 uppercase tracking-widest text-sm">Contact</h5>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone size={18} className="text-brand-500" />
                  <span className="font-medium">+91 99999 99999</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={18} className="text-brand-500" />
                  <span className="font-medium">contact@nkplastic.com</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-brand-500" />
                  <span className="font-medium">Mumbai, Maharashtra</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-100 pt-10 flex flex-col md:row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground font-medium">
              © {new Date().getFullYear()} NK Plastic. All rights reserved. Built with precision.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-xs text-muted-foreground hover:text-brand-500 font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-brand-500 font-bold uppercase tracking-widest transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCTA;
