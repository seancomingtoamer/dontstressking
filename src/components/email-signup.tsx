"use client";

import { useState } from "react";
import { Send, Crown, Loader2, CheckCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function EmailSignup({ id }: { id?: string }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
          body: JSON.stringify({ firstName: firstName.trim(), email: email.trim() }),
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
          className="w-full px-4 py-3 bg-card-bg border border-white/10 rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-gold transition-colors"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 bg-card-bg border border-white/10 rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-gold transition-colors"
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
