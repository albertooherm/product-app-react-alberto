import STRINGS from '../../utils/strings';

export default function Paginator({ currentPage, totalPages, onPageChange }) {
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
      <p className="text-sm text-gray-600 text-center sm:text-left">
        {STRINGS.PAGINATION.PAGE_LABEL.replace('{current}', currentPage).replace('{total}', totalPages)}
      </p>

      <div className="flex gap-2 justify-center">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!canGoPrev}
          className="px-4 py-2 border rounded bg-white text-gray-800 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {STRINGS.PAGINATION.PREVIOUS}
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!canGoNext}
          className="px-4 py-2 border rounded bg-white text-gray-800 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {STRINGS.PAGINATION.NEXT}
        </button>
      </div>
    </div>
  );
}
