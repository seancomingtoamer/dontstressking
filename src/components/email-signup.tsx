"use client";

import { useState } from "react";
import { Send, Crown, Loader2, CheckCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const ROLES = [
  { value: "volunteer", label: "Volunteer", desc: "Hands on the ground — distribute kits, serve meals" },
  { value: "donate_supplies", label: "Donate Supplies", desc: "Socks, hygiene items, meals, care packages" },
  { value: "corporate_sponsor", label: "Corporate Sponsor", desc: "Company-level sponsorship of kits or distributions" },
  { value: "financial_donor", label: "Financial Donor", desc: "Individual monetary contributions" },
  { value: "employer_hiring", label: "Employer / Hiring Partner", desc: "Willing to hire displaced men or single fathers" },
  { value: "shelter_org", label: "Shelter / Organization Partner", desc: "Shelter, community org, or nonprofit partnership" },
  { value: "faith_community", label: "Faith Community / Church", desc: "Church or faith-based partnership" },
  { value: "professional_services", label: "Professional Services", desc: "Legal, medical, counseling — pro bono support" },
  { value: "single_father", label: "Single Father Seeking Support", desc: "I'm a dad who could use resources or community" },
  { value: "spread_the_word", label: "Spread the Word", desc: "Share on social media, tell your network" },
];

interface EmailSignupProps {
  id?: string;
  compact?: boolean;
}

export function EmailSignup({ id, compact = false }: EmailSignupProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [roles, setRoles] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function toggleRole(value: string) {
    setRoles((prev) =>
      prev.includes(value) ? prev.filter((r) => r !== value) : [...prev, value]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch(
        "https://seanpro.app.n8n.cloud/webhook/dontstressking-signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            roles,
            message: message.trim(),
          }),
        }
      );
      if (!res.ok) throw new Error("Signup failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div id={id} className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
        <p className="text-2xl font-bold text-white mb-2">
          Welcome to the movement, King.
        </p>
        <p className="text-text-body">
          Check your inbox for a personal welcome from Sean.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-card-bg border border-white/10 rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-gold transition-colors";

  if (compact) {
    return (
      <form id={id} onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Crown className="w-5 h-5 text-gold" />
            <span className="text-text-body text-sm font-medium">
              Join the Movement
            </span>
          </div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={inputClass}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputClass}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-gold hover:bg-gold-dark text-black font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status === "loading" ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {status === "loading" ? "Joining..." : "Join the Movement"}
          </button>
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">{errorMsg}</p>
          )}
        </div>
      </form>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Crown className="w-6 h-6 text-gold" />
          <span className="text-white text-lg font-bold">
            Join the Movement
          </span>
        </div>

        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First Name *"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Contact row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="email"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputClass}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* How can you help */}
        <div>
          <p className="text-white font-semibold mb-3">
            How can you help? <span className="text-text-muted font-normal text-sm">(check all that apply)</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ROLES.map((role) => (
              <label
                key={role.value}
                className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                  roles.includes(role.value)
                    ? "bg-gold/10 border-gold/40"
                    : "bg-card-bg border-white/10 hover:border-white/20"
                }`}
              >
                <input
                  type="checkbox"
                  checked={roles.includes(role.value)}
                  onChange={() => toggleRole(role.value)}
                  className="mt-1 accent-[#d4a017] w-4 h-4 shrink-0"
                />
                <div>
                  <span className="text-white text-sm font-medium">
                    {role.label}
                  </span>
                  <p className="text-text-muted text-xs mt-0.5">{role.desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-white font-semibold mb-2 block">
            Anything else? <span className="text-text-muted font-normal text-sm">(optional)</span>
          </label>
          <textarea
            placeholder="Tell us about yourself, your organization, or how you'd like to get involved..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-gold hover:bg-gold-dark text-black font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 text-lg"
        >
          {status === "loading" ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
          {status === "loading" ? "Joining..." : "Join the Movement"}
        </button>
        {status === "error" && (
          <p className="text-red-400 text-sm text-center">{errorMsg}</p>
        )}
        <p className="text-text-muted text-xs text-center">
          100% volunteer-run. We&apos;ll never share your info. No spam, ever.
        </p>
      </div>
    </form>
  );
}
