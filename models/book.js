const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Book = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    ISBN: { type: String, required: true },
    numberOfCopies: { type: Number, required: true },
},
    { timestamps: true }
);


module.exports.Book = mongoose.model(
    "Book",
    Book
);