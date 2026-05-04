"use client";

import { motion } from "framer-motion";

export function PortraitAvatar() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-sm"
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg
        viewBox="0 0 400 400"
        className="h-auto w-full"
        role="img"
        aria-label="Illustrated portrait of Nupur with long dark hair and a warm smile, set against a mint blob background."
      >
        <defs>
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2b1f2a" />
            <stop offset="100%" stopColor="#3d2433" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f3d1b5" />
            <stop offset="100%" stopColor="#e5b898" />
          </linearGradient>
        </defs>

        {/* mint blob background */}
        <motion.path
          d="M80 130 Q60 60 140 50 Q220 30 290 70 Q370 110 360 200 Q370 290 300 330 Q220 380 140 350 Q60 320 70 240 Q60 180 80 130 Z"
          fill="var(--mint)"
          animate={{
            d: [
              "M80 130 Q60 60 140 50 Q220 30 290 70 Q370 110 360 200 Q370 290 300 330 Q220 380 140 350 Q60 320 70 240 Q60 180 80 130 Z",
              "M75 140 Q55 55 145 55 Q225 35 295 75 Q375 105 355 205 Q375 285 295 335 Q215 385 135 345 Q65 315 75 245 Q55 185 75 140 Z",
              "M80 130 Q60 60 140 50 Q220 30 290 70 Q370 110 360 200 Q370 290 300 330 Q220 380 140 350 Q60 320 70 240 Q60 180 80 130 Z",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* subtle shadow behind hair */}
        <ellipse cx="210" cy="370" rx="100" ry="8" fill="var(--ink)" opacity="0.1" />

        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* back hair (flowing behind shoulders) */}
          <path
            d="M110 170 Q95 260 120 340 L170 360 Q170 300 160 240 Q155 200 150 175 Z"
            fill="url(#hairGrad)"
          />
          <path
            d="M290 170 Q305 260 280 340 L230 360 Q230 300 240 240 Q245 200 250 175 Z"
            fill="url(#hairGrad)"
          />

          {/* shoulders / top */}
          <path
            d="M140 340 Q140 310 180 300 L220 300 Q260 310 260 340 L260 380 L140 380 Z"
            fill="#1f2040"
            stroke="var(--ink)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* collar hint */}
          <path
            d="M180 300 Q200 315 220 300"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* neck */}
          <rect x="188" y="275" width="24" height="32" fill="url(#skinGrad)" stroke="var(--ink)" strokeWidth="2.5" />

          {/* face */}
          <ellipse
            cx="200"
            cy="205"
            rx="72"
            ry="82"
            fill="url(#skinGrad)"
            stroke="var(--ink)"
            strokeWidth="2.5"
          />

          {/* hair — top/crown with side sweep */}
          <path
            d="M128 180 Q120 110 175 90 Q220 75 265 95 Q305 115 290 185 Q285 150 265 140 Q245 155 235 145 Q210 165 180 145 Q160 155 145 150 Q130 165 128 180 Z"
            fill="url(#hairGrad)"
          />
          {/* fringe / bangs */}
          <path
            d="M140 170 Q160 140 180 155 Q195 135 210 150 Q225 135 245 150 Q265 140 285 175 Q270 160 250 170 Q230 155 215 170 Q195 155 180 170 Q160 155 140 170 Z"
            fill="url(#hairGrad)"
          />

          {/* cheeks blush */}
          <ellipse cx="160" cy="235" rx="16" ry="8" fill="var(--coral)" opacity="0.55" />
          <ellipse cx="240" cy="235" rx="16" ry="8" fill="var(--coral)" opacity="0.55" />

          {/* eyes — closed-crescent smile lines */}
          <motion.g
            animate={{ scaleY: [1, 0.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.05, 0.1] }}
            style={{ transformOrigin: "200px 215px" }}
          >
            <circle cx="172" cy="215" r="5" fill="var(--ink)" />
            <circle cx="228" cy="215" r="5" fill="var(--ink)" />
            <circle cx="170" cy="213" r="1.5" fill="#fff" />
            <circle cx="226" cy="213" r="1.5" fill="#fff" />
          </motion.g>

          {/* glasses */}
          <g stroke="var(--ink)" strokeWidth="2.5" fill="none">
            <circle cx="172" cy="215" r="20" />
            <circle cx="228" cy="215" r="20" />
            <line x1="192" y1="215" x2="208" y2="215" />
            <line x1="152" y1="212" x2="140" y2="208" strokeLinecap="round" />
            <line x1="248" y1="212" x2="260" y2="208" strokeLinecap="round" />
          </g>

          {/* eyebrows */}
          <path d="M156 192 Q172 187 188 192" stroke="var(--ink)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M212 192 Q228 187 244 192" stroke="var(--ink)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* nose */}
          <path d="M200 225 Q196 245 200 252" stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55" />

          {/* mouth — smile */}
          <path
            d="M184 262 Q200 278 216 262"
            stroke="var(--ink)"
            strokeWidth="2.5"
            fill="var(--coral-soft)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* earrings (small coral dots) */}
          <circle cx="128" cy="230" r="3" fill="var(--coral)" stroke="var(--ink)" strokeWidth="1.5" />
          <circle cx="272" cy="230" r="3" fill="var(--coral)" stroke="var(--ink)" strokeWidth="1.5" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
