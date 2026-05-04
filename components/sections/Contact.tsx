"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons/SocialIcons";
import { socialLinks, contactEmail } from "@/lib/social";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
};

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-mint px-6 py-20 md:px-12 md:py-28 lg:px-20 dark:bg-cream-deep"
    >
      {/* Cream card — holds all content */}
      <motion.div
        className="mx-auto max-w-6xl rounded-3xl bg-white px-8 py-14 shadow-sm dark:bg-cream md:px-14 md:py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          {/* LEFT — text + socials */}
          <div className="order-2 md:order-1">
            <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Got an idea? Let&apos;s brew something together.
            </h3>
            <p className="mt-6 text-lg text-ink">
              <a
                href={`mailto:${contactEmail}`}
                className="font-semibold text-ink transition hover:text-coral"
              >
                Drop me a line
              </a>{" "}
              at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="break-words font-semibold underline decoration-coral decoration-2 underline-offset-4 transition hover:text-coral"
              >
                {contactEmail}
              </a>
            </p>
            <p className="mt-3 text-lg text-ink">
              or find me wandering around the internet.
            </p>

            <div className="mt-8 flex items-center gap-5">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:text-coral"
                    whileHover={{ y: -4, rotate: -6 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <Icon className="h-7 w-7" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* RIGHT — doodle */}
          <motion.div
            className="relative order-1 mx-auto w-full max-w-md md:order-2"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/portrait.png"
                alt="Illustrated portrait of Nupur"
                width={1024}
                height={768}
                className="h-auto w-full select-none dark:hidden"
                priority
              />
              <Image
                src="/dark-avtaar.png"
                alt="Illustrated portrait of Nupur"
                width={1024}
                height={768}
                className="h-auto w-full select-none hidden dark:block"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* big "Hey there!" heading inside the card */}
        <motion.h2
          className="font-display mt-12 text-5xl font-bold tracking-tight text-ink md:mt-16 md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Hey there<span className="text-coral">!</span>
        </motion.h2>
      </motion.div>
    </section>
  );
}
