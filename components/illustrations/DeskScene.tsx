"use client";

import { motion } from "framer-motion";

export function DeskScene() {
  return (
    <svg
      viewBox="-10 -80 490 760"
      preserveAspectRatio="xMidYMin meet"
      className="h-full w-full max-h-[92vh]"
      role="img"
      aria-label="Illustrated workspace scene with a hanging pendant lamp from the ceiling, a floating shelf with a plant and books, a desktop monitor with code, and a coffee mug."
    >
      <defs>
        <linearGradient id="lampShade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--lilac-deep)" />
          <stop offset="100%" stopColor="var(--lilac)" />
        </linearGradient>
        <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff6c8" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#ffd166" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffd166" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* hanging pendant lamp — cord starts way up at the ceiling */}
      <motion.g
        animate={{ rotate: [-1.2, 1.2, -1.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "240px -80px" }}
      >
        <line x1="240" y1="-80" x2="240" y2="110" stroke="var(--ink)" strokeWidth="2.5" />
        <circle cx="240" cy="113" r="5" fill="var(--ink)" />
        <path
          d="M200 115 L280 115 L265 175 Q240 190 215 175 Z"
          fill="url(#lampShade)"
          stroke="var(--ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <ellipse cx="240" cy="115" rx="40" ry="5" fill="var(--lilac-deep)" stroke="var(--ink)" strokeWidth="2.5" />
        <circle cx="240" cy="200" r="14" fill="url(#bulbGlow)" />
        <circle cx="240" cy="192" r="5" fill="#ffe88a" stroke="var(--ink)" strokeWidth="1.5" />
      </motion.g>

      {/* floating shelf */}
      <g>
        <rect x="40" y="270" width="180" height="8" rx="2" fill="var(--rust)" stroke="var(--ink)" strokeWidth="2" />
        <g>
          <path
            d="M58 270 L62 230 L108 230 L112 270 Z"
            fill="var(--coral)"
            stroke="var(--ink)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <rect x="58" y="222" width="54" height="10" rx="2" fill="var(--coral)" stroke="var(--ink)" strokeWidth="2.5" />
          <motion.g
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "85px 225px" }}
          >
            <path d="M85 225 Q60 200 55 170 Q75 175 80 210" fill="var(--mint-deep)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
            <path d="M85 225 Q85 185 95 160 Q100 190 90 220" fill="var(--mint-deep)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
            <path d="M85 225 Q110 200 120 175 Q115 205 95 220" fill="var(--mint-deep)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
            <path d="M85 225 Q70 210 55 215 Q65 225 75 222" fill="var(--mint-deep)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
          </motion.g>
        </g>
        <g>
          <rect x="140" y="215" width="14" height="55" fill="var(--coral)" stroke="var(--ink)" strokeWidth="2" />
          <rect x="156" y="225" width="14" height="45" fill="var(--lilac-deep)" stroke="var(--ink)" strokeWidth="2" />
          <rect x="172" y="210" width="14" height="60" fill="var(--mustard)" stroke="var(--ink)" strokeWidth="2" />
          <line x1="143" y1="225" x2="151" y2="225" stroke="var(--ink)" strokeWidth="1.5" />
          <line x1="143" y1="260" x2="151" y2="260" stroke="var(--ink)" strokeWidth="1.5" />
          <line x1="175" y1="222" x2="183" y2="222" stroke="var(--ink)" strokeWidth="1.5" />
          <line x1="175" y1="258" x2="183" y2="258" stroke="var(--ink)" strokeWidth="1.5" />
          <rect x="138" y="205" width="54" height="10" fill="var(--rust)" stroke="var(--ink)" strokeWidth="2" />
        </g>
      </g>

      {/* desk surface */}
      <line x1="20" y1="540" x2="500" y2="540" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />

      {/* monitor */}
      <g>
        <path d="M260 520 L260 540 L225 540 L270 490 L315 540 L280 540 L280 520 Z" fill="var(--ink)" />
        <rect x="180" y="340" width="240" height="160" rx="6" fill="#ffffff" stroke="var(--ink)" strokeWidth="3" />
        <rect x="180" y="340" width="240" height="20" rx="6" fill="var(--cream-deep)" stroke="var(--ink)" strokeWidth="3" />
        <circle cx="192" cy="350" r="3" fill="var(--coral)" />
        <circle cx="202" cy="350" r="3" fill="var(--mustard)" />
        <circle cx="212" cy="350" r="3" fill="var(--mint-deep)" />

        <rect x="188" y="368" width="100" height="124" rx="3" fill="#1e1f38" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <g key={i}>
            <rect
              x="194"
              y={378 + i * 11}
              width={[24, 40, 32, 18, 46, 28, 36, 22, 40, 30][i]}
              height="4"
              rx="1"
              fill={["#ff6b6b", "#6ed2b0", "#ffd166", "#c7b8ea", "#6ed2b0", "#ff6b6b", "#c7b8ea", "#ffd166", "#6ed2b0", "#ff6b6b"][i]}
              opacity="0.85"
            />
            <rect
              x={220 + ([24, 40, 32, 18, 46, 28, 36, 22, 40, 30][i] % 8)}
              y={378 + i * 11}
              width={[30, 18, 24, 40, 12, 34, 20, 36, 16, 28][i]}
              height="4"
              rx="1"
              fill="#6b7090"
              opacity="0.7"
            />
          </g>
        ))}

        <rect x="296" y="368" width="116" height="124" rx="3" fill="#0f1026" />
        <text x="302" y="384" fontFamily="monospace" fontSize="9" fill="#6ed2b0">$ nupur ~</text>
        <motion.text
          x="302"
          y="402"
          fontFamily="monospace"
          fontSize="9"
          fill="#f4ecda"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          build scale ship_
        </motion.text>
        <text x="302" y="420" fontFamily="monospace" fontSize="8" fill="#6b7090">▸ deploy</text>
        <text x="302" y="436" fontFamily="monospace" fontSize="8" fill="#6b7090">▸ monitor</text>
        <text x="302" y="452" fontFamily="monospace" fontSize="8" fill="#ffd166">▸ iterate</text>
        <text x="302" y="475" fontFamily="monospace" fontSize="9" fill="#6ed2b0">$ _</text>
      </g>

      {/* coffee mug */}
      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.path
          d="M108 470 Q104 455 110 445 Q116 435 112 422"
          fill="none"
          stroke="var(--ink-muted)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
          animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M128 470 Q124 455 130 445 Q136 435 132 422"
          fill="none"
          stroke="var(--ink-muted)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
          animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        <path
          d="M90 480 L90 530 Q90 540 100 540 L140 540 Q150 540 150 530 L150 480 Z"
          fill="var(--coral-soft)"
          stroke="var(--ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <ellipse cx="120" cy="480" rx="30" ry="6" fill="var(--coral)" stroke="var(--ink)" strokeWidth="2.5" />
        <path
          d="M150 495 Q170 495 170 510 Q170 525 150 525"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M112 510 Q108 505 112 502 Q116 499 120 504 Q124 499 128 502 Q132 505 128 510 L120 518 Z"
          fill="var(--coral)"
          stroke="var(--ink)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  );
}
