"use client";

import { motion } from "framer-motion";
import { QrCode, Smartphone, Download } from "lucide-react";

export default function AppDownload() {
  return (
    <section className="mt-24 sm:mt-32 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a4a2c] via-[#0f5e3a] to-[#187a4b] p-8 sm:p-12 text-white"
      >
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[color:var(--brand-yellow)]/20 blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] text-xs font-bold uppercase tracking-wider">
              Mobile App
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight">
              Download Our App
            </h2>
            <p className="mt-3 text-white/85 max-w-md">
              Get the best booking experience on your mobile. Book in seconds,
              track your bus live, and get exclusive app-only offers.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <StoreBadge platform="apple" />
              <StoreBadge platform="google" />
              <div className="w-20 h-20 rounded-xl bg-white p-2 ml-2 hidden sm:block">
                <div className="w-full h-full rounded-md bg-[color:var(--brand-ink)] grid place-items-center">
                  <QrCode className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-5 text-sm">
              <Stat value="1M+" label="Downloads" />
              <span className="w-px h-8 bg-white/20" />
              <Stat value="4.8★" label="App Rating" />
              <span className="w-px h-8 bg-white/20" />
              <Stat value="24/7" label="Support" />
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <PhoneMockup />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold text-[color:var(--brand-yellow)]">
        {value}
      </div>
      <div className="text-xs text-white/70">{label}</div>
    </div>
  );
}

function StoreBadge({ platform }: { platform: "apple" | "google" }) {
  return (
    <a
      href="#"
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black text-white hover:bg-black/80 transition"
    >
      <Download className="w-5 h-5" />
      <div className="text-left leading-tight">
        <div className="text-[10px] opacity-80">
          {platform === "apple" ? "Download on the" : "GET IT ON"}
        </div>
        <div className="text-sm font-semibold">
          {platform === "apple" ? "App Store" : "Google Play"}
        </div>
      </div>
    </a>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[260px] h-[520px]">
      <div className="absolute inset-0 rounded-[48px] bg-black shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-3">
        <div className="relative w-full h-full rounded-[36px] bg-white overflow-hidden">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-20" />

          {/* App content */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f5e3a] to-[#187a4b] p-5 pt-10 text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[color:var(--brand-yellow)] grid place-items-center">
                <Smartphone className="w-4 h-4 text-[color:var(--brand-green-dark)]" />
              </div>
              <div className="font-bold text-sm">CHALO BD</div>
            </div>
            <div className="mt-6 text-xs opacity-90">Where are you going?</div>
            <div className="mt-2 bg-white rounded-xl p-3 text-[color:var(--brand-ink)]">
              <div className="text-[10px] font-bold uppercase text-[color:var(--brand-muted)]">
                From
              </div>
              <div className="text-sm font-semibold">Dhaka</div>
            </div>
            <div className="mt-2 bg-white rounded-xl p-3 text-[color:var(--brand-ink)]">
              <div className="text-[10px] font-bold uppercase text-[color:var(--brand-muted)]">
                To
              </div>
              <div className="text-sm font-semibold">Cox&apos;s Bazar</div>
            </div>
            <button className="mt-3 w-full py-2.5 rounded-xl bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] text-sm font-bold">
              Search Bus
            </button>
            <div className="mt-5 text-xs opacity-90">Popular Routes</div>
            {["Dhaka → Sylhet", "Dhaka → Khulna", "Dhaka → Chattogram"].map(
              (r) => (
                <div
                  key={r}
                  className="mt-2 px-3 py-2 rounded-lg bg-white/10 text-xs"
                >
                  {r}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
