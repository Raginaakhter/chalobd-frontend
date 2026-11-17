"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Star, ArrowRight } from "lucide-react";
import type { RouteInfo } from "@/lib/routes";
import { OperatorCard, StopsRibbon, FilledSeatsBar } from "./shared";

export default function BigType({ route }: { route: RouteInfo }) {
  return (
    <main className="flex-1 bg-white pt-20 lg:pt-24">
      {/* Oversized type on pale bg */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[18vw] lg:text-[13vw] leading-[0.9] font-black tracking-tighter text-[color:var(--brand-green-dark)]"
          >
            {route.to}
            <span className="text-[color:var(--brand-yellow)]">.</span>
          </motion.h1>
          <div className="mt-6 flex flex-col sm:flex-row items-start justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-green)]">
                {route.from} → {route.to}
              </div>
              <p className="mt-2 text-xl text-[color:var(--brand-ink)] max-w-xl font-medium">
                {route.tagline}
              </p>
            </div>
            <div className="shrink-0 flex flex-wrap gap-2">
              <Chip
                icon={<Clock className="w-3.5 h-3.5" />}
                label={route.hours}
              />
              <Chip
                icon={<MapPin className="w-3.5 h-3.5" />}
                label={`${route.km} km`}
              />
              <Chip
                icon={<Star className="w-3.5 h-3.5 fill-[color:var(--brand-yellow)] text-[color:var(--brand-yellow)]" />}
                label={`${route.rating}`}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-[32px] overflow-hidden aspect-[4/3]"
          >
            <Image
              src={route.img}
              alt={`${route.from} to ${route.to}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[32px] bg-[color:var(--brand-green-dark)] text-white p-8 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-yellow)]">
                Quick details
              </div>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight">
                {route.description}
              </h2>
            </div>
            <div className="mt-8">
              <div className="text-sm opacity-80">Starting fare</div>
              <div className="text-5xl font-black text-[color:var(--brand-yellow)] mt-1">
                ৳{route.price}
              </div>
              <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] font-extrabold hover:brightness-95 transition">
                Book Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-16 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[color:var(--brand-border)] bg-white p-6">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
            <h2 className="text-2xl font-extrabold text-[color:var(--brand-ink)]">
              Buses on this route
            </h2>
            <FilledSeatsBar seats={route.operators[0]?.seats ?? 14} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {route.operators.map((op) => (
              <OperatorCard key={op.name} op={op} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        <h3 className="text-xl font-extrabold text-[color:var(--brand-ink)]">
          Stops along the way
        </h3>
        <div className="mt-5 rounded-3xl bg-[color:var(--brand-surface)] border border-[color:var(--brand-border)] p-6">
          <StopsRibbon stops={route.stops} />
        </div>
      </section>
    </main>
  );
}

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[color:var(--brand-surface)] border border-[color:var(--brand-border)] text-sm font-bold text-[color:var(--brand-ink)]">
      {icon}
      {label}
    </span>
  );
}
