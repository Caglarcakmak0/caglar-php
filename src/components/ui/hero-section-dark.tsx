"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Copy } from "lucide-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import Image from "next/image";

interface HeroSectionProps {
  className?: string;
  badge?: {
    text: string;
    action: string;
  };
  headline?: {
    regular: string;
    italic: string;
  };
  profile?: {
    greeting: string;
    name: string;
    role: string;
    image?: string;
  };
  cta?: {
    text: string;
    href: string;
  };
  email?: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      badge = {
        text: "Upcoming",
        action: "Nextnode is launching soon!",
      },
      headline = {
        regular: "I help founders turn ideas into seamless ",
        italic: "digital experiences",
      },
      profile = {
        greeting: "Hello, I'm",
        name: "Aayush Bharti",
        role: "a Full Stack Developer",
        image: undefined,
      },
      cta = {
        text: "Let's Connect",
        href: "#contact",
      },
      email = "hello@aayushbharti.in",
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = React.useState(false);

    const copyEmail = () => {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div
        className={cn("relative min-h-screen overflow-hidden", className)}
        ref={ref}
        {...props}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-transparent" />

        {/* Shooting Stars */}
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />

        {/* Content */}
        <section className="relative z-10 max-w-5xl mx-auto px-4 py-28 flex flex-col items-center justify-center min-h-screen">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-8">
            <span className="px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full">
              {badge.text}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              {badge.action}
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-center text-gray-800 dark:text-gray-100 leading-tight mb-8">
            {headline.regular}
            <em className="italic">{headline.italic}</em>
          </h1>

          {/* Profile Section */}
          <div className="flex items-center gap-3 mb-10 flex-wrap justify-center">
            <span className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
              {profile.greeting} {profile.name}
            </span>
            {profile.image ? (
              <Image
                src={profile.image}
                alt={profile.name}
                width={48}
                height={48}
                className="rounded-full border-2 border-blue-400/50"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                {profile.name.charAt(0)}
              </div>
            )}
            <span className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
              {profile.role}
            </span>
          </div>

          {/* CTA and Email */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {/* CTA Button */}
            <a
              href={cta.href}
              className="group flex items-center gap-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:scale-105 transition-transform duration-200"
            >
              {cta.text}
              <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </a>

            {/* Email */}
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span className="text-sm">{copied ? "Copied!" : email}</span>
            </button>
          </div>
        </section>
      </div>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
