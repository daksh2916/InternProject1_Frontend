import React, { useState } from 'react';
import axios from 'axios';
import './UpdateUserForm.css'; 

function UpdateUserForm() {
  const [formData, setFormData] = useState({
    userId: '', // Using userId instead of userid
    score: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:3000/v1/auth/update', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) { // Change status check to 200 for successful update
        setSuccessMessage(`User score updated successfully`);
        setFormData({
          userId: '', // Reset userId field after successful update
          score: ''
        });
      } else {
        throw new Error('Failed to update user score');
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="form-container">
      <h1>Update User Score</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="number"
            name="userId" // Using userId instead of userid
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Score:
          <input
            type="number"
            name="score"
            value={formData.score}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Update Score</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default UpdateUserForm;
