import React from 'react';
import { useCart } from '../hooks/useCart';
import { Trash2, Plus, Minus } from 'lucide-react';

const Cart: React.FC = () => {
  const { items, total, updateItem, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Shopping Cart</h1>
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Shopping Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center">
            <img
              src={item.product.image}
              alt={item.product.title}
              className="w-24 h-24 object-contain"
            />
            <div className="ml-4 flex-grow">
              <h2 className="text-lg font-semibold dark:text-white">{item.product.title}</h2>
              <p className="text-blue-600 dark:text-blue-400 font-bold">
                ₹{(item.product.price * item.quantity).toFixed(2)}
              </p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateItem(item.product.id, item.quantity - 1)}
                  className="p-1 rounded-l-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-1 bg-gray-100 dark:bg-gray-800 font-medium">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateItem(item.product.id, item.quantity + 1)}
                  className="p-1 rounded-r-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  <Plus size={16} />
                </button>
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="ml-4 text-red-500 hover:text-red-600"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            Total: ₹{total.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;