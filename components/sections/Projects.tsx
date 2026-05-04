"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ProjectDoodle } from "@/components/illustrations/ProjectDoodle";
import { ExternalLinkIcon } from "@/components/icons/ActionIcons";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import { projects, type Project } from "@/lib/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [imgError, setImgError] = useState(false);
  const isGithub = (project.url ?? "").includes("github.com");
  const live = project.liveUrl ?? (!isGithub ? project.url : undefined);
  const repo = project.githubUrl ?? (isGithub ? project.url : undefined);
  const variant = (index % 5) as 0 | 1 | 2 | 3 | 4;
  const showImage = Boolean(project.image) && !imgError;

  return (
    <motion.article
      className="relative flex flex-col overflow-hidden rounded-2xl bg-cream p-5 shadow-[0_3px_18px_rgba(26,26,58,0.06)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,26,58,0.1)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.04 * index, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* image / doodle header */}
      <div className="mb-4 flex h-40 items-center justify-center overflow-hidden rounded-xl bg-cream-deep/40">
        {showImage ? (
          <Image
            src={project.image!}
            alt={`${project.title} preview`}
            width={640}
            height={400}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <ProjectDoodle variant={variant} className="h-full w-auto max-w-full px-3" />
        )}
      </div>

      {/* title with mint highlight */}
      <h3 className="font-display relative inline-block self-start text-xl font-bold text-ink">
        <span
          className="absolute inset-x-0 bottom-0.5 -z-0 h-2.5 rounded-sm bg-mint/70"
          aria-hidden
        />
        <span className="relative z-10">{project.title}</span>
      </h3>

      {/* description */}
      <p className="mt-2.5 line-clamp-3 text-[0.85rem] leading-relaxed text-ink-muted">
        {project.description}
      </p>

      {/* dashed coral separator */}
      <div
        className="mt-4"
        style={{
          borderTop: "2px dashed var(--coral)",
          opacity: 0.65,
        }}
      />

      {/* tags */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-mint-deep/60 px-2 py-0.5 text-[0.7rem] font-semibold text-mint-deep"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-mint-deep/70 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink transition hover:border-mint-deep hover:bg-mint-soft"
          >
            <ExternalLinkIcon className="h-3.5 w-3.5 text-mint-deep" />
            Live Demo
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/70 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink transition hover:border-ink hover:bg-cream-deep"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            GitHub
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 bg-cream-deep px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="font-script text-3xl text-mint-deep md:text-4xl">projects.</p>
          <h2 className="font-display mt-2 text-3xl font-bold text-ink md:text-4xl">
            Stuff I&apos;ve been{" "}
            <span className="relative inline-block">
              <span
                className="absolute inset-x-0 bottom-0.5 -z-0 h-3 rounded-sm bg-mint/70"
                aria-hidden
              />
              <span className="relative z-10">building.</span>
            </span>
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            A mix of full-stack apps, AI experiments, and the little website that got me started.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
