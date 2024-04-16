// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Add some initial books
const initialBooks = [
  { id: 1, name: 'Noble Beginnings', price: 32.50, category: 'Fiction', description: 'In March of 2002, while the eyes of the world focused on Afghanistan,' },
  { id: 2, name: 'A Deadly Distance', price: 67, category: 'Non-fiction', description: 'Washington, D.C. Midday. A man waits at a bus stop, ' },
  // Add more books if needed
];

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    books: initialBooks,
  },
});

export default store;