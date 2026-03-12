"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Story" },
  { href: "/impact", label: "Impact" },
  { href: "/resources", label: "Resources" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/crown-logo.jpg"
              alt="Don't Stress King"
              width={36}
              height={36}
              className="rounded"
            />
            <span className="text-lg font-bold text-white">
              Don&apos;t Stress <span className="text-gold">King</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-body hover:text-gold transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#signup"
              className="bg-gold hover:bg-gold-dark text-black font-bold px-5 py-2 rounded-lg transition-colors"
            >
              Join the Movement
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2">
            <div className="flex flex-col gap-3 pt-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-body hover:text-gold transition-colors font-medium px-2"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#signup"
                className="bg-gold hover:bg-gold-dark text-black font-bold px-5 py-2 rounded-lg transition-colors text-center"
                onClick={() => setOpen(false)}
              >
                Join the Movement
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
