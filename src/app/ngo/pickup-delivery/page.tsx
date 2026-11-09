"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HeartHandshake,
  Search,
  Bell,
  MapPin,
  ChevronDown,
  Truck,
  Calendar,
  Clock,
  UserCheck,
  Phone,
  Navigation,
  CheckCircle2,
  Package,
  Layers,
  ShieldCheck,
  LayoutDashboard,
  Inbox,
  Filter,
} from "lucide-react";

export default function PickupDeliveryPage() {
  const [activeTab, setActiveTab] = useState("Pickup & Delivery");
  const [filterStatus, setFilterStatus] = useState("All");

  const sidebarLinks = [
    { label: "Dashboard", icon: <LayoutDashboard size={18} />, href: "/ngo/profile" },
    { label: "Pickup & Delivery", icon: <Truck size={18} />, href: "/ngo/pickup-delivery", active: true },
    { label: "NGO Profile & Verification", icon: <ShieldCheck size={18} />, href: "/ngo/verification" },
  ];

  const receivedRequests = [
    { id: "req-1", item: "15 Winter Clothes", donor: "Vrinda Mittal", distance: "2.8 km away", time: "2h ago", icon: "👕" },
    { id: "req-2", item: "30 School Books", donor: "Aarav Sharma", distance: "5.6 km away", time: "4h ago", icon: "📚" },
    { id: "req-3", item: "50 kg Rice & Pulses", donor: "Neha Gupta", distance: "3.1 km away", time: "6h ago", icon: "🍲" },
  ];

  const pickupTasks = [
    {
      id: "PK-101",
      donorName: "Vrinda Mittal",
      phone: "+91 98765 43210",
      address: "Subhash Nagar, Saharanpur, UP",
      distance: "2.8 km away",
      item: "Winter Clothes",
      quantity: "15 pieces",
      slotDate: "26 Oct 2026",
      slotTime: "10:00 AM - 12:00 PM",
      assignedVolunteer: "Rahul Verma (Volunteer #4)",
      status: "Scheduled",
      statusStyle: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      icon: "👕",
    },
    {
      id: "PK-102",
      donorName: "Neha Gupta",
      phone: "+91 98123 45678",
      address: "Delhi Road, Roorkee, UK",
      distance: "3.1 km away",
      item: "Rice & Pulses (Cooked/Raw)",
      quantity: "50 kg",
      slotDate: "26 Oct 2026",
      slotTime: "02:00 PM - 04:00 PM",
      assignedVolunteer: "Amit Kumar (Driver)",
      status: "In Transit",
      statusStyle: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      icon: "🍲",
    },
    {
      id: "PK-103",
      donorName: "Rohan Verma",
      phone: "+91 99887 76655",
      address: "Civil Lines, Haridwar, UK",
      distance: "6.4 km away",
      item: "Educational Toys",
      quantity: "10 pieces",
      slotDate: "25 Oct 2026",
      slotTime: "04:30 PM",
      assignedVolunteer: "Self Picked",
      status: "Completed",
      statusStyle: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      icon: "🧸",
    },
  ];

  const filteredPickups = pickupTasks.filter((t) =>
    filterStatus === "All" ? true : t.status === filterStatus
  );

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
            placeholder="Search pickups, addresses, or volunteers..."
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

      {/* Main Container */}
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

        {/* Pickup & Delivery Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
                <Truck className="text-cyan-400" size={26} /> Pickup & Delivery Logistics
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Manage volunteer assignments, slot times, donor directions, and shipment statuses.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 rounded-2xl bg-[#071328] p-1.5 border border-cyan-500/20">
              {["All", "Scheduled", "In Transit", "Completed"].map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setFilterStatus(status)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                    filterStatus === status
                      ? "bg-cyan-500 text-[#030914] shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Logistics Grid Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {filteredPickups.map((pickup) => (
              <div
                key={pickup.id}
                className="rounded-3xl border border-cyan-500/20 bg-[#061226]/90 p-6 shadow-xl backdrop-blur-xl transition-all hover:border-cyan-400/40"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  {/* Left Specs */}
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
                        <span className={`rounded-full border px-3 py-0.5 text-[10px] font-bold ${pickup.statusStyle}`}> {pickup.status} </span> </div>  <p className="text-xs text-slate-300 mt-1.5 flex items-center gap-2"> <span className="font-semibold text-white">Donor: {pickup.donorName}</span> <span>•</span> <Phone size={12} className="text-cyan-400" /> <span>{pickup.phone}</span> </p>  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5"> <MapPin size={13} className="text-rose-400 shrink-0" /> <span>{pickup.address}</span> <span className="text-cyan-300 font-bold ml-1">({pickup.distance})</span> </p> </div> </div>  {/* Right Controls */} <div className="flex flex-col sm:flex-row lg:flex-col items-end gap-3 w-full lg:w-auto border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10"> <div className="text-left lg:text-right text-xs"> <p className="text-slate-400 flex items-center lg:justify-end gap-1.5"> <Calendar size={13} className="text-cyan-400" /> {pickup.slotDate} ({pickup.slotTime}) </p> <p className="text-emerald-300 font-medium mt-1 flex items-center lg:justify-end gap-1.5"> <UserCheck size={13} /> {pickup.assignedVolunteer} </p> </div>  <div className="flex items-center gap-2 w-full sm:w-auto"> <a href={`https://maps.google.com/?q=${encodeURIComponent(pickup.address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-2 text-xs font-bold text-cyan-300 hover:bg-cyan-400 hover:text-[#030914] transition-all"
                      >
                        <Navigation size={13} /> Map
                      </a>

                      {pickup.status !== "Completed" && (
                        <button
                          type="button"
                          className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-[#030914] shadow-[0_0_15px_rgba(52,211,153,0.3)] hover:scale-105 transition-all"
                        >
                          <CheckCircle2 size={13} /> Complete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}