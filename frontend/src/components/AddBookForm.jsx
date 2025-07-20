import React, { useState } from 'react';

const initialState = {
  title: '',
  author: '',
  year: ''
};

const AddBookForm = ({ onAdd }) => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    try {
      const bookData = {
        ...form,
        year: form.year ? Number(form.year) : undefined
      };
      await onAdd(bookData);
      setForm(initialState);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="Author"
      />
      <input
        name="year"
        value={form.year}
        onChange={handleChange}
        placeholder="Year (optional)"
        type="number"
        min="0"
      />
      <button type="submit">Add Book</button>
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
    </form>
  );
};

export default AddBookForm;