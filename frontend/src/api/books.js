// frontend/src/api/items.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getBooks = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addBook = async (book) => {
  const res = await axios.post(API_URL, book);
  return res.data;
};

export const updateBook = async (id, updates) => {
  const res = await axios.put(`${API_URL}/${id}`, updates);
  return res.data;
};

export const deleteBook = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};