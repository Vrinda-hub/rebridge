"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HeartHandshake,
  Search,
  Bell,
  Edit,
  MapPin,
  Mail,
  PackageCheck,
  Building,
  Heart,
  Star,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Sprout,
  ChevronDown,
} from "lucide-react";

export default function DonorDashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const recentDonations = [
    {
      id: "1",
      item: "Clothes",
      details: "15 pieces",
      ngo: "Asha Community Foundation",
      location: "Saharanpur, UP",
      date: "12 Oct 2025",
      status: "Completed",
      statusBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      icon: "👕",
    },
    {
      id: "2",
      item: "Books",
      details: "20 books",
      ngo: "Little Hearts NGO",
      location: "Dehradun, UK",
      date: "5 Oct 2025",
      status: "Accepted",
      statusBg: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      icon: "📚",
    },
    {
      id: "3",
      item: "Food (Cooked)",
      details: "10 kg",
      ngo: "Hope Foundation",
      location: "Roorkee, UK",
      date: "28 Sep 2025",
      status: "In Progress",
      statusBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      icon: "🍲",
    },
    {
      id: "4",
      item: "Toys",
      details: "12 pieces",
      ngo: "Smile Society",
      location: "Haridwar, UK",
      date: "20 Sep 2025",
      status: "Completed",
      statusBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      icon: "🧸",
    },
  ];

  return (
    <main className="min-h-screen bg-[#030814] text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#030814]/90 px-8 py-4 backdrop-blur-md">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <HeartHandshake className="h-8 w-8 text-[#32d9d2]" />
          <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Re<span className="brand-gradient">Bridge</span>
          </span>
        </Link>

        {/* Top Search Bar */}
        <div className="relative w-full max-w-md mx-6 hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search NGOs, needs, or locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-cyan-500/30 bg-[#071126] py-2.5 pl-11 pr-4 text-xs text-white placeholder-slate-400 outline-none transition-all focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          />
        </div>

        {/* Right User Actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#071126] text-slate-300 transition-colors hover:text-white"
          >
            <Bell size={18} />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-[#030814]" />
          </button>

          <div className="flex items-center gap-3 rounded-full border border-cyan-400/30 bg-[#071126] px-3 py-1.5">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-400 p-[2px]">
              <div className="h-full w-full rounded-full bg-[#071126] flex items-center justify-center font-bold text-xs text-cyan-300">
                VM
              </div>
            </div>
            <span className="text-xs font-semibold text-white hidden sm:block">Vrinda Mittal</span>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <section className="mx-auto max-w-7xl p-6 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-12">
          
          {/* MAIN LEFT SECTION (8 Columns) */}
          <div className="flex flex-col gap-6 lg:col-span-8">
            
            {/* User Profile Card */}
            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#07142b] via-[#091a38] to-[#040e21] p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  {/* Profile Picture Placeholder */}
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-cyan-400/60 shadow-[0_0_20px_rgba(50,217,210,0.3)]">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-600 to-emerald-700 text-2xl font-black text-white">
                      VM
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div>
                    <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                      Vrinda Mittal
                    </h1>
                    <p className="mt-1 flex items-center justify-center sm:justify-start gap-1.5 text-xs text-emerald-300 font-medium">
                      <Sprout size={14} /> Kindness makes a bigger impact.
                    </p>

                    <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-cyan-400" /> Saharanpur, Uttar Pradesh
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Mail size={14} className="text-cyan-400" /> vrinda.mittal2006@gmail.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* Edit Profile Button */}
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-950/40 px-4 py-2 text-xs font-semibold text-cyan-300 transition-all hover:border-cyan-300 hover:bg-cyan-900/50"
                >
                  <Edit size={14} /> Edit Profile
                </button>
              </div>

              {/* Decorative Subtle Leaf Art Overlay */}
              <div className="absolute right-4 bottom-2 opacity-15 pointer-events-none">
                <Sprout size={100} className="text-cyan-400" />
              </div>
            </div>

            {/* 4 Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                {
                  label: "Donations Made",
                  val: "3",
                  icon: <PackageCheck className="text-cyan-400" size={20} />,
                  bg: "from-cyan-950/40 to-cyan-900/20",
                  border: "border-cyan-500/30",
                },
                {
                  label: "NGOs Supported",
                  val: "2",
                  icon: <Building className="text-emerald-400" size={20} />,
                  bg: "from-emerald-950/40 to-emerald-900/20",
                  border: "border-emerald-500/30",
                },
                {
                  label: "Items Donated",
                  val: "12",
                  icon: <Heart className="text-purple-400" size={20} />,
                  bg: "from-purple-950/40 to-purple-900/20",
                  border: "border-purple-500/30",
                },
                {
                  label: "Positive Impact",
                  val: "100%",
                  icon: <Star className="text-amber-400" size={20} />,
                  bg: "from-amber-950/40 to-amber-900/20",
                  border: "border-amber-500/30",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-3.5 rounded-2xl border ${stat.border} bg-gradient-to-br ${stat.bg} p-4 backdrop-blur-md shadow-lg`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#030814]/60 border border-white/10">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{stat.val}</h3>
                    <p className="text-[11px] font-medium text-slate-300">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Donations Activity Table */}
            <div className="rounded-3xl border border-cyan-500/20 bg-[#061124]/90 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h2 className="text-lg font-bold text-white">Recent Donations</h2>
                <Link
                  href="#"
                  className="flex items-center gap-1 text-xs font-semibold text-cyan-300 hover:text-emerald-300 transition-colors"
                >
                  View All <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* Table Data Rows */}
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400">
                      <th className="pb-3 font-semibold">Item</th>
                      <th className="pb-3 font-semibold">NGO</th>
                      <th className="pb-3 font-semibold">Date</th>
                      <th className="pb-3 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {recentDonations.map((row) => (
                      <tr key={row.id} className="group hover:bg-white/5 transition-colors">
                        <td className="py-3.5">
                          <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-base">
                              {row.icon}
                            </span>
                            <div>
                              <p className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                                {row.item}
                              </p>
                              <p className="text-[10px] text-slate-400">{row.details}</p>
                            </div>
                          </div>
                        </td>

                        <td className="py-3.5">
                          <p className="font-semibold text-slate-200">{row.ngo}</p>
                          <p className="text-[10px] text-slate-400">{row.location}</p>
                        </td>

                        <td className="py-3.5 text-slate-300">{row.date}</td>

                        <td className="py-3.5 text-right">
                          <span
                            className={`inline-block rounded-full border px-3 py-1 text-[10px] font-extrabold ${row.statusBg}`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR PANEL (4 Columns) */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            
            {/* Your Impact Circular Meter Card */}
            <div className="flex flex-col items-center justify-center rounded-3xl border border-cyan-500/20 bg-[#061124]/90 p-8 text-center shadow-2xl backdrop-blur-xl">
              <h2 className="w-full text-left text-lg font-bold text-white">Your Impact</h2>

              {/* Glowing Impact Circle */}
              <div className="relative my-6 flex h-36 w-36 items-center justify-center rounded-full border-4 border-cyan-400/40 bg-gradient-to-br from-cyan-950/60 to-emerald-950/60 shadow-[0_0_40px_rgba(50,217,210,0.25)]">
                <div className="flex flex-col items-center">
                  <Sprout size={28} className="text-emerald-300 mb-1" />
                  <span className="text-3xl font-black text-white">12</span>
                  <span className="text-[10px] font-medium text-slate-300">Items Donated</span>
                </div>
              </div>

              <p className="max-w-xs text-xs leading-relaxed text-slate-300">
                You're helping create a kinder, greener and more equal tomorrow.
              </p>

              {/* Heart Illustration */}
              <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-950/40 border border-cyan-400/30 text-cyan-300">
                <Heart size={32} />
              </div>
            </div>

            {/* Quote Card */}
            <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-[#041224] via-[#061c2c] to-[#020a14] p-8 shadow-2xl backdrop-blur-xl">
              <div className="relative z-10">
                <p className="text-xl font-bold italic leading-relaxed text-white">
                  “Kindness costs nothing, but means everything.”
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-[2px] w-12 bg-emerald-400" />
                  <Heart size={18} className="text-emerald-300 fill-emerald-300/30" />
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent pointer-events-none" />
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}