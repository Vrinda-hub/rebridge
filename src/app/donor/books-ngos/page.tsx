"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HeartHandshake,
  ArrowLeft,
  BookOpen,
  Building2,
  CheckCircle2,
  Clock,
  MapPin,
  Flame,
} from "lucide-react";

interface NGOBooksNeed {
  id: string;
  name: string;
  verified: boolean;
  distance: string;
  specificNeed: string;
  priority: "Urgent" | "High" | "Medium";
  availability: string;
  neededQuantity: string;
  neededBy: string;
}

const booksNGOs: NGOBooksNeed[] = [
  {
    id: "books-1",
    name: "Asha Community Foundation",
    verified: true,
    distance: "3.2 km away",
    specificNeed: "Needs children's storybooks & primary school textbooks",
    priority: "High",
    availability: "Accepting donations",
    neededQuantity: "30 books",
    neededBy: "Within 3 days",
  },
  {
    id: "books-2",
    name: "Gyanodaya Education Trust",
    verified: true,
    distance: "1.5 km away",
    specificNeed: "Needs STEM science books & reference dictionaries",
    priority: "Urgent",
    availability: "Accepting donations",
    neededQuantity: "50 books",
    neededBy: "Within 2 days",
  },
  {
    id: "books-3",
    name: "Bright Futures Library",
    verified: true,
    distance: "4.8 km away",
    specificNeed: "Needs novel series, notebooks & stationeries",
    priority: "Medium",
    availability: "Accepting donations",
    neededQuantity: "25 sets",
    neededBy: "Within 1 week",
  },
];

export default function BooksNGOsPage() {
  const [filterPriority, setFilterPriority] = useState<string>("All");

  const filteredNGOs = booksNGOs.filter((ngo) => {
    if (filterPriority === "All") return true;
    return ngo.priority.toLowerCase() === filterPriority.toLowerCase();
  });

  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#030914] text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Hands of Hope in Blue.png"
          alt="Books Category Background"
          className="h-full w-full object-cover object-center brightness-[3] filter transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/75 to-[#030914]/85" />
      </div>

      <div className="ambient-glow glow-one pointer-events-none" />
      <div className="ambient-glow glow-two pointer-events-none" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6 md:px-14">
        <Link
  href="/donor/miscellaneous-ngos"
  className="group relative flex flex-col items-center justify-center rounded-3xl border border-amber-400/30 bg-[#071328]/80 p-6 backdrop-blur-xl transition-all hover:scale-105 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]"
>
  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-950/80 border border-amber-400/40 text-amber-300 text-3xl">
    📦
  </div>
  <h3 className="mt-4 text-base font-bold text-white group-hover:text-amber-300 transition-colors">
    Miscellaneous
  </h3>
  <p className="mt-1 text-xs text-slate-400 text-center">
    Toys, appliances, hygiene products & essentials
  </p>
</Link><Link href="/" className="flex items-center gap-3">
          <HeartHandshake className="h-9 w-9 text-[#32d9d2]" />
          <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Re<span className="brand-gradient">Bridge</span>
          </span>
        </Link>
        <Link
          href="/donor/select-category"
          className="flex items-center gap-2 text-xs text-slate-300 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Categories
        </Link>
      </header>

      {/* Main Content */}
      <section className="relative z-10 mx-auto my-auto w-full max-w-6xl px-6 py-8">
        <div className="mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-950/40 px-4 py-1.5 text-xs text-blue-300 backdrop-blur-md">
            <BookOpen size={14} className="text-blue-300 animate-pulse" />
            <span>Category: Books & Educational Material</span>
          </div>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            NGOs Requesting{" "}
            <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent">
              Books & Stationeries
            </span>
          </h1>

          <p className="mt-2 text-sm text-slate-300">
            Arranged on a priority & urgency basis. Choose an NGO to view details and donate.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">Filter Priority:</span>
            {["All", "Urgent", "High", "Medium"].map((priority) => (
              <button
                key={priority}
                onClick={() => setFilterPriority(priority)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  filterPriority === priority
                    ? "bg-blue-400 text-[#030914] shadow-[0_0_15px_rgba(96,165,250,0.5)]"
                    : "border border-white/15 bg-white/5 text-slate-300 hover:border-blue-400/50 hover:text-white"
                }`}
              >
                {priority}
              </button>
            ))}
          </div>
        </div>

        {/* NGO Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredNGOs.map((ngo) => (
            <div
              key={ngo.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-blue-400/20 bg-[#050B16]/85 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
            >
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-950/80 border border-blue-400/40 text-blue-300 shadow-md">
                    <Building2 size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {ngo.name}
                      </h2>
                      {ngo.verified && (
                        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold text-emerald-400 border border-emerald-500/30">
                          <CheckCircle2 size={12} /> Verified
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-slate-400 flex items-center gap-1">
                      <MapPin size={13} className="text-blue-400" />
                      NGO · {ngo.distance}
                    </p>
                    <p className="mt-2 text-xs font-medium text-slate-200">
                      {ngo.specificNeed}
                    </p>
                  </div>
                </div>

                <div className="my-5 h-[1px] w-full bg-white/10" />

                <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs">
                  <div>
                    <span className="block text-[11px] font-medium text-slate-400 mb-1">Need priority</span>
                    <span className={`inline-flex items-center gap-1 font-extrabold ${
                      ngo.priority === "Urgent" ? "text-rose-400" : ngo.priority === "High" ? "text-amber-400" : "text-emerald-300"
                    }`}>
                      {ngo.priority === "Urgent" && <Flame size={14} className="animate-bounce" />}
                      {ngo.priority}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium text-slate-400 mb-1">Availability</span>
                    <span className="font-semibold text-emerald-400">{ngo.availability}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium text-slate-400 mb-1">Needed quantity</span>
                    <span className="font-bold text-white text-sm">{ngo.neededQuantity}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium text-slate-400 mb-1">Needed by</span>
                    <span className="font-bold text-white text-sm flex items-center gap-1">
                      <Clock size={13} className="text-blue-400" />
                      {ngo.neededBy}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-2xl bg-white/10 py-3.5 text-center text-xs font-bold text-white transition-all hover:bg-blue-400 hover:text-[#030914] hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] active:scale-[0.99]"
              >
                Make A Request
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-20 py-4 text-center text-xs text-slate-500">
        ReBridge Books Priority Matching System
      </footer>
    </main>
  );
}