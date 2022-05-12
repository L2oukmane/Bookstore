import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const RegisterBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const newBook = {
    title,
    author,
  };

  const registerBook = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <h2>Register Book</h2>
      <form className="register-book-form" onSubmit={registerBook}>
        <input type="text" name="title" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" name="author" id="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterBook;
