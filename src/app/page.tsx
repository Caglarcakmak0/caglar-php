"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { HeroSection } from "@/components/ui/hero-section-dark";
import { HeroEnding } from "@/components/ui/hero-ending";
import { FileTextIcon, GlobeIcon, CodeIcon, RocketIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { ProfileCard } from "@/components/ui/profile-card";
import { TechImpactCard } from "@/components/ui/tech-impact-card";
import { TimezoneCard } from "@/components/ui/timezone-card";
import { ContactCTACard } from "@/components/ui/contact-cta-card";
import { GlowingBentoCard } from "@/components/ui/glowing-bento-card";
import {
  SkillsMarquee,
  CurrentStatusCard,
} from "@/components/ui/skills-marquee";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { timelineData } from "@/data/timeline";
import dynamic from "next/dynamic";

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

const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

// Timeline data - Çağlar's Experience

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <div className="relative w-full">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton variant="secondary">Resume</NavbarButton>
              <NavbarButton variant="primary">Contact</NavbarButton>
              <ThemeToggle />
            </div>
          </NavBody>

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Contact
                </NavbarButton>
                <div className="flex w-full justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden pb- md:pb-0">
        <HeroSection
          badge={{
            text: "Available",
            action: "Open to new opportunities!",
          }}
          headline={{
            regular: "I help founders turn ideas into seamless ",
            italic: "digital experiences",
          }}
          profile={{
            greeting: "Hello, I'm",
            name: "Çağlar Çakmak",
            role: "a Full Stack Developer",
          }}
          cta={{
            text: "Let's Connect",
            href: "#contact",
          }}
          email="caglarcakmak0@icloud.com"
        />
        <HeroEnding />
      </div>

      {/* About - New Bento Grid */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>

        {/* Glowing Bento Grid Layout */}
        <ul className="bento-grid">
          {/* Row 1: Profile + TechImpact (Combined) */}
          <GlowingBentoCard className="bento-profile order-1">
            <ProfileCard
              className="h-full"
              title="ABOUT ME"
              description="Full Stack Developer with 3+ years experience in React, Vue, Node.js, and Odoo Framework"
            />
          </GlowingBentoCard>

          <GlowingBentoCard className="bento-tech order-2">
            <TechImpactCard className="h-full" />
          </GlowingBentoCard>

          {/* Row 2: Globe */}
          <GlowingBentoCard className="bento-globe order-3">
            <GlobeCard
              className="h-full"
              location="REMOTE"
              country="İzmir, Turkey"
            />
          </GlowingBentoCard>

          {/* Row 3: Contact - bottom right on mobile */}
          <GlowingBentoCard className="bento-contact order-4">
            <ContactCTACard
              className="h-full"
              email="caglarcakmak0@icloud.com"
            />
          </GlowingBentoCard>

          {/* Row 4: CurrentStatus - very bottom on mobile */}
          <GlowingBentoCard className="bento-status order-5">
            <CurrentStatusCard className="h-full" />
          </GlowingBentoCard>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
          What People Say
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
    </main>
  );
}
