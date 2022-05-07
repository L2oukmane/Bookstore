import React from 'react';

const InputBook = () => (
  <form className="form-container">
    <input type="text" placeholder="Add Book" className="input-text" />
    <input type="text" placeholder="Add Author" className="input-text" />
    <button type="submit" className="input-submit">Submit</button>
  </form>
);
export default InputBook;
