import { create } from 'zustand';
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} from '../api/products';

/**
 * Zustand store para la gestión del estado global de productos.
 * Contiene solo el estado compartido y funciones que lo modifican.
 */
export const useProductStore = create((set, get) => ({
  // ======================
  // Estado global
  // ======================

  /** Lista completa de productos cargados desde la API */
  products: [],

  /** Producto seleccionado para edición o visualización */
  selectedProduct: null,

  /** Indicador global de carga */
  loading: false,

  /** Mensaje de error si ocurre un fallo en una operación */
  error: null,

  /** Término de búsqueda actual (para filtrar por título) */
  searchTerm: '',

  /** Categoría seleccionada para filtrar productos */
  selectedCategory: '',

  /** Página actual en la paginación */
  currentPage: 1,

  /** Cantidad de productos por página */
  pageSize: 5,

  // ======================
  // Setters
  // ======================

  setSearchTerm: (term) => set({ searchTerm: term, currentPage: 1 }),
  setSelectedCategory: (category) => set({ selectedCategory: category, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),

  // ======================
  // Acciones API
  // ======================

  /** Carga todos los productos desde la API */
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await getProducts();
      set({ products: res.data, loading: false });
    } catch (error) {
      console.error(error);
      set({ error: 'Error al cargar productos', loading: false });
    }
  },

  /** Carga un producto por ID y lo guarda como seleccionado */
  fetchProductById: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await getProductById(id);
      set({ selectedProduct: res.data, loading: false });
    } catch (error) {
      console.error(error);
      set({ error: 'Error al cargar producto', loading: false });
    }
  },

  /** Limpia el producto seleccionado */
  clearSelectedProduct: () => set({ selectedProduct: null }),

  /** Crea un nuevo producto y lo añade al estado */
  addProduct: async (product) => {
    const res = await createProduct(product);
    set((state) => ({ products: [...state.products, res.data] }));
  },

  /** Actualiza un producto por ID y sincroniza el estado local */
  updateProductById: async (id, data) => {
    try {
      await updateProduct(id, data);
      set((state) => ({
        products: state.products.map((p) =>
          p.id.toString() === id.toString() ? { ...p, ...data } : p
        ),
      }));
    } catch (error) {
      console.error('Error al actualizar producto:', error);
      throw error;
    }
  },

  /** Elimina un producto por ID */
  deleteProductById: async (id) => {
    await deleteProduct(id);
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    }));
  },
}));