import Image from "next/image";
import { Heart, Utensils, Users, ArrowRight, Shield } from "lucide-react";
import { MissionCard } from "@/components/mission-card";
import { ImpactCounter } from "@/components/impact-counter";
import { EmailSignup } from "@/components/email-signup";
import { SectionHeader } from "@/components/section-header";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a] to-[#141414]" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold blur-[200px]" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="mb-8 animate-glow-pulse inline-block rounded-2xl">
            <Image
              src="/crown-logo.jpg"
              alt="Don't Stress King Crown Logo"
              width={160}
              height={160}
              className="mx-auto rounded-2xl"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Don&apos;t Stress, <span className="text-gold">King.</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-body mb-6 max-w-2xl mx-auto">
            Restoring dignity to displaced men and single fathers in Atlanta &amp;
            Charlotte
          </p>

          <div className="inline-flex items-center gap-2 bg-card-bg border border-white/10 rounded-full px-5 py-2 mb-8">
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-text-body text-sm">
              Founded by Sean Broughton &mdash; Navy Veteran, Single Father,
              Community Servant
            </span>
          </div>

          <div className="mb-8">
            <EmailSignup id="signup" />
          </div>

          <p className="text-text-muted text-sm">
            100% volunteer-run. Every dollar goes to supplies.
          </p>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="The Mission"
            subtitle="Three pillars of restoring dignity, one community at a time."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MissionCard
              icon={Heart}
              title="Socks & Hygiene"
              description="Distributing dignity kits — socks, deodorant, and hygiene essentials — at shelters across Atlanta and Charlotte. Because dignity starts with the basics."
            />
            <MissionCard
              icon={Utensils}
              title="Feed the Brothers"
              description="Providing meals to displaced men at local shelters. A hot meal isn't just food — it's a reminder that someone gives a damn."
            />
            <MissionCard
              icon={Users}
              title="Father Support"
              description="Connecting single dads to resources, community, and support systems. No father should have to figure it all out alone."
            />
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <section className="py-20 px-4 bg-[#141414]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Building the Movement"
            subtitle="We're just getting started. Here's where we're headed."
          />
          <ImpactCounter />
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            title="The Vision"
            subtitle=""
          />
          <p className="text-text-body text-lg leading-relaxed mb-6">
            It starts with one man handing another man a pair of socks at a
            shelter. It grows into a network of volunteers across cities. It
            becomes a movement that shows every displaced man and every single
            father that they haven&apos;t been forgotten.
          </p>
          <p className="text-text-body text-lg leading-relaxed mb-8">
            DontStressKing isn&apos;t a corporate charity. It&apos;s a community
            of real people doing real work. No overhead. No office. Just hands,
            hearts, and supplies going directly to the brothers who need them
            most.
          </p>
          <a
            href="#signup"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-black font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Join the Movement <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-[#141414]">
        <div className="max-w-xl mx-auto text-center">
          <SectionHeader
            title="Be Part of Something Real"
            subtitle="Drop your email. We'll keep you posted on distributions, volunteer opportunities, and how you can help."
          />
          <EmailSignup />
        </div>
      </section>
    </div>
  );
}
