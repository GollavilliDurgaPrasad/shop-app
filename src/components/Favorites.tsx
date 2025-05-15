import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { useProducts } from '../api/productApi';
import ProductCard from './ProductCard';
import { RefreshCw, AlertCircle } from 'lucide-react';

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <RefreshCw size={40} className="text-blue-500 animate-spin mb-4" />
          <p className="text-gray-700 dark:text-gray-300 text-lg">Loading favorites...</p>
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
            <h2 className="text-xl font-semibold text-red-700 dark:text-red-400">Error Loading Favorites</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            There was a problem loading your favorite products. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  const favoriteProducts = products?.filter(product => favorites.includes(product.id)) || [];

  if (favoriteProducts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Favorites</h1>
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">You haven't added any products to your favorites yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;