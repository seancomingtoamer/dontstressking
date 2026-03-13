import { Metadata } from "next";
import {
  Heart,
  Utensils,
  Users,
  MapPin,
  DollarSign,
  Handshake,
  Building,
  TrendingUp,
} from "lucide-react";
import { MissionCard } from "@/components/mission-card";
import { EmailSignup } from "@/components/email-signup";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Mission & Impact - Don't Stress King",
  description:
    "See how Don't Stress King restores dignity to displaced men and single fathers through dignity kits, meals, and father support in Atlanta and Charlotte.",
};

export default function ImpactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#141414]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Mission &amp; <span className="text-gold">Impact</span>
          </h1>
          <p className="text-xl text-text-body">
            Transparency is non-negotiable. Here&apos;s exactly what we do and
            where your support goes.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="What We Do"
            subtitle="Three direct-action programs. No middlemen. No bureaucracy."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <MissionCard
              icon={Heart}
              title="Dignity Kits"
              description="Each kit includes socks, deodorant, toothbrush, toothpaste, and essential hygiene items. Cost: ~$12 per kit. We distribute them directly at shelters — hand to hand."
            />
            <MissionCard
              icon={Utensils}
              title="Shelter Meals"
              description="We coordinate and deliver meals to men at local shelters. Not catered corporate food — real meals, made with respect. We show up, serve, and sit with them."
            />
            <MissionCard
              icon={Users}
              title="Father Resources"
              description="Single dads need legal aid, job training, housing help, and someone in their corner. We connect fathers to local services and build community so no dad feels alone."
            />
          </div>
        </div>
      </section>

      {/* Where We Serve */}
      <section className="py-20 px-4 bg-[#141414]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Where We Serve"
            subtitle="Starting in two cities. Growing into a national movement."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-card-bg rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-gold" />
                <h3 className="text-2xl font-bold text-white">Atlanta, GA</h3>
              </div>
              <p className="text-text-body leading-relaxed">
                Home base. Atlanta has one of the highest per-capita homeless
                populations in the Southeast. We&apos;re on the ground in
                shelters, under bridges, and in communities where men need us.
              </p>
            </div>
            <div className="p-8 bg-card-bg rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-gold" />
                <h3 className="text-2xl font-bold text-white">
                  Charlotte, NC
                </h3>
              </div>
              <p className="text-text-body leading-relaxed">
                Second city. Charlotte is growing fast, and so is its displaced
                population. We&apos;re building volunteer networks and shelter
                partnerships to serve the Queen City.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-text-muted text-sm flex items-center justify-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Expansion cities coming 2027 — volunteer networks determine where
              we go next.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="Where Your Support Goes"
            subtitle="We keep it simple. No salaries. No office. No fluff."
          />
          <div className="space-y-4">
            <TransparencyRow
              icon={Heart}
              label="Dignity Kits (socks, hygiene supplies)"
              percentage={50}
            />
            <TransparencyRow
              icon={Utensils}
              label="Shelter Meals"
              percentage={30}
            />
            <TransparencyRow
              icon={Users}
              label="Father Support Resources"
              percentage={15}
            />
            <TransparencyRow
              icon={DollarSign}
              label="Operations (website, supplies transport)"
              percentage={5}
            />
          </div>
          <p className="text-text-muted text-sm text-center mt-6">
            95% of all support goes directly to serving men and fathers. The
            remaining 5% covers basic operational costs like transportation and
            website hosting.
          </p>
        </div>
      </section>

      {/* Monthly Impact */}
      <section className="py-20 px-4 bg-[#141414]">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            title="Monthly Impact Reports"
            subtitle="Every month, we'll publish exactly what we did, where we went, and how many people we served."
          />
          <div className="p-8 bg-card-bg rounded-xl border border-white/10">
            <TrendingUp className="w-10 h-10 text-gold mx-auto mb-4" />
            <p className="text-text-body">
              Our first impact report drops after our first full month of
              distributions. Sign up to get it delivered to your inbox.
            </p>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Partner With Us"
            subtitle="We're looking for shelters, businesses, and community organizations that want to make a real difference."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MissionCard
              icon={Building}
              title="Shelters"
              description="Let us distribute dignity kits and meals at your location. We handle everything — you just open the door."
            />
            <MissionCard
              icon={Handshake}
              title="Corporate Sponsors"
              description="Your company can sponsor dignity kits ($12 each), meals, or monthly distributions. 100% goes to supplies."
            />
            <MissionCard
              icon={Users}
              title="Community Orgs"
              description="Churches, veteran groups, father networks — let's combine forces and serve more people together."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#141414]">
        <div className="max-w-xl mx-auto text-center">
          <SectionHeader
            title="Stay in the Loop"
            subtitle="Get monthly impact reports, volunteer opportunities, and updates on the movement."
          />
          <EmailSignup compact />
        </div>
      </section>
    </div>
  );
}

function TransparencyRow({
  icon: Icon,
  label,
  percentage,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  percentage: number;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-gold-glow rounded-lg flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-white text-sm font-medium">{label}</span>
          <span className="text-gold font-bold">{percentage}%</span>
        </div>
        <div className="h-2 bg-card-bg rounded-full overflow-hidden">
          <div
            className="h-full bg-gold rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
