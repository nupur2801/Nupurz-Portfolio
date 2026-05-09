"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tech Company",
    location: "San Francisco, CA",
    period: "Jan 2023 - Present",
    description: "Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL. Led a team of 3 developers in implementing new features and optimizing performance.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    type: "work"
  },
  {
    title: "Software Engineering Intern",
    company: "StartupXYZ",
    location: "New York, NY", 
    period: "Jun 2022 - Aug 2022",
    description: "Contributed to the development of a cloud-based SaaS platform. Implemented RESTful APIs and improved frontend performance by 40%.",
    technologies: ["JavaScript", "Python", "MongoDB", "React"],
    type: "work"
  },
  {
    title: "Teaching Assistant",
    company: "University",
    location: "New Jersey, NJ",
    period: "Sep 2021 - Dec 2021",
    description: "Assisted in teaching Computer Science courses. Conducted tutoring sessions and graded assignments for 50+ students.",
    technologies: ["Python", "Java", "Data Structures"],
    type: "education"
  }
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="font-display text-3xl font-semibold text-ink md:text-5xl text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="squiggle">Experience</span>
          <span className="text-coral">.</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-mint-soft transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-mint-deep rounded-full transform md:-translate-x-1/2 border-4 border-cream z-10">
                <div className="absolute inset-0 bg-mint-deep rounded-full animate-ping"></div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
              }`}>
                <motion.div
                  className="bg-cream rounded-2xl p-6 border-2 border-mint-soft shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ y: -4 }}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="font-display text-xl font-bold text-mint-deep mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-ink-muted">
                      <span className="font-medium text-ink">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-ink mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-mustard-soft text-ink rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Type Indicator */}
                  <div className="absolute top-4 right-4">
                    {exp.type === "work" ? (
                      <svg className="w-5 h-5 text-coral" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-mint-deep" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                      </svg>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-mint-deep text-cream rounded-full hover:bg-mint transition-colors font-medium"
          >
            Let's work together
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
