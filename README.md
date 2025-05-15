# Product Card Implementation - Frontend Task

This project implements an interactive Product Card component in React with TypeScript, following the requirements of the take-home assignment.

## Features

- **API Integration**: Uses TanStack Query to fetch products from the Fake Store API
- **State Management**: Redux Toolkit for managing cart state and favorites
- **Persistence**: Favorites and theme preferences stored in localStorage
- **Light/Dark Mode**: Theme switching with Tailwind CSS
- **Responsive Design**: Works on both mobile and desktop

## Code Structure (MVC-like Architecture)

### Models
- `Product.ts`: TypeScript interfaces for product data and cart items

### Views (Components)
- `ProductCard.tsx`: The main product card component
- `ProductGrid.tsx`: Grid layout for displaying multiple product cards
- `Header.tsx`: App header with theme toggle and cart indicator

### Controllers (Hooks & Services)
- `useCart.ts`: Custom hook for cart operations
- `useFavorites.ts`: Custom hook for favorite management
- `useTheme.ts`: Custom hook for theme switching
- `productApi.ts`: API service using TanStack Query

## Technology Stack

- React 18 with TypeScript
- TanStack Query for data fetching
- Redux Toolkit for state management
- Tailwind CSS for styling
- Lucide React for icons

## Development Challenges

### API Integration
- Implemented proper loading and error states
- Used stale time for optimized re-fetching

### State Management
- Designed a comprehensive Redux store structure
- Separated concerns into multiple slices (cart, favorites, theme)

### Theme Implementation
- Used Tailwind's dark mode with class strategy
- Ensured smooth transitions between themes

## Trade-offs and Decisions

### Redux vs. Context API
I chose Redux Toolkit for state management because:
- It provides a more structured approach for complex state
- DevTools integration makes debugging easier
- The redux-persist pattern works well for the localStorage requirements

### Performance Considerations
- Used proper memoization and minimized re-renders
- Implemented stale time in TanStack Query to reduce unnecessary API calls

## Running the Project

1. Install dependencies:
```
npm install
```

2. Start the development server:
```
npm run dev
```

3. Build for production:
```
npm run build
```