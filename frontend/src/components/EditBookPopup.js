// components/EditBookPopup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBook } from '../redux/actions';
import '../index.css'; // Import the CSS file

const EditBookPopup = ({ book, onClose }) => {
  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(book.price);
  const [category, setCategory] = useState(book.category);
  const [description, setDescription] = useState(book.description);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    // Dispatch the editBook action with the updated book details
    dispatch(editBook(book.id, { name, price, category, description }));
    onClose(); // Close the popup
  };

  const handleCancel = () => {
    onClose(); // Close the popup without updating
  };

  return (
    <div className="overlay">
      <div className="popup">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Edit Book</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="input"
          required
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="input"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="input"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="textarea"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button onClick={handleSubmit} className="button">Update Book</button>
          <button onClick={handleCancel} className="cancelButton">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditBookPopup;
