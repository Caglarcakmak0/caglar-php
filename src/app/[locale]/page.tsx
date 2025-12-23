"use client";

import { HeroSection } from "@/components/ui/hero-section-dark";
import { HeroEnding } from "@/components/ui/hero-ending";
import { cn } from "@/lib/utils";
import { ProfileCard } from "@/components/ui/profile-card";
import { TechImpactCard } from "@/components/ui/tech-impact-card";
import { ContactCTACard } from "@/components/ui/contact-cta-card";
import { GlowingBentoCard } from "@/components/ui/glowing-bento-card";
import { CurrentStatusCard } from "@/components/ui/skills-marquee";
import { timelineData } from "@/data/timeline";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { aboutMeData } from "@/data/about-me";

const AboutCarousel = dynamic(
  () =>
    import("@/components/ui/about-carousel").then((mod) => mod.AboutCarousel),
  {
    loading: () => (
      <div className="h-96 w-full animate-pulse bg-neutral-100 dark:bg-neutral-900 rounded-lg" />
    ),
  }
);
const GlobeCard = dynamic(
  () => import("@/components/ui/globe-card").then((mod) => mod.GlobeCard),
  {
    loading: () => (
      <div className="h-full w-full animate-pulse bg-neutral-100 dark:bg-neutral-900 rounded-lg" />
    ),
    ssr: false,
  }
);

const Timeline = dynamic(
  () => import("@/components/ui/timeline").then((mod) => mod.Timeline),
  {
    loading: () => (
      <div className="h-96 w-full animate-pulse bg-neutral-100 dark:bg-neutral-900 rounded-lg" />
    ),
  }
);

const TestimonialsEditorial = dynamic(
  () => import("@/components/ui/editorial-testimonial"),
  {
    loading: () => (
      <div className="h-96 w-full animate-pulse bg-neutral-100 dark:bg-neutral-900 rounded-lg" />
    ),
  }
);

const LetsWorkTogether = dynamic(() =>
  import("@/components/ui/lets-work-section").then(
    (mod) => mod.LetsWorkTogether
  )
);

export default function Home() {
  const t = useTranslations();

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden pb-24 md:pb-0">
        <HeroSection
          badge={{
            text: t("Hero.badge"),
            action: t("Hero.badgeAction"),
          }}
          headline={{
            regular: t("Hero.headlineRegular"),
            italic: t("Hero.headlineItalic"),
          }}
          profile={{
            greeting: t("Hero.greeting"),
            name: t("Hero.name"),
            role: t("Hero.role"),
          }}
          cta={{
            text: t("Hero.cta"),
            href: "#contact",
          }}
          email="caglarcakmak0@icloud.com"
        />
        <HeroEnding />
      </div>
   <div className="pt-20">
        {/* About Section with Carousel */}
        <AboutCarousel {...aboutMeData} />
      </div>
 
 
      {/* About - New Bento Grid */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
          {t("About.title")}
        </h2>

        {/* Glowing Bento Grid Layout */}
        <ul className="bento-grid">
          {/* Row 1: Profile + TechImpact (Combined) */}
          <GlowingBentoCard className="bento-profile">
            <ProfileCard
              className="h-full"
              title={t("About.profileTitle")}
              description={t("About.profileDescription")}
            />
          </GlowingBentoCard>

          <GlowingBentoCard className="bento-tech">
            <TechImpactCard className="h-full" />
          </GlowingBentoCard>

          {/* Row 2: Contact */}
          <GlowingBentoCard className="bento-contact">
            <ContactCTACard
              className="h-full"
              email="caglarcakmak0@icloud.com"
            />
          </GlowingBentoCard>

          {/* Row 3-4: Globe (tall) + CurrentStatus + Skills */}
          <GlowingBentoCard className="bento-globe">
            <GlobeCard
              className="h-full"
              location={t("About.location")}
              country={t("About.country")}
            />
          </GlowingBentoCard>
          <GlowingBentoCard className="bento-status">
            <CurrentStatusCard className="h-full" />
          </GlowingBentoCard>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
          {t("Testimonials.title")}
        </h2>
        <TestimonialsEditorial />
      </section>

      {/* Timeline - Experience */}
      <section id="experience">
        <Timeline data={timelineData} />
      </section>

      {/* Contact - Let's Work Together */}
      <section id="contact">
        <LetsWorkTogether />
      </section>
    </div>
  );
}
