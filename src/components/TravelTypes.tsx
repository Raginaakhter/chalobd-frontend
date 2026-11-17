"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Bus, Palmtree } from "lucide-react";

const items = [
  {
    title: "Local Bus",
    desc: "Daily commute buses within the city. Fast, affordable and frequent rides across Dhaka.",
    img: "/images/local-bus.jpg",
    Icon: Bus,
    cta: "Explore Local Bus",
    tag: "Within City",
  },
  {
    title: "Intercity Bus",
    desc: "Comfortable long-distance coaches with reclining seats, snacks and premium services.",
    img: "/images/intercity-bus.jpg",
    Icon: Palmtree,
    cta: "Explore Intercity Bus",
    tag: "Cross-country",
  },
];

export default function TravelTypes() {
  return (
    <section
      id="services"
      className="mt-20 sm:mt-28 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Our Services"
        title="Choose Your Travel Type"
        subtitle="Pick the ride that matches your journey — short city hops or long inter-city trips."
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item, i) => (
          <motion.a
            key={item.title}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-3xl border border-[color:var(--brand-border)] bg-white hover:shadow-xl transition"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[color:var(--brand-green-dark)] text-xs font-bold">
                <item.Icon className="w-3.5 h-3.5" /> {item.tag}
              </div>
              <h3 className="absolute bottom-4 left-5 text-2xl font-extrabold text-white drop-shadow-lg">
                {item.title}
              </h3>
            </div>

            <div className="p-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-[color:var(--brand-muted)] max-w-md">
                  {item.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[color:var(--brand-green)] font-semibold text-sm group-hover:gap-2.5 transition-all">
                  {item.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <div className="shrink-0 w-11 h-11 rounded-full bg-[color:var(--brand-green-50)] text-[color:var(--brand-green)] grid place-items-center group-hover:bg-[color:var(--brand-green)] group-hover:text-white transition">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[color:var(--brand-green)]">
          <span className="w-6 h-[2px] bg-[color:var(--brand-yellow)]" />
          {eyebrow}
          <span className="w-6 h-[2px] bg-[color:var(--brand-yellow)]" />
        </div>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[color:var(--brand-ink)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[color:var(--brand-muted)]">{subtitle}</p>
      )}
    </div>
  );
}
