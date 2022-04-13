var mongoose = require('mongoose');

var articlesSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    stock: Number,
    weight: Number,
    img: String,
});
var articlesModel = mongoose.model('articles', articlesSchema);

module.exports = articlesModel;