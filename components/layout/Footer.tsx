export function Footer() {
  return (
    <footer className="border-t-2 border-ink/10 bg-cream px-6 py-10 text-center text-sm text-ink-muted dark:border-ink/20">
      <p className="font-display italic">
        © {new Date().getFullYear()} Nupur Patel · made with curiosity at{" "}
        <a
          href="https://nupurpatel.me"
          className="text-coral underline-offset-2 hover:underline"
        >
          nupurpatel.me
        </a>
      </p>
    </footer>
  );
}
