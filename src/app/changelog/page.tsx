"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { History, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ChangelogPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <section className="relative py-32 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-midnight-800 to-midnight-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-400/10 rounded-full blur-[200px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-electric-400/10 border border-electric-400/20 flex items-center justify-center">
              <History className="w-10 h-10 text-electric-400" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Changelog
              <span className="gradient-text"> Coming Soon</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              We're building in public. Once we launch, you'll find all product updates 
              and improvements documented here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-secondary inline-flex items-center gap-2">
                <ArrowLeft size={18} />
                Back to Home
              </Link>
              <Link href="/blog" className="btn-primary">
                Read Our Blog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

