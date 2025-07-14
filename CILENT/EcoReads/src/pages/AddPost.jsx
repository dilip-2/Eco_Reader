import React, { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
  const [form, setForm] = useState({ title: '', content: '', tags: '' });
  const token = localStorage.getItem('token');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/posts', {
      ...form, tags: form.tags.split(',')
    }, { headers: { Authorization: token } });
    alert('Post Added!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Post</h2>
      <input name="title" onChange={handleChange} placeholder="Title" />
      <textarea name="content" onChange={handleChange} placeholder="Content" />
      <input name="tags" onChange={handleChange} placeholder="Tags (comma separated)" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPost;
