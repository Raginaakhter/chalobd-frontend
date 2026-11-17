"use client";

import { motion } from "framer-motion";
import { Search, Ticket, CreditCard, Bus } from "lucide-react";
import { SectionHeading } from "./TravelTypes";

const steps = [
  {
    n: 1,
    Icon: Search,
    title: "Search",
    desc: "Enter your origin, destination and travel date to see all available buses.",
  },
  {
    n: 2,
    Icon: Ticket,
    title: "Book",
    desc: "Choose your favorite operator, pick a seat and fill in passenger details.",
  },
  {
    n: 3,
    Icon: CreditCard,
    title: "Pay",
    desc: "Pay securely with bKash, Nagad, Rocket, card or net-banking.",
  },
  {
    n: 4,
    Icon: Bus,
    title: "Travel",
    desc: "Show your e-ticket to the counter and enjoy a safe, comfortable ride.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="mt-24 sm:mt-32 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Simple Process"
        title="How It Works?"
        subtitle="Book your journey in four easy steps — simple, fast and secure."
      />

      <div className="relative mt-14">
        {/* connector line */}
        <div className="hidden md:block absolute top-9 left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-[color:var(--brand-green)] via-[color:var(--brand-yellow)] to-[color:var(--brand-green)] rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative w-20 h-20 rounded-full bg-white border-4 border-[color:var(--brand-green)] text-[color:var(--brand-green)] grid place-items-center shadow-[0_12px_20px_-10px_rgba(15,94,58,0.4)]">
                <s.Icon className="w-8 h-8" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] text-sm font-bold grid place-items-center shadow">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-[color:var(--brand-ink)]">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm text-[color:var(--brand-muted)] max-w-[220px]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
