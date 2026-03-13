import { Metadata } from "next";
import { Crown, Anchor, Heart, Users, Camera } from "lucide-react";
import { EmailSignup } from "@/components/email-signup";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Our Story - Don't Stress King",
  description:
    "The story of Sean Broughton — Navy veteran, single father, IT professional — and why he started Don't Stress King to help displaced men and single fathers.",
};

export default function StoryPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#141414]">
        <div className="max-w-3xl mx-auto text-center">
          <Crown className="w-12 h-12 text-gold mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            The Story Behind the <span className="text-gold">Crown</span>
          </h1>
          <p className="text-xl text-text-body">
            Every movement starts with one person who refuses to look away.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Navy */}
          <div className="flex gap-6">
            <div className="hidden sm:flex flex-col items-center">
              <div className="w-12 h-12 bg-gold-glow rounded-lg flex items-center justify-center">
                <Anchor className="w-6 h-6 text-gold" />
              </div>
              <div className="w-px h-full bg-white/10 mt-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Built by the Navy
              </h2>
              <p className="text-text-body leading-relaxed mb-4">
                I served in the United States Navy. The military didn&apos;t just
                teach me discipline — it taught me that you don&apos;t leave
                anyone behind. That the man next to you is your responsibility.
                That service isn&apos;t something you do once and forget. It&apos;s
                who you are.
              </p>
              <p className="text-text-body leading-relaxed">
                That training never left me. It&apos;s in every decision I make,
                every system I build, and now — every pair of socks I hand to a
                man at a shelter.
              </p>
            </div>
          </div>

          {/* Father */}
          <div className="flex gap-6">
            <div className="hidden sm:flex flex-col items-center">
              <div className="w-12 h-12 bg-gold-glow rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-gold" />
              </div>
              <div className="w-px h-full bg-white/10 mt-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Single Father of Two
              </h2>
              <p className="text-text-body leading-relaxed mb-4">
                I&apos;m raising two daughters. If you&apos;ve ever been a single
                parent, you know — there&apos;s no manual. There&apos;s no backup
                plan. There&apos;s just you, showing up every single day, trying
                to be enough.
              </p>
              <p className="text-text-body leading-relaxed">
                Being a single father gave me empathy I didn&apos;t know I was
                missing. It connected me to every other dad out there doing it
                alone. And it broke my heart to realize how many fathers are
                displaced, forgotten, and struggling with no support system at
                all.
              </p>
            </div>
          </div>

          {/* IT Career */}
          <div className="flex gap-6">
            <div className="hidden sm:flex flex-col items-center">
              <div className="w-12 h-12 bg-gold-glow rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <div className="w-px h-full bg-white/10 mt-4" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                15 Years Building Systems
              </h2>
              <p className="text-text-body leading-relaxed mb-4">
                I&apos;ve spent 15 years in IT building systems that work.
                Infrastructure. Automation. Solutions that scale. I know how to
                take something small and turn it into something that serves
                thousands.
              </p>
              <p className="text-text-body leading-relaxed">
                DontStressKing isn&apos;t just a good idea — it&apos;s a system.
                Every signup, every volunteer, every dollar is tracked and
                directed exactly where it needs to go. No waste. No overhead.
                Just results.
              </p>
            </div>
          </div>

          {/* The Moment */}
          <div className="flex gap-6">
            <div className="hidden sm:flex flex-col items-center">
              <div className="w-12 h-12 bg-gold-glow rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-gold" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                The Moment That Started It All
              </h2>
              <p className="text-text-body leading-relaxed mb-4">
                I&apos;ve walked past shelters in Atlanta and Charlotte. I&apos;ve
                seen men — good men — sitting on curbs with nothing. Not because
                they&apos;re lazy. Not because they don&apos;t care. Because the
                system failed them. Because life hit hard and nobody caught them.
              </p>
              <p className="text-text-body leading-relaxed mb-4">
                I kept thinking: what if that was me? What if one bad month, one
                medical bill, one lost job put me right there? And I realized —
                the difference between me and that man is thinner than most
                people think.
              </p>
              <p className="text-text-body leading-relaxed">
                So I stopped walking past. I started walking in. With socks. With
                deodorant. With meals. With the simple message:{" "}
                <span className="text-gold font-semibold">
                  &ldquo;Don&apos;t stress, King. You&apos;re not forgotten.&rdquo;
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Placeholders */}
      <section className="py-16 px-4 bg-[#141414]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="On the Ground"
            subtitle="Photos from distributions and community work coming soon."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video bg-card-bg rounded-xl border border-white/10 flex items-center justify-center"
              >
                <Camera className="w-10 h-10 text-text-muted" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Men? */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Why Men?" />
          <div className="space-y-6">
            <div className="p-6 bg-card-bg rounded-xl border border-white/10">
              <p className="text-3xl font-bold text-gold mb-2">70%</p>
              <p className="text-text-body">
                of the homeless population in the U.S. is male. Men are the
                majority of those sleeping on streets, yet receive a fraction of
                targeted support.
              </p>
            </div>
            <div className="p-6 bg-card-bg rounded-xl border border-white/10">
              <p className="text-3xl font-bold text-gold mb-2">2.5M</p>
              <p className="text-text-body">
                single fathers in the United States are raising children alone —
                often with fewer resources and support networks than their
                counterparts.
              </p>
            </div>
            <div className="p-6 bg-card-bg rounded-xl border border-white/10">
              <p className="text-3xl font-bold text-gold mb-2">40%</p>
              <p className="text-text-body">
                of homeless men are veterans. The people who served our country
                are among the most vulnerable on our streets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-4 bg-[#141414]">
        <div className="max-w-3xl mx-auto text-center">
          <Crown className="w-10 h-10 text-gold mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-6">
            &ldquo;I&apos;m just one man. But one man with a crown and a mission
            can start a movement.&rdquo;
          </blockquote>
          <p className="text-gold font-semibold">— Sean Broughton, Founder</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-xl mx-auto text-center">
          <SectionHeader
            title="Walk With Us"
            subtitle="Join the movement. Get updates on distributions, volunteer events, and how you can make a difference."
          />
          <EmailSignup compact />
        </div>
      </section>
    </div>
  );
}
