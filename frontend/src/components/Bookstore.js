// components/Bookstore.js
import React, { useState } from 'react';
import BookList from './BookList';
import AddBookPopup from './AddBookPopup'; // import the AddBookPopup component

const Bookstore = () => {
  const [isAddBookPopupOpen, setAddBookPopupOpen] = useState(false); // state to track if add book popup is open

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
      <button onClick={toggleAddBookPopup} className="addButton">Add Book</button>
        <BookList />
        
      </div>
      {isAddBookPopupOpen && <AddBookPopup onClose={closeAddBookPopup} />}
    </div>
  );
};

export default Bookstore;