"use client";

import dynamic from "next/dynamic";

const AboutCarousel = dynamic(
  () =>
    import("@/components/ui/about-carousel").then((mod) => mod.AboutCarousel),
  {
    loading: () => (
      <div className="h-96 w-full animate-pulse bg-neutral-100 dark:bg-neutral-900 rounded-lg" />
    ),
  }
);
import { MarqueeBanner } from "@/components/ui/marquee-banner";
import { aboutMeData } from "@/data/about-me";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="pt-20">
        {/* About Section with Carousel */}
        <AboutCarousel {...aboutMeData} />
      </div>
    </div>
  );
}
