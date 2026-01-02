"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Users,
  Globe,
  Cpu,
  ArrowRight,
  FileText,
} from "lucide-react";
import Link from "next/link";

const marketStats = [
  {
    icon: Globe,
    value: "$200B+",
    label: "GPU Cloud Market by 2030",
  },
  {
    icon: TrendingUp,
    value: "35%",
    label: "YoY Market Growth",
  },
  {
    icon: Cpu,
    value: "10:1",
    label: "Demand vs Supply Ratio",
  },
  {
    icon: Users,
    value: "Growing",
    label: "Teams Facing This Problem",
  },
];

const investorHighlights = [
  {
    title: "Large & Growing Market",
    description:
      "GPU infrastructure is one of the fastest-growing markets in tech. Every organization running AI workloads needs better visibility.",
  },
  {
    title: "Clear Problem, Clear Need",
    description:
      "Queue uncertainty is a universal pain point. Teams we talk to immediately recognize the problem and want a solution.",
  },
  {
    title: "Research-Backed Approach",
    description:
      "Our team has spent years studying GPU cluster behavior. We're applying that expertise to a real-world product.",
  },
  {
    title: "Building in Public",
    description:
      "We're sharing our journey and learning from the community. The teams we talk to consistently recognize this problem.",
  },
];

export function Investors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="investors" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-plasma-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-electric-400/10 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-electric-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            For Investors
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building for a
            <span className="gradient-text"> Growing Market</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            GPU compute is exploding, and teams need better visibility into their infrastructure. 
            We're building a product to solve a real, widespread problem.
          </p>
        </motion.div>

        {/* Market Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {marketStats.map((stat, i) => (
            <div
              key={i}
              className="card-glass p-6 text-center hover:border-electric-400/20 transition-colors"
            >
              <stat.icon
                size={24}
                className="text-electric-400 mx-auto mb-4"
              />
              <div className="font-display text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Why Invest */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {investorHighlights.map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="card-glass p-8 hover:border-electric-400/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-plasma-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-plasma-400">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA for Investors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card-glass gradient-border p-10 text-center"
        >
          <h3 className="font-display text-3xl font-bold mb-4">
            Let's Talk
          </h3>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            We're raising our seed round and would love to share more about what we're building 
            and where we're headed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:investors@vgac.ai"
              className="group btn-primary flex items-center justify-center gap-2"
            >
              Get in Touch
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="#deck"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              Request Materials
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
