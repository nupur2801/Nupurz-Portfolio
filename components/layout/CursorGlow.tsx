"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 28 });
  const sy = useSpring(y, { stiffness: 280, damping: 28 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 120);
      y.set(e.clientY - 120);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed -z-[5] hidden h-60 w-60 rounded-full bg-coral/15 blur-3xl mix-blend-multiply dark:bg-coral/20 dark:mix-blend-screen md:block"
      style={{ left: sx, top: sy }}
      aria-hidden
    />
  );
}
