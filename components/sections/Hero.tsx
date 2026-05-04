"use client";

import { motion } from "framer-motion";
import { DeskScene } from "@/components/illustrations/DeskScene";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[2fr_3fr]">
        {/* LEFT — cream side with illustration, shifted toward the right edge */}
        <motion.div
          className="relative flex items-stretch justify-end bg-cream pl-10 pr-4 pt-20 pb-8 md:pl-20 md:pr-2 md:py-0 lg:pl-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full w-full items-stretch justify-end"
          >
            <DeskScene />
          </motion.div>
        </motion.div>

        {/* RIGHT — mint side with text */}
        <div className="relative flex items-center bg-mint px-6 pt-12 pb-20 md:px-14 md:py-24 lg:px-20">
          <div className="max-w-xl">
            <motion.p
              className="font-display text-lg font-medium text-ink md:text-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.span
                className="mr-2 inline-block"
                animate={{ rotate: [0, 18, -12, 18, 0] }}
                transition={{ duration: 1.6, delay: 0.8, repeat: Infinity, repeatDelay: 4 }}
                style={{ transformOrigin: "70% 70%" }}
              >
                👋
              </motion.span>
              Hi, I&apos;m Nupur Patel
            </motion.p>

            <motion.h1
              className="font-display mt-5 text-[2rem] font-bold leading-[1.1] text-ink sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              I love building{" "}
              <span className="font-display text-outline">interactive</span>
              , real-world applications. I work with{" "}
              <span className="font-display text-outline">MERN</span>,
              experiment with{" "}
              <span className="font-display text-outline">AI &amp; LLMs</span>
              , and deploy on{" "}
              <span className="font-display text-outline">Azure</span>{" "}
              cloud.
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
}
