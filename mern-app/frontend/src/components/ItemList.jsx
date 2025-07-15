import React, { useEffect, useState } from 'react';
import { fetchItems } from '../api/items';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        </div>
    );
};

export default ItemList;