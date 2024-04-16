// components/BookList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions';
import EditBookPopup from './EditBookPopup'; // Import the EditBookPopup component

const BookList = () => {
  const [selectedBook, setSelectedBook] = useState(null); // State to track the selected book for editing
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteBook(id));
  };

  const handleEdit = book => {
    setSelectedBook(book); // Set the selected book for editing
  };

  return (
    <div className="bookListContainer">
      {books.map(book => (
        <div key={book.id} className="bookItem" onClick={() => handleEdit(book)}> {/* Add onClick event handler */}
          <h3>{book.name}</h3>
          <p>Price: ${book.price}</p>
          <p>Category: {book.category}</p>
          <p>Description: {book.description}</p>
          <button onClick={() => handleDelete(book.id)} className="deleteButton">Delete</button>
        </div>
      ))}
      {selectedBook && <EditBookPopup book={selectedBook} onClose={() => setSelectedBook(null)} />} {/* Render EditBookPopup if selectedBook is not null */}
    </div>
  );
};

export default BookList;
