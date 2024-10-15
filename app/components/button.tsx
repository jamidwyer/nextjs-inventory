import clsx from 'clsx';

export type ButtonVariant = 'normal' | 'gray' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export const buttonBaseClass =
  'flex flex-row h-10 items-center justify-center rounded-sm whitespace-nowrap px-4 text-sm font-medium tracking-normal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bloodorange line-clamp-2 ';

export const linkButtonVariantClasses = {
  normal:
    'text-coconut bg-bloodorange active:bg-smashedPumpkin aria-disabled:cursor-not-allowed aria-disabled:opacity-50 hover:bg-smashedPumpkin',
  gray: 'text-blackBean bg-jasmineRice hover:bg-stainless hover:text-licorice',
  icon: 'text-bloodorange border p-2 hover:bg-stainless',
};

export function Button({
  children,
  className,
  variant = 'normal',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        buttonBaseClass,
        linkButtonVariantClasses[variant],
        className,
      )}
    >
      {children}
    </button>
  );
}
