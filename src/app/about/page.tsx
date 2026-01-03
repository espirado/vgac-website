"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <section className="relative py-32 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-midnight-800 to-midnight-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-flame-500/10 rounded-full blur-[200px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-flame-500/10 border border-flame-500/20 flex items-center justify-center">
              <Users className="w-10 h-10 text-flame-400" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About
              <span className="gradient-text"> VGAC</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              We're a team of infrastructure engineers who lived the GPU queue problem firsthand. 
              Now we're building the visibility layer that GPU clusters have been missing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#team" className="btn-secondary inline-flex items-center gap-2">
                Meet the Team
              </Link>
              <Link href="mailto:aespira@vgac.cloud" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

