import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'line-clamp-2 h-10 items-center rounded-sm bg-bloodorange px-4 text-sm font-medium text-coconut transition-colors hover:bg-smashedPumpkin focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bloodorange active:bg-smashedPumpkin aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}
