'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Inventory', href: '/', icon: faList },
  {
    name: 'Recipes',
    href: '/recipes',
    icon: faUtensils,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className={clsx("flex flex-row h-[48px] grow items-center justify-center gap-2 text-blackBean bg-coconut p-3 font-medium hover:bg-peachPuff hover:text-licorice", {'bg-peachPuff text-licorice': pathname === link.href,})}
          >
            <FontAwesomeIcon icon={link.icon} className='h-6' />
            <h2 className="hidden md:block">{link.name}</h2>
          </a>
        );
      })}
    </>
  );
}
