import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Inventory', href: '/', icon: faList },
  // {
  //   name: 'Recipes',
  //   href: '/recipes',
  //   icon: faUtensils,
  // },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row">
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow flex-row items-center justify-center gap-2 bg-coconut p-3 font-medium text-blackBean hover:bg-stainless hover:text-licorice',
              { 'bg-stainless text-licorice': pathname === link.href },
            )}
          >
            <FontAwesomeIcon icon={link.icon} className="h-6" />
            <h2 className="hidden md:block">{link.name}</h2>
          </a>
        );
      })}
    </nav>
  );
}
