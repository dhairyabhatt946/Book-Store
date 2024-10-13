// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditBook = () => {
//     const { id } = useParams(); // Get the book ID from the URL
//     const navigate = useNavigate();
    
//     const [book, setBook] = useState({
//         id: '',
//         title: '',
//         genre: '',
//         author: '',
//         publishYear: '',
//         rating: '',
//         price: ''
//     });
    
//     // Fetch the book details when the component mounts
//     useEffect(() => {
//         const fetchBook = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:7000/books/${id}`);
//                 setBook(response.data);
//             } catch (error) {
//                 console.error('Error fetching book:', error);
//             }
//         };
//         fetchBook();
//     }, [id]);

//     const handleChange = (e) => {
//         setBook({ ...book, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.patch(`http://localhost:7000/books/${id}`, book);
//             navigate('/'); // Navigate back to the main page after updating
//         } catch (error) {
//             console.error('Error updating book:', error);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Edit Book</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label className="form-label">Title</label>
//                     <input
//                         type="text"
//                         name="title"
//                         value={book.title}
//                         onChange={handleChange}
//                         className="form-control"
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Genre</label>
//                     <input
//                         type="text"
//                         name="genre"
//                         value={book.genre}
//                         onChange={handleChange}
//                         className="form-control"
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Author</label>
//                     <input
//                         type="text"
//                         name="author"
//                         value={book.author}
//                         onChange={handleChange}
//                         className="form-control"
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Publish Year</label>
//                     <input
//                         type="number"
//                         name="publishYear"
//                         value={book.publishYear}
//                         onChange={handleChange}
//                         className="form-control"
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Rating</label>
//                     <input
//                         type="number"
//                         name="rating"
//                         value={book.rating}
//                         onChange={handleChange}
//                         className="form-control"
//                         required
//                         min="0"
//                         max="5"
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Price</label>
//                     <input
//                         type="number"
//                         name="price"
//                         value={book.price}
//                         onChange={handleChange}
//                         className="form-control"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Update Book</button>
//             </form>
//         </div>
//     );
// };

// export default EditBook;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditBook.css'; // CSS file for additional styling

const EditBook = () => {
    const { id } = useParams(); // Get the book ID from the URL
    const navigate = useNavigate();
    
    const [book, setBook] = useState({
        id: '',
        title: '',
        genre: '',
        author: '',
        publishYear: '',
        rating: '',
        price: ''
    });
    
    // Fetch the book details when the component mounts
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };
        fetchBook();
    }, [id]);

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:7000/books/${id}`, book);
            navigate('/'); // Navigate back to the main page after updating
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="text-center mb-4">Edit Book</h2>
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={book.title}
                            onChange={handleChange}
                            className="form-control custom-input"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Genre</label>
                        <input
                            type="text"
                            name="genre"
                            value={book.genre}
                            onChange={handleChange}
                            className="form-control custom-input"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Author</label>
                        <input
                            type="text"
                            name="author"
                            value={book.author}
                            onChange={handleChange}
                            className="form-control custom-input"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Publish Year</label>
                        <input
                            type="number"
                            name="publishYear"
                            value={book.publishYear}
                            onChange={handleChange}
                            className="form-control custom-input"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Rating</label>
                        <input
                            type="number"
                            name="rating"
                            value={book.rating}
                            onChange={handleChange}
                            className="form-control custom-input"
                            required
                            min="0"
                            max="5"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={book.price}
                            onChange={handleChange}
                            className="form-control custom-input"
                            required
                        />
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary btn-lg">
                            Update Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditBook;
