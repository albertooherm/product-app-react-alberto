import { useState } from 'react';
import { useProductStore } from '../../store/useProductStore';
import toast from 'react-hot-toast';
import STRINGS from '../../utils/strings';

/**
 * Hook que centraliza la lógica del modal de confirmación para eliminar productos.
 */
export default function useDeleteProductModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const { deleteProductById } = useProductStore();

  const openModal = (id) => {
    setProductToDelete(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setProductToDelete(null);
  };

  const confirmDelete = async () => {
    await deleteProductById(productToDelete);
    toast.error(STRINGS.APP.DELETE_SUCCESS);
    closeModal();
  };

  return {
    modalOpen,
    openModal,
    closeModal,
    confirmDelete,
  };
}
