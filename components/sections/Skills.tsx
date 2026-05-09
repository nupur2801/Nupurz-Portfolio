"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Accent = "mint" | "coral" | "mustard" | "lilac" | "rust" | "sage";

type Group = {
  name: string;
  tagline: string;
  items: string[];
  accent: Accent;
  icon: ReactNode;
};

const accentStyles: Record<Accent, { tile: string; ring: string }> = {
  mint: { tile: "bg-mint-soft", ring: "text-mint-deep" },
  coral: { tile: "bg-coral-soft", ring: "text-rust" },
  mustard: { tile: "bg-mustard-soft", ring: "text-rust" },
  lilac: { tile: "bg-lilac-soft", ring: "text-lilac-deep" },
  rust: { tile: "bg-coral-soft", ring: "text-rust" },
  sage: { tile: "bg-mint-soft", ring: "text-mint-deep" },
};

function IconFrontend() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden>
      <rect x="6" y="10" width="36" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M17 22 L12 27 L17 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 22 L36 27 L31 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="27" y1="20" x2="22" y2="34" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function IconBackend() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden>
      <rect x="9" y="10" width="30" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <rect x="9" y="21" width="30" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <rect x="9" y="32" width="30" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="14" cy="14.5" r="1.3" fill="currentColor" />
      <circle cx="14" cy="25.5" r="1.3" fill="currentColor" />
      <circle cx="14" cy="36.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

function IconDatabase() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden>
      <ellipse cx="24" cy="12" rx="14" ry="4.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M10 12 V24 C10 27 16 29 24 29 C32 29 38 27 38 24 V12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M10 24 V36 C10 39 16 41 24 41 C32 41 38 39 38 36 V24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function IconAI() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden>
      <path
        d="M18 10 C14 10 11 13 11 17 C9 19 9 23 11 25 C10 28 12 31 15 31 C16 34 20 36 23 34 L23 12 C22 11 20 10 18 10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M30 10 C34 10 37 13 37 17 C39 19 39 23 37 25 C38 28 36 31 33 31 C32 34 28 36 25 34 L25 12 C26 11 28 10 30 10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M24 36 L24 41" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden>
      <path
        d="M14 32 C9 32 6 28 6 24 C6 20 10 17 14 18 C15 13 20 10 25 10 C31 10 36 14 37 20 C41 20 44 23 44 27 C44 30 41 33 37 33 L14 32 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M18 39 L18 42 M26 39 L26 42 M34 39 L34 42" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function IconTools() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden>
      <path
        d="M30 8 L40 18 L34 24 L28 18 L30 16 L20 26 L14 20 L24 10 L26 12 L30 8 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M16 26 L10 32 C8 34 8 38 10 40 C12 42 16 42 18 40 L24 34"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DoodleSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 14" className={className} aria-hidden>
      <path
        d="M2 7 Q7 1 12 7 T22 7 T32 7 T38 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DoodleHeart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 22" className={className} aria-hidden>
      <path
        d="M12 20 C 4 13 2 9 4 6 C 6 3 10 4 12 7 C 14 4 18 3 20 6 C 22 9 20 13 12 20 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DoodleStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 3 L14 10 L21 12 L14 14 L12 21 L10 14 L3 12 L10 10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DoodleCloud({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 22" className={className} aria-hidden>
      <path
        d="M8 18 C4 18 2 15 3 12 C4 9 8 8 10 10 C11 6 15 5 18 7 C21 4 26 6 27 10 C30 10 33 12 32 16 C31 19 28 20 26 18 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DoodleTicks({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <path d="M4 4 L10 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 3 L20 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function DoodleLoop({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 18" className={className} aria-hidden>
      <path
        d="M2 14 C8 2 14 18 20 10 C24 4 28 10 30 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const groups: Group[] = [
  {
    name: "frontend",
    tagline: "crafting clean, responsive & accessible user interfaces",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
    accent: "sage",
    icon: <IconFrontend />,
  },
  {
    name: "backend",
    tagline: "building scalable apis & server logic that just works",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Middleware", "Socket.io", "GraphQL", "Nodemailer"],
    accent: "coral",
    icon: <IconBackend />,
  },
  {
    name: "database",
    tagline: "designing schemas that stay sane at scale",
    items: ["MongoDB", "Mongoose", "SQL", "Schema Design", "Aggregation", "Database Design"],
    accent: "mustard",
    icon: <IconDatabase />,
  },
  {
    name: "ai & ml",
    tagline: "experimenting with llms & ml for smarter products",
    items: ["LLaMA 3", "Ollama", "Groq API", "Random Forest", "Logistic Regression", "KNN", "Prompt Engineering", "Scikit-learn", "Pandas"],
    accent: "lilac",
    icon: <IconAI />,
  },
  {
    name: "cloud & iot",
    tagline: "deploying on azure/aws & wiring up iot data streams",
    items: ["AWS EC2", "Deployment on AWS", "Microsoft Azure", "AZ-900", "MQTT", "IoT Pipelines", "Linux", "Ubuntu", "Nginx"],
    accent: "mint",
    icon: <IconCloud />,
  },
  {
    name: "tools",
    tagline: "the trusty daily drivers for building & shipping",
    items: ["Git", "GitHub", "Postman", "VS Code", "Docker", "Figma"],
    accent: "rust",
    icon: <IconTools />,
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 bg-lilac-soft px-6 py-24 md:px-12 md:py-28 lg:px-20"
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
            my <span className="text-mint-deep">skills</span>
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
        </motion.div>

        {/* cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => {
            const a = accentStyles[g.accent];
            return (
              <motion.article
                key={g.name}
                className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-6 shadow-[0_2px_16px_rgba(26,26,58,0.05)] transition hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(26,26,58,0.08)] dark:bg-surface md:p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* header */}
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${a.tile} ${a.ring}`}
                  >
                    {g.icon}
                  </span>
                  <h3 className="font-script text-2xl text-ink md:text-3xl">{g.name}</h3>
                </div>

                {/* pills */}
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-ink/20 bg-cream px-3 py-1 text-[0.8rem] font-medium text-ink dark:bg-surface-elevated"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* tagline */}
                <p className="mt-5 max-w-[22ch] text-sm leading-relaxed text-ink-muted">
                  {g.tagline}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
