"use client";

import { motion } from "framer-motion";
import { Gift, Tag, Sparkles } from "lucide-react";
import { SectionHeading } from "./TravelTypes";

const offers = [
  {
    badge: "20% OFF",
    title: "Dhaka to Cox's Bazar",
    sub: "Early Bird Discount — Book 7 days in advance.",
    color: "from-[#0f5e3a] to-[#1f8f5a]",
    Icon: Gift,
  },
  {
    badge: "15% OFF",
    title: "Weekend Special",
    sub: "Flat discount on weekend bookings all routes.",
    color: "from-[#f5c518] to-[#e0ad00]",
    Icon: Sparkles,
    dark: true,
  },
  {
    badge: "25% OFF",
    title: "First Ride",
    sub: "First-time user? Enjoy an extra discount on your first ticket.",
    color: "from-[#0a4a2c] to-[#187a4b]",
    Icon: Tag,
  },
];

export default function Offers() {
  return (
    <section className="mt-24 sm:mt-32 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Latest Offers"
        title="Festive Offers & Deals"
        subtitle="Big savings on your favorite routes — limited-time deals you don't want to miss."
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {offers.map((o, i) => (
          <motion.div
            key={o.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className={`relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br ${o.color} ${o.dark ? "text-[color:var(--brand-green-dark)]" : "text-white"}`}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/10" />

            <div className="relative flex items-start justify-between">
              <div>
                <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-white/20 backdrop-blur">
                  {o.badge}
                </span>
                <h3 className="mt-3 text-2xl font-extrabold">{o.title}</h3>
                <p className="mt-1.5 text-sm opacity-90 max-w-[260px]">
                  {o.sub}
                </p>
                <button className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 text-[color:var(--brand-green-dark)] text-sm font-bold hover:bg-white transition">
                  Grab Deal
                </button>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur grid place-items-center">
                <o.Icon className="w-7 h-7" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
