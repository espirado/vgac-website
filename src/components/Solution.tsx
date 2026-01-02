"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";

const benefits = [
  "Know exactly when every job will start running",
  "Plan your workday around reliable predictions",
  "Identify the best times to submit large jobs",
  "Get alerts when queue times spike",
  "Maximize your team's experiment velocity",
  "Make data-driven capacity decisions",
];

export function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-electric-400/5 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-electric-400 font-mono text-sm tracking-wider uppercase mb-4 block">
              The Solution
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Predictable Scheduling.
              <span className="gradient-text"> Finally.</span>
            </h2>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              VGAC learns your cluster's behavior and tells your team exactly
              when their jobs will run. No more guessing. No more wasted time.
              Just reliable predictions you can plan around.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-electric-400/20 flex items-center justify-center">
                    <Check size={14} className="text-electric-400" />
                  </div>
                  <span className="text-white/80">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-3 bg-midnight-700/50 rounded-xl border border-white/5"
            >
              <Sparkles className="text-electric-400" size={20} />
              <span className="text-white/60">
                <span className="text-white font-semibold">
                  Works with any scheduler
                </span>{" "}
                — Slurm, Kubernetes, PBS, LSF
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="card-glass p-8 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-electric-400/30 rounded-full blur-[80px]" />

              {/* Before/After comparison */}
              <div className="space-y-6">
                {/* Before */}
                <div className="p-6 bg-midnight-700/50 rounded-xl border border-flame-500/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-flame-500" />
                    <span className="text-sm font-mono text-flame-400">
                      WITHOUT VGAC
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Job submitted</span>
                      <span className="font-mono text-white/40">9:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Expected start</span>
                      <span className="font-mono text-flame-400">???</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Actual start</span>
                      <span className="font-mono text-white/40">2:47 PM</span>
                    </div>
                    <div className="pt-3 border-t border-white/5">
                      <span className="text-flame-400 font-semibold">
                        5+ hours of uncertainty
                      </span>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="p-6 bg-midnight-700/50 rounded-xl border border-electric-400/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-electric-400" />
                    <span className="text-sm font-mono text-electric-400">
                      WITH VGAC
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Job submitted</span>
                      <span className="font-mono text-white/40">9:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Predicted start</span>
                      <span className="font-mono text-electric-400">
                        2:45 PM ± 15min
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Actual start</span>
                      <span className="font-mono text-white/40">2:47 PM</span>
                    </div>
                    <div className="pt-3 border-t border-white/5">
                      <span className="text-electric-400 font-semibold">
                        Plan your entire day with confidence
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

