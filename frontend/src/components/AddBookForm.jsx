import React, { useState } from 'react';

const initialState = {
  title: '',
  author: '',
  year: '',
  status: 'Started',
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
        year: form.year ? Number(form.year) : undefined,
      };
      await onAdd(bookData);
      setForm(initialState);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded shadow flex flex-col gap-2">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        required
        className="border p-2 rounded"
      />
      <input
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="Author"
        className="border p-2 rounded"
      />
      <input
        name="year"
        value={form.year}
        onChange={handleChange}
        placeholder="Year (optional)"
        type="number"
        min="0"
        className="border p-2 rounded"
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="Started">Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Complete">Complete</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Book</button>
      {error && <div className="text-red-600">Error: {error}</div>}
    </form>
  );
};

export default AddBookForm;