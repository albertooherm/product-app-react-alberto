import {
  DetailField,
  ProductImage,
  BackLink,
  ProductDetailSkeleton,
  ErrorAlert,
} from "../../components";
import STRINGS from "../../utils/strings";
import { useSelectedProduct } from "../../hooks";

export default function ProductDetailPage() {
  const { selectedProduct, loading, error } = useSelectedProduct();

  if (loading) return <ProductDetailSkeleton />;
  if (error) return <ErrorAlert message={error} />;
  if (!selectedProduct) return null;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        {selectedProduct.title}
      </h1>
      <ProductImage src={selectedProduct.image} alt={selectedProduct.title} />
      <DetailField
        label={STRINGS.FORM_LABELS.PRICE}
        value={`$${selectedProduct.price}`}
      />
      <DetailField
        label={STRINGS.FORM_LABELS.CATEGORY}
        value={selectedProduct.category}
      />
      <DetailField
        label={STRINGS.FORM_LABELS.DESCRIPTION}
        value={selectedProduct.description}
      />
      <BackLink />
    </div>
  );
}
