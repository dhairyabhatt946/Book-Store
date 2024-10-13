// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getBookById } from '../api';

// const BookDetail = () => {
//     const { id } = useParams();
//     const [book, setBook] = useState(null);

//     useEffect(() => {
//         const fetchBook = async () => {
//             const response = await getBookById(id);
//             setBook(response.data);
//         };
//         fetchBook();
//     }, [id]);

//     return (
//         <div className="container mt-4">
//             {book ? (
//                 <>
//                     <h2>{book.title}</h2>
//                     <p><strong>Author:</strong> {book.author}</p>
//                     <p><strong>Genre:</strong> {book.genre}</p>
//                     <p><strong>Publish Year:</strong> {book.publishYear}</p>
//                     <p><strong>Rating:</strong> {book.rating}</p>
//                     <p><strong>Price:</strong> ${book.price}</p>
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default BookDetail;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookDetail.css'; // Add your CSS styles here

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            const response = await getBookById(id);
            setBook(response.data);
        };
        fetchBook();
    }, [id]);

    return (
        <div className="container mt-5">
            {book ? (
                <div className="card shadow-lg p-4">
                    <h2 className="text-center text-primary mb-4">{book.title}</h2>
                    <div className="mb-3">
                        <p className="lead"><strong>Author:</strong> {book.author}</p>
                    </div>
                    <div className="mb-3">
                        <p className="lead"><strong>Genre:</strong> {book.genre}</p>
                    </div>
                    <div className="mb-3">
                        <p className="lead"><strong>Publish Year:</strong> {book.publishYear}</p>
                    </div>
                    <div className="mb-3">
                        <p className="lead"><strong>Rating:</strong> {book.rating}</p>
                    </div>
                    <div className="mb-3">
                        <p className="lead"><strong>Price:</strong> ${book.price}</p>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <h4>Loading...</h4>
                </div>
            )}
        </div>
    );
};

export default BookDetail;
