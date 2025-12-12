// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // ton backend

// POST inscription contact
export const sendContactForm = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/contacts`, formData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'envoi du formulaire:", error.response?.data || error.message);
        throw error;
    }
};
