import initialData from './initialData';

// Action types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Action creators
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: { id } });

// Reducer
const books = (state = initialData, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: state.length + 1,
        title: action.payload.title,
        author: action.payload.author,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default books;