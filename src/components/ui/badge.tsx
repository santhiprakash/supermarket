interface BadgeProps {
  children: React.ReactNode;
  variant?: "sale" | "new" | "default";
}

const variants = {
  sale: "bg-terracotta text-cream",
  new: "bg-sage text-forest",
  default: "bg-cream-dark text-forest",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
