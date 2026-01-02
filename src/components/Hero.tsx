"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-400/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-plasma-500/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-flame-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-electric-400/10 border border-electric-400/30 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-400"></span>
            </span>
            <span className="text-sm font-medium text-electric-400">
              Now in Private Beta
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Stop Waiting.</span>
            <br />
            <span className="gradient-text">Start Computing.</span>
          </motion.h1>

          {/* Subheadline - Problem focused */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 font-body leading-relaxed"
          >
            Your team submits a GPU job and waits... and waits.{" "}
            <span className="text-white">
              VGAC tells you exactly when it will run
            </span>
            —so you can plan your day, not waste it.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="#demo"
              className="group btn-primary flex items-center justify-center gap-2"
            >
              See It In Action
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link href="#solution" className="btn-secondary">
              Learn How It Works
            </Link>
          </motion.div>

          {/* Quick value props */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              {
                icon: Clock,
                text: "Know wait times upfront",
              },
              {
                icon: TrendingUp,
                text: "Maximize GPU utilization",
              },
              {
                icon: Zap,
                text: "Ship experiments faster",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors"
              >
                <item.icon size={20} className="text-electric-400" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="card-glass gradient-border p-2 rounded-2xl overflow-hidden">
            <div className="bg-midnight-800 rounded-xl overflow-hidden">
              {/* Mock Dashboard */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-flame-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-electric-400" />
                  </div>
                  <div className="text-xs font-mono text-white/30">
                    vgac.ai/dashboard
                  </div>
                </div>

                {/* Queue Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      job: "training-llm-v3",
                      status: "Running",
                      eta: "2h 15m remaining",
                      gpus: "8x H100",
                      color: "electric",
                    },
                    {
                      job: "finetune-bert-xl",
                      status: "Queued",
                      eta: "Starts in 2h 15m",
                      gpus: "4x A100",
                      color: "plasma",
                    },
                    {
                      job: "inference-batch-42",
                      status: "Queued",
                      eta: "Starts in 4h 30m",
                      gpus: "2x A100",
                      color: "flame",
                    },
                  ].map((job, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="bg-midnight-700/50 rounded-lg p-4 border border-white/5"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-sm text-white/80">
                          {job.job}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            job.color === "electric"
                              ? "bg-electric-400/20 text-electric-400"
                              : job.color === "plasma"
                              ? "bg-plasma-400/20 text-plasma-400"
                              : "bg-flame-400/20 text-flame-400"
                          }`}
                        >
                          {job.status}
                        </span>
                      </div>
                      <div className="text-lg font-display font-semibold text-white mb-1">
                        {job.eta}
                      </div>
                      <div className="text-xs text-white/40">{job.gpus}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

