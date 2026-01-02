"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Building2,
  GraduationCap,
  Rocket,
  FlaskConical,
  ChevronRight,
} from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Enterprise ML Teams",
    subtitle: "Fortune 500 & Large Tech",
    description:
      "Your GPU cluster runs 24/7. Dozens of teams submit jobs constantly. Without visibility, it's chaos. VGAC gives every team member predictable scheduling, so they can plan their work and hit deadlines.",
    benefits: [
      "Reduce cross-team friction",
      "Meet experiment deadlines",
      "Optimize cluster ROI",
    ],
    quote:
      "We went from constant Slack messages asking 'when will my job run?' to everyone just knowing.",
    quoteAuthor: "ML Platform Lead",
  },
  {
    icon: GraduationCap,
    title: "Research Universities",
    subtitle: "Academic & Research Labs",
    description:
      "Shared clusters, tight budgets, and publication deadlines. Students and researchers need to know when they can expect results. VGAC helps labs plan around cluster availability.",
    benefits: [
      "Fair resource allocation",
      "Meet paper deadlines",
      "Maximize grant efficiency",
    ],
    quote:
      "Our PhD students can finally plan their experiments around real schedules, not guesswork.",
    quoteAuthor: "Lab Director",
  },
  {
    icon: Rocket,
    title: "AI Startups",
    subtitle: "Fast-Moving Teams",
    description:
      "Every GPU hour costs money. Every experiment delay slows your roadmap. VGAC helps you move fast by knowing exactly when jobs will run, so you can iterate faster than your competition.",
    benefits: [
      "Ship faster",
      "Reduce cloud spend",
      "Scale with confidence",
    ],
    quote:
      "We cut our model development cycle by 40% just by planning around actual queue times.",
    quoteAuthor: "CTO, Series A Startup",
  },
  {
    icon: FlaskConical,
    title: "Cloud Providers",
    subtitle: "GPU-as-a-Service",
    description:
      "Your customers expect transparency. VGAC lets you show predicted wait times before job submission, improving customer satisfaction and reducing support tickets.",
    benefits: [
      "Improve customer experience",
      "Reduce support load",
      "Differentiate your offering",
    ],
    quote:
      "Customers love knowing when their jobs will run. It's become a key differentiator for us.",
    quoteAuthor: "VP Product, Cloud Provider",
  },
];

export function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id="use-cases" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-midnight-800/30" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-electric-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            Use Cases
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built for Teams
            <span className="gradient-text"> Like Yours</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Whether you're a startup or enterprise, research lab or cloud
            provider — if you run GPUs, VGAC helps.
          </p>
        </motion.div>

        {/* Use Case Selector + Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Selector */}
          <div className="space-y-3">
            {useCases.map((useCase, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setActiveCase(i)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
                  activeCase === i
                    ? "bg-electric-400/10 border border-electric-400/30"
                    : "bg-midnight-700/30 border border-transparent hover:bg-midnight-700/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      activeCase === i
                        ? "bg-electric-400/20"
                        : "bg-midnight-600/50"
                    }`}
                  >
                    <useCase.icon
                      size={20}
                      className={
                        activeCase === i ? "text-electric-400" : "text-white/40"
                      }
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-display font-semibold ${
                        activeCase === i ? "text-white" : "text-white/70"
                      }`}
                    >
                      {useCase.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        activeCase === i ? "text-white/60" : "text-white/40"
                      }`}
                    >
                      {useCase.subtitle}
                    </p>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`ml-auto transition-transform ${
                      activeCase === i
                        ? "text-electric-400 translate-x-1"
                        : "text-white/20"
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="card-glass p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-electric-400/10 border border-electric-400/20 flex items-center justify-center">
                  {(() => {
                    const Icon = useCases[activeCase].icon;
                    return <Icon size={28} className="text-electric-400" />;
                  })()}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {useCases[activeCase].title}
                  </h3>
                  <p className="text-white/50">
                    {useCases[activeCase].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {useCases[activeCase].description}
              </p>

              {/* Benefits */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {useCases[activeCase].benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="p-4 bg-midnight-700/50 rounded-lg border border-white/5"
                  >
                    <span className="text-white/80 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="p-6 bg-midnight-700/30 rounded-xl border-l-4 border-electric-400">
                <p className="text-white/80 italic mb-3">
                  "{useCases[activeCase].quote}"
                </p>
                <p className="text-electric-400 text-sm font-medium">
                  — {useCases[activeCase].quoteAuthor}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

