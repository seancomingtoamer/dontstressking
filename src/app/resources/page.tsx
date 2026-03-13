import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Heart,
  Home,
  Scale,
} from "lucide-react";
import { EmailSignup } from "@/components/email-signup";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Resources - Don't Stress King",
  description:
    "Free resources for displaced men and single fathers in Atlanta and Charlotte. Shelter directories, legal aid, job training, mental health support, and housing assistance.",
};

interface Shelter {
  name: string;
  address: string;
  phone: string;
  hours: string;
  services: string;
}

const atlantaShelters: Shelter[] = [
  {
    name: "Atlanta Mission - My Sister's House / Shepherd's Inn",
    address: "165 Ivan Allen Jr Blvd NW, Atlanta, GA 30313",
    phone: "(404) 367-2493",
    hours: "24/7 intake available",
    services: "Emergency shelter, recovery programs, job training, meals",
  },
  {
    name: "Gateway Center",
    address: "275 Pryor St SW, Atlanta, GA 30303",
    phone: "(404) 215-6600",
    hours: "Intake 7AM-7PM",
    services:
      "Emergency shelter, substance abuse treatment, mental health, housing assistance",
  },
  {
    name: "Salvation Army Red Shield Lodge",
    address: "400 Luckie St NW, Atlanta, GA 30313",
    phone: "(404) 522-1584",
    hours: "Check-in 4PM-8PM",
    services: "Emergency shelter for men, meals, case management",
  },
  {
    name: "Nicholas House",
    address: "830 Boulevard SE, Atlanta, GA 30312",
    phone: "(404) 622-4410",
    hours: "By appointment",
    services:
      "Family shelter, transitional housing, employment support, childcare",
  },
  {
    name: "Covenant Community",
    address: "Multiple locations in Atlanta",
    phone: "(404) 589-9756",
    hours: "Varies by program",
    services: "Transitional housing for men, job readiness, life skills",
  },
];

const charlotteShelters: Shelter[] = [
  {
    name: "Charlotte Rescue Mission - Rebound Men's Shelter",
    address: "907 W 1st St, Charlotte, NC 28202",
    phone: "(704) 333-4673",
    hours: "24/7 intake",
    services: "Emergency shelter, addiction recovery, meals, job training",
  },
  {
    name: "The Salvation Army Center of Hope",
    address: "534 Spratt St, Charlotte, NC 28206",
    phone: "(704) 348-2560",
    hours: "Intake 1PM-4PM",
    services: "Emergency shelter, meals, case management, substance abuse help",
  },
  {
    name: "Urban Ministry Center / Men's Shelter of Charlotte",
    address: "945 N College St, Charlotte, NC 28206",
    phone: "(704) 347-0278",
    hours: "Check-in 5PM",
    services:
      "Emergency shelter for men, meals, showers, laundry, housing support",
  },
  {
    name: "Roof Above (formerly Urban Ministry Center)",
    address: "945 N College St, Charlotte, NC 28206",
    phone: "(704) 347-0278",
    hours: "Day services 8AM-4PM",
    services: "Day services, meals, mail service, ID assistance, housing help",
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#141414]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-gold">Resources</span> for Kings
          </h1>
          <p className="text-xl text-text-body">
            Real help for real situations. Shelters, legal aid, job training, and
            mental health support — all free.
          </p>
        </div>
      </section>

      {/* Atlanta Shelters */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Atlanta Shelters"
            subtitle="Emergency shelter, meals, and services for men in the Atlanta area."
          />
          <div className="space-y-4">
            {atlantaShelters.map((shelter) => (
              <ShelterCard key={shelter.name} shelter={shelter} />
            ))}
          </div>
        </div>
      </section>

      {/* Charlotte Shelters */}
      <section className="py-16 px-4 bg-[#141414]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Charlotte Shelters"
            subtitle="Emergency shelter, meals, and services for men in the Charlotte area."
          />
          <div className="space-y-4">
            {charlotteShelters.map((shelter) => (
              <ShelterCard key={shelter.name} shelter={shelter} />
            ))}
          </div>
        </div>
      </section>

      {/* Single Father Resources */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Single Father Resources"
            subtitle="Support for dads doing it on their own."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResourceCard
              icon={Scale}
              title="Legal Aid"
              items={[
                "Atlanta Legal Aid Society — (404) 524-5811",
                "Legal Aid of North Carolina — (866) 219-5262",
                "Georgia Legal Services — (404) 206-5175",
                "Fathers' rights consultation and custody support",
              ]}
            />
            <ResourceCard
              icon={Briefcase}
              title="Job Training"
              items={[
                "Goodwill Career Centers — Atlanta & Charlotte",
                "Year Up Atlanta — Free job training for 18-29",
                "NCWorks Career Centers — Charlotte region",
                "Hire Heroes USA — Free for veterans",
              ]}
            />
            <ResourceCard
              icon={Home}
              title="Housing Assistance"
              items={[
                "Atlanta Housing Authority — (404) 892-4700",
                "Charlotte Housing Authority — (704) 336-5183",
                "HUD Housing Counseling — (800) 569-4287",
                "Habitat for Humanity — Both cities",
              ]}
            />
            <ResourceCard
              icon={GraduationCap}
              title="Education & GED"
              items={[
                "Atlanta Technical College — Free GED classes",
                "Central Piedmont Community College — Charlotte",
                "Literacy Action Inc — Free adult education",
                "FAFSA.gov — Financial aid for returning students",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Mental Health */}
      <section className="py-16 px-4 bg-[#141414]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="Mental Health & Crisis Lines"
            subtitle="It's okay to not be okay. These lines are free, confidential, and available 24/7."
          />
          <div className="space-y-4">
            <CrisisLine
              name="988 Suicide & Crisis Lifeline"
              number="Call or text 988"
              description="Free, confidential, 24/7 support for anyone in crisis."
            />
            <CrisisLine
              name="Veterans Crisis Line"
              number="Call 988, press 1"
              description="Specialized support for veterans and their families."
            />
            <CrisisLine
              name="SAMHSA National Helpline"
              number="1-800-662-4357"
              description="Free treatment referrals and information for substance abuse and mental health."
            />
            <CrisisLine
              name="Crisis Text Line"
              number="Text HOME to 741741"
              description="Free crisis counseling via text message, 24/7."
            />
            <CrisisLine
              name="National Alliance on Mental Illness (NAMI)"
              number="1-800-950-6264"
              description="Mental health support, education, and local resources."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-xl mx-auto text-center">
          <SectionHeader
            title="Know a Resource We're Missing?"
            subtitle="We're always adding to this list. Join the movement and help us connect more men to the help they need."
          />
          <EmailSignup compact />
        </div>
      </section>
    </div>
  );
}

function ShelterCard({ shelter }: { shelter: Shelter }) {
  return (
    <div className="p-6 bg-card-bg rounded-xl border border-white/10 hover:border-gold/30 transition-colors">
      <h3 className="text-lg font-bold text-white mb-3">{shelter.name}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <span className="text-text-body">{shelter.address}</span>
        </div>
        <div className="flex items-start gap-2">
          <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <span className="text-text-body">{shelter.phone}</span>
        </div>
        <div className="flex items-start gap-2">
          <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <span className="text-text-body">{shelter.hours}</span>
        </div>
        <div className="flex items-start gap-2">
          <Heart className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <span className="text-text-body">{shelter.services}</span>
        </div>
      </div>
    </div>
  );
}

function ResourceCard({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
}) {
  return (
    <div className="p-6 bg-card-bg rounded-xl border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gold-glow rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-gold" />
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <ExternalLink className="w-3 h-3 text-gold shrink-0 mt-1" />
            <span className="text-text-body">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CrisisLine({
  name,
  number,
  description,
}: {
  name: string;
  number: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-card-bg rounded-xl border border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
        <h3 className="text-white font-bold">{name}</h3>
        <span className="text-gold font-mono font-bold text-lg">{number}</span>
      </div>
      <p className="text-text-body text-sm">{description}</p>
    </div>
  );
}
