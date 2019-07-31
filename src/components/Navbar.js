import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Olvasási Lista</h1>
      <p>Jelenleg {books.length} könyvet kell végig olvasnod...</p>
    </div>
  );
};

export default Navbar;
