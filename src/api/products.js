import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const RESOURCE = '/products';

const api = axios.create({
  baseURL: BASE_URL,
});

/**
 * Obtiene todos los productos
 */
export const getProducts = () => api.get(RESOURCE);

/**
 * Obtiene un producto por ID
 * @param {string|number} id
 */
export const getProductById = (id) => api.get(`${RESOURCE}/${id}`);

/**
 * Crea un nuevo producto
 * @param {object} product
 */
export const createProduct = (product) => api.post(RESOURCE, product);

/**
 * Actualiza un producto existente
 * @param {string|number} id
 * @param {object} product
 */
export const updateProduct = (id, product) => api.put(`${RESOURCE}/${id}`, product);

/**
 * Elimina un producto
 * @param {string|number} id
 */
export const deleteProduct = (id) => api.delete(`${RESOURCE}/${id}`);
