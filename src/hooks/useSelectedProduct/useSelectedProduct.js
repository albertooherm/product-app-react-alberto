import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductStore } from '../../store/useProductStore';

/**
 * Hook para manejar la carga y limpieza de un producto seleccionado por ID.
 * Se encarga de:
 * - Cargar el producto al montar el componente
 * - Limpiar el estado al desmontar
 */
export default function useSelectedProduct() {
  const { id } = useParams();

  const {
    selectedProduct,
    loading,
    error,
    fetchProductById,
    clearSelectedProduct,
  } = useProductStore();

  useEffect(() => {
    if (id) fetchProductById(id);
    return () => clearSelectedProduct();
  }, [id]);

  return {
    selectedProduct,
    loading,
    error,
  };
}
