"use client";

import { motion } from "framer-motion";
import { Bus, Clock, Star, Users, Zap } from "lucide-react";
import type { Operator } from "@/lib/routes";

export function OperatorCard({ op, variant = "green" }: { op: Operator; variant?: "green" | "yellow" }) {
  const typeBg =
    variant === "yellow"
      ? "bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)]"
      : "bg-[color:var(--brand-green)] text-white";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="group rounded-2xl border border-[color:var(--brand-border)] bg-white p-4 hover:shadow-lg hover:border-[color:var(--brand-green)]/40 transition"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-extrabold text-[color:var(--brand-ink)] truncate">
              {op.name}
            </h4>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${typeBg}`}>
              <Bus className="w-3 h-3" /> {op.type}
            </span>
          </div>
          <div className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-[color:var(--brand-muted)]">
            <Star className="w-3 h-3 fill-[color:var(--brand-yellow)] text-[color:var(--brand-yellow)]" />
            {op.rating} · {op.seats} seats left
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-muted)]">
            From
          </div>
          <div className="text-xl font-extrabold text-[color:var(--brand-green)] leading-none">
            ৳{op.price}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-5 items-center gap-2">
        <div className="col-span-2">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-muted)]">
            Depart
          </div>
          <div className="font-extrabold text-sm">{op.depart}</div>
        </div>
        <div className="col-span-1 flex flex-col items-center text-[color:var(--brand-green)]">
          <div className="w-full h-[2px] bg-[color:var(--brand-green)]/30" />
          <Bus className="w-4 h-4 my-1" />
          <Clock className="w-3 h-3 opacity-60" />
        </div>
        <div className="col-span-2 text-right">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-muted)]">
            Arrive
          </div>
          <div className="font-extrabold text-sm">{op.arrive}</div>
        </div>
      </div>

      <button className="mt-4 w-full h-11 rounded-xl bg-[color:var(--brand-green)] text-white text-sm font-bold hover:bg-[color:var(--brand-green-dark)] transition inline-flex items-center justify-center gap-2">
        <Zap className="w-4 h-4" />
        Select Seats
      </button>
    </motion.div>
  );
}

export function StatPill({
  Icon,
  value,
  label,
  color = "green",
}: {
  Icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  color?: "green" | "yellow" | "mint";
}) {
  const bg =
    color === "yellow"
      ? "bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)]"
      : color === "mint"
        ? "bg-[color:var(--brand-green-50)] text-[color:var(--brand-green)]"
        : "bg-[color:var(--brand-green)] text-white";
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[color:var(--brand-border)] bg-white p-3">
      <div className={`w-10 h-10 rounded-xl grid place-items-center ${bg}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-muted)]">
          {label}
        </div>
        <div className="font-extrabold text-[color:var(--brand-ink)]">
          {value}
        </div>
      </div>
    </div>
  );
}

export function StopsRibbon({ stops }: { stops: string[] }) {
  return (
    <div className="relative flex items-center flex-wrap gap-y-3 gap-x-1">
      {stops.map((s, i) => (
        <div key={s} className="flex items-center gap-1">
          <div className="flex flex-col items-center">
            <span
              className={`w-3 h-3 rounded-full ${
                i === 0
                  ? "bg-[color:var(--brand-green)]"
                  : i === stops.length - 1
                    ? "bg-[color:var(--brand-yellow)]"
                    : "bg-[color:var(--brand-muted)]/40 border-2 border-white"
              }`}
            />
            <span className="mt-1 text-xs font-semibold text-[color:var(--brand-ink)]">
              {s}
            </span>
          </div>
          {i < stops.length - 1 && (
            <div className="w-6 sm:w-10 h-[2px] mt-[-18px] border-t-2 border-dashed border-[color:var(--brand-green)]/40" />
          )}
        </div>
      ))}
    </div>
  );
}

export function FilledSeatsBar({ seats }: { seats: number }) {
  const filled = Math.max(10, Math.min(95, 100 - seats * 3));
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="inline-flex items-center gap-1 font-semibold text-[color:var(--brand-muted)]">
          <Users className="w-3 h-3" /> Seats filling up
        </span>
        <span className="font-bold text-[color:var(--brand-green)]">
          {filled}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-[color:var(--brand-border)] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[color:var(--brand-green)] to-[color:var(--brand-yellow)]"
          style={{ width: `${filled}%` }}
        />
      </div>
    </div>
  );
}
