import React from 'react';
import BookList from '../components/BookList';
import InputBook from '../components/InputBook';

function Books() {
  const books = [
    {
      id: 1,
      title: 'The Da Vinci Code ',
      author: 'Dan Brown',
    },
    {
      id: 2,
      title: 'A Better India: A Better World',
      author: 'Narayana Murthy',
    },
    {
      id: 3,
      title: 'A Revenue Stamp',
      author: 'Amrita Pritam',
    },
  ];

  return (
    <div>
      <BookList books={books} />
      <InputBook />
    </div>
  );
}

export default Books;
