"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const categories = [
  "All",
  "Industry",
  "Best Practices",
  "Product",
  "Perspective",
];

// Blog posts focused on PROBLEM, INDUSTRY, and PERSPECTIVE - no fake customer stories
const blogPosts = [
  {
    category: "Industry",
    title: "The $50B GPU Shortage: Why Visibility Matters More Than Ever",
    excerpt:
      "With GPU demand outpacing supply 10:1, organizations need better ways to maximize the compute they have. We explore the economics of GPU queue inefficiency and what it means for AI teams.",
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
      "Teams asking 'when will my job run?' constantly? Engineers working nights to avoid queues? These are symptoms of a bigger operational issue.",
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
      "From hyperscalers to startups, the smartest teams are investing in queue visibility. Here's what's driving the trend and what it means for the industry.",
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
      "Queue uncertainty doesn't just waste compute—it wastes engineer time, delays projects, and erodes team morale. We break down the true cost.",
    date: "Nov 28, 2025",
    readTime: "5 min read",
    featured: false,
    slug: "hidden-costs-uncertainty",
    tags: ["Opinion", "Culture"],
  },
  {
    category: "Best Practices",
    title: "Planning Experiments When Queue Times Are Unpredictable",
    excerpt:
      "Practical strategies for ML teams to maintain velocity even when cluster queues are a black box. Spoiler: there's a better way.",
    date: "Nov 20, 2025",
    readTime: "4 min read",
    featured: false,
    slug: "planning-with-unpredictable-queues",
    tags: ["Tips", "Productivity"],
  },
  {
    category: "Industry",
    title: "The GPU Infrastructure Stack: Where Visibility Fits",
    excerpt:
      "Schedulers, orchestrators, and monitoring tools—but what about knowing when jobs will actually run? The missing layer in GPU infrastructure.",
    date: "Nov 15, 2025",
    readTime: "5 min read",
    featured: false,
    slug: "gpu-infrastructure-stack",
    tags: ["Industry", "Infrastructure"],
  },
  {
    category: "Perspective",
    title: "Why GPU Queues Should Be Transparent",
    excerpt:
      "Shared resources work better when everyone has visibility. The case for open, predictable GPU scheduling.",
    date: "Nov 5, 2025",
    readTime: "4 min read",
    featured: false,
    slug: "transparent-queues",
    tags: ["Opinion", "Culture"],
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="relative bg-midnight-900 min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              The VGAC <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Perspectives on GPU infrastructure, team productivity, and the future of ML operations.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            <div className="relative flex-1 max-w-md mx-auto md:mx-0">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                size={18}
              />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-midnight-800/50 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-electric-400/50 transition-colors"
              />
            </div>
          </motion.div>

          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-electric-400 text-midnight-900"
                    : "bg-midnight-800/50 text-white/60 hover:text-white hover:bg-midnight-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/40 text-lg">
                No posts found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="card-glass h-full overflow-hidden group-hover:border-electric-400/20 transition-colors">
                      {/* Colored top bar */}
                      <div
                        className={`h-1 ${
                          post.category === "Industry"
                            ? "bg-electric-400"
                            : post.category === "Best Practices"
                            ? "bg-yellow-500"
                            : post.category === "Product"
                            ? "bg-flame-500"
                            : "bg-plasma-500"
                        }`}
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-electric-400 text-xs font-medium">
                            {post.category}
                          </span>
                          {post.featured && (
                            <span className="px-2 py-0.5 text-xs font-mono bg-electric-400/20 text-electric-400 rounded">
                              Featured
                            </span>
                          )}
                        </div>
                        <h2 className="font-display text-lg font-semibold mb-3 text-white group-hover:text-electric-400 transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-white/40">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {post.readTime}
                            </span>
                          </div>
                          <ArrowUpRight
                            size={16}
                            className="text-white/20 group-hover:text-electric-400 transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
