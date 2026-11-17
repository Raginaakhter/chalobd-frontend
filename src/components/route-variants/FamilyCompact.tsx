"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Users,
  Bus,
  Heart,
  Sunrise,
} from "lucide-react";
import type { RouteInfo } from "@/lib/routes";
import { OperatorCard, StopsRibbon, FilledSeatsBar } from "./shared";

export default function FamilyCompact({ route }: { route: RouteInfo }) {
  return (
    <main className="flex-1 bg-white pt-20 lg:pt-24">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[36px] overflow-hidden bg-[color:var(--brand-green-50)] border border-[color:var(--brand-green)]/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src={route.img}
                alt={`${route.from} to ${route.to}`}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] text-[11px] font-extrabold uppercase tracking-wider w-fit">
                <Heart className="w-3.5 h-3.5" /> Family Friendly
              </div>
              <h1 className="mt-4 text-4xl font-extrabold text-[color:var(--brand-ink)] leading-tight">
                {route.from}
                <br />
                <span className="text-[color:var(--brand-green)]">
                  → {route.to}
                </span>
              </h1>
              <p className="mt-3 text-[color:var(--brand-muted)]">
                {route.tagline}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                <Mini
                  icon={<Clock className="w-4 h-4" />}
                  value={route.hours}
                  label="Short ride"
                />
                <Mini
                  icon={<MapPin className="w-4 h-4" />}
                  value={`${route.km} km`}
                  label="Close by"
                />
                <Mini
                  icon={<Users className="w-4 h-4" />}
                  value={`${route.busesPerDay}/d`}
                  label="Every hour"
                />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-muted)]">
                    From
                  </div>
                  <div className="text-3xl font-black text-[color:var(--brand-green)]">
                    ৳{route.price}
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[color:var(--brand-green)] text-white font-bold">
                  Book Seat
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Compact all-in-one card */}
      <section className="mt-12 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] bg-white border border-[color:var(--brand-border)] p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[color:var(--brand-green)]">
                <Sunrise className="w-3.5 h-3.5" /> Morning + evening departures
              </div>
              <h2 className="mt-2 text-2xl font-extrabold text-[color:var(--brand-ink)]">
                Available Buses Today
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-3">
                {route.operators.map((op) => (
                  <OperatorCard key={op.name} op={op} />
                ))}
              </div>
            </div>
            <aside className="lg:col-span-2 space-y-5">
              <div className="rounded-2xl bg-[color:var(--brand-green-dark)] text-white p-5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-yellow)]">
                  Highlights
                </div>
                <ul className="mt-3 space-y-2">
                  {route.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 font-semibold text-sm">
                      <span className="w-2 h-2 rounded-full bg-[color:var(--brand-yellow)]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[color:var(--brand-border)] p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-green)] mb-2 inline-flex items-center gap-1.5">
                  <Bus className="w-3.5 h-3.5" /> Seats
                </div>
                <FilledSeatsBar seats={route.operators[0]?.seats ?? 20} />
              </div>
            </aside>
          </div>
          <div className="mt-8 pt-6 border-t border-dashed border-[color:var(--brand-border)]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-green)] mb-4">
              All stops
            </h3>
            <StopsRibbon stops={route.stops} />
          </div>
        </div>
      </section>

      <section className="pb-24" />
    </main>
  );
}

function Mini({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-white border border-[color:var(--brand-border)] p-2.5">
      <div className="text-[color:var(--brand-green)] inline-flex items-center">
        {icon}
      </div>
      <div className="font-extrabold text-[color:var(--brand-ink)] text-sm">
        {value}
      </div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-muted)]">
        {label}
      </div>
    </div>
  );
}
