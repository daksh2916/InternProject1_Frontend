import React, { useState } from 'react';
import axios from 'axios';
import './CreateUserForm.css'; 

function CreateUserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userId: '',
    score: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/v1/auth/register', formData);
      if (response.status === 201) {
        setSuccessMessage(`User created successfully`);
        setFormData({
          name: '',
          email: '',
          password: '',
          userId: '',
          score: ''
        });
      } else {
        throw new Error('Failed to create user score');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to create user score');
    }
  };

  return (
    <div className="form-container">
      <h1>Create User Form</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          User ID:
          <input
            type="number"
            name="userId"
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
        <button type="submit">Submit</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default CreateUserForm;
