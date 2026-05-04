"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "@/lib/data";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            aria-label="Close project details"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border-2 border-ink bg-surface-elevated p-8 shadow-[8px_8px_0_0_var(--ink)]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-cream text-lg leading-none hover:bg-coral-soft"
              aria-label="Close"
            >
              ×
            </button>
            <p className="text-xs font-semibold uppercase tracking-widest text-coral">Project</p>
            <h2
              id="project-title"
              className="font-display mt-2 pr-10 text-3xl font-semibold text-ink"
            >
              {project.title}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border-2 border-ink bg-mint-soft px-3 py-1 text-xs font-medium text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-ink-muted">{project.longDescription}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-coral underline-offset-4 hover:underline"
              >
                View repository
                <span aria-hidden>↗</span>
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
