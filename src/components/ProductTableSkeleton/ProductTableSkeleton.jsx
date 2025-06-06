import STRINGS from '../../utils/strings';

export default function ProductTableSkeleton() {
  return (
    <div className="w-full border border-gray-200 rounded-md overflow-hidden">
      <div className="bg-gray-100 p-4">
        <div className="grid grid-cols-5 gap-4 font-semibold text-sm text-gray-500">
          <div>{STRINGS.TABLE_HEADERS.TITLE}</div>
          <div>{STRINGS.TABLE_HEADERS.PRICE}</div>
          <div>{STRINGS.TABLE_HEADERS.CATEGORY}</div>
          <div>{STRINGS.TABLE_HEADERS.IMAGE}</div>
          <div>{STRINGS.TABLE_HEADERS.ACTIONS}</div>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="grid grid-cols-5 gap-4 p-4 animate-pulse">
            <div className="h-4 bg-gray-200 rounded col-span-1" />
            <div className="h-4 bg-gray-200 rounded col-span-1" />
            <div className="h-4 bg-gray-200 rounded col-span-1" />
            <div className="h-10 w-10 bg-gray-200 rounded-full" />
            <div className="flex space-x-2">
              <div className="h-4 w-10 bg-gray-200 rounded" />
              <div className="h-4 w-10 bg-gray-200 rounded" />
              <div className="h-4 w-10 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
