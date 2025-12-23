"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with Three.js
const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
    </div>
  ),
});

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
  const globeRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      // Auto-rotate the globe
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      globeRef.current.controls().enableZoom = false;

      // Set initial camera position for global view
      globeRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });
    }
  }, [isClient]);

  // Generate hexagonal pattern for all land areas
  const [hexData, setHexData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch land topology data
    fetch("//unpkg.com/world-atlas/land-110m.json")
      .then((res) => res.json())
      .then((landTopo) => {
        // Generate hex bins for land areas
        const hexBins: any[] = [];

        // Create a grid of hexagons across the globe
        for (let lat = -90; lat <= 90; lat += 5) {
          for (let lng = -180; lng <= 180; lng += 5) {
            hexBins.push({
              lat,
              lng,
              color: "#ffffff",
              altitude: 0.01,
            });
          }
        }

        setHexData(hexBins);
      })
      .catch((err) => console.error("Error loading land data:", err));
  }, []);

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl",
        "bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950",
        "border border-slate-200/50 dark:border-slate-700/50",
        "min-h-[300px]",
        className
      )}
    >
      {/* Globe Container */}
      <div className="absolute inset-0 flex items-center justify-center opacity-90">
        {isClient && (
          <Globe
            ref={globeRef}
            width={350}
            height={350}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            atmosphereColor="#3b82f6"
            atmosphereAltitude={0.15}
            pointsData={pointsData}
            pointColor="color"
            pointAltitude={0.02}
            pointRadius="size"
            pointsMerge={false}
          />
        )}
      </div>

      {/* Gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent dark:from-slate-950" />

      {/* Location Info */}
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
