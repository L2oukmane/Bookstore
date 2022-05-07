import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="nav-bar">
      <h1 className="main-header">Book Store</h1>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id} className="nav-link-item">
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
