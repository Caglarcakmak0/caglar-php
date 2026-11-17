"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RotatingWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

// Cycles through words with a slide-up fade; shows only the first word when motion is reduced.
export function RotatingWords({ words, interval = 2600, className }: RotatingWordsProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || words.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [reduceMotion, words.length, interval]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.em
          key={words[index]}
          initial={{ y: "0.6em", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.6em", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.3, 1] }}
          className={cn("whitespace-nowrap pr-[0.12em] pb-[0.08em]", className)}
        >
          {words[index]}
        </motion.em>
      </AnimatePresence>
    </span>
  );
}
