"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plug, Brain, Bell, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Plug,
    number: "01",
    title: "Connect Your Cluster",
    description:
      "Point VGAC at your Slurm, Kubernetes, or PBS scheduler. It starts collecting GPU metrics, job events, and queue state automatically. No code changes required.",
    detail: "Slurm · K8s · PBS",
  },
  {
    icon: Brain,
    number: "02",
    title: "Get Predictions",
    description:
      "Before you submit, see how long your job will wait. VGAC learns your cluster's patterns — which partitions are busy, when the quiet hours are, which job sizes move fastest.",
    detail: "Pre-submit predictions",
  },
  {
    icon: Bell,
    number: "03",
    title: "Get Warned Early",
    description:
      "VGAC spots scheduling problems before they cascade. Peak-hour contention building up? Memory pressure on a node? You'll know before the queue backs up — not after.",
    detail: "Predictive alerts",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Optimize & Act",
    description:
      "See right-sizing suggestions, alternative placements, and auto-generated Slurm scripts. Platform teams get capacity forecasts and utilization insights to make data-driven decisions.",
    detail: "Actionable insights",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-midnight-800/30" />
      <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-electric-400/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-plasma-500/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-electric-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Up and Running
            <span className="gradient-text"> in Minutes</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            No complex setup. No workflow changes. Just connect and start
            getting predictions.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px">
                  <div className="h-full w-full bg-gradient-to-r from-electric-400/30 via-white/10 to-transparent" />
                </div>
              )}

              <div className="card-glass p-8 h-full group-hover:border-electric-400/20 transition-colors">
                {/* Number */}
                <div className="font-display text-5xl font-bold text-midnight-600 mb-6">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-electric-400/10 border border-electric-400/20 flex items-center justify-center mb-6 group-hover:bg-electric-400/20 transition-colors">
                  <step.icon className="w-6 h-6 text-electric-400" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-white/50 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Detail tag */}
                <span className="inline-block px-3 py-1 text-xs font-mono text-electric-400 bg-electric-400/10 rounded-full">
                  {step.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}






