const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const blogSchema = new Schema({

    title: { 
        type: String, 
        required: true 
    },
    date: { 
        type: String,
        default: Date.now()
        // required: true 
    },
    thoughts: {
        type: String,
        required: true 
    }
}, 
{ timestamps: true }
);

//  Create Model from our Schema
const Blog = mongoose.model('Blog', blogSchema);

// Export Blog Model
module.exports = Blog;