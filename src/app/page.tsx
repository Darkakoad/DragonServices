"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  Key, 
  ExternalLink, 
  Search, 
  MessageSquare, 
  ChevronRight,
  Monitor,
  Gamepad2,
  Lock,
  Flame,
  Layers,
  CheckCircle2
} from "lucide-react";

interface ScriptItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  status: "UPDATED" | "UNDETECTED" | "TESTING" | "COMING SOON";
  statusColor: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
  primaryLink: { label: string; url: string; isKey?: boolean };
  secondaryLink?: { label: string; url: string };
  directLink: string;
  views?: string;
  author: string;
}

const SCRIPTS_DATA: ScriptItem[] = [
  {
    id: "DRAGON-spoofer",
    title: "DRAGON LOADER",
    category: "temp spoofer + fortnite external",
    tag: "LOADER",
    status: "UNDETECTED",
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/40",
    description: "temp spoofer + fortnite external",
    fullDescription: "Works on every unlocked motherboard. Permanent spoofing that survives factory resets and Windows reinstalls.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    features: ["HWID Reset", "Serial Spoof", "MAC Change", "Cleaner", "Windows Tool"],
    primaryLink: { label: "DOWNLOAD", url: "https://loot-link.com/s?rsvNXUrC" },
    secondaryLink: { label: "FREE KEY", url: "https://loot-link.com/s?ou9WC1zG" },
    directLink: "https://loot-link.com/s?nTfB79e4",
    author: "Dragon Services"
  }
];

export default function DRAGONServicesApp() {
  const [selectedScript, setSelectedScript] = useState<ScriptItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredScripts = SCRIPTS_DATA.filter((s) => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#fff8e7] relative overflow-hidden selection:bg-[#f5c85a]/30 selection:text-[#ffe59a]">
      
      {/* Glow Effects & Grid Backdrop */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      <div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-radial from-[#f5c85a]/15 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="fixed top-[5%] right-[-10%] w-[600px] h-[600px] rounded-full bg-radial from-[#f5c85a]/10 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[40%] w-[550px] h-[550px] rounded-full bg-radial from-[#f5c85a]/08 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 h-20 px-6 lg:px-16 bg-[#050505]/75 border-b border-[#f5c85a]/15 backdrop-blur-2xl flex items-center justify-between shadow-2xl">
        <div 
          onClick={() => setSelectedScript(null)} 
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#ffe59a] via-[#f5c85a] to-[#8f6821] p-[1px] shadow-lg shadow-[#f5c85a]/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#080705] rounded-[15px] flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="Dragon Services Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg text-[#fff8e7] tracking-tight group-hover:text-[#f5c85a] transition-colors">
              Dragon Services
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#f5c85a]">
              Free Premium Tools
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://discord.gg/AsTr3Zrqft"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#f5c85a]/20 bg-white/[0.03] text-[#ffe59a] text-xs font-bold tracking-wide hover:bg-[#f5c85a]/10 hover:border-[#f5c85a]/50 hover:-translate-y-0.5 transition-all shadow-lg"
          >
            <MessageSquare className="w-4 h-4 text-[#f5c85a]" />
            <span>Discord</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <AnimatePresence mode="wait">
          {!selectedScript ? (
            /* HOME PAGE */
            <motion.section
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <div className="pt-16 pb-12 lg:pt-20 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-8 flex flex-col items-start">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f5c85a]/30 bg-gradient-to-r from-[#f5c85a]/15 to-transparent text-[#ffe59a] text-[11px] font-black tracking-[0.2em] uppercase mb-6 shadow-inner">
                    <Sparkles className="w-3.5 h-3.5 text-[#f5c85a]" />
                    <span>100% FREE PREMIUM TOOLS</span>
                  </div>

                  <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-[#fff8e7] leading-[0.95]">
                    <span className="bg-gradient-to-r from-[#ffe59a] via-[#f5c85a] to-[#b98427] bg-clip-text text-transparent">
                      Free
                    </span>{" "}
                    Premium Tools.
                  </h1>

                  <p className="mt-6 text-base lg:text-lg font-medium text-[#b9aa86] max-w-2xl leading-relaxed">
                    Made by cheaters, for cheaters. No subscriptions, no memberships, no paywalls. Just completely FREE tools.
                  </p>

                  {/* Feature Stats */}
                  <div className="grid grid-cols-3 gap-4 w-full max-w-xl mt-8">
                    <div className="p-4 rounded-2xl border border-[#f5c85a]/15 bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-xl shadow-lg">
                      <b className="text-2xl font-black bg-gradient-to-br from-[#fff8d7] via-[#f5c85a] to-[#b98427] bg-clip-text text-transparent">
                        Free
                      </b>
                      <span className="block mt-1 text-[10px] font-extrabold uppercase tracking-widest text-[#9f9272]">
                        No hidden cost
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl border border-[#f5c85a]/15 bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-xl shadow-lg">
                      <b className="text-2xl font-black bg-gradient-to-br from-[#fff8d7] via-[#f5c85a] to-[#b98427] bg-clip-text text-transparent">
                        Premium
                      </b>
                      <span className="block mt-1 text-[10px] font-extrabold uppercase tracking-widest text-[#9f9272]">
                        Polished tools
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl border border-[#f5c85a]/15 bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-xl shadow-lg">
                      <b className="text-2xl font-black bg-gradient-to-br from-[#fff8d7] via-[#f5c85a] to-[#b98427] bg-clip-text text-transparent">
                        Instant
                      </b>
                      <span className="block mt-1 text-[10px] font-extrabold uppercase tracking-widest text-[#9f9272]">
                        Fast access
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hero Illustration Badge */}
                <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-[#f5c85a]/15 blur-2xl animate-pulse" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#ffe59a]/20 via-[#f5c85a]/10 to-transparent border border-[#f5c85a]/30 p-8 flex items-center justify-center backdrop-blur-3xl shadow-2xl">
                      <div className="w-full h-full rounded-full bg-[#080705] border border-[#f5c85a]/40 flex flex-col items-center justify-center text-center p-6 shadow-inner">
                        <ShieldCheck className="w-16 h-16 text-[#f5c85a] mb-2 drop-shadow-[0_0_15px_rgba(245,200,90,0.4)]" />
                        <span className="font-black text-xl text-[#ffe59a] tracking-tight">Dragon Services</span>
                        <span className="text-[10px] font-bold text-[#b9aa86] tracking-widest uppercase mt-1">2026 OFFICIAL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section Header & Search */}
              <div className="mt-8 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-lg font-black tracking-widest uppercase text-[#f7df96] flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#f5c85a]" />
                  <span>Free Premium Tools</span>
                </h2>

                {/* Search Bar */}
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b9aa86]" />
                  <input
                    type="text"
                    placeholder="Search tools & scripts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/[0.03] border border-[#f5c85a]/20 text-sm text-[#fff8e7] placeholder-[#b9aa86]/60 focus:outline-none focus:border-[#f5c85a]/60 transition-colors"
                  />
                </div>
              </div>

              {/* Scripts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredScripts.map((script) => (
                  <motion.div
                    key={script.id}
                    onClick={() => setSelectedScript(script)}
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="group cursor-pointer rounded-3xl border border-[#f5c85a]/18 bg-gradient-to-b from-white/[0.06] to-white/[0.02] bg-[#0d0d0b] overflow-hidden shadow-2xl flex flex-col relative"
                  >
                    {/* Thumbnail Image Header */}
                    <div className="relative aspect-[16/10] bg-[#050505] overflow-hidden">
                      <img
                        src={script.image}
                        alt={script.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b] via-transparent to-transparent" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black tracking-widest border backdrop-blur-md shadow-lg ${script.statusColor}`}>
                          {script.status}
                        </span>
                      </div>

                      {/* Tag Badge */}
                      <div className="absolute bottom-3.5 left-3.5 z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-black tracking-wider border border-[#f5c85a]/25 bg-black/60 backdrop-blur-md text-[#fff1bd]">
                          {script.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#fff0b5] via-[#f5c85a] to-[#a87322] flex items-center justify-center overflow-hidden shadow-md">
                          <img src="/logo.png" alt="Dragon Services" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[11px] font-black text-[#f5c85a] tracking-widest uppercase">
                          {script.author}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-[#fff6df] tracking-tight group-hover:text-[#f5c85a] transition-colors">
                        {script.title}
                      </h3>

                      <p className="text-xs text-[#a79a7d] mt-1 line-clamp-2">
                        {script.category}
                      </p>

                      <div className="mt-auto pt-4 border-t border-[#f5c85a]/12 flex items-center justify-end text-xs font-black">
                        <span className="text-[#ffe08a] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          OPEN <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ) : (
            /* DETAIL PAGE VIEW */
            <motion.section
              key="detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="pt-8"
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedScript(null)}
                className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#f5c85a]/20 bg-white/[0.04] text-[#ffe08a] text-xs font-extrabold hover:bg-[#f5c85a]/10 hover:border-[#f5c85a]/40 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to products</span>
              </button>

              {/* Main Detail Card */}
              <div className="rounded-3xl border border-[#f5c85a]/20 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-[#0d0d0b] p-6 lg:p-8 backdrop-blur-2xl shadow-2xl mb-8">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ffe59a] via-[#f5c85a] to-[#8f6821] p-[1px] shadow-xl">
                    <div className="w-full h-full bg-[#080705] rounded-[15px] flex items-center justify-center overflow-hidden">
                      <img src="/logo.png" alt="Dragon Services" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-black text-[#fff5dd] tracking-tight">
                      {selectedScript.title}
                    </h1>
                    <div className="text-sm font-semibold text-[#b6a986] mt-1">
                      {selectedScript.category} · {selectedScript.author} · Updated now
                    </div>
                  </div>

                  <div className="md:ml-auto">
                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black tracking-widest border ${selectedScript.statusColor}`}>
                      {selectedScript.status}
                    </span>
                  </div>
                </div>

                {/* Preview Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Preview Image */}
                  <div className="lg:col-span-8 rounded-2xl border border-[#f5c85a]/18 bg-[#050505] overflow-hidden shadow-2xl">
                    <img
                      src={selectedScript.image}
                      alt={selectedScript.title}
                      className="w-full h-auto max-h-[440px] object-cover"
                    />
                  </div>

                  {/* Right Side Panel & Actions */}
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    {/* Author Box */}
                    <div className="p-4 rounded-2xl border border-[#f5c85a]/15 bg-white/[0.045] flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fff0b5] to-[#f5c85a] flex items-center justify-center overflow-hidden">
                        <img src="/logo.png" alt="Dragon Services" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <b className="text-sm text-[#fff6df] block">Free Premium Tool</b>
                        <span className="text-xs text-[#b9aa86] block mt-0.5">
                          No chat. No fake counters. Just free access.
                        </span>
                      </div>
                    </div>

                    {/* Primary Button */}
                    <a
                      href={selectedScript.primaryLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#fff1b8] via-[#f5c85a] to-[#a87120] text-[#110b02] font-black text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-xl shadow-[#f5c85a]/20"
                    >
                      <Download className="w-4 h-4" />
                      <span>{selectedScript.primaryLink.label}</span>
                    </a>

                    {/* Secondary Button if exists */}
                    {selectedScript.secondaryLink && (
                      <a
                        href={selectedScript.secondaryLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-6 rounded-2xl border border-[#f5c85a]/22 bg-[#f5c85a]/06 text-[#ffe08a] font-black text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-[#f5c85a]/12 transition-colors"
                      >
                        <Key className="w-4 h-4" />
                        <span>{selectedScript.secondaryLink.label}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Description & Features Card */}
              <div className="rounded-3xl border border-[#f5c85a]/17 bg-gradient-to-b from-white/[0.05] to-[#0d0d0b] p-6 lg:p-8 backdrop-blur-2xl shadow-2xl">
                <h2 className="text-2xl font-black text-[#fff8e7] tracking-tight mb-3">
                  Description
                </h2>
                <p className="text-base text-[#dfd5bc] leading-relaxed mb-6">
                  {selectedScript.fullDescription}
                </p>

                {/* Features List */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {selectedScript.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#f5c85a]/18 bg-[#f5c85a]/07 text-[#ffe08a] text-xs font-bold"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f5c85a]" />
                      <span>{feature}</span>
                    </span>
                  ))}
                </div>

                {/* Game Strip Direct Link */}
                <div className="pt-6 border-t border-[#f5c85a]/13 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#050505] border border-[#f5c85a]/20 flex items-center justify-center overflow-hidden">
                    <img src="/logo.png" alt="Dragon Services" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <b className="text-sm text-[#fff8e7] block">{selectedScript.title}</b>
                    <span className="text-xs text-[#b9aa86] block">Direct Access Token</span>
                  </div>

                  <a
                    href={selectedScript.directLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto w-10 h-10 rounded-full bg-[#f5c85a]/10 border border-[#f5c85a]/20 flex items-center justify-center text-[#f5c85a] hover:bg-[#f5c85a] hover:text-[#050505] transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#f5c85a]/12 bg-[#050505]/80 py-8 px-6 text-center text-xs text-[#786d51]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-2">
          <b className="text-[#fff0bd] text-sm">Dragon Services © 2026</b>
          <p>Made by cheaters, for cheaters.</p>
          <p className="text-[#9f9272]">No subscriptions. No memberships. No paywalls. Just completely FREE tools.</p>
        </div>
      </footer>
    </div>
  );
}
