"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { HeartHandshake, ArrowLeft, Send, Sparkles, CheckCircle2 } from "lucide-react";

function DonateFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "surplus items";
  const targetNgoId = searchParams.get("ngoId") || null;

  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [quantity, setQuantity] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemName,
          category,
          quantity,
          donorName: "Vrinda Mittal",
          donorPhone,
          address,
          ngoId: targetNgoId,
        }),
      });

      // Safely parse JSON response
      const text = await res.text();
      const json = text ? JSON.parse(text) : {};

      if (res.ok && json.success) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/donor/dashboard");
        }, 2000);
      } else {
        console.error("API error response:", json.error || text);
        alert(`Error: ${json.error || "Failed to submit request"}`);
      }
    } catch (err) {
      console.error("Failed to submit donation request", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#050B16] text-white">
      <header className="relative z-20 flex items-center justify-between px-8 py-6 md:px-14 border-b border-white/10 bg-[#050B16]/90 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <HeartHandshake className="h-9 w-9 text-[#32d9d2]" />
          <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Re<span className="brand-gradient">Bridge</span>
          </span>
        </Link>
        <Link
          href="/donor/select-category"
          className="flex items-center gap-2 text-xs text-slate-300 hover:text-emerald-300 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Categories
        </Link>
      </header>

      <section className="relative z-10 mx-auto my-auto flex w-full max-w-lg flex-col justify-center px-6 py-10">
        <div className="rounded-3xl border border-emerald-400/30 bg-[#071126]/90 p-8 shadow-2xl backdrop-blur-xl">
          
          <div className="flex items-center gap-3 border-b border-white/10 pb-5 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-950/80 border border-emerald-400/50 text-emerald-300">
              <Sparkles size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Request NGO Donation</h1>
              <p className="text-xs text-slate-300">Send a donation request directly to the selected NGO</p>
            </div>
          </div>

          {success ? (
            <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40">
                <CheckCircle2 size={36} />
              </div>
              <h2 className="text-lg font-bold text-white">Donation Request Sent!</h2>
              <p className="text-xs text-slate-300">Redirecting you to your donor dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Item Title / Description</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Winter Jackets, Rice Bags, Textbooks"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full rounded-xl border border-cyan-500/30 bg-[#030814] px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-xl border border-cyan-500/30 bg-[#030814] px-4 py-3 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Clothes">Clothes</option>
                    <option value="Food">Surplus Food</option>
                    <option value="Books">Books</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Quantity</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., 15 pieces, 20 kg"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full rounded-xl border border-cyan-500/30 bg-[#030814] px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Contact Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  className="w-full rounded-xl border border-cyan-500/30 bg-[#030814] px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Pickup Address</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Enter complete pickup address or locality..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-xl border border-cyan-500/30 bg-[#030814] px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="pill-btn mt-3 flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-center text-xs font-bold transition-all hover:scale-[1.02]"
              >
                <Send size={15} /> {loading ? "Sending Request..." : "Send Request to NGO"}
              </button>
            </form>
          )}

        </div>
      </section>

      <footer className="relative z-20 py-4 text-center text-xs text-slate-500">
        ReBridge Community Donor Portal
      </footer>
    </main>
  );
}

export default function DonateFormPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050B16] text-white flex items-center justify-center">Loading...</div>}>
      <DonateFormContent />
    </Suspense>
  );
}