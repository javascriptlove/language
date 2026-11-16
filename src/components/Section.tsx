const TONES = {
  accent: "bg-(--accent) text-white",
  grammar: "bg-sky-600 text-white",
  sound: "bg-violet-600 text-white",
  culture: "bg-emerald-600 text-white",
  exercise: "bg-zinc-800 text-white",
  check: "bg-amber-500 text-zinc-900",
} as const;

export type Tone = keyof typeof TONES;

/** A textbook-style section: coloured tab label + white card. */
export function Section({
  label,
  title,
  tone = "accent",
  badge,
  actions,
  children,
  id,
}: {
  label: string;
  title?: React.ReactNode;
  tone?: Tone;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-end gap-3">
        <span className={`rounded-t-lg px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${TONES[tone]}`}>
          {label}
        </span>
        {badge}
      </div>
      <div className="paper-card rounded-b-2xl rounded-tr-2xl p-5 sm:p-7">
        {(title || actions) && (
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            {title && <h2 className="font-display text-xl font-bold leading-tight sm:text-2xl">{title}</h2>}
            {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PillButton({
  children,
  onClick,
  active,
  variant = "outline",
  disabled,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  variant?: "outline" | "solid" | "ghost";
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  const styles = {
    outline: `border border-zinc-300 bg-white text-zinc-800 hover:border-(--accent) hover:text-(--accent) ${
      active ? "border-(--accent)! bg-(--accent-soft) text-(--accent-ink)!" : ""
    }`,
    solid: "bg-(--accent) text-white hover:brightness-110 shadow-sm",
    ghost: "text-zinc-600 hover:bg-zinc-100",
  }[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${styles}`}
    >
      {children}
    </button>
  );
}
