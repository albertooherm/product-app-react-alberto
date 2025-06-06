import ProductRow from "../ProductRow/ProductRow";
import STRINGS from "../../utils/strings";

export default function ProductTable({ products, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
      <table className="w-full min-w-[600px] text-sm text-left text-gray-700 bg-white">
        <thead className="bg-gray-50 text-gray-500 uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3">{STRINGS.TABLE_HEADERS.TITLE}</th>
            <th className="px-4 py-3">{STRINGS.TABLE_HEADERS.PRICE}</th>
            <th className="px-4 py-3">{STRINGS.TABLE_HEADERS.CATEGORY}</th>
            <th className="px-4 py-3">{STRINGS.TABLE_HEADERS.IMAGE}</th>
            <th className="px-4 py-3">{STRINGS.TABLE_HEADERS.ACTIONS}</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-400">
                {STRINGS.APP.NO_PRODUCTS}
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
