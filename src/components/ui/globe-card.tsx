"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";

import { useTranslations } from "next-intl";

interface GlobeCardProps {
  className?: string;
  location?: string;
  country?: string;
}

const GlobeCard = ({
  className,
  location = "REMOTE",
  country = "Turkey",
}: GlobeCardProps) => {
  const t = useTranslations("Globe");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const timezones = [
    { code: "GB", name: t("UK"), flag: "🇬🇧" },
    { code: "IN", name: t("India"), flag: "🇮🇳" },
    { code: "US", name: t("USA"), flag: "🇺🇸" },
  ];

  useEffect(() => {
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 4.5,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0, 1, 1],
      glowColor: [0.2, 0.5, 1.0],
      markers: [
        { location: [38.4237, 27.1428], size: 0.05 }, // İzmir, Turkey
      ],
      onRender: (state) => {
        // Static globe - no rotation
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800",
        "border border-slate-200/50 dark:border-slate-700/50",
        "min-h-[400px] min-[1080px]:min-h-0",
        className
      )}
    >
      {/* Timezone Info - Top */}
      <div className="relative z-10 p-6 pb-0">
        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
          {t("flexible")}
        </h3>

        <div className="flex gap-2 flex-wrap">
          {timezones.map((tz) => (
            <div
              key={tz.code}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium bg-white/80 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              <span>{tz.flag}</span>
              <span>{tz.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Globe Container - Center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-y-12">
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            aspectRatio: 1,
          }}
          className="w-full h-full opacity-0 transition-opacity duration-1000"
        />
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-50 via-transparent to-transparent dark:from-slate-900" />

      {/* Location Info - Bottom */}
      <div className="relative z-10 mt-auto p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200/80 dark:bg-slate-800/80">
            <svg
              className="h-4 w-4 text-slate-600 dark:text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {location}
            </p>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              {country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GlobeCard };
export type { GlobeCardProps };
