import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { toggleFavorite } from '../store/slices/favoritesSlice';

export const useFavorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.ids);

  const toggleProductFavorite = (productId: number) => {
    dispatch(toggleFavorite(productId));
  };

  const isFavorite = (productId: number) => {
    return favorites.includes(productId);
  };

  return {
    favorites,
    toggleProductFavorite,
    isFavorite,
  };
};