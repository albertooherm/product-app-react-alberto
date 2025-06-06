import { useMemo } from 'react';
import { useProductStore } from '../../store/useProductStore';

/**
 * Hook que encapsula la lógica derivada del estado del store:
 * - Filtro por búsqueda y categoría
 * - Paginación
 * - Total de páginas
 */
export default function useProductFilters() {
  const {
    products,
    searchTerm,
    selectedCategory,
    currentPage,
    pageSize,
  } = useProductStore();

  const filtered = useMemo(() => {
    return products.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || p.category === selectedCategory)
    );
  }, [products, searchTerm, selectedCategory]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage, pageSize]);

  const totalPages = useMemo(() => {
    return Math.ceil(filtered.length / pageSize);
  }, [filtered, pageSize]);

  return {
    filtered,
    paginated,
    totalPages,
  };
} 