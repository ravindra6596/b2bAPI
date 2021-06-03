const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
     title: {
          type: String,
          required: true
     },
     category: {
          type: String,
          required: true
     },
     description: {
          type: String,
          required: true
     },
     imgURL: {
          type: String,
          required: true
     },
     whitePaperLink: {
          type: String,
          required: true,
          
          
     },
     publishDate: {
          type: String,
          required: true,
          
     },
     created_at: {
          type: Date,
          default: Date,
     },
     updated_at: {
          type: Date,
          default: Date,
     },
});

module.exports = mongoose.model('Post', postSchema);