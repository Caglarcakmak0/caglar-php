"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const TestimonialsEditorial = () => {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      id: 1,
      quote: t("quote1"),
      author: t("author1"),
      role: t("role1"),
      company: t("company1"),
      date: t("date1"),
      image: "/emrebost.jpg",
    },
    {
      id: 2,
      quote: t("quote2"),
      author: t("author2"),
      role: t("role2"),
      company: t("company2"),
      date: t("date2"),
      image: "/egetuzn.jpg",
    },
  ];

  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (index: number) => {
    if (index === active || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(index);
      setIsExpanded(false);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const handlePrev = () => {
    const newIndex = active === 0 ? testimonials.length - 1 : active - 1;
    handleChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = active === testimonials.length - 1 ? 0 : active + 1;
    handleChange(newIndex);
  };

  const current = testimonials[active];

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-16">
      {/* Large index number */}
      <div className="flex items-start gap-8">
        <span
          className="text-[60px] md:text-[80px] lg:text-[120px] font-light leading-none text-foreground/10 select-none transition-all duration-500"
          style={{ fontFeatureSettings: '"tnum"' }}
        >
          {String(active + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 pt-6 text-foreground">
          {/* Quote Container */}
          <div className="relative">
            <div
              className={`relative transition-all duration-300 ${
                isTransitioning
                  ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isExpanded
                    ? "max-h-[200px] overflow-y-auto pr-2 custom-scrollbar"
                    : "max-h-[140px] overflow-hidden"
                }`}
              >
                <blockquote className="text-xl md:text-2xl font-light leading-relaxed tracking-tight whitespace-pre-line pb-2">
                  {current.quote}
                </blockquote>
              </div>

              {/* Gradient Overlay & Read More Button */}
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background via-background/80 to-transparent flex items-end justify-end pb-0 pr-4">
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors bg-background/50 backdrop-blur-sm px-4 py-1 rounded-full border border-border/50"
                  >
                    {t("readMore")}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Author info with hover reveal */}
          <div
            className={`mt-6 group cursor-default transition-all duration-300 delay-100 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-foreground/10 group-hover:ring-foreground/30 transition-all duration-300">
                <Image
                  src={current.image || "/placeholder.svg"}
                  alt={current.author}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <p className="font-medium text-foreground">{current.author}</p>
                <p className="text-sm text-muted-foreground">
                  {current.role}
                  <span className="mx-2 text-foreground/20">/</span>
                  <span className="group-hover:text-foreground transition-colors duration-300">
                    {current.company}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {current.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - vertical line selector */}
      <div className="mt-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleChange(index)}
                className="group relative py-4"
              >
                <span
                  className={`block h-px transition-all duration-500 ease-out ${
                    index === active
                      ? "w-12 bg-foreground"
                      : "w-6 bg-foreground/20 group-hover:w-8 group-hover:bg-foreground/40"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsEditorial;
