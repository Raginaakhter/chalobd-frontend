"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bus, Waves, Moon, Clock, Sparkles, MapPin } from "lucide-react";
import type { RouteInfo } from "@/lib/routes";
import { OperatorCard, FilledSeatsBar } from "./shared";

export default function BeachShowcase({ route }: { route: RouteInfo }) {
  return (
    <main className="flex-1 bg-white pt-20 lg:pt-24">
      {/* Big-type hero with gallery */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] text-[11px] font-extrabold uppercase tracking-wider">
              <Waves className="w-3.5 h-3.5" /> World&apos;s Longest Beach
            </div>
            <h1 className="mt-5 text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[color:var(--brand-green-dark)] leading-[1]">
              {route.from}
              <br />
              <span className="bg-gradient-to-r from-[color:var(--brand-green)] via-[color:var(--brand-yellow)] to-[color:var(--brand-green)] bg-clip-text text-transparent">
                {route.to}
              </span>
            </h1>
            <p className="mt-6 text-[color:var(--brand-muted)] max-w-xl mx-auto">
              {route.tagline}
            </p>
          </motion.div>
        </div>

        {/* Big image with floating cards */}
        <div className="mt-14 relative rounded-[32px] overflow-hidden h-[55vh] min-h-[420px]">
          <Image
            src={route.img}
            alt={`${route.from} to ${route.to}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-green-dark)]/70 to-transparent" />

          {/* Floating cards */}
          <div className="absolute inset-0 flex items-end">
            <div className="p-6 lg:p-8 w-full grid grid-cols-1 sm:grid-cols-4 gap-3">
              <FloatCard Icon={Moon} label="Overnight" value="Sleeper coach" />
              <FloatCard Icon={Clock} label="Travel time" value={route.hours} />
              <FloatCard Icon={MapPin} label="Distance" value={`${route.km} km`} />
              <FloatCard
                Icon={Sparkles}
                label="Starts from"
                value={`৳${route.price}`}
                accent
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dual column: description | seats bar */}
      <section className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-green)]">
            About this route
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-[color:var(--brand-ink)]">
            A night in a sleeper bus. A morning on the beach.
          </h2>
          <p className="mt-4 text-[color:var(--brand-muted)] leading-relaxed">
            {route.description}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {route.highlights.map((h) => (
              <div
                key={h}
                className="rounded-2xl p-4 bg-[color:var(--brand-green-50)] border border-[color:var(--brand-green)]/15"
              >
                <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] grid place-items-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="mt-2 font-bold text-[color:var(--brand-ink)]">
                  {h}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-2 rounded-3xl bg-[color:var(--brand-green-dark)] text-white p-6 lg:p-7 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[color:var(--brand-yellow)]/20 blur-2xl" />
          <div className="relative">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-yellow)]">
              Ticket snapshot
            </div>
            <h3 className="mt-2 text-2xl font-extrabold">
              {route.from} → {route.to}
            </h3>
            <div className="mt-4 text-4xl font-black text-[color:var(--brand-yellow)]">
              ৳{route.price}
            </div>
            <div className="mt-1 text-sm opacity-85">per sleeper berth</div>
            <div className="mt-6 space-y-3 text-sm">
              <Row label="Buses per day" value={`${route.busesPerDay}`} />
              <Row label="Avg rating" value={`★ ${route.rating}`} />
              <Row label="Type" value={route.type} />
            </div>
            <button className="mt-6 w-full h-12 rounded-xl bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] font-extrabold inline-flex items-center justify-center gap-2 hover:brightness-95 transition">
              <Bus className="w-4 h-4" /> Reserve a Sleeper
            </button>
            <div className="mt-5 pt-5 border-t border-white/15">
              <FilledSeatsBar seats={route.operators[0]?.seats ?? 6} />
            </div>
          </div>
        </aside>
      </section>

      {/* Operators */}
      <section className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-2xl font-extrabold text-[color:var(--brand-ink)]">
          Pick Your Overnight Coach
        </h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {route.operators.map((op) => (
            <OperatorCard key={op.name} op={op} variant="yellow" />
          ))}
        </div>
      </section>
    </main>
  );
}

function FloatCard({
  Icon,
  label,
  value,
  accent,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-4 backdrop-blur ${
        accent
          ? "bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)]"
          : "bg-white/15 text-white border border-white/20"
      }`}
    >
      <div
        className={`w-9 h-9 rounded-lg grid place-items-center ${
          accent ? "bg-white/40" : "bg-white/20"
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="mt-2 text-[10px] font-bold uppercase tracking-wider opacity-80">
        {label}
      </div>
      <div className="font-extrabold">{value}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="opacity-85">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
