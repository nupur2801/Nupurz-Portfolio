"use client";

import { motion } from "framer-motion";

export function DeveloperAvatar() {
  return (
    <motion.div
      className="relative mx-auto w-full"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg
        viewBox="0 0 400 400"
        className="h-auto w-full"
        role="img"
        aria-label="Illustrated avatar of Nupur"
      >
        <motion.circle
          cx="200"
          cy="200"
          r="160"
          fill="var(--coral-soft)"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 200px" }}
        />

        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="200" cy="370" rx="110" ry="10" fill="var(--ink)" opacity="0.08" />

          <path
            d="M120 360 L120 290 Q120 255 155 250 L245 250 Q280 255 280 290 L280 360 Z"
            fill="var(--coral)"
          />
          <path
            d="M155 250 Q155 220 200 215 Q245 220 245 250 Z"
            fill="var(--cream-deep)"
          />

          <circle cx="200" cy="180" r="62" fill="#f5d3b8" />

          <path
            d="M145 170 Q145 105 200 100 Q260 105 258 175 Q250 155 220 150 Q210 165 180 160 Q155 165 145 185 Z"
            fill="#2d2440"
          />

          <path
            d="M147 180 Q135 230 150 260"
            stroke="#2d2440"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M253 180 Q268 230 253 260"
            stroke="#2d2440"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />

          <g>
            <circle
              cx="178"
              cy="185"
              r="14"
              fill="var(--cream)"
              stroke="var(--ink)"
              strokeWidth="2.5"
            />
            <circle
              cx="222"
              cy="185"
              r="14"
              fill="var(--cream)"
              stroke="var(--ink)"
              strokeWidth="2.5"
            />
            <line
              x1="192"
              y1="185"
              x2="208"
              y2="185"
              stroke="var(--ink)"
              strokeWidth="2.5"
            />
          </g>

          <motion.g
            animate={{ scaleY: [1, 0.15, 1] }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3.5,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "200px 186px" }}
          >
            <circle cx="178" cy="187" r="3" fill="var(--ink)" />
            <circle cx="222" cy="187" r="3" fill="var(--ink)" />
          </motion.g>

          <ellipse cx="164" cy="205" rx="7" ry="4" fill="var(--coral)" opacity="0.45" />
          <ellipse cx="236" cy="205" rx="7" ry="4" fill="var(--coral)" opacity="0.45" />

          <path
            d="M188 222 Q200 230 212 222"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </motion.g>

        <motion.g
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "70px 120px" }}
        >
          <rect
            x="40"
            y="100"
            width="60"
            height="40"
            rx="6"
            fill="var(--surface)"
            stroke="var(--ink)"
            strokeWidth="2"
          />
          <circle cx="48" cy="110" r="2" fill="var(--coral)" />
          <circle cx="56" cy="110" r="2" fill="var(--mustard)" />
          <circle cx="64" cy="110" r="2" fill="var(--mint)" />
          <rect x="48" y="120" width="30" height="2.5" rx="1" fill="var(--ink)" opacity="0.3" />
          <rect x="48" y="126" width="20" height="2.5" rx="1" fill="var(--coral)" opacity="0.7" />
        </motion.g>

        <motion.g
          animate={{ y: [0, 8, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          style={{ transformOrigin: "330px 280px" }}
        >
          <circle
            cx="330"
            cy="280"
            r="26"
            fill="var(--mustard-soft)"
            stroke="var(--ink)"
            strokeWidth="2"
          />
          <text
            x="330"
            y="288"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="18"
            fontWeight="700"
            fill="var(--ink)"
          >
            {"{ }"}
          </text>
        </motion.g>

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "330px 110px" }}
        >
          <path
            d="M330 98 L333 108 L343 110 L333 112 L330 122 L327 112 L317 110 L327 108 Z"
            fill="var(--coral)"
          />
        </motion.g>

        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="60" cy="260" r="6" fill="var(--mint)" />
          <circle cx="75" cy="275" r="4" fill="var(--mustard)" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
