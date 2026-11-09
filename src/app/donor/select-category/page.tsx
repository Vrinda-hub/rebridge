"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  HeartHandshake,
  Utensils,
  Shirt,
  BookOpen,
  Boxes,
  ArrowLeft,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function SelectCategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  const categories = [
    {
      id: "food",
      label: "Surplus Food",
      icon: <Utensils className="h-9 w-9 sm:h-10 sm:w-10 text-emerald-300" />,
      gradient: "from-emerald-400/30 via-teal-500/20 to-cyan-500/30",
      border: "border-emerald-400/60 hover:border-emerald-300",
      glow: "shadow-[0_0_35px_rgba(52,211,153,0.4)]",
      textColor: "from-emerald-300 via-teal-200 to-cyan-200",
      position: "col-start-2 row-start-1",
    },
    {
      id: "clothes",
      label: "Clothes",
      icon: <Shirt className="h-9 w-9 sm:h-10 sm:w-10 text-cyan-300" />,
      gradient: "from-cyan-400/30 via-blue-500/20 to-indigo-500/30",
      border: "border-cyan-400/60 hover:border-cyan-300",
      glow: "shadow-[0_0_35px_rgba(34,211,238,0.4)]",
      textColor: "from-cyan-200 via-sky-300 to-blue-200",
      position: "col-start-1 row-start-2",
    },
    {
      id: "books",
      label: "Books",
      icon: <BookOpen className="h-9 w-9 sm:h-10 sm:w-10 text-blue-300" />,
      gradient: "from-blue-400/30 via-indigo-500/20 to-purple-500/30",
      border: "border-blue-400/60 hover:border-blue-300",
      glow: "shadow-[0_0_35px_rgba(96,165,250,0.4)]",
      textColor: "from-blue-300 via-indigo-200 to-purple-200",
      position: "col-start-3 row-start-2",
    },
    {
      id: "miscellaneous",
      label: "Miscellaneous",
      icon: <Boxes className="h-9 w-9 sm:h-10 sm:w-10 text-amber-300" />,
      gradient: "from-amber-400/30 via-orange-500/20 to-teal-500/30",
      border: "border-amber-400/60 hover:border-amber-300",
      glow: "shadow-[0_0_35px_rgba(251,191,36,0.4)]",
      textColor: "from-amber-200 via-yellow-200 to-emerald-300",
      position: "col-start-2 row-start-3",
    },
  ];

  const handleProceed = () => {
    if (selectedCategory === "food") router.push("/donor/food-ngos");
    if (selectedCategory === "clothes") router.push("/donor/clothes-ngos");
    if (selectedCategory === "books") router.push("/donor/books-ngos");
    if (selectedCategory === "miscellaneous") router.push("/donor/miscellaneous-ngos");
  };

  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#050B16] text-white">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/rebridge-hero-photo.png"
          alt="Donor Category Background"
          className="h-full w-full object-cover object-center brightness-[0.35] filter transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-[#050B16]/65 to-[#050B16]/80" />
      </div>

      <div className="ambient-glow glow-one pointer-events-none" />
      <div className="ambient-glow glow-two pointer-events-none" />

      {/* Header with Top-Right Profile Option */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6 md:px-14">
        <Link href="/" className="flex items-center gap-3">
          <HeartHandshake className="h-9 w-9 text-[#32d9d2]" />
          <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Re<span className="brand-gradient">Bridge</span>
          </span>
        </Link>

        {/* Right Header Navigation: Back + Corrected Profile Badge */}
        <div className="flex items-center gap-6">
          <Link
            href="/donor"
            className="hidden sm:flex items-center gap-2 text-xs text-slate-300 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Donor Login
          </Link>

          {/* Corrected Profile Badge pointing to /donor/dashboard */}
          <Link
            href="/donor/dashboard"
            className="flex items-center gap-3 rounded-full border border-cyan-400/30 bg-[#050B16]/80 px-4 py-1.5 shadow-lg backdrop-blur-md transition-all hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-400 font-bold text-xs text-[#030914]">
              VM
            </div>
            <div className="text-left hidden md:block">
              <p className="text-xs font-bold leading-tight text-white">Vrinda Mittal</p>
              <p className="text-[10px] text-cyan-300">Donor Member</p>
            </div>
            <ChevronDown size={14} className="text-slate-400" />
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="relative z-10 mx-auto my-auto flex w-full max-w-4xl flex-col items-center justify-center px-6 py-6 text-center">
        <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/40 px-4 py-1.5 text-xs text-emerald-300 backdrop-blur-md">
          <Sparkles size={14} className="text-emerald-300 animate-pulse" />
          <span>Donor Community Portal</span>
        </div>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          What do you{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(50,217,210,0.5)]">
            wanna donate ??
          </span>
        </h1>

        <p className="mt-3 max-w-md text-sm text-slate-300 sm:text-base">
          Select an item type below to connect with NGOs in need.
        </p>

        {/* DIAMOND GRID LAYOUT */}
        <div className="relative mt-8 grid grid-cols-3 grid-rows-3 gap-y-2 gap-x-2 sm:gap-y-4 sm:gap-x-8 items-center justify-items-center">
          <div className="col-start-2 row-start-2 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

          {categories.map((item) => {
            const isSelected = selectedCategory === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCategory(item.id)}
                className={`group relative flex flex-col items-center justify-center transition-all duration-300 ${item.position}`}
              >
                <div
                  className={`relative flex h-32 w-32 sm:h-40 sm:w-40 items-center justify-center rounded-full border-2 bg-gradient-to-br backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 ${item.gradient} ${item.border} ${item.glow} ${
                    isSelected ? "scale-110 ring-4 ring-emerald-400/80 shadow-[0_0_50px_rgba(52,211,153,0.7)]" : ""
                  }`}
                >
                  <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="z-10 transition-transform duration-300 group-hover:scale-125">
                    {item.icon}
                  </div>
                </div>

                <span
                  className={`mt-3 text-sm sm:text-base font-extrabold tracking-wide bg-gradient-to-r ${item.textColor} bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* PROCEED BUTTON */}
        {selectedCategory && (
          <div className="mt-8">
            <p className="text-xs text-slate-300">
              Selected: <span className="font-bold text-emerald-300 capitalize">{selectedCategory}</span>
            </p>
            <button
              type="button"
              onClick={handleProceed}
              className="pill-btn mt-3 rounded-full px-8 py-3 text-sm font-bold shadow-[0_0_25px_rgba(50,217,210,0.4)] hover:scale-105 transition-all"
            >
              Proceed to List {selectedCategory.toUpperCase()} &rarr;
            </button>
          </div>
        )}
      </section>

      <footer className="relative z-20 py-4 text-center text-xs text-slate-400">
        ReBridge Community Donor Interface
      </footer>
    </main>
  );
}