import { combineReducers, createStore, applyMiddleware } from 'react-redux';
import books from './books/books';
import categories from './categories/categories';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const root = combineReducers({ books, categories });
const store = createStore( root, applyMiddleware(logger, thunk), );

export default store;
