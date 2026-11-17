"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bus, Clock, MapPin, Star, Route as RouteIcon } from "lucide-react";
import type { RouteInfo } from "@/lib/routes";
import { OperatorCard, FilledSeatsBar } from "./shared";

export default function Timeline({ route }: { route: RouteInfo }) {
  return (
    <main className="flex-1 bg-white pt-20 lg:pt-24">
      {/* Compact hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[color:var(--brand-green-dark)] to-[color:var(--brand-green)] text-white"
        >
          <Image
            src={route.img}
            alt={`${route.from} to ${route.to}`}
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="relative p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] text-[11px] font-extrabold uppercase tracking-wider">
                <RouteIcon className="w-3.5 h-3.5" /> Via Padma Bridge
              </div>
              <h1 className="mt-4 text-5xl font-extrabold leading-tight">
                {route.from} → {route.to}
              </h1>
              <p className="mt-3 opacity-90 max-w-md">{route.tagline}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <HeroStat icon={<Clock className="w-4 h-4" />} value={route.hours} label="Duration" />
              <HeroStat icon={<MapPin className="w-4 h-4" />} value={`${route.km} km`} label="Distance" />
              <HeroStat
                icon={<Star className="w-4 h-4 fill-[color:var(--brand-yellow)] text-[color:var(--brand-yellow)]" />}
                value={`${route.rating}`}
                label="Rating"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Vertical timeline of stops */}
      <section className="mt-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-[color:var(--brand-ink)]">
          Your Journey, Stop by Stop
        </h2>
        <p className="mt-2 text-sm text-[color:var(--brand-muted)]">
          Follow the full route from departure to arrival.
        </p>

        <div className="mt-8 relative">
          <div className="absolute left-5 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[color:var(--brand-green)] via-[color:var(--brand-yellow)] to-[color:var(--brand-green)] rounded" />
          <ul className="space-y-6">
            {route.stops.map((stop, i) => {
              const last = i === route.stops.length - 1;
              return (
                <motion.li
                  key={stop}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="relative pl-14"
                >
                  <span
                    className={`absolute left-0 top-1 w-10 h-10 rounded-full grid place-items-center text-sm font-extrabold ${
                      i === 0
                        ? "bg-[color:var(--brand-green)] text-white"
                        : last
                          ? "bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)]"
                          : "bg-white border-2 border-[color:var(--brand-green)] text-[color:var(--brand-green)]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="rounded-2xl bg-white border border-[color:var(--brand-border)] p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-muted)]">
                      {i === 0 ? "Departure" : last ? "Arrival" : "Stop"}
                    </div>
                    <div className="mt-0.5 text-lg font-extrabold text-[color:var(--brand-ink)]">
                      {stop}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Operators */}
      <section className="mt-16 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <h2 className="text-2xl font-extrabold text-[color:var(--brand-ink)] flex items-center gap-2">
            <Bus className="w-6 h-6 text-[color:var(--brand-green)]" /> Available Buses
          </h2>
          <FilledSeatsBar seats={route.operators[0]?.seats ?? 10} />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {route.operators.map((op) => (
            <OperatorCard key={op.name} op={op} />
          ))}
        </div>
      </section>

      <section className="mt-16 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-3xl bg-[color:var(--brand-green)] text-white p-8 text-center">
          <h3 className="text-2xl font-extrabold">Ready to book?</h3>
          <p className="mt-2 opacity-85 max-w-md mx-auto">
            Grab a seat on the next {route.from} → {route.to} bus — fares start
            at just ৳{route.price}.
          </p>
          <button className="mt-5 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] font-extrabold hover:brightness-95">
            Book This Route
          </button>
        </div>
      </section>
    </main>
  );
}

function HeroStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-white/10 border border-white/15 p-3 backdrop-blur">
      <div className="flex items-center gap-1.5 text-[color:var(--brand-yellow)] text-xs">
        {icon}
        {label}
      </div>
      <div className="mt-1 font-extrabold">{value}</div>
    </div>
  );
}
