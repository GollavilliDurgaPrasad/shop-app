import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  ids: number[];
}

// Get initial favorites from localStorage
const getInitialFavorites = (): number[] => {
  if (typeof window !== 'undefined') {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  }
  return [];
};

const initialState: FavoritesState = {
  ids: getInitialFavorites(),
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const index = state.ids.indexOf(productId);
      
      if (index >= 0) {
        // Remove from favorites
        state.ids.splice(index, 1);
      } else {
        // Add to favorites
        state.ids.push(productId);
      }
      
      // Save to localStorage
      localStorage.setItem('favorites', JSON.stringify(state.ids));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;