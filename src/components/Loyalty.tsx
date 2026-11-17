"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./TravelTypes";

const tiers = [
  {
    name: "Bronze",
    color: "from-[#b87333] to-[#8b572a]",
    perks: ["Priority Booking", "Email Support"],
  },
  {
    name: "Silver",
    color: "from-[#c0c0c0] to-[#808080]",
    perks: ["Priority Boarding", "Lounge Access"],
  },
  {
    name: "Gold",
    color: "from-[#f5c518] to-[#b8860b]",
    perks: ["Priority Boarding", "Lounge + Snacks"],
  },
  {
    name: "Platinum",
    color: "from-[#5b6b8a] to-[#2b3b56]",
    perks: ["Priority Boarding", "Premium Lounge"],
  },
];

export default function Loyalty() {
  return (
    <section className="mt-24 sm:mt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a4a2c] via-[#0f5e3a] to-[#187a4b]" />
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="dots" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.6" fill="white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[color:var(--brand-yellow)]">
            <span className="w-6 h-[2px] bg-[color:var(--brand-yellow)]" />
            Loyalty Program
            <span className="w-6 h-[2px] bg-[color:var(--brand-yellow)]" />
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
            Travel More, Earn More
          </h2>
          <p className="mt-3 text-white/80">
            Unlock exclusive perks and privileges with every ride. The more you
            travel, the more rewards you earn.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-5 text-center"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${t.color} grid place-items-center shadow-lg`}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{t.name}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-white/85 text-left">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[color:var(--brand-yellow)] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] font-bold hover:brightness-95 transition shadow-[0_12px_30px_-10px_rgba(245,197,24,0.8)]"
          >
            Join the Program
          </a>
        </div>
      </div>
    </section>
  );
}
