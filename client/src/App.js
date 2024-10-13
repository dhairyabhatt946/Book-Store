import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookDetail from './components/BookDetail';
import EditBook from './components/EditBook';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/books/new" element={<BookForm />} />
                    <Route path="/books/:id" element={<BookDetail />} />
                <Route path="/books/edit/:id" element={<EditBook />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
