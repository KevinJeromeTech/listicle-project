type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[var(--primary-light)]">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-black leading-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-7 text-zinc-400">{description}</p>
      )}
    </div>
  );
}