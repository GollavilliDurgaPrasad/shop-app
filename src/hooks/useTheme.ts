import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { toggleTheme } from '../store/slices/themeSlice';
import { useEffect } from 'react';

export const useTheme = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state: RootState) => state.theme);

  // Apply theme class to the document
  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return {
    isDarkMode: mode === 'dark',
    toggle,
  };
};