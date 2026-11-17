"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  MapPin,
  Star,
  Bus,
  Flame,
  BadgeCheck,
} from "lucide-react";
import { SectionHeading } from "./TravelTypes";
import { routes, type RouteInfo } from "@/lib/routes";

const trendingSlugs = new Set(["dhaka-chattogram", "dhaka-coxs-bazar"]);

export default function TopRoutes() {
  return (
    <section
      id="routes"
      className="mt-20 sm:mt-28 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <div className="flex items-end justify-between flex-wrap gap-4">
        <SectionHeading
          eyebrow="Popular Routes"
          title="Top Routes For Your Journey"
          subtitle="Explore the most booked routes across Bangladesh at the best fares."
          center={false}
        />
        <Link
          href="/routes"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[color:var(--brand-green)] hover:gap-2.5 transition-all"
        >
          View All Routes <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {routes.map((r, i) => (
          <RouteCard key={r.slug} route={r} delay={i * 0.05} />
        ))}
      </div>
    </section>
  );
}

function RouteCard({ route, delay }: { route: RouteInfo; delay: number }) {
  const trending = trendingSlugs.has(route.slug);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -6 }}
    >
      <Link
        href={`/routes/${route.slug}`}
        className="group relative block rounded-3xl bg-white border border-[color:var(--brand-border)] overflow-hidden hover:shadow-[0_30px_60px_-20px_rgba(15,94,58,0.3)] hover:border-[color:var(--brand-green)]/40 transition"
      >
        <div className="relative h-44 overflow-hidden">
          <Image
            src={route.img}
            alt={`Bus from ${route.from} to ${route.to}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover group-hover:scale-110 transition duration-[600ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-green-dark)]/70 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-xs font-extrabold text-[color:var(--brand-green-dark)]">
            <Star className="w-3 h-3 fill-[color:var(--brand-yellow)] text-[color:var(--brand-yellow)]" />
            {route.rating}
          </div>

          {trending && (
            <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] text-[10px] font-extrabold uppercase tracking-wider shadow">
              <Flame className="w-3 h-3" /> Trending
            </div>
          )}

          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[color:var(--brand-green)] text-white text-[11px] font-bold">
            <Bus className="w-3 h-3" /> {route.type}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--brand-green)]" />
              <span className="w-[2px] h-5 bg-[color:var(--brand-border)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--brand-yellow)]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-extrabold text-[color:var(--brand-ink)] truncate">
                {route.from}
              </div>
              <div className="text-sm font-extrabold text-[color:var(--brand-ink)] truncate">
                {route.to}
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-dashed border-[color:var(--brand-border)] flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1 text-[color:var(--brand-muted)] font-semibold">
              <Clock className="w-3 h-3" /> {route.hours}
            </span>
            <span className="inline-flex items-center gap-1 text-[color:var(--brand-muted)] font-semibold">
              <MapPin className="w-3 h-3" /> {route.km} km
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-muted)]">
                Starts from
              </div>
              <div className="text-xl font-extrabold text-[color:var(--brand-green)] leading-none">
                ৳{route.price}
              </div>
            </div>
            <div className="inline-flex items-center gap-1 text-xs font-extrabold text-[color:var(--brand-green)] bg-[color:var(--brand-green-50)] group-hover:bg-[color:var(--brand-green)] group-hover:text-white px-3 py-2 rounded-full transition">
              <BadgeCheck className="w-3.5 h-3.5" />
              View Trips
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
            </div>
          </div>
        </div>

        <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[color:var(--brand-yellow)] to-[color:var(--brand-green)] opacity-0 group-hover:opacity-100 transition" />
      </Link>
    </motion.div>
  );
}
