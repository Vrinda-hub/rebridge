"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  HeartHandshake,
  Building2,
  Heart,
  Utensils,
  Shirt,
  BookOpen,
  ToyBrick,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const [selectedRole, setSelectedRole] = useState("");
  const router = useRouter();

  const handleRoleSelect = (role: "NGO" | "Donor") => {
    setSelectedRole(role);
    router.push(`/${role.toLowerCase()}`);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030914] text-white">
      {/* Radiant Background Glows & Floating Particles */}
      <div className="ambient-glow glow-one pointer-events-none" />
      <div className="ambient-glow glow-two pointer-events-none" />
      <div className="ambient-glow glow-three pointer-events-none" />
      <div className="particle particle-one pointer-events-none" />
      <div className="particle particle-two pointer-events-none" />
      <div className="particle particle-three pointer-events-none" />

      {/* Header / Brand Bar */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6 md:px-14">
        <a href="/" className="flex items-center gap-3">
          <HeartHandshake className="h-10 w-10 text-[#2ee6ca] drop-shadow-[0_0_12px_rgba(46,230,202,0.8)]" />
          <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Re<span className="brand-gradient">Bridge</span>
          </span>
        </a>

        <p className="hidden text-xs font-medium tracking-wide text-slate-300 md:block">
          Turn Surplus Into Someone's Need
        </p>
      </header>

      {/* Main Hero Section (50/50 Split Grid) */}
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-100px)] max-w-[1700px] items-center gap-8 px-8 pb-12 md:px-14 lg:grid-cols-12">
        
        {/*Left Column: Content & Bright Pill Buttons (6 Columns) */}
        <div className="flex flex-col justify-center py-4 lg:col-span-6">
          <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#2ee6ca] drop-shadow-[0_0_10px_rgba(46,230,202,0.5)]">
            SMALL ACTS. REAL IMPACT.
          </p>

          <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl xl:text-7xl">
            Because no one should{" "}
            <span className="bg-gradient-to-r from-[#2ee6ca] via-[#3bf0a8] to-[#4facfe] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(46,230,202,0.4)] block">
              go without.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-200 sm:text-base">
            ReBridge connects people with surplus resources to verified NGOs and
            communities in need. Together, we turn <span className="italic font-semibold text-[#3bf0a8]">excess into impact</span>.
          </p>

          {/* Glowing Gradient Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:flex-nowrap">
            {/* NGO Button */}
            <button
              type="button"
              onClick={() => handleRoleSelect("NGO")}
              className={`group flex items-center gap-3 rounded-full bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#00c6ff] px-6 py-3.5 text-sm font-extrabold text-[#031525] shadow-[0_0_25px_rgba(0,242,254,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(0,242,254,0.9)] active:scale-95 ${
                selectedRole === "NGO" ? "ring-2 ring-white" : ""
              }`}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#031525]/30">
                <Building2 className="h-4 w-4 text-[#031525]" />
              </div>
              <span>Login as NGO</span>
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Donor Button */}
            <button
              type="button"
              onClick={() => handleRoleSelect("Donor")}
              className={`group flex items-center gap-3 rounded-full bg-gradient-to-r from-[#3bf0a8] via-[#2ee6ca] to-[#00f2fe] px-6 py-3.5 text-sm font-extrabold text-[#031525] shadow-[0_0_25px_rgba(59,240,168,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(59,240,168,0.9)] active:scale-95 ${
                selectedRole === "Donor" ? "ring-2 ring-white" : ""
              }`}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#031525]/30">
                <Heart className="h-4 w-4 text-[#031525]" />
              </div>
              <span>Login as Donor</span>
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Category Icons Bar */}
          <div className="mt-12 flex items-center gap-8 border-t border-white/15 pt-6">
            {[
              { label: "Food", icon: <Utensils size={22} /> },
              { label: "Clothes", icon: <Shirt size={22} /> },
              { label: "Books", icon: <BookOpen size={22} /> },
              { label: "Miscellaneous", icon: <ToyBrick size={22} /> },
            ].map((item, idx) => (
              <div key={item.label} className="flex items-center gap-8">
                <div className="category-item flex flex-col items-center gap-1.5 text-[#2ee6ca] hover:scale-110 transition-transform">
                  {item.icon}
                  <span className="text-[11px] font-semibold text-slate-300">
                    {item.label}
                  </span>
                </div>
                {idx < 3 && <div className="h-6 w-[1px] bg-white/15" />}
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs italic text-slate-400">
            Every useful item deserves a second chance.
          </p>
        </div>

        {/* Right Column: Exact Half-Screen Blended Photo Container (6 Columns) */}
        <div className="relative flex items-center justify-center lg:col-span-6">
          <div className="relative h-[500px] w-full overflow-hidden rounded-3xl sm:h-[600px] lg:h-[calc(100vh-140px)] shadow-[0_0_60px_rgba(46,230,202,0.12)]">
            
            {/* The Background Photo */}
            <img
              src="/images/rebridge-hero-photo.png"
              alt="Child receiving donated resources"
              className="absolute inset-0 h-full w-full object-cover object-center brightness-105 contrast-105"
            />

            {/* BLURRED / FADED BORDERS (Vignette Blending Overlays) */}
            {/* Left Edge Fade (Blends photo smoothly into the text side) */}
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#030914] via-[#030914]/80 to-transparent z-10" />
            
            {/* Top Edge Fade */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030914] to-transparent z-10" />
            
            {/* Bottom Edge Fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030914] to-transparent z-10" />
            
            {/* Right Edge Fade */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#030914]/90 to-transparent z-10" />

            {/* Handwritten Tagline bottom right */}
            <div className="quote-bottom-right absolute bottom-10 right-8 z-20 text-right drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              <p className="tagline-script text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Small donations.
                <span className="bg-gradient-to-r from-[#3bf0a8] to-[#2ee6ca] bg-clip-text text-transparent block mt-1">
                  Meaningful changes. ♡
                </span>
              </p>
            </div>
          </div>
        </div>



      </section>
    </main>
  );
}