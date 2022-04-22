var mongoose = require('mongoose');

var wishlistSchema = mongoose.Schema({
    name: String,
    desc: String,
    img: String,
    note: Number,
    vote: Number
});
var wishlistModel = mongoose.model('wishlist', wishlistSchema);

module.exports = wishlistModel;