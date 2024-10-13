import axios from 'axios';

const API_URL = 'http://localhost:7000/books';
const URL = 'http://localhost:7000'; // Your API endpoint

export const getBooks = () => {
    return axios.get(URL);
};

export const getBookById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createBook = (bookData) => {
    return axios.post(API_URL, bookData);
};

export const updateBook = (id, bookData) => {
    return axios.patch(`${API_URL}/${id}`, bookData);
};

export const deleteBook = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export const searchBooks = (title) => axios.get(`${API_URL}/search/${title}`);
