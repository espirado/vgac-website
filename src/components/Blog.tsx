"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

// Blog posts focused on PROBLEM, INDUSTRY, and PERSPECTIVE - no fake customer stories
const blogPosts = [
  {
    category: "Industry",
    title: "The $50B GPU Shortage: Why Visibility Matters More Than Ever",
    excerpt:
      "With GPU demand outpacing supply 10:1, organizations need better ways to maximize the compute they have. We explore the economics of GPU queue inefficiency.",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    featured: true,
    slug: "gpu-shortage-visibility",
    tags: ["Industry", "Market"],
  },
  {
    category: "Best Practices",
    title: "5 Signs Your GPU Cluster Has a Visibility Problem",
    excerpt:
      "Teams asking 'when will my job run?' constantly? Engineers working nights to avoid queues? These are symptoms of a bigger issue.",
    date: "Dec 18, 2025",
    readTime: "4 min read",
    featured: false,
    slug: "visibility-problem-signs",
    tags: ["Tips", "Operations"],
  },
  {
    category: "Industry",
    title: "Why AI Labs Are Prioritizing Scheduling Visibility in 2026",
    excerpt:
      "From hyperscalers to startups, the smartest teams are investing in queue visibility. Here's what's driving the trend.",
    date: "Dec 12, 2025",
    readTime: "6 min read",
    featured: false,
    slug: "scheduling-visibility-trend",
    tags: ["Industry", "Trends"],
  },
  {
    category: "Product",
    title: "Introducing VGAC: Know When Your Jobs Will Run",
    excerpt:
      "We're building the visibility layer GPU clusters have been missing. Submit with confidence, plan with clarity.",
    date: "Dec 5, 2025",
    readTime: "3 min read",
    featured: false,
    slug: "introducing-vgac",
    tags: ["Product", "Announcement"],
  },
  {
    category: "Perspective",
    title: "The Hidden Costs of 'I Don't Know When It Will Run'",
    excerpt:
      "Queue uncertainty doesn't just waste compute—it wastes engineer time, delays projects, and erodes team morale.",
    date: "Nov 28, 2025",
    readTime: "5 min read",
    featured: false,
    slug: "hidden-costs-uncertainty",
    tags: ["Opinion", "Culture"],
  },
];

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredPost = blogPosts.find((p) => p.featured);
  const otherPosts = blogPosts.filter((p) => !p.featured).slice(0, 4);

  return (
    <section id="blog" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-800/30 via-midnight-900 to-midnight-900" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <span className="text-electric-400 font-mono text-sm tracking-wider uppercase mb-4 block">
              Blog
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Insights &<span className="gradient-text"> Ideas</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl">
              Perspectives on GPU infrastructure challenges and the future of ML operations.
            </p>
          </div>
          <Link
            href="/blog"
            className="group mt-6 md:mt-0 inline-flex items-center gap-2 text-electric-400 hover:text-electric-500 transition-colors"
          >
            View all posts
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          {featuredPost && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group lg:row-span-2"
            >
              <Link href={`/blog/${featuredPost.slug}`} className="block h-full">
                <div className="card-glass h-full overflow-hidden group-hover:border-electric-400/20 transition-colors">
                  {/* Image placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-electric-400/20 via-plasma-500/20 to-flame-500/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-midnight-800/80 backdrop-blur flex items-center justify-center border border-white/10">
                        <span className="font-display text-3xl font-bold gradient-text">
                          V
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 text-xs font-mono bg-electric-400 text-midnight-900 rounded-full font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-electric-400 text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-4 text-white group-hover:text-electric-400 transition-colors leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white/40">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Other Posts */}
          <div className="space-y-4">
            {otherPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="card-glass p-5 group-hover:border-electric-400/20 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-electric-400 text-xs font-medium">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="font-display text-base font-semibold mb-2 text-white group-hover:text-electric-400 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-white/40">
                          <span className="flex items-center gap-1">
                            <Calendar size={11} />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={11} />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-white/20 group-hover:text-electric-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1"
                      />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 card-glass p-8 text-center"
        >
          <h3 className="font-display text-xl font-semibold mb-2">
            Stay in the loop
          </h3>
          <p className="text-white/50 mb-6 max-w-md mx-auto">
            Get insights on GPU infrastructure delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-midnight-700/50 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-electric-400/50 transition-colors text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-electric-400 text-midnight-900 font-display font-semibold text-sm rounded-lg hover:bg-electric-500 transition-all"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
