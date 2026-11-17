"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { SectionHeading } from "./TravelTypes";

const posts = [
  {
    title: "Top 10 Places to Visit in Bangladesh by Bus",
    excerpt:
      "Discover hidden gems and famous destinations across Bangladesh you can reach by bus.",
    date: "Nov 12, 2026",
    tag: "Travel Guide",
    img: "/images/blog-1.jpg",
  },
  {
    title: "Safety & Hygiene Protocols for Safer Travel",
    excerpt:
      "Learn about our strict safety and hygiene measures to keep every passenger safe and comfortable.",
    date: "Nov 05, 2026",
    tag: "Safety",
    img: "/images/blog-2.jpg",
  },
  {
    title: "How to Choose the Right Bus for Your Trip",
    excerpt:
      "From AC to sleeper coaches — here's how to pick the right bus for a comfortable journey.",
    date: "Oct 28, 2026",
    tag: "Tips",
    img: "/images/blog-3.jpg",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="mt-24 sm:mt-32 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <div className="flex items-end justify-between flex-wrap gap-4">
        <SectionHeading
          eyebrow="Blog & Inspiration"
          title="Travel Guides & News"
          subtitle="Stories, tips and travel inspiration from across Bangladesh."
          center={false}
        />
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-green)] hover:gap-2.5 transition-all"
        >
          View All <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((p, i) => (
          <motion.a
            href="#"
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl overflow-hidden border border-[color:var(--brand-border)] bg-white hover:shadow-xl transition"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[color:var(--brand-yellow)] text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-green-dark)]">
                {p.tag}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-1.5 text-xs text-[color:var(--brand-muted)]">
                <Calendar className="w-3 h-3" /> {p.date}
              </div>
              <h3 className="mt-2 font-bold text-[color:var(--brand-ink)] leading-snug group-hover:text-[color:var(--brand-green)] transition">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--brand-muted)] line-clamp-2">
                {p.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-green)] group-hover:gap-2.5 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
