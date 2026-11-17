"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./TravelTypes";

const reviews = [
  {
    name: "Rafiul Islam",
    role: "Frequent Traveller",
    review:
      "Booking was super smooth and the live tracking really helped me plan my pickup. Will definitely use CHALO BD again!",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Nusrat Jahan",
    role: "Tourist",
    review:
      "Traveled to Cox's Bazar with my family. The bus was clean, comfortable and on time. Great service!",
    rating: 5,
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Mehedi Hasan",
    role: "Student",
    review:
      "Love the student discounts and the bKash payment option. Makes going home for the weekend so much easier.",
    rating: 4,
    avatar: "/images/avatar-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="mt-24 sm:mt-32 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Happy Customers"
        title="What Our Passengers Say"
        subtitle="Real stories from passengers who travel with CHALO BD every day."
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="relative rounded-2xl bg-white border border-[color:var(--brand-border)] p-6 hover:shadow-lg transition"
          >
            <Quote className="absolute top-4 right-4 w-10 h-10 text-[color:var(--brand-green-50)]" />
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star
                  key={k}
                  className={`w-4 h-4 ${k < r.rating ? "fill-[color:var(--brand-yellow)] text-[color:var(--brand-yellow)]" : "text-[color:var(--brand-border)]"}`}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-[color:var(--brand-ink)] leading-relaxed">
              &ldquo;{r.review}&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[color:var(--brand-green-50)]">
                <Image
                  src={r.avatar}
                  alt={r.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-[color:var(--brand-muted)]">
                  {r.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
