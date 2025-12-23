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
import { useAboutMeData } from "@/data/about-me";

export default function AboutPage() {
  const aboutMeData = useAboutMeData();

  return (
    <div className="bg-background text-foreground">
      <div className="">
        {/* About Section with Carousel */}
        <AboutCarousel {...aboutMeData} />
      </div>
    </div>
  );
}
