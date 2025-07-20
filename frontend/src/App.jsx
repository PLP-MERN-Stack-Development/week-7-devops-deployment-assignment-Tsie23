import React, { useEffect, useState, lazy, Suspense } from 'react';
import { getBooks, addBook, updateBook, deleteBook } from './api/books';

const BookList = lazy(() => import('./components/BookList'));
const AddBookForm = lazy(() => import('./components/AddBookForm'));

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-8 px-2">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">📚 Book Log</h1>
        <Suspense fallback={<div>Loading form...</div>}>
          <AddBookForm onAdd={handleAddBook} />
        </Suspense>
        <Suspense fallback={<div>Loading books...</div>}>
          <BookList
            books={books}
            onEdit={setEditingBook}
            onDelete={handleDeleteBook}
            onUpdate={handleUpdateBook}
            editingBook={editingBook}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default App;