import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-9 py-[18px] text-[17px] font-bold whitespace-nowrap transition-colors";
  const variants = {
    primary:
      "bg-gradient-to-br from-accent to-accent-light text-bg hover:brightness-105",
    secondary:
      "border border-white/16 text-fg font-semibold hover:border-white/32",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
