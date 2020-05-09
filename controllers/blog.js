const express = require('express');
const router = express.Router();
const Blog = require('./../models/blog.js');

//  Add Routes

// Index
router.get('/', (req, res) => {
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
    Blog.create(req.body, (error, createdBlog) => {
        res.redirect('/blog');
    });
});


// Show
router.get('/:id', (req, res) => {
    Blog.findById(req.params.id, (error, foundBlog) => {
        res.render('Show', {
            blog: foundBlog
        });
    });
});


// Delete
router.delete('/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err, blog) => {
        res.redirect('/blog');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        res.render('Edit', {
        blog: foundBlog
        })
    });
});

// Put
router.put('/:id', (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/blog');
    });
});

// Export Router
module.exports = router;