"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = { name: string; level: number; delay: number };

export function SkillBar({ name, level, delay }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-semibold text-ink">{name}</span>
        <span className="text-ink-muted">{level}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full border-2 border-ink bg-cream">
        <motion.div
          className="h-full rounded-full bg-coral"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
