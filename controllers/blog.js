const express = require('express');
const router = express.Router();
const Blog = require('./../models/blog.js');

//  Add Routes

// Index
router.get('/', (req, res) => {
    // Use Fruits model to get all Fruits
    Blog.find({}, (error, allBlogs) => {
        res.render('Index', {
            blog: allBlogs
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('New');
});

// Create
router.post('/', (req, res) => {
    if (req.body) {
        req.body = true;
    } else {
        req.body = false;
    }
    // Use Model to create Blog Document
    Blog.create(req.body, (error, createdBlog) => {
        // Once created - respond to client
        res.redirect('/blog');
    });
});


// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Blog.findById(req.params.id, (error, foundBlog) => {
        // render the Show route and pass it through foundBlog
        res.render('Show', {
            blog: foundBlog
        });
    });
});


// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Blog.findByIdAndRemove(req.params.id, (err, blog) => {
        res.redirect('/blog');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Blog.findById(req.params.id, (err, foundBlog) => {
        // render the edit view and pass it in the foundBlog
        res.render('Edit', {
            Blog: foundBlog
        })
    });
});

// Put
router.put('/:id', (req, res) => {
    req.body.thoughts = req.body.thoughts === "on" ? true : false;

    // Update the blog document using our model
    Blog.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/blog');
    });
});

// Export Router
module.exports = router;