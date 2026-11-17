import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/routes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Routes — CHALO BD",
  description: "Browse all intercity bus routes across Bangladesh.",
};

export default function RoutesListPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[color:var(--brand-green)]">
              <span className="w-6 h-[2px] bg-[color:var(--brand-yellow)]" />
              All Routes
              <span className="w-6 h-[2px] bg-[color:var(--brand-yellow)]" />
            </div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-[color:var(--brand-ink)]">
              Every Route We Cover
            </h1>
            <p className="mt-3 text-[color:var(--brand-muted)]">
              Tap any route to see departures, operators and real-time prices.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {routes.map((r) => (
              <Link
                key={r.slug}
                href={`/routes/${r.slug}`}
                className="group relative block rounded-3xl bg-white border border-[color:var(--brand-border)] overflow-hidden hover:shadow-[0_30px_60px_-20px_rgba(15,94,58,0.3)] hover:border-[color:var(--brand-green)]/40 transition"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={r.img}
                    alt={`${r.from} to ${r.to}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-green-dark)]/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="text-[11px] font-bold uppercase tracking-wider opacity-80">
                      {r.hours} · {r.km} km
                    </div>
                    <div className="text-lg font-extrabold">
                      {r.from} → {r.to}
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="text-[color:var(--brand-muted)] text-xs font-semibold">
                    {r.busesPerDay} buses/day
                  </div>
                  <div className="text-[color:var(--brand-green)] font-extrabold">
                    ৳{r.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
