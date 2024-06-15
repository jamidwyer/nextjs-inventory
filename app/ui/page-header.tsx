import { cherryCreamSoda } from '@/app/ui/fonts/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlRice } from '@fortawesome/free-solid-svg-icons'

export default function PageHeader() {
  return (
    <div
      className={`${cherryCreamSoda.className} flex flex-row h-40 shrink-0 items-end bg-bloodorange text-jasmineRice p-2`}
    >
      <FontAwesomeIcon icon={faBowlRice} className='h-20' />
      <h1 className={`${cherryCreamSoda.className} antialiased items-end`}>
        <strong>hord</strong>
      </h1>
    </div>
  );
}
