"use client";

import { motion } from "framer-motion";

/* ----------------------------- data ----------------------------- */

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Ellecon Pvt Ltd",
    location: "India",
    period: { from: "May 2023", to: "July 2023" },
    bullets: [
      "Built full-stack web applications using the MERN stack.",
      "Developed real-time inventory updates and admin dashboard.",
      "Integrated RESTful APIs and improved UI/UX for better usability.",
    ],
    stack: ["React", "Node.js", "MongoDB", "REST APIs"] as const,
  },
];

const education = [
  {
    level: "Bachelor's Degree",
    program: "Computer Engineering",
    school: "Gujarat Technological University\nGujarat, INDIA",
    period: "2020 – 2024",
    cgpa: "3.48",
  },
  {
    level: "Master's Degree",
    program: "MS in Computer Science",
    school: "Rowan University\nNew Jersey, USA",
    period: "2024 – 2026",
    cgpa: "3.55",
  },
];

/* ----------------------------- icons ----------------------------- */

function BriefcaseDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path
        d="M22 22 V18 a4 4 0 0 1 4-4 h12 a4 4 0 0 1 4 4 v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect
        x="10"
        y="22"
        width="44"
        height="28"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <rect x="28" y="33" width="8" height="6" rx="1.4" fill="currentColor" opacity="0.85" />
      <path d="M10 32 H54" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      {/* sparkle */}
      <path
        d="M50 12 L52 16 L56 18 L52 20 L50 24 L48 20 L44 18 L48 16 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path d="M9 18 L13 18 M11 16 L11 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="15" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 10 H20.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3.5 V7 M16 3.5 V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8" cy="14" r="1.1" fill="currentColor" />
      <circle cx="12" cy="14" r="1.1" fill="currentColor" />
      <circle cx="16" cy="14" r="1.1" fill="currentColor" />
    </svg>
  );
}

function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M4 21 V8 L12 4 L20 8 V21 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8 12 H10 M14 12 H16 M8 16 H10 M14 16 H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2 C8 2 5 5 5 9 C5 14 12 22 12 22 C12 22 19 14 19 9 C19 5 16 2 12 2 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function GraduationCap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M4 26 L32 14 L60 26 L32 38 Z" fill="currentColor" />
      <path
        d="M14 30 V42 C14 46 22 50 32 50 C42 50 50 46 50 42 V30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path d="M58 28 V40" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="58" cy="43" r="2.6" fill="currentColor" />
    </svg>
  );
}

function HeartDoodle({ className = "", filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 22" className={className} aria-hidden>
      <path
        d="M12 20 C 4 13 2 9 4 6 C 6 3 10 4 12 7 C 14 4 18 3 20 6 C 22 9 20 13 12 20 Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlaneDoodle({ className = "" }: { className?: string }) {
  // top-down view of a real airplane (fuselage + main wings + tail wings)
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      {/* main wings */}
      <path
        d="M32 26 L6 38 L6 44 L32 40 L32 50 L24 56 L24 60 L32 58 L40 60 L40 56 L32 50 L32 40 L58 44 L58 38 L32 26 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* fuselage / nose */}
      <path
        d="M32 6 C 28 10 28 18 28 26 L36 26 C 36 18 36 10 32 6 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* cockpit highlight */}
      <ellipse cx="32" cy="14" rx="2" ry="3" fill="var(--cream)" opacity="0.85" />
    </svg>
  );
}

function DownloadIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 3 V15 M7 11 L12 16 L17 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 18 V20 a1 1 0 0 0 1 1 H19 a1 1 0 0 0 1 -1 V18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafDoodle({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 64"
      className={className}
      aria-hidden
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M24 60 C 14 50 8 36 12 22 C 16 10 28 6 36 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M22 50 C 26 46 30 42 32 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M28 16 C 30 18 32 20 32 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="20" cy="42" rx="3" ry="6" transform="rotate(-30 20 42)" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="16" cy="32" rx="3" ry="6" transform="rotate(-20 16 32)" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="14" cy="22" rx="3" ry="6" transform="rotate(-10 14 22)" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function ArrowDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden>
      <path
        d="M6 70 C 30 60 36 30 60 36 C 80 40 86 18 110 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="4 5"
      />
      <path
        d="M104 4 L112 10 L104 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M96 16 L100 12 M98 22 L104 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function DotGrid({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      {[2, 9, 16, 23, 30].map((y) =>
        [2, 9, 16, 23, 30].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.4" fill="currentColor" />
        ))
      )}
    </svg>
  );
}

/* ----------------------------- tech pill icons ----------------------------- */

function ReactGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

function NodeGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <text x="12" y="15.5" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor">JS</text>
    </svg>
  );
}

function MongoGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2 C9 8 7 12 9 17 C10 19 11 20 12 22 C13 20 14 19 15 17 C17 12 15 8 12 2 Z"
        fill="currentColor"
      />
      <path d="M12 5 V22" stroke="white" strokeWidth="0.9" />
    </svg>
  );
}

function LinkGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M10 14 L14 10 M9 7 L11 5 a3.5 3.5 0 0 1 5 5 L14 12 M15 17 L13 19 a3.5 3.5 0 0 1 -5 -5 L10 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const techVisual: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; color: string }
> = {
  React: { icon: ReactGlyph, color: "text-[#61dafb]" },
  "Node.js": { icon: NodeGlyph, color: "text-mustard" },
  MongoDB: { icon: MongoGlyph, color: "text-mint-deep" },
  "REST APIs": { icon: LinkGlyph, color: "text-coral" },
};

/* ----------------------------- about section ----------------------------- */

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 bg-cream px-6 py-24 md:px-12 md:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* heading */}
        <motion.div
          className="mx-auto mb-14 w-fit text-center md:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-script text-3xl text-ink md:text-4xl">
            a little <span className="text-mint-deep">about me</span>
          </h2>
          <svg
            viewBox="0 0 220 12"
            className="mx-auto mt-1 h-2 w-32 text-mint-deep md:w-44"
            aria-hidden
          >
            <path
              d="M2 8 Q40 2 80 7 T160 7 Q190 9 218 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-[1.05rem]">
            I&apos;m a full-stack developer who loves turning ideas into real,
            usable products. From scrappy MERN apps to AI-powered tools, I care
            about clean code, thoughtful design, and the little details that
            make software feel{" "}
            <span className="font-display italic text-mint-deep">good</span> to
            use.
          </p>

          {/* resume download CTA */}
          <motion.div
            className="relative mt-8 inline-flex items-center justify-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="/resume.docx"
              download="Nupur-Patel-Resume.docx"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-cream shadow-[0_6px_18px_rgba(26,26,58,0.18)] transition hover:-translate-y-0.5 hover:bg-mint-deep hover:shadow-[0_10px_22px_rgba(26,26,58,0.22)]"
              aria-label="Download Nupur Patel's resume (Word document)"
            >
              <DownloadIcon className="h-4 w-4 transition group-hover:-translate-y-0.5" />
              <span className="font-semibold tracking-wide">Download Resume</span>
            </a>
            {/* doodle sparkles around the button */}
            <SparkleDoodle className="absolute -right-6 -top-2 h-3 w-3 text-mustard" />
            <SparkleDoodle className="absolute -left-6 -bottom-1 h-2.5 w-2.5 text-coral" />
            <HeartDoodle
              filled
              className="absolute -right-10 bottom-0 h-3.5 w-3.5 text-coral"
            />
          </motion.div>
        </motion.div>

        {/* =========================== experience =========================== */}
        <ExperienceBlock />

        {/* =========================== education =========================== */}
        <EducationBlock />
      </div>
    </section>
  );
}

/* ----------------------------- experience block ----------------------------- */

function ExperienceBlock() {
  return (
    <div className="mb-24 md:mb-28">
      {experiences.map((exp, i) => (
        <motion.article
          key={exp.title}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-ink/10 bg-cream-deep/40 shadow-[0_4px_24px_rgba(26,26,58,0.07)] dark:bg-surface"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto]">
            {/* dark plum left rail */}
            <div className="relative hidden bg-ink md:block">
              {/* curved right edge */}
              <div
                aria-hidden
                className="absolute inset-y-0 -right-px w-16 bg-cream-deep/40 dark:bg-surface"
                style={{
                  clipPath: "ellipse(60% 100% at 100% 50%)",
                }}
              />
              {/* dot decorations */}
              <DotGrid className="absolute left-5 top-5 h-7 w-7 text-cream/40" />
              <DotGrid className="absolute left-5 bottom-5 h-7 w-7 text-cream/40" />

              {/* briefcase circle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-[55%] -translate-y-1/2">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-cream shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
                  <BriefcaseDoodle className="h-14 w-14 text-ink" />
                </div>
              </div>
            </div>

            {/* mobile briefcase header */}
            <div className="relative flex items-center gap-4 bg-ink px-6 py-5 md:hidden">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cream">
                <BriefcaseDoodle className="h-8 w-8 text-ink" />
              </div>
              <span className="font-script text-2xl text-cream">experience</span>
            </div>

            {/* main content */}
            <div className="relative px-6 py-7 md:px-10 md:py-9">
              {/* EXPERIENCE pill */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-mint-soft px-3 py-1.5">
                <CalendarIcon className="h-4 w-4 text-mint-deep" />
                <span className="text-[0.72rem] font-bold tracking-[0.18em] text-ink">
                  EXPERIENCE
                </span>
              </div>

              {/* title */}
              <h3 className="font-display text-2xl font-bold leading-tight text-ink md:text-[1.75rem]">
                {exp.title}
              </h3>

              {/* company + location */}
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.95rem] text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <BuildingIcon className="h-4 w-4 text-mint-deep" />
                  <span className="relative font-medium text-ink">
                    {exp.company}
                    <svg
                      viewBox="0 0 100 6"
                      className="absolute -bottom-1 left-0 h-1.5 w-full text-coral"
                      aria-hidden
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 4 Q25 1 50 4 T98 3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>
                <span className="text-ink/30">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <PinIcon className="h-4 w-4 text-coral" />
                  <span className="font-medium text-ink">{exp.location}</span>
                </span>
              </div>

              {/* bullets */}
              <ul className="mt-5 space-y-2.5">
                {exp.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-[0.95rem] leading-relaxed text-ink"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint-deep"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* tech pills */}
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {exp.stack.map((t) => {
                  const v = techVisual[t];
                  const Icon = v?.icon;
                  return (
                    <li
                      key={t}
                      className="inline-flex items-center gap-2 rounded-xl border border-ink/15 bg-cream px-3 py-1.5 text-[0.85rem] font-semibold text-ink shadow-sm dark:bg-surface-elevated"
                    >
                      {Icon ? <Icon className={`h-4 w-4 ${v.color}`} /> : null}
                      {t}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* date column */}
            <div className="relative hidden flex-col items-center justify-center px-8 py-9 md:flex">
              <div className="flex w-[140px] flex-col items-center gap-2 rounded-2xl bg-mint-soft px-4 py-5 text-center">
                <CalendarIcon className="h-7 w-7 text-mint-deep" />
                <span className="font-display text-[1.05rem] font-semibold text-ink">
                  {exp.period.from}
                </span>
                <span className="text-xs font-medium text-ink-muted">–</span>
                <span className="font-display text-[1.05rem] font-semibold text-ink">
                  {exp.period.to}
                </span>
              </div>
              {/* arrow doodle below */}
              <ArrowDoodle className="mt-4 h-12 w-24 text-ink/35" />
              <SparkleDoodle className="absolute right-6 top-7 h-3 w-3 text-mustard" />
            </div>

            {/* mobile date */}
            <div className="flex items-center justify-center px-6 pb-7 md:hidden">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-mint-soft px-4 py-2.5">
                <CalendarIcon className="h-4 w-4 text-mint-deep" />
                <span className="text-sm font-semibold text-ink">
                  {exp.period.from} – {exp.period.to}
                </span>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

/* ----------------------------- education block ----------------------------- */

function EducationBlock() {
  return (
    <div className="relative">
      {/* heading */}
      <motion.div
        className="relative mx-auto mb-14 w-fit text-center md:mb-16"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="font-script text-4xl text-ink md:text-5xl">education</h3>
        {/* underline */}
        <svg
          viewBox="0 0 220 14"
          className="mx-auto mt-1 h-2.5 w-44 text-mint-deep md:w-56"
          aria-hidden
        >
          <path
            d="M4 8 Q60 2 110 8 T216 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
        {/* decorations */}
        <HeartDoodle filled className="absolute -right-12 -top-2 h-5 w-5 text-coral md:-right-16" />
        <SparkleDoodle className="absolute -right-8 top-10 h-3 w-3 text-mustard md:-right-10" />
        <SparkleDoodle className="absolute -left-10 -top-1 h-2.5 w-2.5 text-mint-deep md:-left-12" />
        {/* little ticks above heading like in image */}
        <svg
          viewBox="0 0 60 18"
          className="absolute -top-6 left-1/2 h-4 w-12 -translate-x-1/2 text-mint-deep"
          aria-hidden
        >
          <path d="M6 14 L14 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M22 14 L30 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M38 14 L46 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* cards with connector */}
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20 lg:gap-28">
        {/* connector — desktop only */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 hidden h-36 w-[40%] -translate-x-1/2 -translate-y-1/2 md:block lg:w-[34%]"
        >
          <svg viewBox="0 0 400 120" className="h-full w-full" preserveAspectRatio="none">
            {/* endpoint dots */}
            <circle cx="6" cy="60" r="5" fill="var(--mint-deep)" />
            <circle cx="394" cy="60" r="5" fill="var(--mint-deep)" />
            {/* dashed curve */}
            <path
              d="M10 60 C 90 10 180 110 260 60 C 320 24 360 70 390 60"
              fill="none"
              stroke="var(--mint-deep)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2 7"
            />
          </svg>
          {/* heart sits to the left, on the dip of the curve */}
          <HeartDoodle
            filled
            className="absolute left-[14%] top-[34%] h-4 w-4 -translate-y-1/2 text-coral"
          />
          {/* airplane rides ON the dashed line, near center */}
          <PlaneDoodle className="absolute left-[52%] top-[62%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rotate-[18deg] text-coral drop-shadow-[0_2px_3px_rgba(196,89,77,0.25)]" />
        </div>

        {education.map((edu, i) => (
          <motion.article
            key={edu.level}
            className="relative rounded-3xl border-2 border-mint-soft bg-cream/60 px-6 pb-8 pt-12 text-center shadow-[0_4px_18px_rgba(26,26,58,0.05)] dark:bg-surface md:px-7"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* cap circle */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-mint-soft bg-mint-soft/80 dark:bg-mint-soft">
                <GraduationCap className="h-9 w-9 text-mint-deep" />
              </div>
            </div>

            {/* corner doodles */}
            <LeafDoodle className="absolute -left-1 bottom-2 h-12 w-8 text-mint-deep/70" />
            <LeafDoodle flip className="absolute -right-1 bottom-2 h-12 w-8 text-mint-deep/70" />
            <svg
              viewBox="0 0 30 18"
              className="absolute right-4 top-6 h-3 w-5 text-ink/40"
              aria-hidden
            >
              <path d="M2 14 L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M16 14 L24 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>

            {/* level title (script) with underline */}
            <h4 className="font-script text-3xl text-mint-deep md:text-[2rem]">
              {edu.level}
            </h4>
            <svg
              viewBox="0 0 120 6"
              className="mx-auto mt-0.5 h-1.5 w-28 text-mint-deep"
              aria-hidden
            >
              <path
                d="M2 4 Q30 1 60 4 T118 3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            {/* program */}
            <p className="mt-6 font-display text-lg font-bold text-ink">
              {edu.program}
            </p>

            {/* school */}
            <p className="mt-2 whitespace-pre-line text-[0.95rem] leading-relaxed text-ink-muted">
              {edu.school}
            </p>

            {/* year + cgpa pills */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center rounded-lg bg-cream-deep/70 px-4 py-1.5 dark:bg-surface-elevated">
                <span className="text-sm font-semibold text-ink">{edu.period}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-mint-soft px-3 py-1.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-mint-deep"
                  aria-hidden
                >
                  <path
                    d="M12 2 L14.5 8.5 L21.5 9.2 L16.2 13.8 L17.8 20.6 L12 16.9 L6.2 20.6 L7.8 13.8 L2.5 9.2 L9.5 8.5 Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-sm font-semibold text-mint-deep">
                  GPA <span className="text-ink">{edu.cgpa}</span>
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
