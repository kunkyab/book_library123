// components/AddBookPopup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions';
import '../index.css'; // Import the CSS file

const AddBookPopup = ({ onClose }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!name.trim()) {
      setErrors(prevState => ({ ...prevState, name: 'Name is required' }));
      return;
    }
    if (!price.trim()) {
      setErrors(prevState => ({ ...prevState, price: 'Price is required' }));
      return;
    }
    if (!category.trim()) {
      setErrors(prevState => ({ ...prevState, category: 'Category is required' }));
      return;
    }
    // If all fields are filled, dispatch the addBook action
    dispatch(addBook({ name, price, category, description }));
    // Reset form fields and errors
    setName('');
    setPrice('');
    setCategory('');
    setDescription('');
    setErrors({});
    onClose(); // Close the popup
  };

  const handleCancel = () => {
    onClose(); // Close the popup
  };

  return (
    <div className="overlay">
      <div className="popup">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Book</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="input"
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="input"
        />
        {errors.price && <p className="error">{errors.price}</p>}
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="input"
        />
        {errors.category && <p className="error">{errors.category}</p>}
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="textarea"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button onClick={handleSubmit} className="button">Add Book</button>
          <button onClick={handleCancel} className="cancelButton">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddBookPopup;
