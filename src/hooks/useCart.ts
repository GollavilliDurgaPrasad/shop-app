import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addToCart, updateQuantity, removeFromCart } from '../store/slices/cartSlice';
import { Product } from '../models/Product';

export const useCart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state: RootState) => state.cart);

  const addItem = (product: Product, quantity: number = 1) => {
    dispatch(addToCart({ product, quantity }));
  };

  const updateItem = (productId: number, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const removeItem = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  return {
    items,
    total,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    addItem,
    updateItem,
    removeItem,
  };
};