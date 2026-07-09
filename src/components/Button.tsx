import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-sm hover:shadow-md",
  secondary:
    "bg-brand text-white hover:bg-brand-light shadow-sm hover:shadow-md",
  ghost:
    "border border-border text-text hover:bg-surface",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-semibold transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
