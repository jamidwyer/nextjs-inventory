import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SortProps {
  title: string;
  field: string;
}

export default function Sort({ title, field }: SortProps) {
  const searchParams = useSearchParams();
  const sort = searchParams.get('sort');
  const sortDirection = searchParams.get('sort-direction');
  const isSorted = sort === field;

  // TODO: retain other params
  const href = `?sort=${field}&sort-direction=${isSorted && sortDirection === 'ASC' ? 'DESC' : 'ASC'}`;
  return (
    <Link className="underline" href={href}>
      {title}
      {isSorted && (
        <FontAwesomeIcon
          icon={sortDirection === 'ASC' ? faArrowDown : faArrowUp}
        ></FontAwesomeIcon>
      )}
    </Link>
  );
}
