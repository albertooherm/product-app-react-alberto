import { Link } from 'react-router-dom';

export default function ActionButton({
  label,
  icon: Icon,
  onClick,
  to,
  type = 'button',
  className = '',
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors w-full sm:w-auto px-3 py-2';

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span className="truncate">{label}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${className}`}>
      {content}
    </button>
  );
}
