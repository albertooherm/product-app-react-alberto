export default function ProductDetailSkeleton() {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md animate-pulse space-y-6">
      <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto" />
      <div className="flex justify-center">
        <div className="w-48 h-48 bg-gray-200 rounded" />
      </div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-1/4" />
        <div className="h-5 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-1/4" />
        <div className="h-5 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-1/4" />
        <div className="h-20 bg-gray-300 rounded w-full" />
      </div>
      <div className="h-4 w-20 bg-gray-200 rounded" />
    </div>
  );
}
