"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="mt-24 sm:mt-32 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-[color:var(--brand-surface)] border border-[color:var(--brand-border)] p-8 sm:p-12 text-center"
      >
        <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-[color:var(--brand-green-50)] blur-2xl" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-[color:var(--brand-yellow)]/20 blur-2xl" />

        <div className="relative">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[color:var(--brand-green)] text-white grid place-items-center">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-[color:var(--brand-ink)]">
            Join Our Newsletter
          </h2>
          <p className="mt-2 text-sm text-[color:var(--brand-muted)] max-w-md mx-auto">
            Subscribe to receive exclusive deals, travel inspiration and updates
            about new routes directly in your inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl border border-[color:var(--brand-border)] bg-white outline-none focus:border-[color:var(--brand-green)] text-sm"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[color:var(--brand-green)] text-white font-semibold hover:bg-[color:var(--brand-green-dark)] transition"
            >
              Subscribe <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
