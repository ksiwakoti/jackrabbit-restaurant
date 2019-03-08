const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create User Schema
const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = user = mongoose.model('user', userSchema);