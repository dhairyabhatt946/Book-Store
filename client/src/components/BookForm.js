// import React, { useState, useEffect } from 'react';
// import { createBook, updateBook } from '../api';
// import { useParams, useNavigate } from 'react-router-dom';

// const BookForm = ({ existingBook }) => {
//     const [bookData, setBookData] = useState(existingBook || {
//         id: '',
//         title: '',
//         genre: '',
//         author: '',
//         publishYear: '',
//         rating: '',
//         price: ''
//     });
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setBookData({ ...bookData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (existingBook) {
//             await updateBook(existingBook.id, bookData);
//         } else {
//             await createBook(bookData);
//         }
//         navigate('/'); // Redirect after submission
//     };

//     useEffect(() => {
//         if (existingBook) {
//             setBookData(existingBook);
//         }
//     }, [existingBook]);

//     return (
//         <div className="container mt-4">
//             <h2>{existingBook ? 'Update Book' : 'Add Book'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>ID</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         name="id"
//                         value={bookData.id}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Title</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="title"
//                         value={bookData.title}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Genre</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="genre"
//                         value={bookData.genre}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Author</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="author"
//                         value={bookData.author}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Publish Year</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         name="publishYear"
//                         value={bookData.publishYear}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Rating</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         name="rating"
//                         value={bookData.rating}
//                         onChange={handleChange}
//                         required
//                         min="0"
//                         max="5"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Price</label>
//                     <input
//                         type="number"
//                         className="form-control"
//                         name="price"
//                         value={bookData.price}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">{existingBook ? 'Update' : 'Add'} Book</button>
//             </form>
//         </div>
//     );
// };

// export default BookForm;


import React, { useState, useEffect } from 'react';
import { createBook, updateBook } from '../api';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookForm.css'; // CSS file for additional styling

const BookForm = ({ existingBook }) => {
    const [bookData, setBookData] = useState(existingBook || {
        id: '',
        title: '',
        genre: '',
        author: '',
        publishYear: '',
        rating: '',
        price: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (existingBook) {
            await updateBook(existingBook.id, bookData);
        } else {
            await createBook(bookData);
        }
        navigate('/'); // Redirect after submission
    };

    useEffect(() => {
        if (existingBook) {
            setBookData(existingBook);
        }
    }, [existingBook]);

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="text-center mb-4">{existingBook ? 'Update Book' : 'Add Book'}</h2>
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="form-group">
                        <label>ID</label>
                        <input
                            type="number"
                            className="form-control custom-input"
                            name="id"
                            value={bookData.id}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            name="title"
                            value={bookData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Genre</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            name="genre"
                            value={bookData.genre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            name="author"
                            value={bookData.author}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Publish Year</label>
                        <input
                            type="number"
                            className="form-control custom-input"
                            name="publishYear"
                            value={bookData.publishYear}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Rating</label>
                        <input
                            type="number"
                            className="form-control custom-input"
                            name="rating"
                            value={bookData.rating}
                            onChange={handleChange}
                            required
                            min="0"
                            max="5"
                        />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="number"
                            className="form-control custom-input"
                            name="price"
                            value={bookData.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary btn-lg">
                            {existingBook ? 'Update' : 'Add'} Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookForm;
