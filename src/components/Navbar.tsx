"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, UserRound, Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how" },
  { label: "Services", href: "#services", hasMenu: true },
  { label: "Routes", href: "#routes" },
  { label: "Track Bus", href: "#track" },
  { label: "Blog", href: "#blog" },
  { label: "More", href: "#more", hasMenu: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = !scrolled;

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_6px_24px_-14px_rgba(15,94,58,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo - yellow hero variant while over the video, standard one after scrolling */}
          <Link href="#home" className="flex items-center shrink-0">
            <Image
              src={
                onHero
                  ? "/images/chalo-bd-logo-hero.png"
                  : "/images/chalo-bd-logo.png"
              }
              alt="CHALO BD"
              width={400}
              height={130}
              priority
              unoptimized
              className={`h-24 lg:h-28 w-auto -my-2 select-none ${
                onHero ? "drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)]" : ""
              }`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`flex items-center gap-1 text-[15px] font-semibold transition-colors ${
                  onHero
                    ? "text-white hover:text-[color:var(--brand-yellow)] [text-shadow:_0_1px_6px_rgba(0,0,0,0.5)]"
                    : "text-[color:var(--brand-ink)] hover:text-[color:var(--brand-green)]"
                }`}
              >
                {l.label}
                {l.hasMenu && <ChevronDown className="w-4 h-4 opacity-70" />}
              </a>
            ))}
          </nav>

          {/* CTA cluster */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                onHero
                  ? "border-white/40 text-white hover:border-[color:var(--brand-yellow)] hover:text-[color:var(--brand-yellow)] backdrop-blur-sm bg-white/5"
                  : "border-[color:var(--brand-border)] text-[color:var(--brand-ink)] hover:border-[color:var(--brand-green)] hover:text-[color:var(--brand-green)]"
              }`}
            >
              <MapPin className="w-4 h-4" />
              Track Bus
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[color:var(--brand-green)] text-white text-sm font-semibold hover:bg-[color:var(--brand-green-dark)] transition-colors shadow-[0_8px_22px_-10px_rgba(15,94,58,0.7)]">
              <UserRound className="w-4 h-4" />
              Login / Account
            </button>
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg transition ${
              onHero ? "text-white hover:bg-white/10" : "text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-surface)]"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4 bg-white/95 backdrop-blur-md rounded-b-2xl -mx-4 px-4 shadow-lg"
          >
            <div className="flex flex-col gap-1 pt-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg hover:bg-[color:var(--brand-surface)] text-[15px] font-medium text-[color:var(--brand-ink)]"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[color:var(--brand-border)] text-sm font-semibold">
                  <MapPin className="w-4 h-4 text-[color:var(--brand-green)]" />
                  Track Bus
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[color:var(--brand-green)] text-white text-sm font-semibold">
                  <UserRound className="w-4 h-4" />
                  Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
