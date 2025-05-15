import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '../../models/Product';

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.product.id === product.id);

      if (existingItemIndex >= 0) {
        // If item already in cart, update quantity
        state.items[existingItemIndex].quantity += quantity;
      } else {
        // Otherwise add new item
        state.items.push({ product, quantity });
      }

      // Update total
      state.total = state.items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
    },
    updateQuantity: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const itemIndex = state.items.findIndex(item => item.product.id === productId);

      if (itemIndex >= 0) {
        // Ensure quantity is at least 1
        state.items[itemIndex].quantity = Math.max(1, quantity);
      }

      // Update total
      state.total = state.items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.product.id !== productId);

      // Update total
      state.total = state.items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;