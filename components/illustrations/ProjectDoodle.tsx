"use client";

type Variant = 0 | 1 | 2 | 3 | 4;

type Props = {
  variant?: Variant;
  className?: string;
};

export function ProjectDoodle({ variant = 0, className }: Props) {
  const accent = [
    "var(--mint)",
    "var(--coral-soft)",
    "var(--mustard-soft)",
    "var(--mint)",
    "var(--coral-soft)",
  ][variant % 5];

  const mugColor = ["var(--lilac)", "var(--mint-deep)", "var(--mustard)", "var(--coral)", "var(--lilac-deep)"][
    variant % 5
  ];

  const potColor = ["var(--coral)", "var(--mustard)", "var(--lilac)", "var(--coral)", "var(--mint-deep)"][
    variant % 5
  ];

  return (
    <svg
      viewBox="0 0 560 260"
      className={className}
      role="img"
      aria-label="Illustrated laptop with code and chart, a potted plant, and a coffee mug."
    >
      {/* sparkle top-left */}
      <g transform="translate(70, 40)">
        <path
          d="M0 -12 L3 -3 L12 0 L3 3 L0 12 L-3 3 L-12 0 L-3 -3 Z"
          fill="var(--mustard)"
          stroke="var(--ink)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>

      {/* coral rays top-right */}
      <g stroke="var(--coral)" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <line x1="490" y1="40" x2="486" y2="22" />
        <line x1="500" y1="46" x2="508" y2="30" />
        <line x1="478" y1="50" x2="464" y2="44" />
      </g>

      {/* plant */}
      <g>
        <path
          d="M118 240 L122 200 L168 200 L172 240 Z"
          fill={potColor}
          stroke="var(--ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <rect x="118" y="192" width="54" height="10" rx="2" fill={potColor} stroke="var(--ink)" strokeWidth="2.5" />
        {/* leaves */}
        <path
          d="M145 195 Q125 170 120 140 Q138 144 144 175"
          fill={accent}
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M145 195 Q145 155 154 130 Q160 160 150 190"
          fill={accent}
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M145 195 Q170 170 180 148 Q174 178 155 190"
          fill={accent}
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>

      {/* laptop */}
      <g>
        {/* screen */}
        <rect
          x="220"
          y="80"
          width="200"
          height="130"
          rx="6"
          fill="#ffffff"
          stroke="var(--ink)"
          strokeWidth="2.5"
        />
        {/* top bar */}
        <rect x="220" y="80" width="200" height="16" rx="6" fill="var(--mint)" stroke="var(--ink)" strokeWidth="2.5" />
        <circle cx="230" cy="88" r="2.5" fill="var(--coral)" />
        <circle cx="238" cy="88" r="2.5" fill="var(--mustard)" />
        <circle cx="246" cy="88" r="2.5" fill="var(--mint-deep)" />

        {/* left panel: code icon */}
        <rect x="232" y="106" width="80" height="90" rx="4" fill="var(--cream)" stroke="var(--ink)" strokeWidth="1.5" />
        <text
          x="272"
          y="158"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="26"
          fontWeight="700"
          fill="var(--ink)"
        >
          {"</>"}
        </text>
        <rect x="242" y="178" width="60" height="3" rx="1.5" fill="var(--ink)" opacity="0.25" />
        <rect x="242" y="186" width="40" height="3" rx="1.5" fill="var(--ink)" opacity="0.2" />

        {/* right panel: chart */}
        <rect x="322" y="106" width="90" height="90" rx="4" fill="var(--cream)" stroke="var(--ink)" strokeWidth="1.5" />
        <rect x="334" y="162" width="14" height="28" fill={mugColor} stroke="var(--ink)" strokeWidth="1.5" />
        <rect x="354" y="142" width="14" height="48" fill="var(--coral)" stroke="var(--ink)" strokeWidth="1.5" />
        <rect x="374" y="152" width="14" height="38" fill="var(--mustard)" stroke="var(--ink)" strokeWidth="1.5" />
        <rect x="394" y="134" width="14" height="56" fill="var(--mint-deep)" stroke="var(--ink)" strokeWidth="1.5" />

        {/* base */}
        <path
          d="M200 210 L440 210 L430 225 L210 225 Z"
          fill="var(--cream-deep)"
          stroke="var(--ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <rect x="306" y="208" width="28" height="4" rx="2" fill="var(--ink)" />
      </g>

      {/* coffee mug */}
      <g>
        {/* steam */}
        <path
          d="M482 165 Q478 150 484 140 Q490 130 486 118"
          fill="none"
          stroke="var(--ink-muted)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M498 165 Q494 150 500 140 Q506 130 502 118"
          fill="none"
          stroke="var(--ink-muted)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
        {/* mug */}
        <path
          d="M470 180 L470 230 Q470 240 480 240 L516 240 Q526 240 526 230 L526 180 Z"
          fill={mugColor}
          stroke="var(--ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <ellipse cx="498" cy="180" rx="28" ry="5" fill={mugColor} stroke="var(--ink)" strokeWidth="2.5" />
        {/* handle */}
        <path
          d="M526 194 Q544 194 544 208 Q544 222 526 222"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* heart */}
        <path
          d="M490 210 Q486 205 490 202 Q494 199 498 204 Q502 199 506 202 Q510 205 506 210 L498 218 Z"
          fill="var(--coral)"
          stroke="var(--ink)"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </g>

      {/* desk line */}
      <line x1="100" y1="240" x2="545" y2="240" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
