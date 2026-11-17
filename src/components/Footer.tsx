"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const SocialIcon = {
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99h-2.54V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 3H21l-6.52 7.45L22 21h-5.98l-4.68-5.73L5.9 21H3.14l6.97-7.96L2.5 3h6.13l4.23 5.3L18.244 3Zm-2.09 16.14h1.65L7.93 4.75H6.17l9.98 14.39Z" />
    </svg>
  ),
  Youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23 7.2a3 3 0 0 0-2.1-2.12C19.05 4.6 12 4.6 12 4.6s-7.05 0-8.9.48A3 3 0 0 0 1 7.2C.52 9.05.52 12 .52 12s0 2.95.48 4.8a3 3 0 0 0 2.1 2.12C4.95 19.4 12 19.4 12 19.4s7.05 0 8.9-.48a3 3 0 0 0 2.1-2.12C23.48 14.95 23.48 12 23.48 12s0-2.95-.48-4.8ZM9.75 15.26V8.74L15.5 12l-5.75 3.26Z" />
    </svg>
  ),
};

const sitemap = [
  { h: "Quick Links", links: ["Home", "How it Works", "Routes", "Track Bus", "Blog"] },
  { h: "Services", links: ["Local Bus", "Intercity Bus", "Tourist Bus", "Offers", "Loyalty"] },
  { h: "Support", links: ["Contact Us", "FAQs", "Terms & Conditions", "Privacy Policy", "Refund Policy"] },
];

const partners = ["bKash", "Nagad", "Rocket", "Visa", "Mastercard", "SSL"];

export default function Footer() {
  return (
    <footer className="mt-24 sm:mt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a4a2c] via-[#0f5e3a] to-[#0f5e3a]" />
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="footerDots"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="0.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#footerDots)" />
        </svg>
      </div>

      <div className="relative text-white">
        {/* Wave divider */}
        <svg
          className="absolute -top-px left-0 w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,40 Q360,0 720,30 T1440,30 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Image
                src="/images/chalo-bd-logo-hero.png"
                alt="CHALO BD"
                width={320}
                height={110}
                unoptimized
                className="h-20 w-auto select-none drop-shadow-[0_3px_10px_rgba(0,0,0,0.3)]"
              />
              <p className="mt-5 text-sm text-white/85 max-w-xs leading-relaxed">
                CHALO BD — Bangladesh&apos;s most trusted bus booking platform.
                Travel smart, travel safe. <br />
                <span className="text-[color:var(--brand-yellow)] font-semibold">
                  চলো, এগিয়ে যাই…
                </span>
              </p>

              <div className="mt-5 space-y-2 text-sm text-white/85">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-[color:var(--brand-yellow)]" />
                  Dhaka, Bangladesh
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[color:var(--brand-yellow)]" />
                  +880 1700 000 000
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[color:var(--brand-yellow)]" />
                  support@chalobd.com
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                {(
                  ["Facebook", "Instagram", "Twitter", "Youtube"] as const
                ).map((name) => (
                  <a
                    key={name}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[color:var(--brand-yellow)] hover:text-[color:var(--brand-green-dark)] grid place-items-center transition"
                    aria-label={name}
                  >
                    {SocialIcon[name]}
                  </a>
                ))}
              </div>
            </div>

            {/* Sitemap */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {sitemap.map((col) => (
                <div key={col.h}>
                  <h4 className="font-bold text-[color:var(--brand-yellow)] text-sm uppercase tracking-wider">
                    {col.h}
                  </h4>
                  <ul className="mt-4 space-y-2 text-sm text-white/85">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a
                          href="#"
                          className="hover:text-[color:var(--brand-yellow)] transition"
                        >
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Partners */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-[color:var(--brand-yellow)] text-sm uppercase tracking-wider">
                Partners
              </h4>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {partners.map((p) => (
                  <div
                    key={p}
                    className="h-10 rounded-lg bg-white/10 grid place-items-center text-[10px] font-bold text-white/85"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
            <div>
              © 2026 CHALO BD. All Rights Reserved.
            </div>
            <div>
              Made with <span className="text-[color:var(--brand-yellow)]">♥</span>{" "}
              in Bangladesh
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
