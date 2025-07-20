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
      year: editForm.year ? Number(editForm.year) : undefined,
    });
  };

  return (
    <ul className="space-y-4">
      {books.map(book => (
        <li key={book._id} className="border rounded p-4 bg-white shadow flex flex-col gap-2">
          {editingBook && editingBook._id === book._id ? (
            <form onSubmit={handleEditSubmit} className="flex flex-col gap-2">
              <input name="title" value={editForm.title} onChange={handleEditChange} required className="border p-2 rounded" />
              <input name="author" value={editForm.author} onChange={handleEditChange} className="border p-2 rounded" />
              <input name="year" value={editForm.year || ''} onChange={handleEditChange} placeholder="Year (optional)" type="number" min="0" className="border p-2 rounded" />
              <select name="status" value={editForm.status} onChange={handleEditChange} className="border p-2 rounded">
                <option value="Started">Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
              </select>
              <div className="flex gap-2">
                <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Save</button>
                <button type="button" onClick={() => onEdit(null)} className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500">Cancel</button>
              </div>
            </form>
          ) : (
            <>
              <div className="text-lg font-semibold">{book.title}</div>
              <div className="text-gray-700">by {book.author || 'Unknown'}</div>
              {book.year && <div className="text-gray-500">Year: {book.year}</div>}
              <div className="text-sm font-medium">Status: <span className={
                book.status === 'Complete' ? 'text-green-600' : book.status === 'In Progress' ? 'text-yellow-600' : 'text-blue-600'
              }>{book.status}</span></div>
              <div className="flex gap-2 mt-2">
                <button onClick={() => onEdit(book)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
                <button onClick={() => onDelete(book._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Remove Book</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default BookList;