import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import STRINGS from '../../utils/strings';

export default function BackLink({ to = '/', children = STRINGS.COMMON.BACK }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors"
    >
      <ArrowLeftIcon className="w-4 h-4" />
      {children}
    </Link>
  );
}
