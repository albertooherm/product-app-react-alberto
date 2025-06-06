import { describe, test, expect, vi, beforeEach } from 'vitest';
import { act } from '@testing-library/react';
import { useProductStore } from './useProductStore';
import * as api from '../api/products';

const mockProduct = { id: 1, title: 'Test Product', category: 'Test', price: 10 };

vi.mock('../api/products', () => ({
  getProducts: vi.fn(),
  getProductById: vi.fn(),
  createProduct: vi.fn(),
  updateProduct: vi.fn(),
  deleteProduct: vi.fn(),
}));

beforeEach(() => {
  useProductStore.setState({
    products: [],
    selectedProduct: null,
    loading: false,
    error: null,
    searchTerm: '',
    selectedCategory: '',
    currentPage: 1,
  });
});

describe('useProductStore', () => {
  test('fetches and sets products correctly', async () => {
    api.getProducts.mockResolvedValueOnce({ data: [mockProduct] });

    await act(async () => {
      await useProductStore.getState().fetchProducts();
    });

    expect(useProductStore.getState().products).toEqual([mockProduct]);
    expect(useProductStore.getState().loading).toBe(false);
    expect(useProductStore.getState().error).toBe(null);
  });

  test('adds a product', async () => {
    api.createProduct.mockResolvedValueOnce({ data: mockProduct });

    await act(async () => {
      await useProductStore.getState().addProduct(mockProduct);
    });

    expect(useProductStore.getState().products).toContainEqual(mockProduct);
  });

  test('updates a product', async () => {
    useProductStore.setState({ products: [mockProduct] });
  
    const updated = { ...mockProduct, title: 'Updated Product' };
    api.updateProduct.mockResolvedValueOnce({});
  
    await act(async () => {
      await useProductStore.getState().updateProductById(1, updated);
    });
  
    expect(useProductStore.getState().products[0].title).toBe('Updated Product');
  });  

  test('deletes a product', async () => {
    useProductStore.setState({ products: [mockProduct] });
    api.deleteProduct.mockResolvedValueOnce({});

    await act(async () => {
      await useProductStore.getState().deleteProductById(1);
    });

    expect(useProductStore.getState().products).toHaveLength(0);
  });

  test('fetches single product by ID', async () => {
    api.getProductById.mockResolvedValueOnce({ data: mockProduct });

    await act(async () => {
      await useProductStore.getState().fetchProductById(1);
    });

    expect(useProductStore.getState().selectedProduct).toEqual(mockProduct);
  });

  test('clears selected product', () => {
    useProductStore.setState({ selectedProduct: mockProduct });

    useProductStore.getState().clearSelectedProduct();

    expect(useProductStore.getState().selectedProduct).toBe(null);
  });
});
