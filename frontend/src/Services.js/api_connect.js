// frontend/src/Services/api_connect.js
import axios from 'axios';

const API_URL = "http://localhost:8000"; // Use http instead of https for localhost unless you have a certificate set up

export const upload_data = async(data) => {
    try {
        const response = await axios.post(`${API_URL}/upload`, data);
        return response.data;
    } catch (error) {
        console.error("Error while uploading", error);
        throw error; // Re-throw the error so it can be handled by the caller
    }
};
