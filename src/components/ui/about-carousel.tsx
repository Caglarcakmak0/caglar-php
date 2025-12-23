"use client";

import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Linkedin, Github, Twitter } from "lucide-react";

interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
}

interface AboutCarouselProps {
  className?: string;
  subtitle?: string;
  title?: React.ReactNode;
  description?: string[];
  quote?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  images: CarouselImage[];
}

export const AboutCarousel = ({
  className,
  subtitle = "MORE ABOUT ME",
  title,
  description = [],
  quote,
  socialLinks,
  images,
}: AboutCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const getCardStyle = (index: number) => {
    const offset = index - currentIndex;
    const total = images.length;
    let pos = (offset + total) % total;
    if (pos > Math.floor(total / 2)) {
      pos = pos - total;
    }

    const isCenter = pos === 0;
    const isNext = pos === 1;
    const isPrev = pos === -1;

    if (isCenter) {
      return {
        transform: "translateX(0) rotate(-6deg) scale(1)",
        zIndex: 30,
        opacity: 1,
      };
    } else if (isNext) {
      return {
        transform: "translateX(30px) rotate(6deg) scale(0.9)",
        zIndex: 20,
        opacity: 0.7,
      };
    } else if (isPrev) {
      return {
        transform: "translateX(-30px) rotate(-12deg) scale(0.85)",
        zIndex: 10,
        opacity: 0.5,
      };
    } else {
      return {
        transform: "translateX(0) scale(0.7)",
        zIndex: 0,
        opacity: 0,
      };
    }
  };

  return (
    <section
      className={cn(
        "w-full py-20 px-4 bg-gradient-to-b from-stone-100 to-white dark:from-stone-900 dark:to-background",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* Subtitle */}
            <span className="text-xs tracking-[0.3em] text-muted-foreground font-medium uppercase">
              {subtitle}
            </span>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {title || (
                <>
                  I'm Çağlar, a
                  <br />
                  creative{" "}
                  <span className="italic font-light bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                    engineer
                  </span>
                </>
              )}
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg">
              {description.length > 0 ? (
                description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    I'm Çağlar Çakmak, a proactive full-stack developer
                    passionate about creating dynamic web experiences. From
                    frontend to backend, I thrive on solving complex problems
                    with clean, efficient code. My expertise spans React,
                    Next.js, and Node.js, and I'm always eager to learn more.
                  </p>
                  <p>
                    When I'm not immersed in work, I'm exploring new ideas and
                    staying curious. Life's about balance, and I love embracing
                    every part of it.
                  </p>
                </>
              )}
            </div>

            {/* Quote */}
            <p className="text-foreground font-medium text-sm md:text-base">
              {quote ||
                "I believe in waking up each day eager to make a difference!"}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks?.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {socialLinks?.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {socialLinks?.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {!socialLinks && (
                <>
                  <a
                    href="https://linkedin.com/in/yourcaglar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/yourcaglar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/yourcaglar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="flex flex-col items-center justify-center">
            {/* Stacked Cards Carousel */}
            <div className="relative w-72 h-96 md:w-80 md:h-[420px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-all duration-700 ease-out cursor-pointer"
                  style={getCardStyle(index)}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 dark:border-white/10">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Caption */}
            <div className="mt-8 text-center">
              <p className="text-xl md:text-2xl font-semibold text-foreground transition-all duration-500">
                {images[currentIndex]?.caption || ""}
              </p>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-foreground w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCarousel;
