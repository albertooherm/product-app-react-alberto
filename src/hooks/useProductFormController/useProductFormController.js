import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useProductStore } from '../../store/useProductStore';
import STRINGS from '../../utils/strings';

/**
 * Hook que encapsula la lógica del formulario de productos:
 * - Carga de datos si es edición
 * - Envío del formulario
 * - Reseteo del estado
 * - Manejo de errores y navegación
 */
export default function useProductFormController() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const {
    selectedProduct,
    loading,
    error,
    fetchProductById,
    clearSelectedProduct,
    addProduct,
    updateProductById,
  } = useProductStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (isEdit) {
        await updateProductById(id, data);
        toast.success(STRINGS.APP.UPDATE_SUCCESS);
      } else {
        await addProduct(data);
        toast.success(STRINGS.APP.CREATE_SUCCESS);
      }
      navigate('/');
    } catch {
      toast.error(STRINGS.APP.SAVE_ERROR);
    }
  };

  useEffect(() => {
    if (isEdit) {
      fetchProductById(id);
    }
    return () => clearSelectedProduct();
  }, [id]);

  useEffect(() => {
    if (isEdit && selectedProduct && selectedProduct.title) {
      reset(selectedProduct);
    }
  }, [selectedProduct, reset]);

  return {
    isEdit,
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    loading,
    error,
  };
}
