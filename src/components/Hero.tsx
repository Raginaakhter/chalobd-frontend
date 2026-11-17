"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowLeftRight,
  CalendarDays,
  Users,
  Search,
  Bus,
  Play,
  Ticket,
  ShieldCheck,
  Zap,
  BadgePercent,
  Sparkles,
  Clock,
} from "lucide-react";

type TravelType = "local" | "intercity";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [travelType, setTravelType] = useState<TravelType>("intercity");

  // Skip first 1s and keep looped play clean
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const handleLoaded = () => {
      try {
        v.currentTime = 1;
      } catch {
        /* ignore */
      }
    };
    const handleTimeUpdate = () => {
      if (v.currentTime < 1 && v.duration > 1.2) {
        v.currentTime = 1;
      }
    };

    v.addEventListener("loadedmetadata", handleLoaded);
    v.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      v.removeEventListener("loadedmetadata", handleLoaded);
      v.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Background video — fills the whole hero */}
      <div className="relative w-full min-h-[680px] lg:min-h-[760px] h-[92vh] max-h-[880px]">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/chalo-bd-logo.png"
        >
          <source src="/videos/chalo-bd-hero.mp4" type="video/mp4" />
        </video>

        {/* Minimal readability overlay — keep the video/bus clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />

        {/* Decorative wave footer transitioning into white */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,96L60,96C120,96,240,96,360,85.3C480,75,600,53,720,53.3C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,120L0,120Z"
            fill="#ffffff"
          />
        </svg>

        {/* Yellow arrow decoration like the reference */}
        <svg
          className="absolute top-[40%] right-[-40px] w-[500px] opacity-70 hidden md:block"
          viewBox="0 0 600 40"
          aria-hidden
        >
          <path
            d="M 0 20 Q 300 0 560 20"
            stroke="#f5c518"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="560,12 580,20 560,28" fill="#f5c518" />
        </svg>

        {/* Content */}
        <div className="absolute inset-0 pt-20 lg:pt-24">
          <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left - Copy + CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 text-white"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] text-[11px] font-bold tracking-widest uppercase">
                <Bus className="w-3.5 h-3.5" /> Bangladesh&apos;s #1 Bus Booking
              </span>

              <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight drop-shadow-[0_6px_20px_rgba(0,0,0,0.45)]">
                Your Journey,
                <br />
                <span className="text-[color:var(--brand-yellow)]">
                  Our Priority
                </span>
              </h1>

              <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed">
                Book your bus ticket easily and travel with confidence across
                Bangladesh.
              </p>

              <p className="mt-2 text-xl font-semibold text-[color:var(--brand-yellow)]">
                চলো, এগিয়ে যাই…
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#search"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[color:var(--brand-yellow)] text-[color:var(--brand-green-dark)] font-bold shadow-[0_14px_30px_-10px_rgba(245,197,24,0.8)] hover:brightness-95 transition"
                >
                  <Ticket className="w-5 h-5" /> Book Now
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur text-white font-semibold border border-white/25 hover:bg-white/20 transition"
                >
                  <Play className="w-4 h-4 fill-white" /> Watch How It Works
                </a>
              </div>

              {/* Social proof row */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/85">
                <Stat value="1M+" label="Happy Passengers" />
                <span className="w-px h-10 bg-white/20" />
                <Stat value="500+" label="Daily Routes" />
                <span className="w-px h-10 bg-white/20 hidden sm:block" />
                <Stat value="4.8★" label="App Rating" />
              </div>
            </motion.div>

            {/* Right - Floating glass card with trip summary */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <TripSummaryCard />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search / Booking Form overlapping the hero */}
      <div
        id="search"
        className="relative z-10 -mt-20 sm:-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <SearchForm travelType={travelType} setTravelType={setTravelType} />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold text-[color:var(--brand-yellow)] leading-none">
        {value}
      </div>
      <div className="text-xs mt-1 opacity-80">{label}</div>
    </div>
  );
}

function TripSummaryCard() {
  return (
    <div className="relative">
      {/* Soft glow only — no heavy color block */}
      <div className="absolute -inset-6 bg-[color:var(--brand-yellow)]/10 blur-3xl rounded-[32px] pointer-events-none" />

      {/* Very transparent glass panel — the bus clearly shows through */}
      <div
        className="relative rounded-3xl p-5 text-white"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow:
            "0 20px 60px -20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[color:var(--brand-yellow)]/90 text-[color:var(--brand-green-dark)] grid place-items-center">
              <Bus className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider opacity-85 [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)]">
                Live Trip
              </div>
              <div className="font-bold [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)]">
                GreenLine Paribahan
              </div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-500/80 text-white">
            ON TIME
          </span>
        </div>

        <div className="mt-5 grid grid-cols-5 items-center gap-3">
          <div className="col-span-2">
            <div className="text-[11px] uppercase tracking-wider opacity-80 [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)]">
              From
            </div>
            <div className="text-xl font-extrabold [text-shadow:_0_1px_6px_rgba(0,0,0,0.6)]">
              Dhaka
            </div>
            <div className="text-xs opacity-90 [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)]">
              08:30 PM
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div className="w-full h-[2px] bg-gradient-to-r from-[color:var(--brand-yellow)] to-white/50" />
            <Bus className="w-5 h-5 my-1 text-[color:var(--brand-yellow)]" />
            <div className="text-[10px] opacity-80 [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)]">
              10h
            </div>
          </div>
          <div className="col-span-2 text-right">
            <div className="text-[11px] uppercase tracking-wider opacity-80 [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)]">
              To
            </div>
            <div className="text-xl font-extrabold [text-shadow:_0_1px_6px_rgba(0,0,0,0.6)]">
              Cox&apos;s Bazar
            </div>
            <div className="text-xs opacity-90 [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)]">
              06:30 AM
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 text-xs">
          <Mini label="Seats left" value="08" />
          <Mini label="From" value="৳1,100" />
          <Mini label="AC" value="Deluxe" />
        </div>
      </div>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-xl p-2.5"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <div className="text-[10px] uppercase tracking-wider opacity-85 [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]">
        {label}
      </div>
      <div className="font-bold text-sm [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)]">
        {value}
      </div>
    </div>
  );
}

function SearchForm({
  travelType,
  setTravelType,
}: {
  travelType: TravelType;
  setTravelType: (t: TravelType) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative"
    >
      {/* Soft glow */}
      <div className="absolute -inset-6 bg-[color:var(--brand-yellow)]/15 blur-3xl rounded-[40px] pointer-events-none" />

      {/* Yellow ticket-notch accent on the left */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[color:var(--brand-green)] hidden md:block z-10 shadow" />
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[color:var(--brand-green)] hidden md:block z-10 shadow" />

      <div className="relative bg-white rounded-[28px] shadow-[0_40px_90px_-30px_rgba(15,94,58,0.5)] border border-[color:var(--brand-border)] overflow-hidden">
        {/* Top header: tabs on left, trust badges on right — green + yellow, no patterns */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-5 pt-5">
          {/* Tabs */}
          <div className="inline-flex gap-1 p-1 rounded-full bg-[color:var(--brand-surface)] border border-[color:var(--brand-border)] self-start sm:self-auto">
            <TypeTab
              active={travelType === "local"}
              onClick={() => setTravelType("local")}
              icon={<Bus className="w-4 h-4" />}
              label="Local Bus"
            />
            <TypeTab
              active={travelType === "intercity"}
              onClick={() => setTravelType("intercity")}
              icon={<Bus className="w-4 h-4" />}
              label="Intercity Bus"
            />
          </div>

          {/* Trust chips */}
          <div className="flex items-center flex-wrap gap-2 text-[11px] font-bold">
            <TrustChip Icon={ShieldCheck} label="SSL Secured" />
            <TrustChip Icon={Zap} label="Instant E-Ticket" />
            <TrustChip Icon={BadgePercent} label="Best Price" highlight />
          </div>
        </div>

        {/* Main fields row — route visualization between From and To */}
        <div className="px-5 pt-5 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            {/* FROM + Route line + TO — grouped in a single pill card */}
            <div className="lg:col-span-6 relative rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-2">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-1 sm:gap-0 items-center">
                <RoutePoint
                  label="From"
                  color="green"
                  dotLabel="Start"
                  placeholder="Dhaka"
                />

                {/* Swap button sitting on the route line */}
                <div className="relative flex items-center justify-center my-1 sm:my-0 sm:px-2">
                  {/* dashed route line */}
                  <div className="absolute inset-y-1/2 left-0 right-0 h-0 border-t-2 border-dashed border-[color:var(--brand-green)]/40 hidden sm:block" />
                  <motion.button
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    type="button"
                    className="relative z-10 w-11 h-11 rounded-full bg-gradient-to-br from-[color:var(--brand-green)] to-[color:var(--brand-green-dark)] text-white grid place-items-center shadow-[0_8px_18px_-6px_rgba(15,94,58,0.6)]"
                    aria-label="Swap origin and destination"
                  >
                    <ArrowLeftRight className="w-4 h-4" />
                  </motion.button>
                </div>

                <RoutePoint
                  label="To"
                  color="yellow"
                  dotLabel="End"
                  placeholder="Cox's Bazar"
                  align="right"
                />
              </div>
            </div>

            {/* DATE */}
            <PillField
              className="lg:col-span-2"
              label="Date"
              icon={<CalendarDays className="w-4 h-4" />}
            >
              <input
                type="date"
                className="w-full bg-transparent outline-none text-[14px] font-bold"
              />
            </PillField>

            {/* SEATS */}
            <PillField
              className="lg:col-span-1"
              label="Seats"
              icon={<Users className="w-4 h-4" />}
            >
              <select className="w-full bg-transparent outline-none text-[14px] font-bold">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </PillField>

            {/* SEARCH button — tall, prominent, yellow */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="lg:col-span-3 relative h-full min-h-[64px] rounded-2xl overflow-hidden group bg-gradient-to-br from-[color:var(--brand-yellow)] to-[color:var(--brand-yellow-dark)] shadow-[0_18px_40px_-14px_rgba(245,197,24,0.85)] hover:shadow-[0_22px_50px_-14px_rgba(245,197,24,1)] transition"
            >
              {/* decorative shine arc */}
              <span className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(400px_circle_at_120%_-20%,rgba(255,255,255,0.6),transparent_60%)] pointer-events-none" />
              <span className="relative inline-flex items-center justify-center gap-2 text-[color:var(--brand-green-dark)] font-extrabold text-[15px] tracking-wide w-full h-full">
                <Search className="w-5 h-5" />
                Search Bus
                <Sparkles className="w-4 h-4 text-[color:var(--brand-green-dark)]/70" />
              </span>
            </motion.button>
          </div>
        </div>

        {/* Dashed separator */}
        <div className="mx-5 border-t border-dashed border-[color:var(--brand-border)]" />

        {/* Quick-pick route chips + offer pill */}
        <div className="px-5 py-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="shrink-0 inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[color:var(--brand-green)]">
            <Clock className="w-3.5 h-3.5" /> Popular
          </span>
          {quickRoutes.map((r) => (
            <button
              key={r}
              className="shrink-0 px-3 py-1.5 rounded-full border border-[color:var(--brand-border)] bg-white text-xs font-bold text-[color:var(--brand-ink)] hover:border-[color:var(--brand-green)] hover:bg-[color:var(--brand-green-50)] hover:text-[color:var(--brand-green)] transition"
            >
              {r}
            </button>
          ))}
          <span className="hidden lg:inline-flex shrink-0 ml-auto items-center gap-1.5 px-3 py-1.5 rounded-full bg-[color:var(--brand-green)] text-[color:var(--brand-yellow)] text-xs font-extrabold tracking-wide">
            <BadgePercent className="w-3.5 h-3.5" /> 25% OFF Today
          </span>
        </div>
      </div>

      {/* Floating offer badge — top-right corner */}
      <div className="absolute -top-3 right-6 lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[color:var(--brand-green)] text-[color:var(--brand-yellow)] text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
        <BadgePercent className="w-3.5 h-3.5" />
        25% OFF
      </div>
    </motion.div>
  );
}

function TrustChip({
  Icon,
  label,
  highlight = false,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  highlight?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${
        highlight
          ? "bg-[color:var(--brand-yellow)]/20 border-[color:var(--brand-yellow)]/40 text-[color:var(--brand-green-dark)]"
          : "bg-[color:var(--brand-green-50)] border-transparent text-[color:var(--brand-green)]"
      }`}
    >
      <Icon className="w-3.5 h-3.5" />
      {label}
    </span>
  );
}

function RoutePoint({
  label,
  placeholder,
  color,
  dotLabel,
  align = "left",
}: {
  label: string;
  placeholder: string;
  color: "green" | "yellow";
  dotLabel: string;
  align?: "left" | "right";
}) {
  const ringColor =
    color === "green"
      ? "bg-[color:var(--brand-green)]"
      : "bg-[color:var(--brand-yellow)]";
  return (
    <div
      className={`flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 ${
        align === "right" ? "sm:text-right" : ""
      }`}
    >
      {align === "left" && (
        <div className="relative shrink-0">
          <span className={`block w-3 h-3 rounded-full ${ringColor}`} />
          <span
            className={`absolute inset-0 rounded-full ${ringColor} animate-ping opacity-60`}
          />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[color:var(--brand-muted)] flex items-center gap-1.5">
          <MapPin
            className={`w-3 h-3 ${color === "green" ? "text-[color:var(--brand-green)]" : "text-[color:var(--brand-yellow-dark)]"}`}
          />
          {label} <span className="text-[color:var(--brand-muted)]/60 font-bold">· {dotLabel}</span>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className={`w-full bg-transparent outline-none text-[16px] font-extrabold text-[color:var(--brand-ink)] placeholder:text-[color:var(--brand-ink)]/80 ${
            align === "right" ? "sm:text-right" : ""
          }`}
        />
      </div>
      {align === "right" && (
        <div className="relative shrink-0">
          <span className={`block w-3 h-3 rounded-full ${ringColor}`} />
          <span
            className={`absolute inset-0 rounded-full ${ringColor} animate-ping opacity-60`}
          />
        </div>
      )}
    </div>
  );
}

function TypeTab({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition ${
        active
          ? "bg-[color:var(--brand-green)] text-white shadow-[0_8px_18px_-6px_rgba(15,94,58,0.5)]"
          : "text-[color:var(--brand-muted)] hover:text-[color:var(--brand-ink)]"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function PillField({
  label,
  icon,
  className,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`group flex items-center gap-3 rounded-2xl border-2 border-[color:var(--brand-border)] px-3 py-2.5 bg-white hover:border-[color:var(--brand-green)] transition cursor-text ${className ?? ""}`}
    >
      <div className="shrink-0 w-10 h-10 rounded-xl grid place-items-center bg-[color:var(--brand-green-50)] text-[color:var(--brand-green)]">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[color:var(--brand-muted)]">
          {label}
        </div>
        <div className="mt-0.5">{children}</div>
      </div>
    </label>
  );
}

const quickRoutes = [
  "Dhaka → Cox's Bazar",
  "Dhaka → Sylhet",
  "Dhaka → Chattogram",
  "Dhaka → Khulna",
  "Sylhet → Dhaka",
];
