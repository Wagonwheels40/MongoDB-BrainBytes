const mongoose = require('mongoose');

// Create a flashcard note schema
const flashcardSchema = new mongoose.Schema({
    front: {
        type: String,
        required: true
    },
    back: {
        type: String,
        required: true
    }
});

// Create a flashcard model
const Flashcard = mongoose.model('Flashcard', flashcardSchema);

module.exports = Flashcard;