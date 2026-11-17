"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bus, Clock, MapPin, Star, Flame, ShieldCheck } from "lucide-react";
import type { RouteInfo } from "@/lib/routes";
import { OperatorCard, StatPill, StopsRibbon, FilledSeatsBar } from "./shared";

export default function Panoramic({ route }: { route: RouteInfo }) {
  return (
    <main className="flex-1 bg-white">
      {/* Full-bleed panoramic hero */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-[70vh] min-h-[500px] max-h-[720px] w-full">
          <Image
            src={route.img}
            alt={`${route.from} to ${route.to}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand-green-dark)]/90 via-[color:var(--brand-green-dark)]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 text-white">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] text-[11px] font-extrabold uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5" /> Trending Route
                </span>
                <h1 className="mt-5 text-5xl sm:text-6xl font-extrabold leading-tight">
                  {route.from}
                  <span className="text-[color:var(--brand-yellow)]"> → </span>
                  {route.to}
                </h1>
                <p className="mt-4 text-lg text-white/90 max-w-lg">
                  {route.tagline}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm font-semibold">
                    <Clock className="w-4 h-4 text-[color:var(--brand-yellow)]" />
                    {route.hours}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm font-semibold">
                    <MapPin className="w-4 h-4 text-[color:var(--brand-yellow)]" />
                    {route.km} km
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm font-semibold">
                    <Star className="w-4 h-4 fill-[color:var(--brand-yellow)] text-[color:var(--brand-yellow)]" />
                    {route.rating}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Tilted floating booking card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 -mt-24 mx-auto max-w-5xl px-4"
        >
          <div className="transform lg:-rotate-[1.5deg] hover:rotate-0 transition duration-500 rounded-3xl bg-white border border-[color:var(--brand-border)] shadow-[0_40px_80px_-30px_rgba(15,94,58,0.4)] p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <StatPill
                Icon={Bus}
                value={`${route.busesPerDay}/day`}
                label="Buses"
              />
              <StatPill
                Icon={Clock}
                value={route.hours}
                label="Duration"
                color="yellow"
              />
              <StatPill Icon={MapPin} value={`${route.km} km`} label="Distance" color="mint" />
              <StatPill
                Icon={ShieldCheck}
                value="Verified"
                label="Operators"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-16 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-extrabold text-[color:var(--brand-ink)]">
            Available Buses
          </h2>
          <p className="mt-2 text-[color:var(--brand-muted)] text-sm">
            {route.description}
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {route.operators.map((op, i) => (
              <OperatorCard key={op.name} op={op} variant={i === 0 ? "yellow" : "green"} />
            ))}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl bg-[color:var(--brand-green)] text-white p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-yellow)]">
              Journey Stops
            </div>
            <ul className="mt-4 space-y-3">
              {route.stops.map((s, i) => (
                <li key={s} className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-full grid place-items-center text-xs font-extrabold ${
                      i === 0
                        ? "bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)]"
                        : "bg-white/15"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="font-semibold">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[color:var(--brand-border)] p-6 bg-white">
            <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-green)]">
              Highlights
            </div>
            <ul className="mt-4 space-y-2">
              {route.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand-yellow)]" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <FilledSeatsBar seats={route.operators[0]?.seats ?? 10} />
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-16 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        <h3 className="text-xl font-extrabold text-[color:var(--brand-ink)]">
          Route Stops
        </h3>
        <div className="mt-5 rounded-3xl border border-dashed border-[color:var(--brand-green)]/40 bg-[color:var(--brand-surface)] p-6">
          <StopsRibbon stops={route.stops} />
        </div>
      </section>
    </main>
  );
}
