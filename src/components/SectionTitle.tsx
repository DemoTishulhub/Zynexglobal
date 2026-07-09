interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionTitle({
  label,
  title,
  description,
  light = false,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {label && (
        <span className={`mb-2 inline-block text-sm font-bold uppercase tracking-widest ${light ? "text-accent-light" : "text-accent2"}`}>
          {label}
        </span>
      )}
      <h2 className={`text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${light ? "text-white" : "text-brand"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/80" : "text-textMuted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
