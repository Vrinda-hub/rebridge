"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  HeartHandshake, 
  Search, 
  Bell, 
  Users, 
  Building2, 
  Clock, 
  Package, 
  CheckCircle2, 
  XCircle, 
  RefreshCw,
  ShieldAlert,
  ArrowUpRight
} from "lucide-react";

interface NGO {
  id: string;
  name: string;
  email: string;
  sector: string;
  is_verified: boolean;
  created_at: string;
}

interface Donation {
  id: string;
  item_name: string;
  category: string;
  donor_name: string;
  status: string;
  created_at: string;
  ngos?: { name: string } | null;
}

export default function AdminDashboardPage() {
  const [ngos, setNgos] = useState<NGO[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAdminData = async () => {
    setLoading(true);
    try {
      // 1. Fetch NGOs from Supabase
      const ngoRes = await fetch("/api/admin/ngos");
      const ngoJson = await ngoRes.json();
      if (ngoJson.success) setNgos(ngoJson.data);

      // 2. Fetch Donations from Supabase
      const donRes = await fetch("/api/donations");
      const donJson = await donRes.json();
      if (donJson.success) setDonations(donJson.data);
    } catch (err) {
      console.error("Failed to fetch admin data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const toggleVerification = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch("/api/admin/ngos", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, is_verified: !currentStatus }),
      });
      const json = await res.json();
      if (json.success) {
        setNgos((prev) =>
          prev.map((ngo) => (ngo.id === id ? { ...ngo, is_verified: !currentStatus } : ngo))
        );
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const pendingApprovalsCount = ngos.filter((n) => !n.is_verified).length;

  return (
    <main 
      className="min-h-screen bg-[#050B16] text-white flex flex-col justify-between selection:bg-cyan-500 selection:text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(40, 99, 207, 0.9), rgba(12, 43, 100, 0.97)), url('/Hands of Hope in Blue.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div>
        {/* Top Navbar */}
        <header className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-white/10 bg-[#050B16]/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5">
              <HeartHandshake className="h-7 w-7 text-cyan-400" />
              <span className="text-xl font-bold tracking-tight text-white">
                Re<span className="text-cyan-400">BRIDGE</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2 w-80 text-xs text-slate-400">
              <Search size={15} />
              <span>Search NGOs, donors, or donations...</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={fetchAdminData}
              title="Refresh Data" 
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors"
            >
              <RefreshCw size={16} />
            </button>
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 relative">
              <Bell size={16} />
              {pendingApprovalsCount > 0 && (
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-amber-400" />
              )}
            </div>
            <div className="flex items-center gap-2.5 pl-2 border-l border-white/10">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center font-bold text-xs">
                AD
              </div>
              <div className="hidden sm:block text-left text-xs">
                <div className="font-bold text-white">Admin</div>
                <div className="text-[10px] text-slate-400">Super Admin</div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
          
          {/* Welcome Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                Welcome back, Admin <span className="inline-block animate-bounce">👋</span>
              </h1>
              <p className="text-xs text-slate-400 mt-1">Here's what's happening on ReBRIDGE today.</p>
            </div>
            <div className="text-xs text-slate-400 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl self-start sm:self-auto backdrop-blur-md">
              {new Date().toLocaleDateString("en-US", { weekday: "short", day: "2-digit", month: "short", year: "numeric" })}
            </div>
          </div>

          {/* 4 Stat Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="rounded-2xl border border-white/10 bg-[#071126]/80 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs text-slate-400 font-medium">Total Donors</div>
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Users size={18} />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">85</div>
              <div className="text-[11px] text-emerald-400 mt-2 font-medium">↑ 12% from last month</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#071126]/80 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs text-slate-400 font-medium">Registered NGOs</div>
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Building2 size={18} />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">{ngos.length}</div>
              <div className="text-[11px] text-emerald-400 mt-2 font-medium">↑ 8% from last month</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#071126]/80 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs text-slate-400 font-medium">Pending Approvals</div>
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Clock size={18} />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">
                {String(pendingApprovalsCount).padStart(2, "0")}
              </div>
              <div className="text-[11px] text-amber-400 mt-2 font-medium">Requires verification</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#071126]/80 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs text-slate-400 font-medium">Total Donations</div>
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Package size={18} />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">{donations.length}</div>
              <div className="text-[11px] text-emerald-400 mt-2 font-medium">↑ 15% from last month</div>
            </div>

          </div>

          {/* Two-Column Layout Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2 Columns: NGO Verification & Recent Requests */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* NGO Verifications Table Box */}
              <div className="rounded-2xl border border-white/10 bg-[#071126]/80 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-bold text-white tracking-wide">Pending NGO Verifications</h2>
                    <span className="rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 text-[10px] font-bold">
                      {pendingApprovalsCount} pending
                    </span>
                  </div>
                </div>

                {loading ? (
                  <p className="text-xs text-slate-400">Loading database records...</p>
                ) : ngos.length === 0 ? (
                  <p className="text-xs text-slate-400">No NGOs registered in Supabase yet.</p>
                ) : (
                  <div className="space-y-3">
                    {ngos.map((ngo) => (
                      <div
                        key={ngo.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-all"
                      >
                        <div>
                          <h3 className="text-sm font-bold text-white">{ngo.name}</h3>
                          <p className="text-xs text-slate-400">{ngo.sector || "Community Support"} • {ngo.email}</p>
                          <span className="inline-block text-[10px] text-slate-500 mt-1">
                            Registered: {new Date(ngo.created_at).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 self-end sm:self-auto">
                          <span
                            className={`text-xs px-3 py-1 rounded-full font-semibold ${
                              ngo.is_verified
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                            }`}
                          >
                            {ngo.is_verified ? "Verified" : "Pending"}
                          </span>

                          <button
                            onClick={() => toggleVerification(ngo.id, ngo.is_verified)}
                            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            {ngo.is_verified ? (
                              <>
                                <XCircle size={14} className="text-rose-400" /> Revoke
                              </>
                            ) : (
                              <>
                                <CheckCircle2 size={14} className="text-emerald-400" /> Approve
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Recent Donation Requests Table */}
              <div className="rounded-2xl border border-white/10 bg-[#071126]/80 p-6 backdrop-blur-xl overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-sm font-bold text-white tracking-wide">Recent Donation Requests</h2>
                </div>

                {donations.length === 0 ? (
                  <p className="text-xs text-slate-400">No donation requests submitted yet.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-white/10 text-slate-400">
                          <th className="pb-3 font-medium">Item</th>
                          <th className="pb-3 font-medium">Category</th>
                          <th className="pb-3 font-medium">Donor</th>
                          <th className="pb-3 font-medium">Status</th>
                          <th className="pb-3 font-medium">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {donations.slice(0, 5).map((d) => (
                          <tr key={d.id} className="hover:bg-white/[0.02]">
                            <td className="py-3 font-semibold text-white">{d.item_name}</td>
                            <td className="py-3 text-slate-300">{d.category}</td>
                            <td className="py-3 text-slate-300">{d.donor_name}</td>
                            <td className="py-3">
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                {d.status}
                              </span>
                            </td>
                            <td className="py-3 text-slate-400">{new Date(d.created_at).toLocaleDateString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Quick Actions & Recent Activity */}
            <div className="space-y-8">
              
              {/* Quick Actions Card */}
              <div className="rounded-2xl border border-white/10 bg-[#071126]/80 p-6 backdrop-blur-xl space-y-4">
                <h2 className="text-sm font-bold text-white tracking-wide mb-2">Quick Actions</h2>
                
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-pointer flex items-center justify-between group">
                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">Review NGO Applications</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">{pendingApprovalsCount} pending verifications</p>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-pointer flex items-center justify-between group">
                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">Manage Users</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">View all donors and NGOs</p>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-pointer flex items-center justify-between group">
                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">View Donations</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">Track all donation requests</p>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>

              {/* Recent Activity Feed */}
              <div className="rounded-2xl border border-white/10 bg-[#071126]/80 p-6 backdrop-blur-xl">
                <h2 className="text-sm font-bold text-white tracking-wide mb-4">Recent Activity</h2>
                
                <div className="space-y-4 text-xs">
                  {donations.slice(0, 3).map((d) => (
                    <div key={d.id} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-none last:pb-0">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 mt-0.5">
                        <Package size={14} />
                      </div>
                      <div>
                        <div className="text-white font-medium">New donation: {d.item_name}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{new Date(d.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                    </div>
                  ))}

                  {ngos.slice(0, 2).map((n) => (
                    <div key={n.id} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-none last:pb-0">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0 mt-0.5">
                        <Building2 size={14} />
                      </div>
                      <div>
                        <div className="text-white font-medium">NGO registered: {n.name}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{new Date(n.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      <footer className="py-6 text-center text-xs text-slate-500 border-t border-white/5 mt-12 bg-[#050B16]/90">
        ReBridge Super Admin Portal • Live Supabase Database Connection
      </footer>
    </main>
  );
}