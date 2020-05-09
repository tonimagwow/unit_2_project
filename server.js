// =============
// Dependencies
// =============
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const PORT = process.env.Port || 3000

// ===========
// Middleware
// ===========
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/demo-2'

// =========
// Database
// =========
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/basiccrud'
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
// Error / success
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
mongoose.connection.on('open' , ()=>{});

// ====================
// Mongoose Connection
// ====================
// mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => {});

// ===========
// Controller
// ===========
const blogController = require("./controllers/blog.js");

// =======
// Routes
// =======
app.use('/blog', blogController);

// =======
// listen
// =======
app.listen( PORT, () => 
console.log( 'Listening on port:', PORT)
);