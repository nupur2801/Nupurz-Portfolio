import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces, Pacifico } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ChatbotProvider } from "@/components/contexts/ChatbotContext";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = "https://nupurpatel.me";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf6ec" },
    { media: "(prefers-color-scheme: dark)", color: "#12132b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nupur Patel — Full Stack, Cloud & AI Engineer",
    template: "%s · Nupur Patel",
  },
  description:
    "Portfolio of Nupur Patel: full stack development, cloud architecture, AI systems, and a passion for cybersecurity.",
  keywords: [
    "Nupur Patel",
    "full stack developer",
    "cloud engineer",
    "AI engineer",
    "React",
    "Next.js",
    "AWS",
    "Azure",
    "portfolio",
  ],
  authors: [{ name: "Nupur Patel", url: siteUrl }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nupur Patel",
    title: "Nupur Patel — Full Stack, Cloud & AI Engineer",
    description:
      "Scalable full-stack apps, thoughtful cloud design, and intelligent systems with security in mind.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nupur Patel — Full Stack, Cloud & AI Engineer",
    description:
      "Scalable full-stack apps, thoughtful cloud design, and intelligent systems with security in mind.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nupur Patel",
  url: siteUrl,
  jobTitle: "Full Stack Developer & Cloud / AI Engineer",
  sameAs: ["https://github.com", "https://linkedin.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} ${pacifico.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <ChatbotProvider>{children}</ChatbotProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
