import { combineReducers } from 'redux';
import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from './actions';

const initialState = {
  books: [],
  isAddBookPopupOpen: false,
  isEditBookPopupOpen: false,
  selectedBook: null,
};

const bookReducer = (state = initialState.books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { ...action.payload, id: state.length + 1 }];
    case DELETE_BOOK:
      return state.filter(book => book.id !== action.payload);
    case EDIT_BOOK:
      return state.map(book => {
        if (book.id === action.payload.id) {
          return { ...book, ...action.payload.updatedBook };
        }
        return book;
      });
    default:
      return state;
  }
};

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, isAddBookPopupOpen: false };
    case DELETE_BOOK:
      return state;
    case EDIT_BOOK:
      return { ...state, isEditBookPopupOpen: false, selectedBook: null };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  books: bookReducer,
  popups: popupReducer,
});

export default rootReducer;