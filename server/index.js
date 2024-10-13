const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const Book = require('./model/Book.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
// const URL = process.env.MONGOURL;
const URL = "mongodb+srv://23010101023:Ug6zVB4zH7l44vUl@cluster0.tlxa8.mongodb.net/CSE_3A_105";

mongoose.connect(URL).then(()=> {
    console.log('Connected to database');

    //get all books
    app.get('/', async (req, res) => {
        try {
            const data = await Book.find();
            if(!data) {
                return res.status(404).json({msg: 'Book data not found'});
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({error: error});
        }
    });

    //get book id
    app.get('/books/:id', async (req, res) => {
        try {
            const bookExist = await Book.findOne({id: req.params.id});
            if(!bookExist) {
                return res.status(404).json({msg: "Book not found"});
            }
            res.status(200).json(bookExist);
        } catch (error) {
            res.status(500).json({error: error});
        }
    });

    //create book
    app.post('/books', async (req, res) => {
        try {
            const book = new Book({...req.body, createTime: new Date(), lastUpdateTime: new Date()});
    
            if(!book) {
                return res.status(404).json({msg: 'Book data not found'});
            }
    
            const savedData = await book.save();
            res.status(200).json(savedData);
        } catch (error) {
            res.status(500).json({error: error});
        }
    });

    //update book by id
    app.patch('/books/:id', async (req, res) => {
        try {
            const bookExist = await Book.findOne({id: req.params.id});
            if(!bookExist) {
                return res.status(404).json({msg: 'Book not found'});
            }
            await Book.findOneAndUpdate({id: req.params.id}, {...req.body, lastUpdateTime: new Date()});
            res.status(200).json({msg: 'Book updated'});
        } catch (error) {
            res.status(500).json({error: error});
        }
    });

    //delete book
    app.delete('/books/:id', async (req, res) => {
        try {
            const bookExist = await Book.findOne({id: req.params.id});
            if(!bookExist) {
                return res.status(404).json({msg: 'Book not exist'});
            }
            await Book.deleteOne({id: req.params.id});
            res.status(200).json({msg: 'Book deleted successfully'});
        } catch (error) {
            res.status(500).json({error: error});
        }
    });

    //search by book title
    app.get('/books/search/:title', async (req, res) => {
        try {
            console.log("Search request received for:", req.params.title);  // Add logging
            const title = String(req.params.title);
            const books = await Book.find({ title: { $regex: title, $options: 'i' } });
            if (!books.length) {
                return res.status(404).json({ msg: "No books found matching the search criteria" });
            }
            res.status(200).json(books);
        } catch (error) {
            console.error("Search error:", error);  // Log any errors
            res.status(500).json({ error: error.message });
        }
    });
    
    
    app.listen(PORT, ()=> {
        console.log(`Server running at port: ${PORT}`);
    })
});
