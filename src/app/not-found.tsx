"use client";

import Link from "next/link";
import { MoveLeft, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="max-w-md w-full text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8"
        >
          <AlertTriangle size={40} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4 tabular-nums">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-4">Material Not Found</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            The processing route you requested doesn't exist or has been relocated in our manufacturing chain.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-bold hover:brightness-110 transition-all group"
          >
            <MoveLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Return to Operations
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
