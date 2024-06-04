const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

userSchema.plugin(uniqueValidator); // Enable unique validation

module.exports = mongoose.model('User', userSchema);
