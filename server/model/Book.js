const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    id: {
        required: true,
        type: Number,
        unique: true // Ensure the `id` is unique across documents
    },
    title: {
        required: true,
        type: String
    },
    genre: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    publishYear: {
        required: true,
        type: Number
    },
    rating: {
        required: true,
        type: Number,
        min: 0, // Minimum value for review
        max: 5  // Maximum value for review
    },
    price: {
        required: true,
        type: Number
    },
    createTime: {
        type: Date,
        default: Date.now // Set default to the current date
    },
    lastUpdateTime: {
        type: Date,
        default: Date.now // Set default to the current date
    },
});

module.exports = mongoose.model('Book', Schema);