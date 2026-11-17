import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Panoramic from "@/components/route-variants/Panoramic";
import SplitWindow from "@/components/route-variants/SplitWindow";
import BeachShowcase from "@/components/route-variants/BeachShowcase";
import Timeline from "@/components/route-variants/Timeline";
import Dashboard from "@/components/route-variants/Dashboard";
import BigType from "@/components/route-variants/BigType";
import ModernCards from "@/components/route-variants/ModernCards";
import FamilyCompact from "@/components/route-variants/FamilyCompact";
import { getAllSlugs, getRouteBySlug } from "@/lib/routes";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return { title: "Route not found — CHALO BD" };
  return {
    title: `${route.from} → ${route.to} Bus Tickets — CHALO BD`,
    description: `${route.tagline}. Book buses from ${route.from} to ${route.to} starting at ৳${route.price}.`,
  };
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) notFound();

  const Variant = (() => {
    switch (route.variant) {
      case "panoramic":
        return Panoramic;
      case "split-window":
        return SplitWindow;
      case "beach-showcase":
        return BeachShowcase;
      case "timeline":
        return Timeline;
      case "dashboard":
        return Dashboard;
      case "bigtype":
        return BigType;
      case "modern-cards":
        return ModernCards;
      case "family-compact":
        return FamilyCompact;
    }
  })();

  return (
    <>
      <Navbar />
      <Variant route={route} />
      <Footer />
    </>
  );
}
