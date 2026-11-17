"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bus, Clock, MapPin, Moon, Zap, ArrowRight } from "lucide-react";
import type { RouteInfo } from "@/lib/routes";
import { OperatorCard, FilledSeatsBar } from "./shared";

export default function ModernCards({ route }: { route: RouteInfo }) {
  return (
    <main className="flex-1 bg-white pt-20 lg:pt-24">
      {/* Asymmetric hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Big left image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 relative rounded-[32px] overflow-hidden aspect-[4/3]"
          >
            <Image
              src={route.img}
              alt={`${route.from} to ${route.to}`}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[color:var(--brand-green-dark)]/75" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] text-[10px] font-extrabold uppercase tracking-wider">
                <Moon className="w-3 h-3" /> Night rides
              </div>
              <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
                {route.from}
                <br />
                <span className="text-[color:var(--brand-yellow)]">
                  → {route.to}
                </span>
              </h1>
            </div>
          </motion.div>

          {/* Right stack of cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4 content-start">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-[color:var(--brand-green-dark)] text-white p-6"
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-yellow)]">
                Journey card
              </div>
              <div className="mt-2 text-2xl font-extrabold">{route.tagline}</div>
              <p className="mt-2 text-sm opacity-85">{route.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] p-6"
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                Starts from
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-5xl font-black">৳{route.price}</span>
                <span className="text-sm font-bold opacity-75">per seat</span>
              </div>
              <button className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[color:var(--brand-green-dark)] text-white font-bold hover:bg-[color:var(--brand-green)]">
                <Zap className="w-4 h-4" /> Reserve now
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl bg-white border border-[color:var(--brand-border)] p-6 grid grid-cols-3 gap-2 text-center"
            >
              <Stat
                icon={<Clock className="w-4 h-4" />}
                value={route.hours}
                label="Hours"
              />
              <Stat
                icon={<MapPin className="w-4 h-4" />}
                value={`${route.km} km`}
                label="Distance"
              />
              <Stat
                icon={<Bus className="w-4 h-4" />}
                value={`${route.busesPerDay}/d`}
                label="Buses"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operators + filled bar */}
      <section className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-[color:var(--brand-ink)]">
          Pick an Operator
        </h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          {route.operators.map((op) => (
            <OperatorCard key={op.name} op={op} variant="yellow" />
          ))}
        </div>
        <div className="mt-8 max-w-md">
          <FilledSeatsBar seats={route.operators[0]?.seats ?? 10} />
        </div>
      </section>

      <section className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-3xl bg-[color:var(--brand-green-50)] border border-[color:var(--brand-green)]/15 p-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-green)]">
              Highlights
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {route.highlights.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-[color:var(--brand-border)] text-sm font-semibold"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--brand-green)] text-white font-bold hover:bg-[color:var(--brand-green-dark)]"
          >
            See all departures <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-[color:var(--brand-surface)] p-3">
      <div className="inline-flex items-center gap-1 text-[color:var(--brand-green)]">
        {icon}
      </div>
      <div className="mt-1 text-sm font-extrabold">{value}</div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-muted)]">
        {label}
      </div>
    </div>
  );
}
