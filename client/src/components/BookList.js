// import React, { useEffect, useState } from 'react';
// import { getBooks, deleteBook, searchBooks } from '../api';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './BookList.css'; // Make sure to create this CSS file

// const BookList = () => {
//     const [books, setBooks] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [isSearching, setIsSearching] = useState(false);

//     useEffect(() => {
//         const fetchBooks = async () => {
//             try {
//                 const response = await getBooks();
//                 setBooks(response.data);
//             } catch (error) {
//                 console.error('Error fetching books:', error);
//             }
//         };
//         fetchBooks();
//     }, []);

//     const handleDelete = async (id) => {
//         await deleteBook(id);
//         setBooks(books.filter(book => book.id !== id));
//     };

//     const handleSearch = async (e) => {
//         e.preventDefault();
//         if (searchTerm.trim()) {
//             setIsSearching(true);
//             try {
//                 const response = await searchBooks(searchTerm);
//                 setBooks(response.data);
//             } catch (error) {
//                 console.log(error);
//                 setBooks([]);
//             }
//         } else {
//             setIsSearching(false);
//             const response = await getBooks();
//             setBooks(response.data);
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <div className='row bg-info my-4 d-flex justify-content-center align-items-center'>
//                 <div className='col-8'>
//                     <h2 className="text-center mb-4">Book List</h2>
//                 </div>
//                 <div className='col '>
//                     {/* Search Bar */}
//                     <form className="mb-4" onSubmit={handleSearch}>
//                         <div className="input-group">
//                             <input
//                                 type="text"
//                                 className="form-control custom-input"
//                                 placeholder="Search by book title"
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                             />
//                             <div className="input-group-append">
//                                 <button className="btn custom-button" type="submit">Search</button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             {/* Book Cards */}
//             <div className="row">
//                 {books.map(book => (
//                     <div className="col-lg-3 col-md-6 mb-4" key={book.id}>
//                         <div className="card h-100">
//                             <div className="card-body d-flex flex-column">
//                                 <h5 className="card-title text-center">{book.title}</h5>
//                                 <h6 className="card-subtitle text-center mb-2 text-muted">{book.author}</h6>
//                                 <p className="card-text text-center"><strong>Genre:</strong> {book.genre}</p>
//                                 <p className="card-text text-center"><strong>Review:</strong> {book.rating} / 5</p>
//                                 <p className="card-text text-center"><strong>Price:</strong> ₹{book.price}</p>

//                                 {/* Buttons */}
//                                 <div className="mt-auto">
//                                     <Link to={`/books/${book.id}`} className="btn btn-primary btn-block">View</Link>
//                                     <Link to={`/books/edit/${book.id}`} className="btn btn-warning btn-block mt-2">Edit</Link>
//                                     <button
//                                         className="btn btn-danger btn-block mt-2"
//                                         onClick={() => handleDelete(book.id)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Button to add a new book */}
//             <div className="text-center mt-4">
//                 <Link to="/books/new" className="btn btn-success">Add New Book</Link>
//             </div>
//         </div>
//     );
// };

// export default BookList;


import React, { useEffect, useState } from 'react';
import { getBooks, deleteBook, searchBooks } from '../api';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookList.css'; // Make sure to create this CSS file

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await getBooks();
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        await deleteBook(id);
        setBooks(books.filter(book => book.id !== id));
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            setIsSearching(true);
            try {
                const response = await searchBooks(searchTerm);
                setBooks(response.data);
            } catch (error) {
                console.log(error);
                setBooks([]);
            }
        } else {
            setIsSearching(false);
            const response = await getBooks();
            setBooks(response.data);
        }
    };

    return (
        <div className="container mt-4">
            {/* Header */}
            <div className='row my-4 d-flex justify-content-between align-items-end bg-info'>
                <div className='col-md-3 mt-3'>
                    <h2 className="text-center mb-4">Book List</h2>
                </div>
                <div className='col-md-4'>
                    {/* Search Bar */}
                    <form className="mb-4" onSubmit={handleSearch}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control bg-info border-primary"
                                placeholder="Search by book title"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="input-group-append">
                                <button className="btn border-primary" type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            <div className="text-center mt-4 d-flex align-items-start mb-3">
                <Link to="/books/new" className="btn btn-success">
                <i class="bi bi-plus"></i>
                </Link>
            </div>

            {/* Book Cards */}
            <div className="row">
                {books.map(book => (
                    <div className="col-lg-3 col-md-6 mb-4" key={book.id}>
                        <div className="card h-100">
                            <div className="card-body text-center d-flex flex-column">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text"><strong>Genre:</strong> {book.genre}</p>
                                <p className="card-text"><strong>Author:</strong> {book.author}</p>
                                <p className="card-text"><strong>Review:</strong> {book.rating} / 5</p>
                                <p className="card-text"><strong>Price:</strong> ₹{book.price}</p>

                                {/* View, Edit, and Delete Buttons */}
                                <div className="mt-auto d-flex align-items-center justify-content-between">
                                    <Link to={`/books/${book.id}`} className="ms-5">
                                    <i class="bi bi-eye"></i> 
                                    </Link>
                                    <Link to={`/books/edit/${book.id}`} className="text-warning">
                                    <i class="bi bi-pen"></i>
                                    </Link>
                                    <button
                                        className="text-danger me-5 border-0"
                                        onClick={() => handleDelete(book.id)}
                                    >
                                        <i class="bi bi-trash3"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button to Add a New Book */}
            
        </div>
    );
};

export default BookList;
