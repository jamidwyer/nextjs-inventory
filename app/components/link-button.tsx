import Link from "next/link";
import { ReactNode } from "react";
import { ButtonVariant, buttonBaseClass, linkButtonVariantClasses } from "./button";

interface LinkButtonProps {
  href: string
  children: ReactNode
  className: string
  variant?: ButtonVariant
}

export default function LinkButton({ href, children, className, variant = "normal" }: LinkButtonProps) {
  return <Link
    href={href}
    className={`${buttonBaseClass} ${linkButtonVariantClasses[variant]} ${className}`}
  >
    {children}
  </Link>
};
