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
    onUpdate(editForm._id, editForm);
  };

  return (
    <ul>
      {books.map(book => (
        <li key={book._id} style={{ marginBottom: 10, border: '1px solid #ccc', padding: 10 }}>
          {editingBook && editingBook._id === book._id ? (
            <form onSubmit={handleEditSubmit}>
              <input name="title" value={editForm.title} onChange={handleEditChange} required />
              <input name="author" value={editForm.author} onChange={handleEditChange} />
              <select name="rating" value={editForm.rating} onChange={handleEditChange}>
                {[1,2,3,4,5].map(r => <option key={r} value={r}>{r}⭐</option>)}
              </select>
              <select name="status" value={editForm.status} onChange={handleEditChange}>
                <option>Started</option>
                <option>In Progress</option>
                <option>Complete</option>
              </select>
              <input name="notes" value={editForm.notes} onChange={handleEditChange} />
              <button type="submit">Save</button>
              <button type="button" onClick={() => onEdit(null)}>Cancel</button>
            </form>
          ) : (
            <>
              <strong>{book.title}</strong> by {book.author || 'Unknown'}<br />
              Rating: {book.rating}⭐ | Status: {book.status}<br />
              Notes: {book.notes}<br />
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