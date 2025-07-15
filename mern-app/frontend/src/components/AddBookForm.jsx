import React, { useEffect, useState } from 'react';
import { fetchItems } from '../api/items';

const initialState = {
  title: '',
  author: '',
  rating: 1,
  status: 'Started',
  notes: ''
};

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [form, setForm] = useState(initialState);

    useEffect(() => {
        const getItems = async () => {
            try {
                const data = await fetchItems();
                setItems(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getItems();
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        // onAdd(form); // Assuming onAdd is a function to add a new item
        setForm(initialState);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {items.map(item => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
                <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
                <input name="author" value={form.author} onChange={handleChange} placeholder="Author" />
                <select name="rating" value={form.rating} onChange={handleChange}>
                    {[1,2,3,4,5].map(r => <option key={r} value={r}>{r}⭐</option>)}
                </select>
                <select name="status" value={form.status} onChange={handleChange}>
                    <option>Started</option>
                    <option>In Progress</option>
                    <option>Complete</option>
                </select>
                <input name="notes" value={form.notes} onChange={handleChange} placeholder="Notes" />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default ItemList;