//In this file we create Authentication (JWT) Token
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
     username: {
          type: String,
          required: true,
          unique: true,
       //   match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
     },
     password: {
          type: String, required: true
     }
});

// we will create a new connection

const User = new mongoose.model('User', userSchema);
module.exports = User;