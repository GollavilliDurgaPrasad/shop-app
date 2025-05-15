import React from 'react';
import { ShoppingCart, Sun, Moon, Heart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useTheme } from '../hooks/useTheme';
import { useFavorites } from '../hooks/useFavorites';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { itemCount } = useCart();
  const { isDarkMode, toggle } = useTheme();
  const { favorites } = useFavorites();

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          ShopApp
        </Link>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>

          <Link to="/favorites" className="relative p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors">
            <Heart size={24} className="text-gray-700 dark:text-gray-300" />
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </Link>
          
          <Link to="/cart" className="relative p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors">
            <ShoppingCart size={24} className="text-gray-700 dark:text-gray-300" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;