"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Zap, Target, Shield } from "lucide-react";

const valueProps = [
  {
    icon: Clock,
    title: "Know Before You Submit",
    description:
      "See expected wait times before you commit to the queue. Plan your work around reality, not guesses.",
  },
  {
    icon: Zap,
    title: "Move Faster",
    description:
      "When teams know what to expect, they iterate more confidently. Less time waiting, more time building.",
  },
  {
    icon: Target,
    title: "Make Better Decisions",
    description:
      "Visibility into queue patterns helps everyone—from engineers to leadership—make smarter choices.",
  },
  {
    icon: Shield,
    title: "Reduce Frustration",
    description:
      "Replace uncertainty with clarity. No more 'when will it run?' questions or constant status checking.",
  },
];

export function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-midnight-800/50 to-midnight-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-plasma-500/10 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-electric-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            The Value
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Changes With
            <span className="gradient-text"> Visibility</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            When teams can see what's happening in their cluster, everything improves.
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueProps.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-glass p-8 hover:border-electric-400/20 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-electric-400/10 border border-electric-400/20 flex items-center justify-center flex-shrink-0">
                  <prop.icon className="w-6 h-6 text-electric-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-white">
                    {prop.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 text-lg">
            Curious what this looks like in practice?{" "}
            <a href="#contact" className="text-electric-400 hover:underline">
              Let's talk
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
