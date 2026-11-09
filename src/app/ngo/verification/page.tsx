"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HeartHandshake,
  Search,
  Bell,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Upload,
  FileText,
  MapPin,
  Mail,
  Phone,
  Globe,
  Award,
  ChevronDown,
  LayoutDashboard,
  Truck,
  Inbox,
  AlertCircle,
} from "lucide-react";

export default function VerificationPage() {
  const [activeTab, setActiveTab] = useState("NGO Profile & Verification");

  const sidebarLinks = [
    { label: "Dashboard", icon: <LayoutDashboard size={18} />, href: "/ngo/profile" },
    { label: "Pickup & Delivery", icon: <Truck size={18} />, href: "/ngo/pickup-delivery" },
    { label: "NGO Profile & Verification", icon: <ShieldCheck size={18} />, href: "/ngo/verification", active: true },
  ];

  const receivedRequests = [
    { id: "req-1", item: "15 Winter Clothes", donor: "Vrinda Mittal", distance: "2.8 km away", time: "2h ago", icon: "👕" },
    { id: "req-2", item: "30 School Books", donor: "Aarav Sharma", distance: "5.6 km away", time: "4h ago", icon: "📚" },
    { id: "req-3", item: "50 kg Rice & Pulses", donor: "Neha Gupta", distance: "3.1 km away", time: "6h ago", icon: "🍲" },
  ];

  const documents = [
    { name: "12A / 80G Tax Exemption Certificate", status: "Verified", date: "Uploaded Oct 2025", icon: <FileText className="text-emerald-400" size={18} /> },
    { name: "Government NGO Darpan Registration", status: "Verified", date: "Uploaded Oct 2025", icon: <FileText className="text-emerald-400" size={18} /> },
    { name: "Authorized Signatory Govt ID Proof", status: "Verified", date: "Uploaded Oct 2025", icon: <FileText className="text-emerald-400" size={18} /> },
    { name: "Annual Financial & Impact Report", status: "Pending Audit", date: "Uploaded Sep 2026", icon: <AlertCircle className="text-amber-400" size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#030914] text-white flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-white/10 bg-[#030914]/95 px-6 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <HeartHandshake className="h-8 w-8 text-[#32d9d2]" />
          <span className="text-2xl font-bold tracking-tight text-white">
            Re<span className="brand-gradient">Bridge</span>
          </span>
        </Link>

        <div className="relative w-full max-w-md mx-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search documents or profile details..."
            className="w-full rounded-full border border-cyan-500/20 bg-[#071328] py-2 pl-11 pr-4 text-xs text-white placeholder-slate-400 outline-none transition-all focus:border-cyan-400"
          />
        </div>

        <div className="flex items-center gap-4">
          <button type="button" className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#071328] text-slate-300">
            <Bell size={16} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-[#030914]" />
          </button>

          <div className="flex items-center gap-3 rounded-full border border-cyan-500/30 bg-[#071328] px-3 py-1.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-400 text-xs font-bold text-[#030914]">
              HF
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold leading-none text-white">Hope Foundation</p>
              <p className="text-[10px] text-slate-400">NGO</p>
            </div>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Unified Left Sidebar */}
        <aside className="sticky top-16 flex h-[calc(100vh-4rem)] w-80 shrink-0 flex-col border-r border-cyan-500/15 bg-[#040B1A] p-5 overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-xs font-semibold transition-all ${
                  link.active
                    ? "bg-gradient-to-r from-cyan-500/30 to-blue-600/40 text-cyan-300 shadow-[0_0_20px_rgba(50,217,210,0.2)] border border-cyan-400/30"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="my-6 w-full border-t border-white/10" />

          <div>
            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center gap-2">
                <Inbox size={16} className="text-cyan-300" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Received Requests</h3>
              </div>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] font-bold text-cyan-300 border border-cyan-400/30">
                {receivedRequests.length}
              </span>
            </div>

            <div className="mt-3 flex flex-col gap-3">
              {receivedRequests.map((req) => (
                <div key={req.id} className="group relative flex flex-col rounded-2xl border border-cyan-500/20 bg-[#071735]/60 p-3 transition-all hover:border-cyan-400/50 hover:bg-[#071735]">
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-950/80 text-sm border border-cyan-400/20">
                      {req.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-white truncate group-hover:text-cyan-300 transition-colors">
                        {req.item}
                      </p>
                      <p className="text-[10px] text-slate-300 mt-0.5">
                        Donor: <span className="text-white font-medium">{req.donor}</span>
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-[10px] text-cyan-300 font-semibold">
                        <MapPin size={11} className="text-cyan-400" />
                        <span>{req.distance}</span>
                        <span className="text-slate-500 ml-auto">{req.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Verification Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Verification Status Banner */}
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-[#06201a] via-[#082a22] to-[#041210] p-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                <ShieldCheck size={36} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-white">Verification Status: Verified Partner</h1>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-0.5 text-xs font-bold text-emerald-300 border border-emerald-500/40">
                    Level 3 Verified
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Your organization is fully verified to accept donor shipments and receive community trust badges.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="rounded-full border border-emerald-400/40 bg-emerald-950/50 px-5 py-2 text-xs font-bold text-emerald-300 backdrop-blur-md hover:bg-emerald-900/60 transition-all"
            >
              Re-submit Documents
            </button>
          </div>

          {/* Form & Documents 2-Column Grid */}
          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            {/* Left 7-Cols: Organization Info */}
            <div className="rounded-3xl border border-cyan-500/20 bg-[#061226]/90 p-6 shadow-xl backdrop-blur-xl lg:col-span-7">
              <h2 className="text-base font-bold text-white pb-4 border-b border-white/10 flex items-center gap-2">
                <Building2 size={18} className="text-cyan-300" /> Organization Profile Details
              </h2>

              <div className="mt-4 grid gap-4 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Registered NGO Name</label>
                  <input
                    type="text"
                    defaultValue="Hope Foundation"
                    className="w-full rounded-xl border border-white/10 bg-[#030914] px-4 py-2.5 text-white outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Darpan / NGO Registration ID</label>
                    <input
                      type="text"
                      defaultValue="UP/2021/028471"
                      className="w-full rounded-xl border border-white/10 bg-[#030914] px-4 py-2.5 text-white outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Primary Sector</label>
                    <input
                      type="text"
                      defaultValue="Education & Food Security"
                      className="w-full rounded-xl border border-white/10 bg-[#030914] px-4 py-2.5 text-white outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Official Email</label>
                    <input
                      type="email"
                      defaultValue="contact@hopefoundation.org"
                      className="w-full rounded-xl border border-white/10 bg-[#030914] px-4 py-2.5 text-white outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">Phone Number</label>
                    <input
                      type="text"
                      defaultValue="+91 98765 43210"
                      className="w-full rounded-xl border border-white/10 bg-[#030914] px-4 py-2.5 text-white outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Operating Address</label>
                  <input
                    type="text"
                    defaultValue="14, Station Road, Saharanpur, Uttar Pradesh - 247001"
                    className="w-full rounded-xl border border-white/10 bg-[#030914] px-4 py-2.5 text-white outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="button"
                  className="mt-2 rounded-xl bg-cyan-400 py-2.5 text-xs font-bold text-[#030914] hover:scale-[1.01] transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                >
                  Save Profile Changes
                </button>
              </div>
            </div>

            {/* Right 5-Cols: Uploaded Documents */}
            <div className="rounded-3xl border border-cyan-500/20 bg-[#061226]/90 p-6 shadow-xl backdrop-blur-xl lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-base font-bold text-white pb-4 border-b border-white/10 flex items-center justify-between">
                  <span>Verification Documents</span>
                  <Award className="text-amber-400" size={18} />
                </h2>

                <div className="mt-4 flex flex-col gap-3">
                  {documents.map((doc) => (
                    <div key={doc.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#030914]/60 p-3">
                      <div className="flex items-center gap-3">
                        {doc.icon}
                        <div>
                          <p className="text-xs font-semibold text-white">{doc.name}</p>
                          <p className="text-[10px] text-slate-400">{doc.date}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        {doc.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upload Drop Zone */}
              <div className="mt-6 rounded-2xl border-2 border-dashed border-cyan-500/30 bg-cyan-950/20 p-4 text-center">
                <Upload size={24} className="mx-auto text-cyan-300" />
                <p className="text-xs font-bold text-white mt-2">Upload New Compliance Document</p>
                <p className="text-[10px] text-slate-400">PDF, PNG, or JPG (Max 10MB)</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}