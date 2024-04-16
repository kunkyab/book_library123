// components/Bookstore.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList';
import AddBookPopup from './AddBookPopup';

const Bookstore = () => {
  const [isAddBookPopupOpen, setAddBookPopupOpen] = useState(false);

  const toggleAddBookPopup = () => {
    setAddBookPopupOpen(!isAddBookPopupOpen);
  };

  const closeAddBookPopup = () => {
    setAddBookPopupOpen(false);
  };

  return (
    <div className="container">
      <h1 className="heading">Bookstore</h1>
      <div className="content">
        <BookList />
        <button onClick={toggleAddBookPopup} className="addButton">Add Book</button>
      </div>
      {isAddBookPopupOpen && <AddBookPopup onClose={closeAddBookPopup} />}
    </div>
  );
};

export default Bookstore;
