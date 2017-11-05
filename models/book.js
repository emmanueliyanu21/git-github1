var mongoose = require('mongoose');

// Book Schema
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title :{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
    },
    pages:{
        type: String,
    },
    image_url:{
        type: String,
    },
    buy_url:{
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['available', 'unavailable']
        }],
        default: ['available']
    }

});


var Book = module.exports = mongoose.model('Book', bookSchema);

//Get books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

// Add Book
module.exports.addBook = function(book, callback){
    Book.create(book, callback);
}

// Update Book
module.exports.updateBook = function(id, book, options, callback){
    var query = {_id: id};
    var update = {
        title: book.title
    }
    Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeBook = function(id, callback){
    var query = {_id: id};
    Book.remove(query, callback);
}