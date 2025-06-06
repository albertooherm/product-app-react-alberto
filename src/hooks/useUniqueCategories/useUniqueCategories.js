import { useMemo } from 'react';
import { useProductStore } from '../../store/useProductStore';

/**
 * Devuelve una lista única de categorías basada en los productos actuales.
 * Memoriza el resultado para evitar recalculaciones innecesarias.
 */
export default function useUniqueCategories() {
  const { products } = useProductStore();

  const categories = useMemo(() => {
    const unique = new Set(products.map((p) => p.category));
    return Array.from(unique);
  }, [products]);

  return categories;
}
