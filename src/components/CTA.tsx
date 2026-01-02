"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-midnight-800 to-midnight-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-400/10 rounded-full blur-[200px]" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Stop
            <span className="gradient-text"> Guessing?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join the private beta and give your team the visibility they need.
            Setup takes 5 minutes. First prediction in 24 hours.
          </p>
        </motion.div>

        {/* Email capture form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                size={20}
              />
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full pl-12 pr-4 py-4 bg-midnight-700/50 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-electric-400/50 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="group btn-primary flex items-center justify-center gap-2"
            >
              Get Early Access
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
          <p className="text-sm text-white/40 mt-4">
            No spam. We'll reach out to schedule a demo.
          </p>
        </motion.div>

        {/* Alternative CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="#demo"
            className="flex items-center gap-2 text-white/60 hover:text-electric-400 transition-colors"
          >
            <MessageSquare size={18} />
            <span>Schedule a live demo</span>
          </Link>
          <span className="hidden sm:block text-white/20">|</span>
          <Link
            href="mailto:hello@vgac.ai"
            className="flex items-center gap-2 text-white/60 hover:text-electric-400 transition-colors"
          >
            <Mail size={18} />
            <span>hello@vgac.ai</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

