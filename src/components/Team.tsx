"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  Linkedin,
  Globe,
  Mail,
  ExternalLink,
} from "lucide-react";

const teamMembers = [
  {
    name: "Andrew Espira",
    role: "Founder & Lead Engineer",
    bio: "Platform engineer with 8+ years building cloud-native systems at scale. SRE at Sportserve, Research Software Engineer at EcoHealth Alliance (GPU clusters for ML workloads), and founding engineer at Kustode. Deep expertise in GPU resource management, Kubernetes scheduling, and observability systems.",
    focus: [
      "GPU & ML Infrastructure",
      "Observability & SRE",
      "Distributed Systems",
      "Cloud Architecture",
    ],
    research: [
      "Wait-time risk modeling for GPU clusters",
      "Under-utilization detection & right-sizing",
      "Confidence-gated alerting systems",
      "eBPF for low-overhead telemetry",
    ],
    links: {
      website: "https://espiradev.org",
      github: "https://github.com/espirado",
      linkedin: "https://linkedin.com/in/andrew-espira",
      email: "aespira@vgac.cloud",
    },
    image: null, // Will use initials
  },
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-midnight-800/30 to-midnight-900" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-electric-400/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-electric-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            The Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built by
            <span className="gradient-text"> Practitioners</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We've lived this problem—running GPU clusters, waiting on queues, and wishing 
            we had visibility. Now we're building the solution.
          </p>
        </motion.div>

        {/* Team Members */}
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass gradient-border overflow-hidden"
          >
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Profile Section */}
              <div className="p-8 lg:p-10 bg-gradient-to-br from-electric-400/5 to-plasma-500/5 border-b lg:border-b-0 lg:border-r border-white/5">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-electric-400 to-plasma-500 flex items-center justify-center mb-6">
                  <span className="font-display text-3xl font-bold text-midnight-900">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-electric-400 font-medium mb-4">{member.role}</p>

                {/* Bio */}
                <p className="text-white/60 leading-relaxed mb-6 text-sm">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={member.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-midnight-700/50 text-white/50 hover:text-electric-400 hover:bg-midnight-700 transition-colors"
                    title="Website"
                  >
                    <Globe size={18} />
                  </a>
                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-midnight-700/50 text-white/50 hover:text-electric-400 hover:bg-midnight-700 transition-colors"
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-midnight-700/50 text-white/50 hover:text-electric-400 hover:bg-midnight-700 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${member.links.email}`}
                    className="p-2.5 rounded-lg bg-midnight-700/50 text-white/50 hover:text-electric-400 hover:bg-midnight-700 transition-colors"
                    title="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              {/* Details Section */}
              <div className="lg:col-span-2 p-8 lg:p-10">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Focus Areas */}
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">
                      Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.focus.map((area, j) => (
                        <span
                          key={j}
                          className="px-3 py-1.5 text-sm bg-electric-400/10 text-electric-400 rounded-lg border border-electric-400/20"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Research */}
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">
                      Research Interests
                    </h4>
                    <ul className="space-y-2">
                      {member.research.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-white/60 flex items-start gap-2"
                        >
                          <span className="text-plasma-400 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-white/5">
                  <a
                    href={member.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 transition-colors text-sm font-medium"
                  >
                    View full profile on espiradev.org
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Join the Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40">
            Interested in joining the team?{" "}
            <a href="#contact" className="text-electric-400 hover:underline">
              Let's talk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

