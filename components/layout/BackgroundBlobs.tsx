"use client";

import { motion } from "framer-motion";

export function BackgroundBlobs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -left-24 top-32 h-80 w-80 rounded-full bg-blob-1 blur-3xl opacity-60 dark:opacity-40"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-blob-2 blur-3xl opacity-55 dark:opacity-35"
        animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-blob-3 blur-3xl opacity-55 dark:opacity-30"
        animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        className="absolute left-[8%] top-[18%] h-16 w-16 text-coral opacity-70"
        viewBox="0 0 60 60"
        fill="none"
      >
        <motion.path
          d="M5 30 Q15 10 30 30 T55 30"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <svg
        className="absolute right-[12%] bottom-[22%] h-20 w-20 text-mustard"
        viewBox="0 0 60 60"
        fill="none"
      >
        <motion.circle
          cx="30"
          cy="30"
          r="20"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="4 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "30px 30px" }}
        />
      </svg>
      <svg
        className="absolute left-[6%] bottom-[12%] h-12 w-12 text-mint"
        viewBox="0 0 40 40"
        fill="none"
      >
        <motion.path
          d="M5 20 L15 10 M5 10 L15 20 M25 20 L35 10 M25 10 L35 20"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
