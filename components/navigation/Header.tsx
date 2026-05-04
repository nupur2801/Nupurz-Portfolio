"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useChatbot } from "@/components/contexts/ChatbotContext";

const nav = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#certificates", label: "certificates" },
  { href: "#contact", label: "contact" },
];

export function Header() {
  const { toggleChatbot } = useChatbot();
  const { setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 h-20"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid h-full grid-cols-1 md:grid-cols-[2fr_3fr]">
        {/* left half — cream side, logo */}
        <div className="flex h-full items-center pl-8 md:pl-10 lg:pl-14">
          <a
            href="/"
            onClick={handleLogoClick}
            className="font-script text-4xl leading-none text-mint-deep transition hover:opacity-80 md:text-5xl"
            aria-label="nupur — go to homepage"
          >
            nupur
          </a>
        </div>

        {/* right half — mint side, nav */}
        <div className="absolute right-0 top-0 flex h-full items-center justify-end gap-8 px-6 md:relative md:px-12 lg:px-20">
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-zigzag text-base font-semibold text-ink transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* AI Chatbot Icon */}
          <button
            type="button"
            onClick={toggleChatbot}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-coral-soft bg-coral-soft hover:bg-coral transition-colors group"
            aria-label="Open AI chatbot"
          >
            <svg className="w-5 h-5 text-coral group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              <circle cx="10" cy="8" r="1" fill="white"/>
              <circle cx="14" cy="8" r="1" fill="white"/>
              <path d="M9 11h6v1H9z" fill="white"/>
              <circle cx="12" cy="18" r="1" fill="white"/>
              <circle cx="8" cy="16" r="0.5" fill="white"/>
              <circle cx="16" cy="16" r="0.5" fill="white"/>
              <circle cx="10" cy="20" r="0.5" fill="white"/>
              <circle cx="14" cy="20" r="0.5" fill="white"/>
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-mint-deep rounded-full animate-pulse"></span>
          </button>
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="relative flex h-9 w-16 items-center rounded-full border-2 border-ink bg-cream transition"
              aria-label="Toggle color theme"
            >
              <motion.span
                layout
                className="ml-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-mustard text-xs text-ink shadow-sm"
                animate={{ x: resolvedTheme === "dark" ? 26 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {resolvedTheme === "dark" ? "☾" : "☀"}
              </motion.span>
            </button>
          )}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink/20 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1">
              <span className={`h-0.5 bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <motion.nav
          className="border-t border-ink/10 bg-cream px-6 py-4 md:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
        >
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
