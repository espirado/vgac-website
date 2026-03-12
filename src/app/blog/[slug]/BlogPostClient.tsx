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
  Target,
  Activity,
  Layers,
  Server,
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

  "calibration-matters": {
    title: "Why Calibration Matters More Than Accuracy for GPU Scheduling",
    category: "Engineering",
    date: "March 10, 2026",
    readTime: "8 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "AUROC tells you if predictions are good. Calibration tells you if you can trust them enough to automate.",
    tags: ["Engineering", "ML", "Calibration"],
    content: (
      <>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-electric-400/20 via-plasma-500/20 to-flame-500/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Target className="w-16 h-16 text-electric-400 mx-auto mb-4" />
              <span className="font-display text-2xl font-bold text-white">Calibration Deep Dive</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight-900 to-transparent" />
        </div>

        <p className="text-xl text-white/70 leading-relaxed mb-8">
          When we tell people VGAC's prediction model has an AUROC of 0.969, they're impressed. When we tell them the ECE
          is 0.005, they ask: "What's ECE?" That second number is the one that actually matters for building trustworthy AI
          systems.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Accuracy vs. Calibration: The Difference
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          <strong className="text-white">Accuracy</strong> (measured by AUROC) tells you whether the model can distinguish between
          jobs that will wait a long time and jobs that won't. A high AUROC means the model ranks risks correctly.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          <strong className="text-white">Calibration</strong> (measured by ECE — Expected Calibration Error) tells you something
          deeper: when the model says there's a 70% chance of a long wait, does that actually happen 70% of the time? A model
          can be highly accurate but badly calibrated — it ranks correctly but the probabilities are wrong.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-10">
          <div className="p-6 rounded-xl bg-flame-500/10 border border-flame-500/20">
            <h4 className="font-semibold text-flame-400 mb-2">High Accuracy, Bad Calibration</h4>
            <p className="text-white/60 text-sm">Model says 90% chance of long wait for most jobs. It's right about ranking, but 90% doesn't mean 90%. You can't trust the number itself.</p>
          </div>
          <div className="p-6 rounded-xl bg-electric-400/10 border border-electric-400/20">
            <h4 className="font-semibold text-electric-400 mb-2">High Accuracy, Good Calibration</h4>
            <p className="text-white/60 text-sm">Model says 70% and it's right 70% of the time. Says 30% and it's right 30% of the time. The probabilities are meaningful.</p>
          </div>
        </div>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Why Calibration Unlocks Autonomy
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          This distinction is critical for autonomous systems. In VGAC, we have agents that can take actions — scale up nodes,
          preempt lower-priority jobs, trigger recalibration. The question is: when should they act on their own vs. ask a human?
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          If the model's probabilities are well-calibrated, we can use them directly as confidence scores. A 95% prediction from a
          calibrated model genuinely means "we're very confident." That lets us gate autonomous actions:
        </p>

        <div className="my-10 p-8 rounded-2xl bg-gradient-to-br from-midnight-800/80 to-midnight-800/40 border border-white/10">
          <h4 className="font-display text-lg font-semibold text-white mb-6">Calibration-Gated Autonomy</h4>
          <div className="space-y-4 font-mono text-sm">
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-white/60">Calibration Score &gt; 0.85</span>
              <span className="text-electric-400 font-semibold">AUTONOMOUS — agent acts</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-white/60">Calibration Score &gt; 0.60</span>
              <span className="text-yellow-400 font-semibold">NOTIFY — agent recommends</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-white/60">Calibration Score ≤ 0.60</span>
              <span className="text-flame-400 font-semibold">ESCALATE — human decides</span>
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Without calibration, you can't do this safely. A miscalibrated model might say "95% confident" when it's actually 60%
          confident. Autonomous actions based on that will go wrong, erode trust, and eventually get the whole system turned off.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          VGAC's Numbers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
          <StatCard value="0.969" label="AUROC (discrimination)" icon={TrendingUp} color="electric" />
          <StatCard value="0.005" label="ECE (calibration)" icon={Target} color="green" />
          <StatCard value="0.011" label="Brier Score" icon={BarChart3} color="plasma" />
          <StatCard value="<10ms" label="Inference latency" icon={Zap} color="flame" />
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          An ECE of 0.005 means our predicted probabilities are off by less than half a percent on average. When VGAC says
          there's a 70% chance your job will wait more than 5 minutes, the actual rate is between 69.5% and 70.5%. That's
          the kind of precision that makes autonomous operations safe.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          The Prediction Impact Index
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          We go one step further with the <strong className="text-white">Prediction Impact Index (PII)</strong> — a metric
          that quantifies the real-world cost of miscalibration:
        </p>

        <div className="my-8 p-6 rounded-xl bg-midnight-800/50 border border-white/10 font-mono text-center text-lg text-electric-400">
          PII = ECE × job_volume × cluster_criticality
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          When PII exceeds a threshold, the Calibrator agent automatically triggers model recalibration. This creates a
          self-improving loop: the model monitors its own reliability and fixes itself before the predictions degrade enough
          to cause problems.
        </p>

        <QuoteBlock
          quote="Calibration isn't a nice-to-have metric. It's the foundation that determines whether your AI system can be trusted to act on its own."
        />

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-electric-400/10 to-plasma-500/10 border border-electric-400/20">
          <h3 className="font-display text-xl font-bold text-white mb-4">
            Explore the codebase
          </h3>
          <p className="text-white/60 mb-6">
            VGAC is open source. See how calibration-gated autonomy works in practice.
          </p>
          <a
            href="https://github.com/aespira/vgac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-400 text-midnight-900 font-display font-semibold rounded-lg hover:bg-electric-500 transition-all text-sm"
          >
            View on GitHub
          </a>
        </div>
      </>
    ),
  },

  "building-vgac": {
    title: "Building VGAC: From Idea to Platform",
    category: "Product",
    date: "March 12, 2026",
    readTime: "10 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "The story of building a GPU observability platform — from frustration to 150 endpoints.",
    tags: ["Product", "Journey"],
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

        <p className="text-xl text-white/70 leading-relaxed mb-8">
          VGAC started with a simple frustration: "Why is my job taking so long?" After years of working on GPU clusters — managing
          them, debugging queue slowdowns, watching teams waste hours refreshing status pages — I decided to build the tool I wished existed.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          The Core Insight
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          GPU clusters behave nothing like CPU systems, but everyone monitors them the same way. Standard dashboards show utilization
          graphs, but they can't answer: "This job will wait 2 hours because these 3 jobs are holding memory they're not using."
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          VGAC is purpose-built for how GPUs actually work. Not graphs — answers. Not utilization percentages — predicted wait times
          before you submit, updated in real-time as the queue changes.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          What We Built
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          The platform grew from a prediction API into a comprehensive observability system. Here's what it covers today:
        </p>

        <div className="my-10 space-y-4">
          {[
            { icon: BarChart3, title: "Queue Intelligence", desc: "Wait-time distribution, bifurcation analysis, GPU block rate, percentile breakdowns (P50-P99), SLO tracking." },
            { icon: Cpu, title: "GPU Telemetry", desc: "Per-GPU utilization heatmaps, temperature, power draw, memory usage. Health scoring across the cluster." },
            { icon: Eye, title: "Pattern Detection", desc: "AI-detected recurring patterns: peak-hour contention, cascading delays, memory pressure precursors, burst submissions." },
            { icon: Zap, title: "LLM Inference Analytics", desc: "Prefill/decode phase analysis, KV cache health (hit rate, fragmentation, HBM utilization), disaggregation scoring." },
            { icon: TrendingUp, title: "Calibrated Predictions", desc: "AUROC 0.969, ECE 0.005. Trained on 11,982 GPU jobs. Sub-10ms inference." },
            { icon: Users, title: "Autonomous Agents", desc: "Five agents (Observer, Predictor, Calibrator, Actor, Copilot) with calibration-gated autonomy." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-midnight-800/50 border border-white/5">
              <div className="p-2 rounded-lg bg-electric-400/10">
                <item.icon className="w-5 h-5 text-electric-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          The Architecture
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          VGAC runs as two independent tiers. The <strong className="text-white">Platform Tier</strong> handles observability:
          a FastAPI backend with 150+ endpoints, ClickHouse for analytics, Redis for caching, and a Next.js frontend with 12 dashboard
          pages. The <strong className="text-white">Agentic Tier</strong> is fully serverless: Lambda functions for each agent,
          DynamoDB for state, API Gateway for routing, and Bedrock for the Copilot's reasoning.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          The key architectural decision was <strong className="text-white">calibration-gated autonomy</strong>. Every agent checks
          the model's calibration score before taking action. Above 0.85: act autonomously. Between 0.60-0.85: recommend to a human.
          Below 0.60: escalate. This means the system is self-aware about its own reliability.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
          <StatCard value="150+" label="API endpoints" icon={BarChart3} color="electric" />
          <StatCard value="12" label="Dashboard pages" icon={Eye} color="plasma" />
          <StatCard value="5" label="Autonomous agents" icon={Users} color="green" />
          <StatCard value="11,982" label="Jobs trained on" icon={TrendingUp} color="flame" />
        </div>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Lessons Learned
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          The biggest insight: this isn't a prediction problem. It's an <strong className="text-white">observability problem</strong>.
          Researchers don't just need wait time estimates — they need to understand why the queue is slow, what patterns are causing
          contention, and how to configure their jobs differently.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          LLM inference workloads taught me that the next generation of GPU scheduling looks fundamentally different. Prefill/decode
          phase imbalance, KV cache fragmentation, and NIXL transfer latency are the real bottlenecks — invisible to traditional
          schedulers.
        </p>

        <QuoteBlock
          quote="Calibration isn't just a model metric. It's the bridge between 'good predictions' and 'trustworthy automation.'"
        />

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-electric-400/10 to-plasma-500/10 border border-electric-400/20">
          <h3 className="font-display text-xl font-bold text-white mb-4">
            VGAC is open source
          </h3>
          <p className="text-white/60 mb-6">
            Explore the full platform, run it locally, or deploy to your own cluster.
          </p>
          <a
            href="https://github.com/aespira/vgac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-400 text-midnight-900 font-display font-semibold rounded-lg hover:bg-electric-500 transition-all text-sm"
          >
            View on GitHub
          </a>
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

  "calibration-gated-autonomy": {
    title: "Building Calibration-Gated Autonomy for AI Agents",
    category: "Architecture",
    date: "March 5, 2026",
    readTime: "6 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "How VGAC's five-agent architecture uses a Prediction Impact Index to decide when to act, when to recommend, and when to defer.",
    tags: ["Architecture", "Agents"],
    content: (
      <>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-plasma-500/20 via-electric-400/20 to-flame-500/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Layers className="w-16 h-16 text-plasma-500 mx-auto mb-4" />
              <span className="font-display text-2xl font-bold text-white">Agent Architecture</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight-900 to-transparent" />
        </div>

        <p className="text-xl text-white/70 leading-relaxed mb-8">
          Most "AI agent" systems follow a simple pattern: observe something, run it through a model, take an action.
          The problem is deciding <strong className="text-white">when the model is trustworthy enough to act on its own</strong>.
          VGAC solves this with calibration-gated autonomy.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Five Agents, One Feedback Loop
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          VGAC's agentic layer consists of five specialized agents, each with a distinct role:
        </p>

        <div className="my-10 space-y-4">
          {[
            { icon: Eye, title: "Observer Agent", desc: "Ingests GPU telemetry, cluster state, and queue events. Builds a real-time model of what's happening across the cluster.", color: "text-electric-400", bg: "bg-electric-400/10" },
            { icon: TrendingUp, title: "Predictor Agent", desc: "Runs the calibrated ML model against current state. Outputs wait-time predictions with confidence intervals.", color: "text-plasma-500", bg: "bg-plasma-500/10" },
            { icon: Target, title: "Calibrator Agent", desc: "Monitors prediction accuracy in real-time. Triggers recalibration when the Prediction Impact Index (PII) drifts.", color: "text-green-400", bg: "bg-green-500/10" },
            { icon: Zap, title: "Actor Agent", desc: "Executes autonomous actions: node scaling, job preemption, priority adjustments. Only acts when calibration score exceeds threshold.", color: "text-flame-500", bg: "bg-flame-500/10" },
            { icon: Users, title: "Copilot Agent", desc: "Powered by Amazon Bedrock. Provides natural language explanations, answers 'why is my job stuck?' queries, and generates Slurm scripts.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-midnight-800/50 border border-white/5">
              <div className={`p-2 rounded-lg ${item.bg}`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          The Gating Mechanism
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          The key innovation is that the Actor agent doesn't just check whether the prediction is above a threshold — it checks whether
          the <strong className="text-white">model's calibration</strong> is above a threshold. The flow:
        </p>

        <div className="my-10 p-8 rounded-2xl bg-gradient-to-br from-midnight-800/80 to-midnight-800/40 border border-white/10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-electric-400/20 text-electric-400 flex items-center justify-center font-bold text-sm">1</span>
              <p className="text-white/70"><strong className="text-white">Observer</strong> detects queue anomaly (e.g. GPU jobs waiting 3x longer than normal)</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-plasma-500/20 text-plasma-500 flex items-center justify-center font-bold text-sm">2</span>
              <p className="text-white/70"><strong className="text-white">Predictor</strong> forecasts that wait times will exceed SLO in the next 30 minutes</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">3</span>
              <p className="text-white/70"><strong className="text-white">Calibrator</strong> confirms: calibration score is 0.91, PII is within bounds</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-flame-500/20 text-flame-500 flex items-center justify-center font-bold text-sm">4</span>
              <p className="text-white/70"><strong className="text-white">Actor</strong> autonomously scales up 2 GPU nodes and adjusts job priorities</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold text-sm">5</span>
              <p className="text-white/70"><strong className="text-white">Copilot</strong> generates a natural-language explanation for the cluster admin</p>
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          If the Calibrator had reported a score below 0.60, the Actor would have escalated to a human instead of acting. This
          ensures the system never takes autonomous actions it isn't confident about.
        </p>

        <Callout title="Selective Evaluation" type="success">
          Not every prediction triggers a full calibration check. VGAC uses selective evaluation — only predictions that
          would lead to actions are evaluated for calibration quality. This keeps latency low while maintaining safety.
        </Callout>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Observable Decision Logging
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          Every autonomous decision is logged with full context: what was observed, what was predicted, what the calibration
          score was, and what action was taken (or deferred). This creates a complete audit trail and enables post-hoc analysis
          of agent behavior.
        </p>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-electric-400/10 to-plasma-500/10 border border-electric-400/20">
          <h3 className="font-display text-xl font-bold text-white mb-4">
            Dive deeper
          </h3>
          <p className="text-white/60 mb-6">
            The full agent implementation is open source. See how calibration gating works in practice.
          </p>
          <a
            href="https://github.com/aespira/vgac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-400 text-midnight-900 font-display font-semibold rounded-lg hover:bg-electric-500 transition-all text-sm"
          >
            View on GitHub
          </a>
        </div>
      </>
    ),
  },

  "llm-inference-observability": {
    title: "LLM Inference Needs New Observability — Not More Grafana",
    category: "Industry",
    date: "February 24, 2026",
    readTime: "7 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "Prefill/decode phase imbalance, KV cache fragmentation, and NIXL transfer bottlenecks are invisible to traditional monitoring.",
    tags: ["Industry", "LLM", "Inference"],
    content: (
      <>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-flame-500/20 via-electric-400/20 to-plasma-500/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Activity className="w-16 h-16 text-flame-500 mx-auto mb-4" />
              <span className="font-display text-2xl font-bold text-white">LLM Inference Observability</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight-900 to-transparent" />
        </div>

        <p className="text-xl text-white/70 leading-relaxed mb-8">
          LLM inference looks simple from the outside: prompt in, tokens out. Underneath, it's a complex multi-phase pipeline
          where traditional monitoring is blind to the bottlenecks that actually matter.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          The Problem with Standard GPU Monitoring
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          Prometheus + Grafana gives you GPU utilization, memory usage, and throughput. For LLM inference, these metrics hide
          more than they reveal:
        </p>

        <div className="my-10 space-y-4">
          {[
            { icon: AlertTriangle, title: "Prefill/Decode Imbalance", desc: "Prefill is compute-bound; decode is memory-bound. Average GPU utilization looks fine even when one phase is starved." },
            { icon: Server, title: "KV Cache Fragmentation", desc: "HBM fills with cached key-value pairs. A 95% hit rate can hide 30% fragmentation that causes eviction storms." },
            { icon: Zap, title: "NIXL Transfer Latency", desc: "NVIDIA's NIXL protocol moves KV caches between nodes. A 10ms network hiccup cascades into 200ms tail latencies." },
            { icon: BarChart3, title: "Batch Scheduling Interference", desc: "Continuous batching means new requests join mid-decode. Without phase-aware metrics, you can't see the interference." },
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
          What LLM Inference Actually Needs
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          VGAC tracks what matters for LLM serving:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-10">
          <div className="p-6 rounded-xl bg-electric-400/10 border border-electric-400/20">
            <h4 className="font-semibold text-electric-400 mb-2">Phase-Aware Metrics</h4>
            <p className="text-white/60 text-sm">
              Separate prefill and decode latencies, GPU utilization per phase, and a phase imbalance ratio
              that tells you exactly which side is the bottleneck.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-plasma-500/10 border border-plasma-500/20">
            <h4 className="font-semibold text-plasma-500 mb-2">KV Cache Analytics</h4>
            <p className="text-white/60 text-sm">
              Hit rate, eviction rate, HBM utilization, fragmentation score, and optimization recommendations
              (e.g., "enable PagedAttention" or "reduce max sequence length").
            </p>
          </div>
          <div className="p-6 rounded-xl bg-flame-500/10 border border-flame-500/20">
            <h4 className="font-semibold text-flame-400 mb-2">NIXL Transfer Monitoring</h4>
            <p className="text-white/60 text-sm">
              Per-transfer latency, bandwidth utilization, backend selection (RDMA vs TCP),
              and scaling recommendations based on observed transfer patterns.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
            <h4 className="font-semibold text-green-400 mb-2">Disaggregation Scoring</h4>
            <p className="text-white/60 text-sm">
              A composite score that quantifies how effectively prefill and decode stages are separated
              across the serving fleet, with recommendations for topology changes.
            </p>
          </div>
        </div>

        <QuoteBlock
          quote="You can't optimize what you can't observe. For LLM inference, the things worth observing are invisible to traditional monitoring."
        />

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-electric-400/10 to-plasma-500/10 border border-electric-400/20">
          <h3 className="font-display text-xl font-bold text-white mb-4">
            See it in action
          </h3>
          <p className="text-white/60 mb-6">
            VGAC's inference analytics dashboard shows all of this in a single view. Try it out.
          </p>
          <a
            href="https://github.com/aespira/vgac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-400 text-midnight-900 font-display font-semibold rounded-lg hover:bg-electric-500 transition-all text-sm"
          >
            View on GitHub
          </a>
        </div>
      </>
    ),
  },

  "vgac-v4-release": {
    title: "VGAC v4: Inference Analytics, NIXL, and Slurm Templates",
    category: "Product",
    date: "February 15, 2026",
    readTime: "4 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "The latest release adds LLM phase analysis, NIXL transfer monitoring, HPC policy visibility, and a Slurm script generator.",
    tags: ["Product", "Release"],
    content: (
      <>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-electric-400/30 via-plasma-500/20 to-flame-500/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-2xl bg-midnight-800/80 backdrop-blur flex items-center justify-center border border-white/20">
              <span className="font-display text-3xl font-bold gradient-text">v4</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight-900 to-transparent" />
        </div>

        <p className="text-xl text-white/70 leading-relaxed mb-8">
          VGAC v4 is our biggest release yet. Here's everything new.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          LLM Inference Dashboard
        </h2>
        <p className="text-white/70 leading-relaxed mb-8">
          A dedicated dashboard for LLM serving workloads. Track prefill vs decode latency, phase imbalance ratios,
          per-model efficiency, and the cache health metrics that actually predict performance degradation. 
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          NVIDIA NIXL Integration
        </h2>
        <p className="text-white/70 leading-relaxed mb-8">
          First-class support for NVIDIA's NIXL protocol. Monitor cross-node KV cache transfers, track per-agent
          bandwidth utilization, get scaling recommendations, and see backend selection analysis (RDMA vs TCP vs shared memory).
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          HPC Policy Visibility
        </h2>
        <p className="text-white/70 leading-relaxed mb-8">
          For Slurm-managed clusters: partition policies, fairshare status, reservation tracking, pending job explanation
          ("your job is waiting because partition X is at capacity and user Y has higher fairshare priority"), and topology-aware
          scheduling analysis.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Slurm Script Generator
        </h2>
        <p className="text-white/70 leading-relaxed mb-8">
          Tell VGAC what you want to run, and it generates an optimized Slurm submission script based on current cluster state.
          Multi-GPU jobs get NCCL environment variables, torchrun setup, and log directories pre-configured. The script
          includes a lint score and warnings about common mistakes (over-requested resources, wrong partition, missing modules).
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Pattern Detection v2
        </h2>
        <p className="text-white/70 leading-relaxed mb-8">
          Upgraded AI pattern detection with four new pattern types: peak-hour contention, cascading delay chains,
          memory pressure precursors, and burst submission detection. Each pattern includes severity scoring and
          recommended actions.
        </p>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-electric-400/10 to-plasma-500/10 border border-electric-400/20">
          <h3 className="font-display text-xl font-bold text-white mb-4">
            Try v4 now
          </h3>
          <p className="text-white/60 mb-6">
            Clone the repo, run <code className="text-electric-400 bg-midnight-800 px-1.5 py-0.5 rounded text-sm">docker compose up</code>,
            and explore every feature locally.
          </p>
          <a
            href="https://github.com/aespira/vgac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-400 text-midnight-900 font-display font-semibold rounded-lg hover:bg-electric-500 transition-all text-sm"
          >
            View on GitHub
          </a>
        </div>
      </>
    ),
  },

  "gpu-idle-time-cost": {
    title: "The $250K Problem: GPU Idle Time at Scale",
    category: "Perspective",
    date: "January 30, 2026",
    readTime: "5 min read",
    author: "Andrew Espira",
    authorRole: "Founder & Lead Engineer",
    excerpt: "A 10% utilization improvement on a 100-GPU cluster saves a quarter million per year.",
    tags: ["Opinion", "Economics"],
    content: (
      <>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-flame-500/20 via-plasma-500/20 to-electric-400/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <DollarSign className="w-16 h-16 text-flame-500 mx-auto mb-4" />
              <span className="font-display text-2xl font-bold text-white">The Cost of Idle GPUs</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight-900 to-transparent" />
        </div>

        <p className="text-xl text-white/70 leading-relaxed mb-8">
          Here's a number that keeps GPU cluster operators up at night: a single H100 GPU costs roughly $2-4 per hour.
          On a 100-GPU cluster, every percentage point of wasted utilization costs $175K-350K annually.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
          <StatCard value="$3/hr" label="Per H100 GPU" icon={DollarSign} color="flame" />
          <StatCard value="100" label="GPUs in cluster" icon={Cpu} color="electric" />
          <StatCard value="8,760" label="Hours per year" icon={Clock} color="plasma" />
          <StatCard value="$2.6M" label="Annual spend" icon={TrendingUp} color="green" />
        </div>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          Where the Time Goes
        </h2>

        <p className="text-white/70 leading-relaxed mb-8">
          GPU idle time comes from three sources, and traditional monitoring only catches the obvious one:
        </p>

        <div className="my-10 space-y-4">
          {[
            { title: "Queue Gaps", pct: "5-15%", desc: "Time between one job ending and the next starting. The scheduler needs time to allocate, and jobs don't pack perfectly." },
            { title: "Over-Provisioning", pct: "10-20%", desc: "Jobs requesting 8 GPUs but only utilizing 4-5. Teams pad requests because they can't predict what they need." },
            { title: "Scheduling Blindness", pct: "5-10%", desc: "Sub-optimal job ordering. A 2-GPU job that could fill a gap sits behind an 8-GPU job because the scheduler doesn't predict futures." },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-midnight-800/50 border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white">{item.title}</h4>
                <span className="text-flame-400 font-mono font-bold">{item.pct}</span>
              </div>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Combined, these account for 20-45% of cluster capacity. On our example 100-GPU cluster, that's 
          <strong className="text-flame-400"> $520K-$1.17M in annual waste</strong>.
        </p>

        <h2 className="font-display text-3xl font-bold text-white mt-16 mb-6">
          What 10% Improvement Actually Looks Like
        </h2>

        <div className="my-10 p-8 rounded-2xl bg-gradient-to-br from-midnight-800/80 to-midnight-800/40 border border-white/10">
          <h4 className="font-display text-lg font-semibold text-white mb-6">Impact Model</h4>
          <div className="space-y-4 font-mono text-sm">
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-white/60">Current effective utilization</span>
              <span className="text-white">65%</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-white/60">With visibility-driven optimization</span>
              <span className="text-electric-400">75%</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-white/60">Improvement</span>
              <span className="text-electric-400">+10 percentage points</span>
            </div>
            <div className="flex justify-between items-center py-3 text-lg">
              <span className="text-white font-semibold">Annual savings</span>
              <span className="text-electric-400 font-bold">~$260K</span>
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          The math is straightforward. The hard part is knowing <em>where</em> the waste is. That's an observability
          problem, not a hardware problem.
        </p>

        <QuoteBlock
          quote="You don't need more GPUs. You need to see how the ones you have are actually being used."
        />

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-electric-400/10 to-plasma-500/10 border border-electric-400/20">
          <h3 className="font-display text-xl font-bold text-white mb-4">
            Find your cluster's waste
          </h3>
          <p className="text-white/60 mb-6">
            VGAC shows exactly where GPU time goes — and what you can do about it.
          </p>
          <a
            href="https://github.com/aespira/vgac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-400 text-midnight-900 font-display font-semibold rounded-lg hover:bg-electric-500 transition-all text-sm"
          >
            View on GitHub
          </a>
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






