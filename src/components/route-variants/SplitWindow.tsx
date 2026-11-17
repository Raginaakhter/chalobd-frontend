"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bus, Clock, MapPin, Star, Leaf, ArrowRight } from "lucide-react";
import type { RouteInfo } from "@/lib/routes";
import { OperatorCard, StopsRibbon, FilledSeatsBar } from "./shared";

export default function SplitWindow({ route }: { route: RouteInfo }) {
  return (
    <main className="flex-1 bg-[color:var(--brand-surface)] pt-20 lg:pt-24">
      {/* Split hero: image left, info card right */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative rounded-[32px] overflow-hidden min-h-[480px]"
          >
            <Image
              src={route.img}
              alt={`${route.from} to ${route.to}`}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-green-dark)]/70 via-transparent to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] text-[11px] font-extrabold uppercase tracking-wider w-fit">
                <Leaf className="w-3.5 h-3.5" /> Tea Garden Route
              </div>
              <div className="text-white">
                <div className="text-sm opacity-85 font-semibold">
                  Experience the magic of
                </div>
                <h1 className="mt-1 text-5xl sm:text-6xl font-extrabold tracking-tight">
                  {route.to}
                </h1>
                <p className="mt-2 opacity-90 max-w-md">{route.tagline}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 rounded-[32px] bg-white border border-[color:var(--brand-border)] p-6 lg:p-7 shadow-[0_20px_60px_-30px_rgba(15,94,58,0.3)]"
          >
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-green)]">
              Book this route
            </div>
            <div className="mt-2 text-2xl font-extrabold text-[color:var(--brand-ink)]">
              {route.from} → {route.to}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <Stat label="Duration" value={route.hours} />
              <Stat label="Distance" value={`${route.km} km`} />
              <Stat label="Rating" value={`★ ${route.rating}`} />
            </div>

            <div className="mt-5 pt-5 border-t border-dashed border-[color:var(--brand-border)]">
              <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-muted)]">
                Starting from
              </div>
              <div className="text-4xl font-extrabold text-[color:var(--brand-green)] leading-tight">
                ৳{route.price}
                <span className="text-sm text-[color:var(--brand-muted)] font-semibold">
                  {" "}
                  / seat
                </span>
              </div>
              <button className="mt-5 w-full h-12 rounded-xl bg-[color:var(--brand-green)] hover:bg-[color:var(--brand-green-dark)] text-white font-bold inline-flex items-center justify-center gap-2 transition">
                Book Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6">
              <FilledSeatsBar seats={route.operators[0]?.seats ?? 12} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[color:var(--brand-border)] p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {route.highlights.map((h) => (
            <div key={h} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[color:var(--brand-green-50)] text-[color:var(--brand-green)] grid place-items-center">
                <Star className="w-5 h-5 fill-[color:var(--brand-yellow)] text-[color:var(--brand-yellow)]" />
              </div>
              <span className="font-bold text-[color:var(--brand-ink)]">{h}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Operators grid */}
      <section className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <h2 className="text-2xl font-extrabold text-[color:var(--brand-ink)]">
            Available Buses
          </h2>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[color:var(--brand-muted)]">
            <Bus className="w-3.5 h-3.5" /> {route.busesPerDay} buses/day
          </span>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {route.operators.map((op) => (
            <OperatorCard key={op.name} op={op} />
          ))}
        </div>
      </section>

      {/* Stops as ribbon */}
      <section className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <h3 className="text-xl font-extrabold text-[color:var(--brand-ink)] flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[color:var(--brand-green)]" /> Route Stops
        </h3>
        <div className="mt-5 rounded-3xl bg-gradient-to-br from-white to-[color:var(--brand-green-50)] border border-[color:var(--brand-border)] p-6">
          <StopsRibbon stops={route.stops} />
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[color:var(--brand-surface)] p-2.5">
      <div className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-muted)]">
        {label}
      </div>
      <div className="text-sm font-extrabold">{value}</div>
    </div>
  );
}
