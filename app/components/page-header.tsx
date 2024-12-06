import { cherryCreamSoda } from '@/public/fonts/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlRice } from '@fortawesome/free-solid-svg-icons';
import UserLinks from '@/app/components/user-links';
import Link from 'next/link';

export default function PageHeader() {
  return (
    <div
      className={`page-header flex flex-row items-end justify-between bg-bloodorange p-2 text-jasmineRice`}
    >
      <div className={`branding flex flex-row items-end`}>
        <Link href="/">
          <FontAwesomeIcon icon={faBowlRice} className="logo h-20" />
          <h1
            className={`${cherryCreamSoda.className} site-name items-end antialiased`}
          >
            <strong>hord</strong>
          </h1>
        </Link>
      </div>
      <UserLinks />
    </div>
  );
}
