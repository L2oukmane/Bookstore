import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ books }) => (
  <ul>
    {
          books.map((book) => (
            <BookItem
              key={book.id}
              title={book.title}
              author={book.author}
            />
          ))
}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
};

export default BookList;
