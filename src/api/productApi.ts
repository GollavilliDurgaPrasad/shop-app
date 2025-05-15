import { useQuery } from '@tanstack/react-query';
import { Product } from '../models/Product';

// Base URL for the API
const API_URL = 'https://fakestoreapi.com';

// Function to fetch all products
const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

// Function to fetch a single product by ID
const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }
  return response.json();
};

// Custom hook for fetching all products
export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Custom hook for fetching a single product
export const useProduct = (id: number) => {
  return useQuery<Product, Error>({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
    enabled: !!id, // Only run if id is provided
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};