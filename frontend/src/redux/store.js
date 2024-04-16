// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Add some initial books
const initialBooks = [
  { id: 1, name: 'Book 1', price: 10, category: 'Fiction', description: 'Description for Book 1' },
  { id: 2, name: 'Book 2', price: 15, category: 'Non-fiction', description: 'Description for Book 2' },
  // Add more books if needed
];

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    books: initialBooks,
  },
});

export default store;