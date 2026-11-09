"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  HeartHandshake,
  Building2,
  ShieldCheck,
  ArrowLeft,
  LogOut,
  UserCheck,
  ArrowRight,
} from "lucide-react";

export default function NGOPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ngoId, setNgoId] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (ngoId.trim()) {
      setIsLoggedIn(true);
      // Automatically navigate to the profile dashboard upon successful login
      router.push("/ngo/profile");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setNgoId("");
  };

  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#050B16] text-white">
      {/* Background Image with Dark Atmospheric Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Together in Aid and Hope.png"
          alt="Login Background"
          className="h-full w-full object-cover object-center brightness-[4] filter transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-[#050B16]/60 to-[#050B16]/80" />
      </div>

      {/* Ambient background glows */}
      <div className="ambient-glow glow-one pointer-events-none" />
      <div className="ambient-glow glow-two pointer-events-none" />

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
          className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </header>

      {/* CENTERED LOGIN / LOGOUT PLATE */}
      <section className="relative z-10 mx-auto flex w-full max-w-md flex-col justify-center px-6 py-12">
        <div className="rounded-3xl border border-cyan-400/30 bg-[#050B16]/80 p-8 shadow-2xl backdrop-blur-xl">
          
          {/* Header Icon */}
          <div className="flex items-center gap-3 border-b border-white/10 pb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 shadow-lg">
              <Building2 size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">NGO Partner Portal</h1>
              <p className="text-xs text-slate-300">Verified Organization Portal</p>
            </div>
          </div>

          {!isLoggedIn ? (
            /* LOGIN STATE PLATE */
            <form onSubmit={handleLogin} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  NGO Registration ID / Email
                </label>
                <input
                  type="text"
                  required
                  value={ngoId}
                  onChange={(e) => setNgoId(e.target.value)}
                  placeholder="org@ngo.org"
                  className="w-full rounded-xl border border-cyan-400/20 bg-[#071525]/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
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
                  className="w-full rounded-xl border border-cyan-400/20 bg-[#071525]/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="pill-btn mt-2 w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                Login as NGO Partner
              </button>
            </form>
          ) : (
            /* LOGOUT STATE PLATE */
            <div className="mt-6 flex flex-col gap-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                <UserCheck size={28} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Welcome Back!</h2>
                <p className="text-xs text-slate-300 mt-1">
                  Logged in as: <span className="text-cyan-300 font-semibold">{ngoId}</span>
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300 text-left">
                <p className="font-semibold text-white mb-1">Quick Actions:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Post current resource requirements</li>
                  <li>Track incoming donation shipments</li>
                </ul>
              </div>

              {/* Go to NGO Dashboard Button */}
              <Link
                href="/ngo/profile"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-cyan-400 py-3.5 text-sm font-bold text-[#030914] shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-[1.02] transition-all"
              >
                <span>Go to NGO Dashboard</span>
                <ArrowRight size={16} />
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 w-full rounded-xl border border-red-500/40 bg-red-950/40 py-3 text-sm font-semibold text-red-300 transition-all hover:bg-red-900/60"
              >
                <LogOut size={16} />
                Logout from NGO Account
              </button>
            </div>
          )}

          <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-4 text-xs text-slate-400">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>Secure NGO Partner Network</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-4 text-center text-xs text-slate-500">
        ReBridge NGO Management Platform
      </footer>
    </main>
  );
}