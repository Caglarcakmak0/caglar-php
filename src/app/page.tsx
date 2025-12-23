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
import { HeroSection } from "@/components/ui/hero-section-dark";
import { HeroEnding } from "@/components/ui/hero-ending";
import { MarqueeBanner } from "@/components/ui/marquee-banner";
import { ProjectBlueprintBg } from "@/components/ui/project-blueprint-bg";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { GlobeCard } from "@/components/ui/globe-card";
import { ProfileCard } from "@/components/ui/profile-card";
import { TechStackCard } from "@/components/ui/tech-stack-card";
import { TimezoneCard } from "@/components/ui/timezone-card";
import { ContactCTACard } from "@/components/ui/contact-cta-card";
import { WebsitesImpactCard } from "@/components/ui/browser-mockup-card";
import { GlowingBentoCard } from "@/components/ui/glowing-bento-card";
import {
  SkillsMarquee,
  CurrentStatusCard,
} from "@/components/ui/skills-marquee";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Timeline } from "@/components/ui/timeline";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import {
  FileTextIcon,
  GlobeIcon,
  CodeIcon,
  RocketIcon,
  BoxIcon,
  Settings,
  Lock,
  Sparkles,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

// Bento Grid features - Bu data WordPress'ten gelecek
const features = [
  {
    Icon: CodeIcon,
    name: "Full Stack Development",
    description:
      "Building modern web applications with React, Next.js, and Node.js.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "WordPress Development",
    description: "Custom themes and plugins with WPGraphQL integration.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: RocketIcon,
    name: "Performance Optimization",
    description: "Blazing fast websites with SEO best practices.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: FileTextIcon,
    name: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BoxIcon,
    name: "API Development",
    description: "RESTful and GraphQL APIs that scale.",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-indigo-500/20" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

// Timeline data - Bu data WordPress'ten gelecek
const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Building modern portfolio sites with Next.js and WPGraphQL
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 h-20 md:h-44 lg:h-60 flex items-center justify-center">
            <span className="text-2xl">🚀</span>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 h-20 md:h-44 lg:h-60 flex items-center justify-center">
            <span className="text-2xl">💻</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Mastered React ecosystem and started freelancing
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 h-20 md:h-44 lg:h-60 flex items-center justify-center">
            <span className="text-2xl">⚛️</span>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 h-20 md:h-44 lg:h-60 flex items-center justify-center">
            <span className="text-2xl">🎨</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Started my software development journey
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Learned HTML, CSS, JavaScript
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Built first WordPress site
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Started learning React
          </div>
        </div>
      </div>
    ),
  },
];

// Glowing Grid items
interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

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
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <HeroSection
          badge={{
            text: "Upcoming",
            action: "New project launching soon!",
          }}
          headline={{
            regular: "I help founders turn ideas into seamless ",
            italic: "digital experiences",
          }}
          profile={{
            greeting: "Hello, I'm",
            name: "Your Name",
            role: "a Full Stack Developer",
          }}
          cta={{
            text: "Let's Connect",
            href: "#contact",
          }}
          email="hello@yourname.com"
        />
        <HeroEnding />
      </div>

      {/* Marquee Banner */}
      <MarqueeBanner className="my-8" />

      {/* About - New Bento Grid */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>

        {/* Glowing Bento Grid Layout */}
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-4 lg:gap-4">
          {/* Row 1: Profile + TechStack */}
          <GlowingBentoCard area="md:[grid-area:1/1/2/7]">
            <ProfileCard className="h-full" />
          </GlowingBentoCard>
          <GlowingBentoCard area="md:[grid-area:1/7/2/13]">
            <TechStackCard className="h-full" />
          </GlowingBentoCard>

          {/* Row 2: Timezone + Contact + WebsitesImpact */}
          <GlowingBentoCard area="md:[grid-area:2/1/3/4]">
            <TimezoneCard className="h-full" />
          </GlowingBentoCard>
          <GlowingBentoCard area="md:[grid-area:2/4/3/7]">
            <ContactCTACard className="h-full" />
          </GlowingBentoCard>
          <GlowingBentoCard area="md:[grid-area:2/7/3/13]">
            <WebsitesImpactCard className="h-full" />
          </GlowingBentoCard>

          {/* Row 3-4: Globe (tall) + CurrentStatus + Skills */}
          <GlowingBentoCard area="md:[grid-area:3/1/5/6]">
            <GlobeCard className="h-full" />
          </GlowingBentoCard>
          <GlowingBentoCard area="md:[grid-area:3/6/4/13]">
            <CurrentStatusCard className="h-full" />
          </GlowingBentoCard>
          <GlowingBentoCard area="md:[grid-area:4/6/5/13]">
            <div className="p-6">
              <SkillsMarquee />
            </div>
          </GlowingBentoCard>
        </ul>
      </section>

      {/* Projects - Glowing Grid */}
      <section id="projects" className="relative max-w-7xl mx-auto px-4 py-20">
        <ProjectBlueprintBg />
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground relative z-10">
          Featured Projects
        </h2>
        <ul className="relative z-10 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<BoxIcon className="h-4 w-4" />}
            title="E-Commerce Platform"
            description="Full-stack e-commerce solution with headless WordPress and Next.js"
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Settings className="h-4 w-4" />}
            title="Portfolio Website"
            description="Modern portfolio with animations and WPGraphQL integration"
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-4 w-4" />}
            title="SaaS Dashboard"
            description="Real-time analytics dashboard with React and Node.js"
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-4 w-4" />}
            title="AI Content Generator"
            description="AI-powered content creation tool with OpenAI API"
          />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Search className="h-4 w-4" />}
            title="SEO Analytics Tool"
            description="Comprehensive SEO tracking and reporting platform"
          />
        </ul>
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
