import { useProductStore } from "../../store/useProductStore";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import STRINGS from "../../utils/strings";

export default function CategoryFilter() {
  const products = useProductStore((s) => s.products);
  const selectedCategory = useProductStore((s) => s.selectedCategory);
  const setSelectedCategory = useProductStore((s) => s.setSelectedCategory);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="relative w-full sm:max-w-xs">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full appearance-none border border-gray-300 bg-white text-gray-700 text-sm rounded-md px-4 py-2 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      >
        <option value="">{STRINGS.FILTERS.ALL_CATEGORIES}</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
        <ChevronDownIcon className="w-5 h-5" />
      </div>
    </div>
  );
}
