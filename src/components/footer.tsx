import Link from "next/link";
import { Crown, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Crown className="w-6 h-6 text-gold" strokeWidth={1.5} />
              <span className="text-lg font-bold text-white">
                Don&apos;t Stress <span className="text-gold">King</span>
              </span>
            </div>
            <p className="text-text-body text-sm">
              Restoring dignity to displaced men and single fathers in Atlanta
              &amp; Charlotte. Every man deserves to be treated like a king.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/story"
                className="text-text-body hover:text-gold text-sm transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="/impact"
                className="text-text-body hover:text-gold text-sm transition-colors"
              >
                Mission &amp; Impact
              </Link>
              <Link
                href="/resources"
                className="text-text-body hover:text-gold text-sm transition-colors"
              >
                Resources
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:dontstressking@agentmail.to"
                className="text-text-body hover:text-gold text-sm transition-colors"
              >
                dontstressking@agentmail.to
              </a>
              <a
                href="https://www.instagram.com/seancomingtoamerica/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-body hover:text-gold text-sm transition-colors flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                @seancomingtoamerica
              </a>
              <Link
                href="/#signup"
                className="text-text-body hover:text-gold text-sm transition-colors"
              >
                Join the Movement
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} DontStressKing.com &mdash; A Sean
            Broughton Initiative. 100% volunteer-run. Every dollar goes to
            supplies.
          </p>
        </div>
      </div>
    </footer>
  );
}
