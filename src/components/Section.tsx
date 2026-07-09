interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "surface";
}

export default function Section({
  children,
  className = "",
  id,
  background = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${
        background === "surface" ? "bg-surface" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
