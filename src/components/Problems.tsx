"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Clock, DollarSign, Users } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Unpredictable Wait Times",
    description:
      "Your team submits jobs and has no idea when they'll run. Productivity is lost to guessing, checking, and waiting.",
  },
  {
    icon: DollarSign,
    title: "Wasted Resources",
    description:
      "Jobs submitted at the wrong time. Poor utilization patterns. You're paying for compute that isn't being used efficiently.",
  },
  {
    icon: Users,
    title: "Team Frustration",
    description:
      "Engineers wait instead of iterate. Experiments get delayed. Deadlines slip because nobody can plan around queue times.",
  },
  {
    icon: AlertCircle,
    title: "Blind Capacity Planning",
    description:
      "No visibility into cluster patterns. Can't anticipate bottlenecks. Every capacity decision is based on gut feeling.",
  },
];

export function Problems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-midnight-800/50 to-midnight-900" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-electric-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            The Problem
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            GPU Queues Are
            <span className="gradient-text"> Black Boxes</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            You're running a world-class ML team on a cluster you can't predict.
            Every job submission is a leap of faith.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group card-glass p-8 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-flame-500/10 border border-flame-500/20 flex items-center justify-center group-hover:bg-flame-500/20 transition-colors">
                  <problem.icon className="w-7 h-7 text-flame-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-3 text-white">
                    {problem.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-white/40">
            Sound familiar?{" "}
            <a href="#solution" className="text-electric-400 hover:underline">
              There's a better way
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
