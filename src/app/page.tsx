"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { Metrics } from "@/components/Metrics";
import { UseCases } from "@/components/UseCases";
import { Blog } from "@/components/Blog";
import { Team } from "@/components/Team";
import { Investors } from "@/components/Investors";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Problems />
      <Solution />
      <HowItWorks />
      <Metrics />
      <UseCases />
      <Blog />
      <Team />
      <Investors />
      <CTA />
      <Footer />
    </main>
  );
}

