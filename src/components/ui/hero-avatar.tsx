"use client";

import { useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

const PARTICLE_COUNT = 14;
const COLORS = ["#f43f5e", "#fb923c", "#facc15", "#a78bfa", "#60a5fa", "#34d399", "#f472b6"];

// Precomputed burst layout: alternating near/far rays, every third one a heart.
const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  const angle = (i / PARTICLE_COUNT) * Math.PI * 2 + (i % 2 ? 0.22 : 0);
  const distance = i % 2 ? 38 : 50;
  return {
    tx: Math.round(Math.cos(angle) * distance),
    ty: Math.round(Math.sin(angle) * distance),
    color: COLORS[i % COLORS.length],
    heart: i % 3 === 0,
    delay: (i % 4) * 25,
  };
});

interface HeroAvatarProps {
  src: string;
  alt: string;
}

// Profile photo with a "like button" burst on hover (tap on touch screens).
export function HeroAvatar({ src, alt }: HeroAvatarProps) {
  const [burst, setBurst] = useState(0);
  const photoRef = useRef<HTMLSpanElement>(null);

  const trigger = () => {
    setBurst((b) => b + 1);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    photoRef.current?.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(0.82)", offset: 0.25 },
        { transform: "scale(1.22)", offset: 0.6 },
        { transform: "scale(1)" },
      ],
      { duration: 600, easing: "cubic-bezier(.2,.8,.3,1)" }
    );
  };

  return (
    <span
      className="relative inline-flex h-12 w-12 shrink-0 cursor-pointer animate-hero-float motion-reduce:animate-none"
      onMouseEnter={trigger}
      onClick={trigger}
    >
      <span
        aria-hidden="true"
        className="absolute -inset-2 rounded-full bg-blue-500/30 blur-md animate-pulse motion-reduce:animate-none"
      />
      <span
        aria-hidden="true"
        className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,#60a5fa,#a78bfa,#f472b6,#22d3ee,#60a5fa)] animate-spin [animation-duration:4s] motion-reduce:animate-none"
      />

      {burst > 0 && (
        <span
          key={burst}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 motion-reduce:hidden"
        >
          <span className="absolute inset-0 rounded-full border-pink-400 animate-like-ring" />
          {particles.map((p, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 animate-like-particle"
              style={
                {
                  "--tx": `${p.tx}px`,
                  "--ty": `${p.ty}px`,
                  animationDelay: `${p.delay}ms`,
                  color: p.color,
                } as CSSProperties
              }
            >
              {p.heart ? (
                <Heart className="h-3 w-3" fill="currentColor" strokeWidth={0} />
              ) : (
                <span className="block h-1.5 w-1.5 rounded-full bg-current" />
              )}
            </span>
          ))}
        </span>
      )}

      <span ref={photoRef} className="relative z-10 inline-flex">
        <Image
          src={src}
          alt={alt}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full border-2 border-background object-cover"
        />
      </span>
    </span>
  );
}
