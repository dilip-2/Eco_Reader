import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/auth/register', form);
      navigate('/login');
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
