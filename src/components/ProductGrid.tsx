import React from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../api/productApi';
import { RefreshCw, AlertCircle } from 'lucide-react';

const ProductGrid: React.FC = () => {
  const { data: products, isLoading, isError, refetch } = useProducts();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <RefreshCw size={40} className="text-blue-500 animate-spin mb-4" />
          <p className="text-gray-700 dark:text-gray-300 text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md p-6 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <div className="flex items-center mb-4">
            <AlertCircle size={24} className="text-red-500 mr-2" />
            <h2 className="text-xl font-semibold text-red-700 dark:text-red-400">Error Loading Products</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            There was a problem fetching the products. Please try again later.
          </p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;