import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import STRINGS from '../../utils/strings';

export default function ErrorAlert({ message }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="flex items-center justify-between bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded mb-4 text-sm">
      <div className="flex-1">
        <strong className="font-semibold mr-1">{STRINGS.ERRORS.ALERT_TITLE}</strong>
        <span>{message}</span>
      </div>
      <button onClick={() => setVisible(false)} className="ml-4">
        <XMarkIcon className="w-5 h-5 text-red-500 hover:text-red-700" />
      </button>
    </div>
  );
}
