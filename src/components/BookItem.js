import React from 'react';
import PropTypes from 'prop-types';
import styles from '../modules/BookItem.module.css';

const BookItem = ({ title, author }) => (
  <li className={styles.item}>
    <div>
      { title }
      -
      { author }
      <button type="button">Delete</button>
    </div>
  </li>
);

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
