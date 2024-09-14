import { cherryCreamSoda } from '@/public/fonts/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlRice } from '@fortawesome/free-solid-svg-icons';
import UserLinks from '@/app/components/user-links';

export default function PageHeader() {
  return (
    <div
      className={`flex h-40 shrink-0 flex-row items-end justify-between bg-bloodorange p-2 text-jasmineRice`}
    >
      <div className={`flex flex-row items-end`}>
        <FontAwesomeIcon icon={faBowlRice} className="h-20" />
        <h1 className={`${cherryCreamSoda.className} items-end antialiased`}>
          <strong>hord</strong>
        </h1>
      </div>
      <UserLinks />
    </div>
  );
}
