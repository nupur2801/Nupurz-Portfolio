"use client";

type Props = {
  id: string;
  label: string;
  /** Tailwind bg class, e.g. "bg-mustard-soft" */
  bg?: string;
};

export function Placeholder({ id, label, bg = "bg-cream" }: Props) {
  return (
    <section
      id={id}
      className={`flex min-h-[60vh] scroll-mt-24 items-center justify-center px-6 py-24 ${bg}`}
    >
      <div className="text-center">
        <p className="font-script text-4xl text-mint-deep md:text-5xl">{label}</p>
        <p className="mt-4 font-display text-ink-muted">coming soon…</p>
      </div>
    </section>
  );
}
