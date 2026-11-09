"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // 1. ADD THIS IMPORT HERE AT THE TOP
import Link from "next/link";
import {
  HeartHandshake,
  Heart,
  Sparkles,
  ArrowLeft,
  LogOut,
  UserCheck,
} from "lucide-react";

export default function DonorPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  
  const router = useRouter(); // 2. INITIALIZE ROUTER HERE INSIDE THE COMPONENT

  // 3. UPDATE THE handleLogin FUNCTION HERE
const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();
  if (email.trim()) {
    setIsLoggedIn(true);
    router.push("/donor/select-category"); // Directs donor to category selection first
  }
};

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
  };

  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#050B16] text-white">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
        src="/images/Together in Aid and Hope.png"
          alt="Donor Background"
          className="h-full w-full object-cover object-center brightness-[3] filter transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-[#050B16]/65 to-[#050B16]/80" />
      </div>

      {/* Ambient background glows & floating particles */}
      <div className="ambient-glow glow-one pointer-events-none" />
      <div className="ambient-glow glow-two pointer-events-none" />
      <div className="ambient-glow glow-three pointer-events-none" />
      <div className="particle particle-one pointer-events-none" />
      <div className="particle particle-two pointer-events-none" />
      <div className="particle particle-three pointer-events-none" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6 md:px-14">
        <Link href="/" className="flex items-center gap-3">
          <HeartHandshake className="h-9 w-9 text-[#32d9d2]" />
          <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Re<span className="brand-gradient">Bridge</span>
          </span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-xs text-slate-300 hover:text-emerald-300 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </header>

      {/* CENTERED LOGIN / LOGOUT PLATE */}
      <section className="relative z-10 mx-auto my-auto flex w-full max-w-md flex-col justify-center px-6 py-12">
        <div className="rounded-3xl border border-emerald-400/30 bg-[#050B16]/85 p-8 shadow-2xl backdrop-blur-xl">
          
          {/* Header Icon */}
          <div className="flex items-center gap-3 border-b border-white/10 pb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-950/80 border border-emerald-400/50 text-emerald-300 shadow-lg">
              <Heart size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Donor Community Portal</h1>
              <p className="text-xs text-slate-300">Surplus Resource Sharing</p>
            </div>
          </div>

          {!isLoggedIn ? (
            /* LOGIN STATE PLATE */
            <form onSubmit={handleLogin} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-emerald-400/20 bg-[#071525]/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-emerald-400/20 bg-[#071525]/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
              </div>

              <button
                type="submit"
                className="pill-btn mt-2 w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                Login as Donor
              </button>
            </form>
          ) : (
            /* LOGOUT STATE PLATE */
            <div className="mt-6 flex flex-col gap-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                <UserCheck size={28} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Welcome Back!</h2>
                <p className="text-xs text-slate-300 mt-1">Logged in as: <span className="text-emerald-300 font-semibold">{email}</span></p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300 text-left">
                <p className="font-semibold text-white mb-1">Donor Dashboard:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>List surplus food, clothes, or toys</li>
                  <li>Schedule NGO pickup points</li>
                </ul>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 w-full rounded-xl border border-red-500/40 bg-red-950/40 py-3 text-sm font-semibold text-red-300 transition-all hover:bg-red-900/60"
              >
                <LogOut size={16} />
                Logout from Donor Account
              </button>
            </div>
          )}

          <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-4 text-xs text-slate-400">
            <Sparkles size={16} className="text-cyan-400" />
            <span>Small donations. Meaningful changes.</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-4 text-center text-xs text-slate-500">
        ReBridge Community Donor Portal
      </footer>
    </main>
  );
}