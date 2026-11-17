"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "./TravelTypes";

const faqs = [
  {
    q: "How do I book a bus ticket on CHALO BD?",
    a: "Simply enter your origin, destination and date on the home page. Choose your preferred bus and seat, then complete the payment to receive your e-ticket instantly.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept bKash, Nagad, Rocket, Visa, Mastercard and major bank cards. All payments are secure and encrypted end-to-end.",
  },
  {
    q: "Can I cancel or reschedule my ticket?",
    a: "Yes, tickets can be cancelled or rescheduled from your account up to 2 hours before departure, subject to the operator's policy.",
  },
  {
    q: "How can I track my bus in real time?",
    a: "Open the Track Bus page or the mobile app and enter your PNR / booking reference to see your bus location live on the map.",
  },
  {
    q: "Is there any discount for students or senior citizens?",
    a: "Yes, we offer special fares for students, senior citizens and loyalty members. Check the Offers section for the latest deals.",
  },
  {
    q: "What if the bus is delayed or cancelled?",
    a: "If a bus is delayed or cancelled, you will be notified by SMS and email. Full refunds are processed to your original payment method.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section
      id="faq"
      className="mt-24 sm:mt-32 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking your next journey."
      />

      <div className="mt-10 divide-y divide-[color:var(--brand-border)] rounded-2xl border border-[color:var(--brand-border)] bg-white overflow-hidden">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full px-5 py-4 flex items-center justify-between gap-4 hover:bg-[color:var(--brand-surface)] transition"
            >
              <span className="text-left text-[15px] font-semibold text-[color:var(--brand-ink)]">
                {f.q}
              </span>
              <span className="w-8 h-8 rounded-full bg-[color:var(--brand-green-50)] text-[color:var(--brand-green)] grid place-items-center shrink-0">
                {open === i ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-[color:var(--brand-muted)] leading-relaxed">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
