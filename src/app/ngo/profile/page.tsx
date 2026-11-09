"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HeartHandshake,
  Search,
  Bell,
  CheckCircle2,
  Clock,
  Package,
  Layers,
  Truck,
  Building2,
  ShieldCheck,
  MapPin,
  ChevronDown,
  Plus,
  Heart,
  Users,
  Sprout,
  LayoutDashboard,
  Inbox,
  Calendar,
  UserCheck,
  Phone,
  Navigation,
  Upload,
  FileText,
  AlertCircle,
  Award,
} from "lucide-react";

export default function NGODashboardPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [pickupFilter, setPickupFilter] = useState("All");

  const sidebarLinks = [
    { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { label: "Pickup & Delivery", icon: <Truck size={18} /> },
    { label: "NGO Profile & Verification", icon: <ShieldCheck size={18} /> },
  ];

  const receivedRequests = [
    { id: "req-1", item: "15 Winter Clothes", donor: "Vrinda Mittal", distance: "2.8 km away", time: "2h ago", icon: "👕" },
    { id: "req-2", item: "30 School Books", donor: "Aarav Sharma", distance: "5.6 km away", time: "4h ago", icon: "📚" },
    { id: "req-3", item: "50 kg Rice & Pulses", donor: "Neha Gupta", distance: "3.1 km away", time: "6h ago", icon: "🍲" },
    { id: "req-4", item: "10 Educational Toys", donor: "Rohan Verma", distance: "6.4 km away", time: "8h ago", icon: "🧸" },
    { id: "req-5", item: "5 Boxes Misc Items", donor: "Simran Kaur", distance: "4.7 km away", time: "1d ago", icon: "📦" },
  ];

  const incomingDonations = [
    { id: "1", item: "Winter Clothes", category: "Clothes", donor: "Vrinda Mittal", distance: "2.8 km away · 2h ago", quantity: "15 pieces", status: "Pending", statusStyle: "bg-amber-500/20 text-amber-300 border-amber-500/30", icon: "👕" },
    { id: "2", item: "Books", category: "Books", donor: "Aarav Sharma", distance: "5.6 km away · 4h ago", quantity: "30 pieces", status: "Pending", statusStyle: "bg-amber-500/20 text-amber-300 border-amber-500/30", icon: "📚" },
    { id: "3", item: "Rice & Pulses", category: "Food", donor: "Neha Gupta", distance: "3.1 km away · 6h ago", quantity: "50 kg", status: "Accepted", statusStyle: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", icon: "🍲" },
    { id: "4", item: "Toys", category: "Toys", donor: "Rohan Verma", distance: "6.4 km away · 8h ago", quantity: "10 pieces", status: "Accepted", statusStyle: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", icon: "🧸" },
    { id: "5", item: "Miscellaneous", category: "Miscellaneous", donor: "Simran Kaur", distance: "4.7 km away · 1d ago", quantity: "5 boxes", status: "In Transit", statusStyle: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30", icon: "📦" },
  ];

  const activeNeeds = [
    { title: "Books", needed: 100, received: 65, percent: 65, priority: "High Priority", priorityStyle: "bg-rose-500/20 text-rose-300 border-rose-500/30", icon: "📚" },
    { title: "Food (Rice & Pulses)", needed: 50, received: 20, percent: 40, priority: "Medium Priority", priorityStyle: "bg-amber-500/20 text-amber-300 border-amber-500/30", icon: "🍲" },
    { title: "Winter Clothes", needed: 40, received: 10, percent: 25, priority: "Low Priority", priorityStyle: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", icon: "👕" },
    { title: "Toys", needed: 30, received: 12, percent: 40, priority: "Medium Priority", priorityStyle: "bg-amber-500/20 text-amber-300 border-amber-500/30", icon: "🧸" },
  ];

  const pickupTasks = [
    { id: "PK-101", donorName: "Vrinda Mittal", phone: "+91 98765 43210", address: "Subhash Nagar, Saharanpur, UP", distance: "2.8 km away", item: "Winter Clothes", quantity: "15 pieces", slotDate: "26 Oct 2026", slotTime: "10:00 AM - 12:00 PM", assignedVolunteer: "Rahul Verma", status: "Scheduled", statusStyle: "bg-amber-500/20 text-amber-300 border-amber-500/30", icon: "👕" },
    { id: "PK-102", donorName: "Neha Gupta", phone: "+91 98123 45678", address: "Delhi Road, Roorkee, UK", distance: "3.1 km away", item: "Rice & Pulses", quantity: "50 kg", slotDate: "26 Oct 2026", slotTime: "02:00 PM - 04:00 PM", assignedVolunteer: "Amit Kumar", status: "In Transit", statusStyle: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30", icon: "🍲" },
    { id: "PK-103", donorName: "Rohan Verma", phone: "+91 99887 76655", address: "Civil Lines, Haridwar, UK", distance: "6.4 km away", item: "Educational Toys", quantity: "10 pieces", slotDate: "25 Oct 2026", slotTime: "04:30 PM", assignedVolunteer: "Self Picked", status: "Completed", statusStyle: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30", icon: "🧸" },
  ];

  const documents = [
    { name: "12A / 80G Tax Exemption Certificate", status: "Verified", date: "Uploaded Oct 2025", icon: <FileText className="text-emerald-400" size={18} /> },
    { name: "Government NGO Darpan Registration", status: "Verified", date: "Uploaded Oct 2025", icon: <FileText className="text-emerald-400" size={18} /> },
    { name: "Authorized Signatory Govt ID Proof", status: "Verified", date: "Uploaded Oct 2025", icon: <FileText className="text-emerald-400" size={18} /> },
    { name: "Annual Financial & Impact Report", status: "Pending Audit", date: "Uploaded Sep 2026", icon: <AlertCircle className="text-amber-400" size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#030914] text-white flex flex-col">
      {/* TOP NAVBAR */}
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
            placeholder="Search donations, donors, or needs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* BODY CONTENT */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* UNIFIED LEFT SIDEBAR */}
        <aside className="sticky top-16 flex h-[calc(100vh-4rem)] w-80 shrink-0 flex-col border-r border-cyan-500/15 bg-[#040B1A] p-5 overflow-y-auto">
          
          {/* Section 1: Navigation Tabs */}
          <nav className="flex flex-col gap-2">
            {sidebarLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => setActiveTab(link.label)}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-xs font-semibold transition-all ${
                  activeTab === link.label
                    ? "bg-gradient-to-r from-cyan-500/30 to-blue-600/40 text-cyan-300 shadow-[0_0_20px_rgba(50,217,210,0.2)] border border-cyan-400/30"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            ))}
          </nav>

          {/* NORMAL PARTITION LINE */}
          <div className="my-6 w-full border-t border-white/10" />

          {/* Section 2: Received Requests with Distances */}
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
                <div
                  key={req.id}
                  className="group relative flex flex-col rounded-2xl border border-cyan-500/20 bg-[#071735]/60 p-3 transition-all hover:border-cyan-400/50 hover:bg-[#071735]"
                >
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

          <div className="mt-8 px-2 pb-4">
            <p className="tagline-script text-base font-bold text-cyan-400/80 leading-snug">
              Together we create a bigger impact ♡
            </p>
          </div>
        </aside>

        {/* MAIN DYNAMIC CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-8">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === "Dashboard" && (
            <div>
              {/* NGO HERO BANNER */}
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#071733] via-[#0b2246] to-[#040e21] p-6 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-cyan-400/50 bg-[#071836] shadow-[0_0_20px_rgba(50,217,210,0.3)]">
                      <HeartHandshake className="h-10 w-10 text-cyan-300" />
                    </div>

                    <div>
                      <h1 className="text-2xl font-black text-white sm:text-3xl">Welcome back,</h1>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xl font-extrabold text-[#3bf0a8]">Hope Foundation</span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400 border border-emerald-500/30">
                          <CheckCircle2 size={12} /> Verified NGO
                        </span>
                      </div>

                      <p className="mt-2 text-xs text-slate-300">
                        Education &nbsp;|&nbsp; Food Security &nbsp;|&nbsp; Community Support
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                        <MapPin size={13} className="text-cyan-400" /> Saharanpur, Uttar Pradesh &nbsp;·&nbsp; 4.2 km from you
                      </p>
                    </div>
                  </div>

                  <div className="text-right hidden lg:block">
                    <p className="italic text-sm text-slate-200">“Small donations create big changes.”</p>
                    <Heart size={18} className="ml-auto mt-2 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* 4 STAT CARDS ROW */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Incoming Donations", val: "8", sub: "View all →", color: "border-cyan-500/30 bg-[#071735]/80", icon: <Package size={20} className="text-cyan-300" /> },
                  { label: "Pending Pickups", val: "3", sub: "View all →", color: "border-amber-500/30 bg-[#071735]/80", icon: <Clock size={20} className="text-amber-300" /> },
                  { label: "Active Needs", val: "5", sub: "Manage needs →", color: "border-purple-500/30 bg-[#071735]/80", icon: <Layers size={20} className="text-purple-300" /> },
                  { label: "Items Received", val: "12", sub: "View all →", color: "border-emerald-500/30 bg-[#071735]/80", icon: <CheckCircle2 size={20} className="text-emerald-300" /> },
                ].map((card) => (
                  <div key={card.label} className={`rounded-3xl border ${card.color} p-5 shadow-xl backdrop-blur-md`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#030914]/60 border border-white/10">
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">{card.val}</h3>
                        <p className="text-xs font-semibold text-slate-300">{card.label}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-[11px] font-bold text-cyan-400 hover:underline cursor-pointer">
                      {card.sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* TWO-COLUMN DASHBOARD GRID */}
              <div className="mt-6 grid gap-6 lg:grid-cols-12">
                
                {/* LEFT 8-COLUMN AREA */}
                <div className="flex flex-col gap-6 lg:col-span-8">
                  <div className="rounded-3xl border border-cyan-500/20 bg-[#061226]/90 p-6 shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <h2 className="text-base font-bold text-white">Recent Incoming Donations</h2>
                      <span className="text-xs font-semibold text-cyan-300 cursor-pointer hover:underline">View all →</span>
                    </div>

                    <div className="mt-4 overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-white/10 text-slate-400">
                            <th className="pb-3 font-semibold">Item</th>
                            <th className="pb-3 font-semibold">Donor</th>
                            <th className="pb-3 font-semibold">Quantity</th>
                            <th className="pb-3 font-semibold">Status</th>
                            <th className="pb-3 font-semibold text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {incomingDonations.map((row) => (
                            <tr key={row.id} className="hover:bg-white/5 transition-colors">
                              <td className="py-3.5">
                                <div className="flex items-center gap-3">
                                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-950/60 text-base">
                                    {row.icon}
                                  </span>
                                  <div>
                                    <p className="font-bold text-white">{row.item}</p>
                                    <p className="text-[10px] text-slate-400">{row.category}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3.5">
                                <p className="font-semibold text-slate-200">{row.donor}</p>
                                <p className="text-[10px] text-slate-400">{row.distance}</p>
                              </td>
                              <td className="py-3.5 font-bold text-white">{row.quantity}</td>
                              <td className="py-3.5">
                                <span className={`inline-block rounded-full border px-3 py-1 text-[10px] font-bold ${row.statusStyle}`}>
                                  {row.status}
                                </span>
                              </td>
                              <td className="py-3.5 text-right">
                                <button type="button" className="rounded-xl border border-cyan-400/30 bg-cyan-950/40 px-3 py-1.5 text-[11px] font-bold text-cyan-300 hover:bg-cyan-400 hover:text-[#030914] transition-all">
                                  View
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Impact Summary */}
                  <div className="flex flex-col justify-between rounded-3xl border border-cyan-500/20 bg-[#061226]/90 p-6 shadow-2xl backdrop-blur-xl">
                    <h3 className="text-sm font-bold text-white mb-4">Donation Impact Summary</h3>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <Sprout size={22} className="mx-auto text-emerald-300" />
                        <p className="mt-2 text-xl font-black text-white">120+</p>
                        <p className="text-[10px] text-slate-400">Items Received</p>
                      </div>
                      <div>
                        <Users size={22} className="mx-auto text-cyan-300" />
                        <p className="mt-2 text-xl font-black text-white">45</p>
                        <p className="text-[10px] text-slate-400">Donors</p>
                      </div>
                      <div>
                        <Heart size={22} className="mx-auto text-purple-300" />
                        <p className="mt-2 text-xl font-black text-white">10</p>
                        <p className="text-[10px] text-slate-400">Communities</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT 4-COLUMN AREA */}
                <div className="flex flex-col gap-6 lg:col-span-4">
                  <div className="rounded-3xl border border-cyan-500/20 bg-[#061226]/90 p-6 shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <h2 className="text-base font-bold text-white">Your Active Needs</h2>
                      <button type="button" className="flex items-center gap-1 rounded-full bg-cyan-500 px-3 py-1 text-[11px] font-bold text-[#030914] shadow-[0_0_15px_rgba(50,217,210,0.4)]">
                        <Plus size={13} /> Post New Need
                      </button>
                    </div>

                    <div className="mt-4 flex flex-col gap-4">
                      {activeNeeds.map((need) => (
                        <div key={need.title} className="rounded-2xl border border-white/10 bg-[#030914]/60 p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-950/70 text-base">
                                {need.icon}
                              </span>
                              <div>
                                <h4 className="text-xs font-bold text-white">{need.title}</h4>
                                <p className="text-[10px] text-slate-400">
                                  Need: {need.needed} | Received: {need.received}
                                </p>
                              </div>
                            </div>
                            <span className={`rounded-full border px-2 py-0.5 text-[9px] font-bold ${need.priorityStyle}`}>
                              {need.priority}
                            </span>
                          </div>

                          <div className="mt-3 flex items-center gap-2">
                            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                              <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500" style={{ width: `${need.percent}%` }} />
                            </div>
                            <span className="text-[10px] font-bold text-cyan-300">{need.percent}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative min-h-[220px] overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-[#06182c] to-[#020a14] p-6 shadow-2xl">
                    <div className="absolute inset-0 z-0">
                      <img src="/images/rebridge-hero-photo.png" alt="Real Help" className="h-full w-full object-cover object-center brightness-[0.4] filter" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/60 to-transparent" />
                    </div>
                    <div className="relative z-10 flex h-full flex-col justify-end">
                      <h3 className="text-xl font-black text-white leading-tight">
                        Real help.<br />
                        <span className="text-emerald-300">Lasting impact.</span>
                      </h3>
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                        Every donation you receive helps create a healthier, safer and brighter future for someone in need.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: PICKUP & DELIVERY */}
          {activeTab === "Pickup & Delivery" && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
                    <Truck className="text-cyan-400" size={26} /> Pickup & Delivery Logistics
                  </h1>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage volunteer assignments, slot times, donor directions, and shipment statuses.
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-2xl bg-[#071328] p-1.5 border border-cyan-500/20">
                  {["All", "Scheduled", "In Transit", "Completed"].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => setPickupFilter(status)}
                      className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                        pickupFilter === status
                          ? "bg-cyan-500 text-[#030914] shadow-md"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {pickupTasks
                  .filter((t) => pickupFilter === "All" || t.status === pickupFilter)
                  .map((pickup) => (
                    <div key={pickup.id} className="rounded-3xl border border-cyan-500/20 bg-[#061226]/90 p-6 shadow-xl backdrop-blur-xl">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-950/80 text-2xl border border-cyan-400/30">
                            {pickup.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-3">
                              <h3 className="text-lg font-bold text-white">{pickup.item}</h3>
                              <span className="text-xs font-semibold text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                                {pickup.quantity}
                              </span>
                              <span className={`rounded-full border px-3 py-0.5 text-[10px] font-bold ${pickup.statusStyle}`}>
                                {pickup.status}
                              </span>
                            </div>

                            <p className="text-xs text-slate-300 mt-1.5 flex items-center gap-2">
                              <span className="font-semibold text-white">Donor: {pickup.donorName}</span>
                              <span>•</span>
                              <Phone size={12} className="text-cyan-400" />
                              <span>{pickup.phone}</span>
                            </p>

                            <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                              <MapPin size={13} className="text-rose-400 shrink-0" />
                              <span>{pickup.address}</span>
                              <span className="text-cyan-300 font-bold ml-1">({pickup.distance})</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-col items-end gap-3 w-full lg:w-auto border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
                          <div className="text-left lg:text-right text-xs">
                            <p className="text-slate-400 flex items-center lg:justify-end gap-1.5">
                              <Calendar size={13} className="text-cyan-400" /> {pickup.slotDate} ({pickup.slotTime})
                            </p>
                            <p className="text-emerald-300 font-medium mt-1 flex items-center lg:justify-end gap-1.5">
                              <UserCheck size={13} /> {pickup.assignedVolunteer}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 w-full sm:w-auto">
                            <a
                              href={`https://maps.google.com/?q=${encodeURIComponent(pickup.address)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center justify-center gap-1.5 rounded-xl border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-2 text-xs font-bold text-cyan-300 hover:bg-cyan-400 hover:text-[#030914] transition-all"
                            >
                              <Navigation size={13} /> Map
                            </a>
                            {pickup.status !== "Completed" && (
                              <button type="button" className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-[#030914] shadow-[0_0_15px_rgba(52,211,153,0.3)] hover:scale-105 transition-all">
                                <CheckCircle2 size={13} /> Complete
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 3: NGO PROFILE & VERIFICATION */}
          {activeTab === "NGO Profile & Verification" && (
            <div>
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

                <button type="button" className="rounded-full border border-emerald-400/40 bg-emerald-950/50 px-5 py-2 text-xs font-bold text-emerald-300 backdrop-blur-md hover:bg-emerald-900/60 transition-all">
                  Re-submit Documents
                </button>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-12">
                <div className="rounded-3xl border border-cyan-500/20 bg-[#061226]/90 p-6 shadow-xl backdrop-blur-xl lg:col-span-7">
                  <h2 className="text-base font-bold text-white pb-4 border-b border-white/10 flex items-center gap-2">
                    <Building2 size={18} className="text-cyan-300" /> Organization Profile Details
                  </h2>

                  <div className="mt-4 grid gap-4 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1 font-semibold">Registered NGO Name</label>
                      <input type="text" defaultValue="Hope Foundation" className="w-full rounded-xl border border-white/10 bg-[#030914] px-4 py-2.5 text-white outline-none focus:border-cyan-400" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 mb-1 font-semibold">Darpan / NGO Registration ID</label>
                        <input type="text" defaultValue="UP/2021/028471" className="w-full rounded-xl border border-white/10 bg-[#030914] px-4 py-2.5 text-white outline-none focus:border-cyan-400" />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1 font-semibold">Primary Sector</label>
                        <input type="text" defaultValue="Education & Food Security" className="w-full rounded-xl border border-white/10 bg-[#030914] px-4 py-2.5 text-white outline-none focus:border-cyan-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 mb-1 font-semibold">Official Email</label>
                        <input type="email" defaultValue="contact@hopefoundation.org" className="w-full rounded-xl border border-white/10 bg-[#030914] px-4 py-2.5 text-white outline-none focus:border-cyan-400" />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1 font-semibold">Phone Number</label>
                        <input type="text" defaultValue="+91 98765 43210" className="w-full rounded-xl border border-white/10 bg-[#030914] px-4 py-2.5 text-white outline-none focus:border-cyan-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1 font-semibold">Operating Address</label>
                      <input type="text" defaultValue="14, Station Road, Saharanpur, Uttar Pradesh - 247001" className="w-full rounded-xl border border-white/10 bg-[#030914] px-4 py-2.5 text-white outline-none focus:border-cyan-400" />
                    </div>

                    <button type="button" className="mt-2 rounded-xl bg-cyan-400 py-2.5 text-xs font-bold text-[#030914] hover:scale-[1.01] transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                      Save Profile Changes
                    </button>
                  </div>
                </div>

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

                  <div className="mt-6 rounded-2xl border-2 border-dashed border-cyan-500/30 bg-cyan-950/20 p-4 text-center">
                    <Upload size={24} className="mx-auto text-cyan-300" />
                    <p className="text-xs font-bold text-white mt-2">Upload New Compliance Document</p>
                    <p className="text-[10px] text-slate-400">PDF, PNG, or JPG (Max 10MB)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}