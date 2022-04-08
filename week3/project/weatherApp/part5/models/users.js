var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    userName: String,
    emailAddress: String,
    password: String
});
var usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;