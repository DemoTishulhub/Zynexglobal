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
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {label && (
        <p className={`text-sm font-medium uppercase tracking-widest ${light ? "text-accent" : "text-accent"}`}>
          {label}
        </p>
      )}
      <h2 className={`mt-2 text-2xl font-semibold leading-tight sm:text-3xl ${light ? "text-white" : "text-brand"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base leading-relaxed ${light ? "text-white/80" : "text-textMuted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
