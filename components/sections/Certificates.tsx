"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certificates } from "@/lib/data";

const accents = ["bg-coral-soft", "bg-mint-soft", "bg-mustard-soft", "bg-coral-soft"];

export function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="certificates"
      ref={ref}
      className="scroll-mt-24 border-y-2 border-ink/10 bg-cream-deep/50 px-6 py-24 dark:border-ink/20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="font-display text-3xl font-semibold text-ink md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="squiggle">Certificates</span>
          <span className="text-coral">.</span>
        </motion.h2>
        <p className="mt-4 text-ink-muted">Proof of curiosity in structured doses.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((c, i) => (
            <motion.article
              key={c.title}
              className={`rounded-2xl border-2 border-ink p-6 shadow-[4px_4px_0_0_var(--ink)] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--ink)] ${accents[i % accents.length]}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i }}
              whileHover={{ rotate: i % 2 === 0 ? -1.2 : 1.2 }}
            >
              <p className="text-xs font-bold uppercase tracking-wide text-coral">{c.year}</p>
              <h3 className="font-display mt-2 text-lg font-semibold leading-snug text-ink">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{c.issuer}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
