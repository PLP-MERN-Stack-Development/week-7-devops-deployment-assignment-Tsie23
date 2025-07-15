// frontend/src/api/items.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/items';

export const fetchItems = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};

export const createItem = async (itemData) => {
    try {
        const response = await axios.post(API_URL, itemData);
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error);
        throw error;
    }
};

export const updateItem = async (id, itemData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, itemData);
        return response.data;
    } catch (error) {
        console.error('Error updating item:', error);
        throw error;
    }
};

export const deleteItem = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting item:', error);
        throw error;
    }
};