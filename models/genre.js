var mongoose = require('mongoose');

// Genre Schema
var Schema = mongoose.Schema;

var genreSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    genreDescription: {
        type: String,
        default: ""
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


var Genre = module.exports = mongoose.model('Genre', genreSchema);

//Get grenres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}

// Add Genre
module.exports.addGenre = function(genre, callback){
    Genre.create(genre, callback);
}

// Update Genre
module.exports.updateGenre = function(id, genre, options, callback){
    var query = {_id: id};
    var update = {
        title: genre.title,
        author: genre.author,
        description: genre.description,
        publisher: genre.publisher,
        image_url: genre.image_url,
        buy_url: genre.buy_url,
        pages: genre.pages
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}

// Delete Genre
module.exports.removeGenre = function(id, callback){
    var query = {_id: id};
    Genre.remove(query, callback);
}

