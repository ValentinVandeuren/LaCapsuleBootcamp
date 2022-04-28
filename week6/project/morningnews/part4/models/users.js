var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    token: String
});
var usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;