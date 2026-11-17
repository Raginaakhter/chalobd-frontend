"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  MapPinned,
  Wallet,
  HeadphonesIcon,
} from "lucide-react";

const items = [
  {
    Icon: ShieldCheck,
    title: "Safe & Secure Travel",
    sub: "Verified operators",
  },
  { Icon: Zap, title: "Instant Booking", sub: "In seconds" },
  { Icon: MapPinned, title: "Live Bus Tracking", sub: "In real-time" },
  { Icon: Wallet, title: "Multiple Payment", sub: "Options" },
  { Icon: HeadphonesIcon, title: "24/7 Support", sub: "Always here for you" },
];

export default function FeaturesBar() {
  return (
    <section className="mt-16 sm:mt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-5 gap-3"
      >
        {items.map(({ Icon, title, sub }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center gap-3 rounded-2xl bg-white border border-[color:var(--brand-border)] p-4 hover:shadow-md hover:border-[color:var(--brand-green)]/50 transition"
          >
            <div className="w-11 h-11 rounded-xl bg-[color:var(--brand-green-50)] text-[color:var(--brand-green)] grid place-items-center shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-[14px] leading-tight text-[color:var(--brand-ink)] truncate">
                {title}
              </div>
              <div className="text-xs text-[color:var(--brand-muted)]">
                {sub}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
