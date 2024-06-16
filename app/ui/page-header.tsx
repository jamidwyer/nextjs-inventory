import { cherryCreamSoda } from '@/app/ui/fonts/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlRice } from '@fortawesome/free-solid-svg-icons';

export default function PageHeader() {
  return (
    <div
      className={`${cherryCreamSoda.className} flex h-40 shrink-0 flex-row items-end bg-bloodorange p-2 text-jasmineRice`}
    >
      <FontAwesomeIcon icon={faBowlRice} className="h-20" />
      <h1 className={`${cherryCreamSoda.className} items-end antialiased`}>
        <strong>hord</strong>
      </h1>
    </div>
  );
}
