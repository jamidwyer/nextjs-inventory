import Link from 'next/link';
import { ReactNode } from 'react';
import {
  ButtonVariant,
  buttonBaseClass,
  linkButtonVariantClasses,
} from './button';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  loading?: boolean;
  variant?: ButtonVariant;
}

export default function LinkButton({
  href,
  children,
  className,
  loading,
  variant = 'normal',
}: LinkButtonProps) {
  return (
    <Link
      prefetch
      href={href}
      className={`${buttonBaseClass} ${linkButtonVariantClasses[variant]} ${className}`}
    >
      {loading ? 'Loading...' : children}
    </Link>
  );
}
