const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: String
});

module.exports = mongoose.model('User', userSchema);