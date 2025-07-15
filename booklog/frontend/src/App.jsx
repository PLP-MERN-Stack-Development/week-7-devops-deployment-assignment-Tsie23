import React, { useEffect, useState } from 'react';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import { getBooks, addBook, updateBook, deleteBook } from './api/books';

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialBooks = await getBooks();
        setBooks(initialBooks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddBook = async (book) => {
    const newBook = await addBook(book);
    setBooks([newBook, ...books]);
  };

  const handleUpdateBook = async (id, updates) => {
    const updated = await updateBook(id, updates);
    setBooks(books.map(b => b._id === id ? updated : b));
    setEditingBook(null);
  };

  const handleDeleteBook = async (id) => {
    await deleteBook(id);
    setBooks(books.filter(b => b._id !== id));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>📚 Book Log</h1>
      <AddBookForm onAdd={handleAddBook} />
      <BookList
        books={books}
        onEdit={setEditingBook}
        onDelete={handleDeleteBook}
        onUpdate={handleUpdateBook}
        editingBook={editingBook}
      />
    </div>
  );
}

export default App;