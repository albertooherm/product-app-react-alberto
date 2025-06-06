import ActionButton from '../ActionButton/ActionButton';
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import STRINGS from '../../utils/strings';

export default function ProductRow({ product, onDelete }) {
  return (
    <tr className="hover:bg-gray-50 border-t border-gray-100">
      <td className="px-4 py-3 font-medium text-gray-900">{product.title}</td>
      <td className="px-4 py-3">${product.price}</td>
      <td className="px-4 py-3">{product.category}</td>
      <td className="px-4 py-3">
        <img
          src={product.image}
          alt={product.title}
          className="w-10 h-10 object-contain rounded"
        />
      </td>
      <td className="px-4 py-3 flex gap-2 flex-wrap">
        <ActionButton
          to={`/products/${product.id}`}
          icon={EyeIcon}
          label={STRINGS.TABLE_ACTIONS.VIEW}
        />
        <ActionButton
          to={`/products/${product.id}/edit`}
          icon={PencilSquareIcon}
          label={STRINGS.TABLE_ACTIONS.EDIT}
        />
        <ActionButton
          icon={TrashIcon}
          label={STRINGS.TABLE_ACTIONS.DELETE}
          onClick={() => onDelete(product.id)}
          className="hover:text-red-600"
        />
      </td>
    </tr>
  );
}
