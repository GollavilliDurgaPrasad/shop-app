import React, { useState } from 'react';
import { Product } from '../models/Product';
import { Heart, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useFavorites } from '../hooks/useFavorites';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { isFavorite, toggleProductFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

  const handleIncrement = () => {
    setQuantity(q => q + 1);
  };

  const handleDecrement = () => {
    setQuantity(q => Math.max(1, q - 1));
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
  };

  const handleToggleFavorite = () => {
    toggleProductFavorite(product.id);
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain p-4"
        />
        <button 
          onClick={handleToggleFavorite}
          className="absolute top-2 right-2 p-1.5 bg-white dark:bg-gray-700 rounded-full shadow-md transition-transform hover:scale-110"
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            size={20} 
            className={`transition-colors ${favorite ? 'fill-red-500 text-red-500' : 'text-gray-400 dark:text-gray-300'}`} 
          />
        </button>
      </div>
      
      <div className="px-4 py-3">
        <div className="font-bold text-lg mb-1 truncate dark:text-white">{product.title}</div>
        <div className="text-gray-700 dark:text-gray-300 mb-3 text-sm line-clamp-2">
          {product.description}
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            <span>&#8377;</span>{product.price.toFixed(2)}
          </span>
          
          <div className="flex items-center">
            <button 
              onClick={handleDecrement}
              className="p-1 rounded-l-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={16} className="text-gray-700 dark:text-gray-300" />
            </button>
            
            <span className="px-4 py-1 bg-gray-100 dark:bg-gray-800 font-medium text-gray-800 dark:text-gray-200">
              {quantity}
            </span>
            
            <button 
              onClick={handleIncrement}
              className="p-1 rounded-r-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={16} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center justify-center"
        >
          <ShoppingCart size={18} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;