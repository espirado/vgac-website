"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Users,
  Cpu,
  BarChart3,
  Zap,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Stat Card Component for visual data presentation
function StatCard({ 
  value, 
  label, 
  icon: Icon, 
  color = "electric" 
}: { 
  value: string; 
  label: string; 
  icon: React.ElementType;
  color?: "electric" | "flame" | "plasma" | "green";
}) {
  const colorClasses = {
    electric: "bg-electric-400/10 border-electric-400/20 text-electric-400",
    flame: "bg-flame-500/10 border-flame-500/20 text-flame-500",
    plasma: "bg-plasma-500/10 border-plasma-500/20 text-plasma-500",
    green: "bg-green-500/10 border-green-500/20 text-green-500",
  };

  return (
    <div className={`p-6 rounded-xl border ${colorClasses[color]}`}>
      <Icon className="w-6 h-6 mb-3" />
      <div className="font-display text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-white/50">{label}</div>
    </div>
  );
}

// Quote Block Component
function QuoteBlock({ quote, attribution }: { quote: string; attribution?: string }) {
  return (
    <blockquote className="my-10 p-6 bg-gradient-to-r from-electric-400/10 to-transparent border-l-4 border-electric-400 rounded-r-xl">
      <p className="text-xl text-white/80 italic leading-relaxed">{quote}</p>
      {attribution && (
        <cite className="block mt-3 text-white/40 text-sm not-italic">— {attribution}</cite>
      )}
    </blockquote>
  );
}

// Callout Component
function Callout({ 
  title, 
  children, 
  type = "info" 
}: { 
  title: string; 
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}) {
  const styles = {
    info: "bg-electric-400/10 border-electric-400/30",
    warning: "bg-flame-500/10 border-flame-500/30",
    success: "bg-green-500/10 border-green-500/30",
  };

  return (
    <div className={`my-8 p-6 rounded-xl border ${styles[type]}`}>
      <h4 className="font-display font-semibold text-white mb-2">{title}</h4>
      <div className="text-white/60 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

// Blog posts with rich content
const blogPostsData: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  heroImage?: string;
  content: React.ReactNode;
  tags: string[];
}> = {
  "gpu-shortage-visibility": {
    title: "The $50B GPU Shortage: Why Visibility Matters More Than Ever",
    category: "Industry",
    date: "December 28, 2025",
    readTime: "12 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "With GPU demand outpacing supply 10:1, organizations need better ways to maximize the compute they have.",
    tags: ["Industry", "Market", "GPU Infrastructure"],
    content: (
      <>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-electric-400/20 via-plasma-500/20 to-flame-500/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Cpu className="w-16 h-16 text-electric-400 mx-auto mb-4" />
              <span className="font-display text-2xl font-bold text-white">GPU Market Analysis</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight-900 to-transparent" />
        </div>

        <p className="text-xl text-white/70 leading-relaxed mb-8">
          We're in the middle of an unprecedented GPU shortage. The numbers tell a stark story: 
          demand for AI compute grew <strong className="text-white">400% in 2024</strong>, while supply 
          grew just 40%. The result? H100s commanding $40,000+ with 52-week lead times. Every 
          organization running AI workloads is fighting for the same limited compute.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          But here's what most analyses miss: <strong className="text-white">the shortage isn't just 
          about getting GPUs—it's about using them well once you have them.</strong> And that's where 
          visibility becomes critical.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          The Numbers Behind the Shortage
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
          <StatCard value="400%" label="AI compute demand growth (2024)" icon={TrendingUp} color="electric" />
          <StatCard value="10:1" label="Demand vs supply ratio" icon={Cpu} color="flame" />
          <StatCard value="52 wk" label="H100 lead times" icon={Clock} color="plasma" />
          <StatCard value="$40K+" label="Per H100 GPU" icon={DollarSign} color="green" />
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          These numbers represent a fundamental shift in how we need to think about GPU infrastructure. 
          When GPUs were plentiful and cheap, inefficiency was tolerable. A job waiting an extra hour? 
          An underutilized cluster overnight? Not ideal, but not catastrophic either.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          Today, every hour of GPU time is precious. Every wasted cycle has a direct cost—not just in 
          dollars, but in delayed experiments, missed deadlines, and competitive disadvantage.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          The Visibility Gap in GPU Infrastructure
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          Modern GPU infrastructure is remarkably sophisticated. We have powerful schedulers like 
          Kubernetes and Slurm. We have monitoring stacks—Prometheus, Grafana, the works. We can see 
          GPU utilization, memory usage, queue lengths.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          But ask the simplest question—<strong className="text-white">"When will my job actually 
          start?"</strong>—and most systems go silent.
        </p>

        <QuoteBlock 
          quote="We can tell you everything about what's happening now. We can't tell you anything about what happens next."
          attribution="Platform Engineer at a Top-5 AI Lab"
        />

        <p className="text-white/70 leading-relaxed mb-8">
          This visibility gap has real consequences. Without predictability, teams develop coping 
          mechanisms that make everything worse:
        </p>

        <div className="my-10 space-y-4">
          {[
            { icon: AlertTriangle, title: "Over-requesting resources", desc: "Teams pad their GPU requests 'just in case,' reducing effective capacity for everyone." },
            { icon: Clock, title: "Poor timing", desc: "Jobs get submitted at peak hours because nobody knows when the quiet times are." },
            { icon: Users, title: "Constant context-switching", desc: "Engineers refresh status pages instead of doing actual work." },
            { icon: BarChart3, title: "Guesswork capacity planning", desc: "Leadership makes GPU purchasing decisions based on feelings, not data." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-midnight-800/50 border border-white/5">
              <div className="p-2 rounded-lg bg-flame-500/10">
                <item.icon className="w-5 h-5 text-flame-500" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          The True Cost of Poor Visibility
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          Let's do some back-of-envelope math. Consider a mid-size GPU cluster:
        </p>

        <div className="my-10 p-8 rounded-2xl bg-gradient-to-br from-midnight-800/80 to-midnight-800/40 border border-white/10">
          <h4 className="font-display text-lg font-semibold text-white mb-6">Cost Impact Model</h4>
          <div className="space-y-4 font-mono text-sm">
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-white/60">Cluster size</span>
              <span className="text-white">100 GPUs</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-white/60">Effective hourly cost</span>
              <span className="text-white">~$3/GPU/hour</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-white/60">Annual compute spend</span>
              <span className="text-white">$2.6M</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-white/60">Visibility-related inefficiency</span>
              <span className="text-flame-400">15-25%</span>
            </div>
            <div className="flex justify-between items-center py-3 text-lg">
              <span className="text-white font-semibold">Potential annual waste</span>
              <span className="text-flame-400 font-bold">$390K - $650K</span>
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          And that's just the direct compute cost. Add in engineer productivity—hours spent waiting, 
          checking status, and context-switching—and the true cost multiplies. For larger organizations 
          running thousands of GPUs, we're talking millions in annual waste.
        </p>

        <Callout title="The Hidden Multiplier" type="warning">
          Engineer time is often 3-5x more expensive than compute time. When visibility problems 
          cause engineers to wait, check status repeatedly, or work odd hours, the productivity 
          cost can exceed the compute cost.
        </Callout>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          What Changes With Visibility
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          The solution isn't more GPUs—at least, not primarily. The solution is visibility: 
          giving teams the information they need to make good decisions.
        </p>

        <div className="my-10 grid md:grid-cols-2 gap-6">
          {[
            { 
              icon: Eye, 
              title: "Engineers plan their day", 
              desc: "When you know a job will start in 3 hours, you can do productive work in the meantime instead of constantly checking." 
            },
            { 
              icon: Zap, 
              title: "Teams optimize naturally", 
              desc: "With visibility into queue patterns, teams shift submissions to off-peak times without being told to." 
            },
            { 
              icon: BarChart3, 
              title: "Capacity decisions improve", 
              desc: "Leadership can see actual demand patterns and make informed purchasing decisions." 
            },
            { 
              icon: Users, 
              title: "Culture gets healthier", 
              desc: "No more blame games. No more 'why did their job run first?' When everyone can see what's happening, trust improves." 
            },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-electric-400/5 border border-electric-400/20">
              <item.icon className="w-8 h-8 text-electric-400 mb-4" />
              <h4 className="font-display font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          The Path Forward
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          The GPU shortage isn't going away soon. If anything, as AI becomes more central to business 
          strategy, demand will continue to outpace supply. The organizations that thrive won't 
          necessarily be those with the most GPUs—they'll be those that use their GPUs most effectively.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          Visibility is the foundation of that effectiveness. It's not glamorous. It won't make 
          headlines like a new model architecture. But it's the difference between a well-run 
          infrastructure and one that's constantly fighting fires.
        </p>

        <QuoteBlock 
          quote="In a world of GPU scarcity, the competitive advantage goes to teams that can do more with less. That starts with knowing what you have and when you can use it."
        />

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-electric-400/10 to-plasma-500/10 border border-electric-400/20">
          <h3 className="font-display text-xl font-bold text-white mb-4">
            This is the problem we're solving at VGAC
          </h3>
          <p className="text-white/60 mb-6">
            We're building visibility into GPU queue scheduling—so teams know when jobs will run 
            before they submit, and can plan accordingly.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-400 text-midnight-900 font-display font-semibold rounded-lg hover:bg-electric-500 transition-all text-sm"
          >
            Learn more about VGAC
          </Link>
        </div>
      </>
    ),
  },

  "visibility-problem-signs": {
    title: "5 Signs Your GPU Cluster Has a Visibility Problem",
    category: "Best Practices",
    date: "December 18, 2025",
    readTime: "8 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "Teams asking 'when will my job run?' constantly? These are symptoms of a bigger issue.",
    tags: ["Tips", "Operations", "GPU Infrastructure"],
    content: (
      <>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-flame-500/20 via-plasma-500/20 to-electric-400/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <AlertTriangle className="w-16 h-16 text-flame-500 mx-auto mb-4" />
              <span className="font-display text-2xl font-bold text-white">Visibility Diagnostics</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight-900 to-transparent" />
        </div>

        <p className="text-xl text-white/70 leading-relaxed mb-8">
          Visibility problems in GPU clusters rarely announce themselves. They show up as symptoms—
          frustration, inefficiency, conflict—that get attributed to other causes. "We just need more 
          GPUs." "The scheduler is bad." "People need to be more patient."
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          Sometimes those explanations are right. But often, the root cause is simpler: 
          <strong className="text-white"> people don't have the information they need to work effectively.</strong>
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          Here are five signs that your cluster might have a visibility problem—and what you can do about it.
        </p>

        {/* Sign 1 */}
        <div className="my-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-flame-500/20 text-flame-500 font-display font-bold text-xl">1</span>
            <h2 className="font-display text-2xl font-bold text-white">
              "When Will It Run?" Is Your Most Common Question
            </h2>
          </div>
          
          <p className="text-white/70 leading-relaxed mb-6">
            Walk through your Slack channels or stand near the coffee machine. How often do you hear 
            some variation of "when will my job start?" If it's multiple times a day, you have a 
            visibility problem.
          </p>

          <div className="p-6 rounded-xl bg-midnight-800/50 border border-white/10 mb-6">
            <h4 className="font-semibold text-white mb-3">What this looks like:</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-flame-500 mt-1">•</span>
                Engineers DMing platform teams for status updates
              </li>
              <li className="flex items-start gap-2">
                <span className="text-flame-500 mt-1">•</span>
                Dedicated Slack channels for queue status questions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-flame-500 mt-1">•</span>
                Standup meetings derailed by queue discussions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-flame-500 mt-1">•</span>
                Platform team spending hours on "when" questions instead of improvements
              </li>
            </ul>
          </div>

          <Callout title="The Real Issue" type="info">
            This isn't a communication problem—it's an information problem. People are asking 
            because the information isn't available through self-service. The solution isn't 
            better communication; it's better visibility.
          </Callout>
        </div>

        {/* Sign 2 */}
        <div className="my-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-flame-500/20 text-flame-500 font-display font-bold text-xl">2</span>
            <h2 className="font-display text-2xl font-bold text-white">
              Engineers Work Nights and Weekends
            </h2>
          </div>
          
          <p className="text-white/70 leading-relaxed mb-6">
            Not because of deadlines—because of queues. When engineers discover that jobs submitted 
            at 2 AM run faster, they start working at 2 AM. This isn't dedication; it's a symptom of 
            broken visibility.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="p-5 rounded-xl bg-flame-500/10 border border-flame-500/20">
              <h4 className="font-semibold text-flame-400 mb-2">The Problem</h4>
              <p className="text-white/60 text-sm">
                Engineers game the system because they can't see it. They learn patterns through 
                painful trial and error.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-electric-400/10 border border-electric-400/20">
              <h4 className="font-semibold text-electric-400 mb-2">With Visibility</h4>
              <p className="text-white/60 text-sm">
                Teams would know the best times to submit, plan accordingly during work hours, 
                and maintain healthy work-life balance.
              </p>
            </div>
          </div>
        </div>

        {/* Sign 3 */}
        <div className="my-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-flame-500/20 text-flame-500 font-display font-bold text-xl">3</span>
            <h2 className="font-display text-2xl font-bold text-white">
              Resource Requests Don't Match Usage
            </h2>
          </div>
          
          <p className="text-white/70 leading-relaxed mb-6">
            Look at your cluster's resource requests versus actual utilization. If there's a 
            significant gap—jobs requesting 8 GPUs but only using 4, or requesting 24 hours but 
            finishing in 6—you likely have a visibility-driven over-requesting problem.
          </p>

          <div className="p-6 rounded-xl bg-midnight-800/50 border border-white/10 mb-6">
            <h4 className="font-semibold text-white mb-3">Why this happens:</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              When queue times are unpredictable, people pad their requests. "I might need 8 GPUs, 
              and I might need 24 hours. If I request less and have to requeue, I'll lose my spot." 
              This is rational behavior given poor visibility—but it creates a tragedy of the commons 
              where everyone's padding hurts everyone's queue times.
            </p>
          </div>
        </div>

        {/* Sign 4 */}
        <div className="my-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-flame-500/20 text-flame-500 font-display font-bold text-xl">4</span>
            <h2 className="font-display text-2xl font-bold text-white">
              Duplicate Jobs Clog the Queue
            </h2>
          </div>
          
          <p className="text-white/70 leading-relaxed mb-6">
            When people don't know if their job will run "soon" or "eventually," some submit it 
            multiple ways: with different resource configurations, to different partitions, or 
            simply multiple copies hoping one gets through faster.
          </p>

          <QuoteBlock 
            quote="I submitted it three ways because I didn't know which would run first. I know it's bad, but what else can I do?"
            attribution="ML Engineer on a shared cluster"
          />

          <p className="text-white/70 leading-relaxed mb-6">
            This creates a vicious cycle: duplicate jobs clog the queue, making wait times less 
            predictable, which encourages more duplicate submissions.
          </p>
        </div>

        {/* Sign 5 */}
        <div className="my-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-flame-500/20 text-flame-500 font-display font-bold text-xl">5</span>
            <h2 className="font-display text-2xl font-bold text-white">
              Capacity Discussions Are Heated
            </h2>
          </div>
          
          <p className="text-white/70 leading-relaxed mb-6">
            "We need more GPUs" vs "We need to use our GPUs better" shouldn't be a religious war. 
            But without visibility data, both sides are arguing from intuition.
          </p>

          <div className="p-6 rounded-xl bg-midnight-800/50 border border-white/10 mb-6">
            <h4 className="font-semibold text-white mb-3">Questions you should be able to answer:</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-electric-400 mt-1">•</span>
                What's our actual queue wait time distribution?
              </li>
              <li className="flex items-start gap-2">
                <span className="text-electric-400 mt-1">•</span>
                When are our peak usage periods?
              </li>
              <li className="flex items-start gap-2">
                <span className="text-electric-400 mt-1">•</span>
                How much of our "queue problem" is capacity vs scheduling inefficiency?
              </li>
              <li className="flex items-start gap-2">
                <span className="text-electric-400 mt-1">•</span>
                What would adding X GPUs actually do to wait times?
              </li>
            </ul>
          </div>

          <p className="text-white/70 leading-relaxed mb-6">
            If you can't answer these questions with data, every capacity discussion becomes a 
            political battle rather than an engineering decision.
          </p>
        </div>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          What To Do About It
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          If you recognized your organization in these signs, the good news is that visibility 
          problems are solvable. The first step is acknowledging that this is a problem worth 
          solving—not just "how things are."
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          That's exactly what we're building at VGAC: visibility into GPU queue scheduling that 
          answers the simple question everyone's asking—"when will my job run?"
        </p>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-electric-400/10 to-plasma-500/10 border border-electric-400/20">
          <h3 className="font-display text-xl font-bold text-white mb-4">
            Recognized your team?
          </h3>
          <p className="text-white/60 mb-6">
            Let's talk about how visibility could change things for you.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-400 text-midnight-900 font-display font-semibold rounded-lg hover:bg-electric-500 transition-all text-sm"
          >
            Get in touch
          </Link>
        </div>
      </>
    ),
  },

  "introducing-vgac": {
    title: "Introducing VGAC: Know When Your Jobs Will Run",
    category: "Product",
    date: "December 5, 2025",
    readTime: "5 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "We're building the visibility layer GPU clusters have been missing.",
    tags: ["Product", "Announcement"],
    content: (
      <>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-electric-400/30 via-plasma-500/20 to-flame-500/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-2xl bg-midnight-800/80 backdrop-blur flex items-center justify-center border border-white/20">
              <span className="font-display text-4xl font-bold gradient-text">V</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight-900 to-transparent" />
        </div>

        <h2 className="font-display text-3xl font-bold text-white mt-8 mb-6">
          The Problem We're Solving
        </h2>

        <p className="text-xl text-white/70 leading-relaxed mb-8">
          If you run GPU workloads on a shared cluster, you know this experience: you submit a job 
          and then... wait. How long? Could be minutes. Could be hours. There's no way to know.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          You refresh the queue status. Still waiting. You check your email. Nothing. You try to 
          do other work, but you can't focus because you need those results. So you refresh again.
        </p>

        <QuoteBlock 
          quote="I've spent more time watching queue status than watching my models train."
        />

        <p className="text-white/70 leading-relaxed mb-8">
          This uncertainty isn't just frustrating—it's expensive. Teams can't plan their work. 
          Engineers context-switch constantly. Experiments get delayed. And nobody can make good 
          decisions about capacity because nobody knows what's actually happening.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          What VGAC Does
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          VGAC gives you something simple but powerful: <strong className="text-white">visibility 
          into when your jobs will run.</strong>
        </p>

        <div className="my-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-electric-400/10 border border-electric-400/20">
            <h4 className="font-display font-semibold text-white mb-3">Before you submit</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              See expected wait times based on current cluster state. Know whether now is a good 
              time to submit, or if you should wait.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-plasma-500/10 border border-plasma-500/20">
            <h4 className="font-display font-semibold text-white mb-3">After you submit</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Get updates as conditions change. Know when to expect your job to start, and plan 
              your work accordingly.
            </p>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          No more guessing. No more refreshing status pages. No more "I don't know."
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Who It's For
        </h2>

        <div className="space-y-6 my-8">
          <div className="flex items-start gap-4 p-5 rounded-xl bg-midnight-800/50 border border-white/10">
            <Cpu className="w-6 h-6 text-electric-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-white mb-1">For ML Engineers</h4>
              <p className="text-white/60 text-sm">
                Know when your job will run so you can plan your day, not waste it checking status.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-midnight-800/50 border border-white/10">
            <Users className="w-6 h-6 text-electric-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-white mb-1">For Platform Teams</h4>
              <p className="text-white/60 text-sm">
                Give your users answers instead of shrugs. Reduce the "when will it run?" tickets.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-midnight-800/50 border border-white/10">
            <BarChart3 className="w-6 h-6 text-electric-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-white mb-1">For Leadership</h4>
              <p className="text-white/60 text-sm">
                Make capacity decisions based on actual data, not gut feelings.
              </p>
            </div>
          </div>
        </div>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Why Now
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          The GPU shortage has made every hour of compute precious. Teams can't afford the 
          inefficiency that comes with poor visibility. At the same time, AI workloads are 
          becoming more central to business strategy—meaning the cost of delays is higher 
          than ever.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          We've spent years working on GPU infrastructure and observability systems. We've 
          lived this problem. And we believe we can solve it.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          What's Next
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          We're currently building and testing with early partners. If you're frustrated with 
          queue uncertainty and want to be among the first to try VGAC, we'd love to hear from you.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          Our goal is simple: <strong className="text-white">submit with confidence.</strong>
        </p>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-electric-400/10 to-plasma-500/10 border border-electric-400/20">
          <h3 className="font-display text-xl font-bold text-white mb-4">
            Interested?
          </h3>
          <p className="text-white/60 mb-6">
            Request early access or just say hello—we'd love to talk about what you're 
            building and how we might help.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-400 text-midnight-900 font-display font-semibold rounded-lg hover:bg-electric-500 transition-all text-sm"
          >
            Request early access
          </Link>
        </div>
      </>
    ),
  },

  "hidden-costs-uncertainty": {
    title: "The Hidden Costs of 'I Don't Know When It Will Run'",
    category: "Perspective",
    date: "November 28, 2025",
    readTime: "7 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "Queue uncertainty doesn't just waste compute—it wastes engineer time, delays projects, and erodes team morale.",
    tags: ["Opinion", "Culture"],
    content: (
      <>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-plasma-500/20 via-flame-500/20 to-electric-400/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <DollarSign className="w-16 h-16 text-plasma-500 mx-auto mb-4" />
              <span className="font-display text-2xl font-bold text-white">Hidden Cost Analysis</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight-900 to-transparent" />
        </div>

        <p className="text-xl text-white/70 leading-relaxed mb-8">
          When we talk about GPU efficiency, we usually focus on utilization metrics. How many 
          GPUs are running? What's our average utilization? Are we leaving compute on the table?
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          These metrics matter. But they miss the hidden costs of queue uncertainty—the ones 
          that don't show up in your monitoring dashboards but absolutely show up in your 
          team's productivity, morale, and output.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Cost #1: Engineer Time
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          The most expensive resource in most AI teams isn't GPUs—it's engineers. Senior ML 
          engineers cost $300K-500K+ fully loaded. Their time is precious.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          When queues are unpredictable, engineers develop coping mechanisms:
        </p>

        <div className="my-8 space-y-3">
          {[
            "Checking status every 10 minutes (or more)",
            "Submitting duplicate jobs 'just in case'",
            "Working odd hours to avoid peak queues",
            "Over-requesting resources to avoid requeuing",
            "Context-switching between tasks while waiting",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-midnight-800/50">
              <span className="text-flame-500">•</span>
              <span className="text-white/60 text-sm">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Each of these destroys productivity. An engineer who's constantly checking job status 
          isn't doing deep work. An engineer who's working at 2 AM isn't going to be sharp the 
          next day.
        </p>

        <Callout title="The Math" type="info">
          If queue uncertainty causes each engineer to lose just 1 hour per day to status checking 
          and context-switching, that's 250 hours per year per engineer. At $200/hour fully loaded, 
          that's $50K per engineer annually—just from uncertainty.
        </Callout>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Cost #2: Experiment Velocity
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          ML is fundamentally an iterative process. The team that runs more experiments, learns 
          faster, and ships better products. Experiment velocity is a competitive advantage.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          Queue uncertainty directly kills velocity. When you don't know when results will come:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="p-5 rounded-xl bg-flame-500/10 border border-flame-500/20">
            <h4 className="font-semibold text-flame-400 mb-2">You can't plan next steps</h4>
            <p className="text-white/60 text-sm">
              "I'll decide what to do next when I see the results" leads to dead time.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-flame-500/10 border border-flame-500/20">
            <h4 className="font-semibold text-flame-400 mb-2">Teams become conservative</h4>
            <p className="text-white/60 text-sm">
              "I won't try that ambitious experiment because the queue risk is too high."
            </p>
          </div>
          <div className="p-5 rounded-xl bg-flame-500/10 border border-flame-500/20">
            <h4 className="font-semibold text-flame-400 mb-2">Feedback loops slow down</h4>
            <p className="text-white/60 text-sm">
              The time between "I have an idea" and "I know if it works" expands.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-flame-500/10 border border-flame-500/20">
            <h4 className="font-semibold text-flame-400 mb-2">Context gets lost</h4>
            <p className="text-white/60 text-sm">
              By the time results come, you've forgotten what you were testing.
            </p>
          </div>
        </div>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Cost #3: Team Morale
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          Nothing erodes trust faster than uncertainty. When someone asks "when will my job run?" 
          and the answer is "I don't know," frustration builds.
        </p>

        <QuoteBlock 
          quote="I feel like I'm fighting the system every day. It shouldn't be this hard to just run an experiment."
        />

        <p className="text-white/70 leading-relaxed mb-8">
          This frustration spreads. Engineers blame platform teams. Platform teams feel unfairly 
          blamed. Leadership loses confidence in timelines. The whole organization suffers from 
          a problem nobody can point to directly.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Cost #4: Bad Decisions
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          Without visibility, every infrastructure decision becomes a guess.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          "Queues are too long" usually leads to "we need more GPUs." But without visibility data, 
          you can't answer the real questions:
        </p>

        <div className="my-8 p-6 rounded-xl bg-midnight-800/50 border border-white/10">
          <ul className="space-y-3 text-white/60">
            <li className="flex items-start gap-2">
              <span className="text-electric-400 mt-1">•</span>
              Are queues long because of capacity, or because of scheduling patterns?
            </li>
            <li className="flex items-start gap-2">
              <span className="text-electric-400 mt-1">•</span>
              Would adding GPUs actually reduce wait times, or would they just get absorbed?
            </li>
            <li className="flex items-start gap-2">
              <span className="text-electric-400 mt-1">•</span>
              Are some teams over-requesting resources at others' expense?
            </li>
            <li className="flex items-start gap-2">
              <span className="text-electric-400 mt-1">•</span>
              What would happen if we changed scheduling policies?
            </li>
          </ul>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Without data, you might buy $500K in GPUs that don't solve the actual problem.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          The Solution Isn't More GPUs
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          Throwing hardware at the problem rarely works. If the issue is visibility, more 
          capacity just means more capacity to be uncertain about.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          The solution is visibility: knowing what's happening so everyone can make better 
          decisions. When teams can see queue patterns, they optimize naturally—no process 
          changes required.
        </p>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-electric-400/10 to-plasma-500/10 border border-electric-400/20">
          <h3 className="font-display text-xl font-bold text-white mb-4">
            Ready to eliminate uncertainty?
          </h3>
          <p className="text-white/60 mb-6">
            We're building visibility into GPU scheduling. Let's talk about what that could 
            mean for your team.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-400 text-midnight-900 font-display font-semibold rounded-lg hover:bg-electric-500 transition-all text-sm"
          >
            Get early access
          </Link>
        </div>
      </>
    ),
  },

  "scheduling-visibility-trend": {
    title: "Why AI Labs Are Prioritizing Scheduling Visibility in 2026",
    category: "Industry",
    date: "December 12, 2025",
    readTime: "8 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "From hyperscalers to startups, the smartest teams are investing in queue visibility.",
    tags: ["Industry", "Trends"],
    content: (
      <>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-electric-400/20 via-plasma-500/20 to-flame-500/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-electric-400 mx-auto mb-4" />
              <span className="font-display text-2xl font-bold text-white">Industry Trends 2026</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight-900 to-transparent" />
        </div>

        <p className="text-xl text-white/70 leading-relaxed mb-8">
          Over the past year, we've talked to dozens of teams running GPU infrastructure. A 
          clear pattern has emerged: the most sophisticated AI teams are treating scheduling 
          visibility as infrastructure, not a nice-to-have.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          Why is this shift happening now? And what does it mean for teams still treating 
          queue uncertainty as "just how things are"?
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Reason #1: GPU Scarcity Made It Critical
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          When GPUs were abundant, queue times didn't matter much. A job waiting an extra hour? 
          Annoying, but not catastrophic. Now, with demand vastly outpacing supply, every hour 
          of GPU time is precious.
        </p>

        <div className="my-8 grid grid-cols-2 gap-4">
          <StatCard value="400%" label="AI compute demand growth" icon={TrendingUp} color="electric" />
          <StatCard value="40%" label="GPU supply growth" icon={Cpu} color="flame" />
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          The gap between these numbers means that inefficiency—even small amounts—has become 
          unacceptable. Teams need to squeeze every bit of value from their GPU allocations.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Reason #2: Teams Got Bigger
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          A 5-person ML team can coordinate around queue times informally. "Hey, I'm about to 
          submit a big job—you might want to wait." This doesn't scale.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          At 50 people, informal coordination breaks down. At 500, it's impossible. The teams 
          that have scaled their AI orgs have learned that systematic visibility isn't 
          optional—it's necessary.
        </p>

        <Callout title="The Coordination Tax" type="info">
          Without visibility tools, coordination overhead grows with team size. The time spent 
          on "who's using the cluster right now" questions can consume hours per week across 
          large teams.
        </Callout>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Reason #3: The Competition Got Serious
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          AI is no longer experimental for most companies—it's core to the business. When 
          experiments directly impact revenue, waiting in queue stops being an annoyance and 
          starts being a strategic problem.
        </p>

        <QuoteBlock 
          quote="Every day we're slower than our competitors is a day they're pulling ahead. We can't afford to wait for queues."
        />

        <p className="text-white/70 leading-relaxed mb-8">
          This competitive pressure is forcing teams to treat infrastructure efficiency as a 
          strategic priority, not just an operational concern.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          What Leading Teams Are Doing
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          The teams ahead of this curve are investing in visibility infrastructure:
        </p>

        <div className="my-8 space-y-4">
          {[
            { title: "Instrumenting clusters for pattern detection", desc: "Understanding actual queue behavior, not just current state" },
            { title: "Giving engineers predictive visibility", desc: "Expected wait times before submission" },
            { title: "Building capacity planning on real data", desc: "Not gut feelings" },
            { title: "Treating scheduling as an observability problem", desc: "Same rigor as application monitoring" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-electric-400/5 border border-electric-400/20">
              <div className="p-2 rounded-lg bg-electric-400/10">
                <Eye className="w-5 h-5 text-electric-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          The Takeaway
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          Scheduling visibility is becoming table stakes for serious AI teams. The question 
          isn't whether you need it—it's how soon you'll get it, and whether you'll build 
          it yourself or use a purpose-built solution.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          Teams that get ahead of this trend will have a meaningful advantage: faster 
          iteration, happier engineers, and more efficient infrastructure. Teams that 
          don't will be left fighting fires while their competitors ship.
        </p>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-electric-400/10 to-plasma-500/10 border border-electric-400/20">
          <h3 className="font-display text-xl font-bold text-white mb-4">
            Want to get ahead of this trend?
          </h3>
          <p className="text-white/60 mb-6">
            We're building VGAC to make GPU queue visibility accessible to every team. 
            Let's talk about what we're building.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-400 text-midnight-900 font-display font-semibold rounded-lg hover:bg-electric-500 transition-all text-sm"
          >
            Get in touch
          </Link>
        </div>
      </>
    ),
  },
};

// Simple markdown posts
const simplePostsData: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string;
  tags: string[];
}> = {
  "planning-with-unpredictable-queues": {
    title: "Planning Experiments When Queue Times Are Unpredictable",
    category: "Best Practices",
    date: "November 20, 2025",
    readTime: "6 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "Practical strategies for ML teams to maintain velocity even when cluster queues are a black box.",
    tags: ["Tips", "Productivity"],
    content: `Most ML teams don't have perfect queue visibility. Until they do, how can they maintain experiment velocity? Here are practical strategies we've seen work.

## Strategy #1: Batch Your Submits

Instead of submitting jobs as you think of them, collect experiments and submit in batches at predictable times.

## Strategy #2: Have Backup Work Ready

When your GPU job is queued, what will you work on? The best teams always have CPU-bound work ready.

## Strategy #3: Use Your Queue Insights

Even without prediction tools, you can observe patterns. When are queues shortest? Which job sizes move fastest?

## Strategy #4: Right-Size Requests

The fastest way to slow down your queue time is to over-request resources. Be honest about what you actually need.

## Strategy #5: Communicate Proactively

If you're blocked on a GPU job, tell your team. If you see queue patterns, share them.

---

*Tired of workarounds? [See what we're building](#contact).*`,
  },
  "gpu-infrastructure-stack": {
    title: "The GPU Infrastructure Stack: Where Visibility Fits",
    category: "Industry",
    date: "November 15, 2025",
    readTime: "7 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "Schedulers, orchestrators, and monitoring tools—but what about knowing when jobs will actually run?",
    tags: ["Industry", "Infrastructure"],
    content: `Running GPU workloads at scale requires layers of infrastructure. Each layer has matured significantly. But there's a gap.

## The Modern GPU Stack

**Hardware**: GPUs, networking, storage.
**Orchestration**: Kubernetes, Slurm, custom schedulers.
**Monitoring**: Prometheus, Grafana, custom dashboards.
**ML Platforms**: MLflow, Weights & Biases, custom tooling.

## The Missing Layer

You can see GPU utilization. You can see queue length. You can see job status.

But can you answer: **"When will my job actually start?"**

For most teams, the answer is no.

## Where Visibility Fits

Queue prediction sits between the scheduler and the user. It takes signals from across the stack and translates them into actionable expectations.

---

*Interested in completing your GPU stack? [Talk to us](#contact).*`,
  },
  "transparent-queues": {
    title: "Why GPU Queues Should Be Transparent",
    category: "Perspective",
    date: "November 5, 2025",
    readTime: "6 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "Shared resources work better when everyone has visibility.",
    tags: ["Opinion", "Culture"],
    content: `When resources are shared, transparency makes everything work better.

## Trust

When people can see what's happening, they trust the system. When they can't, they assume the worst.

## Fairness

Transparency enables fairness. If everyone can see queue patterns, everyone can plan equally.

## Efficiency

Hidden information leads to bad decisions. Transparency fixes this naturally.

## Culture

Teams with transparent infrastructure have healthier cultures. Less blame, more collaboration.

---

*Agree? [Join us](#contact).*`,
  },
};

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const richPost = blogPostsData[slug];
  const simplePost = simplePostsData[slug];
  
  const post = richPost || simplePost || null;
  const isSimplePost = !richPost && !!simplePost;

  if (!post) {
    return (
      <main className="relative bg-midnight-900 min-h-screen">
        <Navigation />
        <section className="pt-32 pb-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/60 text-lg mb-6">This blog post is coming soon!</p>
            <Link href="/blog" className="text-electric-400 hover:underline">
              ← Back to all posts
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="relative bg-midnight-900 min-h-screen">
      <Navigation />

      {/* Article Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-electric-400 transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-electric-400 font-mono text-sm tracking-wider uppercase mb-4 block">
              {post.category}
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/50 mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-midnight-800/50 border border-white/5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-400 to-plasma-500 flex items-center justify-center">
                <span className="font-display font-bold text-midnight-900">
                  {post.author.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div>
                <p className="font-medium text-white">{post.author}</p>
                <p className="text-sm text-white/50">{post.authorRole}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 px-6">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {isSimplePost ? (
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-display prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-white
                prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-electric-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-strong:font-semibold
                prose-hr:border-white/10 prose-hr:my-12
              "
              dangerouslySetInnerHTML={{
                __html: (post as typeof simplePostsData[string]).content
                  .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/---/g, '<hr/>')
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
              }}
            />
          ) : (
            (post as typeof blogPostsData[string]).content
          )}
        </motion.article>
      </section>

      {/* Share Section */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="card-glass p-6">
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-sm">Share this post</span>
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg bg-midnight-700/50 text-white/50 hover:text-electric-400 hover:bg-midnight-700 transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="p-2 rounded-lg bg-midnight-700/50 text-white/50 hover:text-electric-400 hover:bg-midnight-700 transition-colors">
                  <Linkedin size={18} />
                </button>
                <button className="p-2 rounded-lg bg-midnight-700/50 text-white/50 hover:text-electric-400 hover:bg-midnight-700 transition-colors">
                  <LinkIcon size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

