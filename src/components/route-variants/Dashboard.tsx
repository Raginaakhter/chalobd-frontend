"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bus,
  Clock,
  MapPin,
  Users,
  TrendingUp,
  BadgePercent,
} from "lucide-react";
import type { RouteInfo } from "@/lib/routes";
import { OperatorCard, StopsRibbon, FilledSeatsBar } from "./shared";

export default function Dashboard({ route }: { route: RouteInfo }) {
  return (
    <main className="flex-1 bg-[color:var(--brand-surface)] pt-20 lg:pt-24">
      {/* Dashboard header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[color:var(--brand-green)]">
              Route Dashboard
            </div>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[color:var(--brand-ink)]">
              {route.from} → {route.to}
            </h1>
            <p className="mt-2 text-[color:var(--brand-muted)] max-w-xl">
              {route.tagline}
            </p>
          </motion.div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--brand-green)] text-white font-extrabold text-sm">
            Live · {route.busesPerDay} buses today
          </div>
        </div>

        {/* 4 stat cards */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatBig
            Icon={Clock}
            value={route.hours}
            label="Travel time"
            tone="green"
            spark={[20, 35, 25, 40, 30, 50, 45]}
          />
          <StatBig
            Icon={MapPin}
            value={`${route.km} km`}
            label="Distance"
            tone="yellow"
            spark={[30, 50, 40, 60, 55, 75, 65]}
          />
          <StatBig
            Icon={Users}
            value={`${route.busesPerDay}/day`}
            label="Departures"
            tone="mint"
            spark={[15, 25, 20, 40, 35, 55, 60]}
          />
          <StatBig
            Icon={BadgePercent}
            value={`৳${route.price}`}
            label="Lowest fare"
            tone="green"
            spark={[50, 45, 55, 40, 48, 35, 30]}
          />
        </div>
      </section>

      {/* Hero image + route visualization */}
      <section className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 relative rounded-3xl overflow-hidden aspect-[16/10] bg-white border border-[color:var(--brand-border)]"
          >
            <Image
              src={route.img}
              alt={`${route.from} to ${route.to}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
          <div className="lg:col-span-2 rounded-3xl bg-white border border-[color:var(--brand-border)] p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-green)]">
              Route map
            </div>
            <h3 className="mt-1 font-extrabold text-[color:var(--brand-ink)]">
              Scheduled stops
            </h3>
            <div className="mt-5 space-y-3">
              {route.stops.map((s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-full grid place-items-center text-xs font-extrabold ${
                      i === 0
                        ? "bg-[color:var(--brand-green)] text-white"
                        : i === route.stops.length - 1
                          ? "bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)]"
                          : "bg-[color:var(--brand-green-50)] text-[color:var(--brand-green)]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="font-semibold">{s}</span>
                    {i < route.stops.length - 1 && (
                      <span className="text-xs text-[color:var(--brand-muted)]">
                        +{Math.round((route.km / route.stops.length / 5)) * 5} km
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-dashed border-[color:var(--brand-border)]">
              <FilledSeatsBar seats={route.operators[0]?.seats ?? 10} />
            </div>
          </div>
        </div>
      </section>

      {/* Operators table */}
      <section className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
          <h2 className="text-2xl font-extrabold text-[color:var(--brand-ink)] flex items-center gap-2">
            <Bus className="w-6 h-6 text-[color:var(--brand-green)]" /> Live Departures
          </h2>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[color:var(--brand-green)] bg-[color:var(--brand-green-50)] px-3 py-1 rounded-full">
            <TrendingUp className="w-3.5 h-3.5" /> Prices updated now
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {route.operators.map((op) => (
            <OperatorCard key={op.name} op={op} />
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-white border border-[color:var(--brand-border)] p-6">
          <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-green)] mb-3">
            Highlights
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {route.highlights.map((h) => (
              <div
                key={h}
                className="rounded-xl bg-[color:var(--brand-surface)] px-4 py-3 font-semibold text-[color:var(--brand-ink)] flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[color:var(--brand-yellow)]" />
                {h}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <StopsRibbon stops={route.stops} />
          </div>
        </div>
      </section>
    </main>
  );
}

function StatBig({
  Icon,
  value,
  label,
  tone,
  spark,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  tone: "green" | "yellow" | "mint";
  spark: number[];
}) {
  const iconBg =
    tone === "yellow"
      ? "bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)]"
      : tone === "mint"
        ? "bg-[color:var(--brand-green-50)] text-[color:var(--brand-green)]"
        : "bg-[color:var(--brand-green)] text-white";
  const stroke = tone === "yellow" ? "#f5c518" : "#0f5e3a";
  const max = Math.max(...spark);
  const w = 100;
  const step = w / (spark.length - 1);
  const path = spark
    .map((v, i) => `${i === 0 ? "M" : "L"}${i * step},${30 - (v / max) * 24}`)
    .join(" ");
  return (
    <div className="rounded-3xl bg-white border border-[color:var(--brand-border)] p-5">
      <div className="flex items-center justify-between">
        <div className={`w-10 h-10 rounded-xl grid place-items-center ${iconBg}`}>
          <Icon className="w-5 h-5" />
        </div>
        <svg viewBox="0 0 100 30" className="w-24 h-7">
          <path d={path} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="mt-4 text-2xl font-extrabold text-[color:var(--brand-ink)] leading-none">
        {value}
      </div>
      <div className="mt-1 text-xs font-bold uppercase tracking-wider text-[color:var(--brand-muted)]">
        {label}
      </div>
    </div>
  );
}
