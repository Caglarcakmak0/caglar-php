"use client";

export function HeroEnding() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-56 md:pt-20 ">
      <div aria-hidden="true" className="relative h-60 w-full z-19 mt-4">
        <div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 transform h-[500px] w-[1200px] mask-[linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]">
          {/* Animated gradient blur */}
          <div className="absolute bottom-[167px] left-1/2 -translate-x-1/2 transform h-[111px] w-[800px] blur-[80px] bg-[linear-gradient(90deg,#06b6d4,#7c3aed,#4f46e5,#38bdf8,#06b6d4)] bg-[length:300%_100%] animate-[gradient_8s_ease_infinite]" />

          {/* Outer glow ring */}
          <div className="absolute -bottom-[753px] -left-[454px] -right-[432px] h-[955px] rounded-[100%] bg-gradient-to-b from-indigo-500/40 to-transparent dark:from-white/40" />

          {/* Inner platform with shadow */}
          <div className="absolute -bottom-[759px] -left-[532px] -right-[510px] h-[956px] aspect-[2.346/1] rounded-[100%] bg-white dark:bg-black shadow-[inset_0_2px_20px_#4f46e510,0_-10px_50px_1px_#4f46e520] dark:shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]" />
        </div>
      </div>
    </div>
  );
}
