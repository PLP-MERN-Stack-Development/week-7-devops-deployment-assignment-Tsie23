import React, { useState } from 'react';

function BookList({ books, onEdit, onDelete, onUpdate, editingBook }) {
  const [editForm, setEditForm] = useState(editingBook || null);

  React.useEffect(() => {
    setEditForm(editingBook);
  }, [editingBook]);

  const handleEditChange = e => {
    const { name, value } = e.target;
    setEditForm(f => ({ ...f, [name]: value }));
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    onUpdate(editForm._id, {
      ...editForm,
      year: editForm.year ? Number(editForm.year) : undefined
    });
  };

  return (
    <ul>
      {books.map(book => (
        <li key={book._id} style={{ marginBottom: 10, border: '1px solid #ccc', padding: 10 }}>
          {editingBook && editingBook._id === book._id ? (
            <form onSubmit={handleEditSubmit}>
              <input name="title" value={editForm.title} onChange={handleEditChange} required />
              <input name="author" value={editForm.author} onChange={handleEditChange} />
              <input name="year" value={editForm.year || ''} onChange={handleEditChange} placeholder="Year (optional)" type="number" min="0" />
              <button type="submit">Save</button>
              <button type="button" onClick={() => onEdit(null)}>Cancel</button>
            </form>
          ) : (
            <>
              <strong>{book.title}</strong> by {book.author || 'Unknown'}<br />
              {book.year && <>Year: {book.year}<br /></>}
              <button onClick={() => onEdit(book)}>Edit</button>
              <button onClick={() => onDelete(book._id)}>Remove Book</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default BookList;