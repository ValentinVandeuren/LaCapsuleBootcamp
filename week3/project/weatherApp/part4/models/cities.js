var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
    name: String,
    climat: String,
    icon: String,
    maxTemp: Number,
    minTemp: Number
});
var cityModel = mongoose.model('cities', citySchema);

module.exports = cityModel;