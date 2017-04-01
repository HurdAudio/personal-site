'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
const bcrypt = require('bcrypt');
// const request = require('request');

const app = express();
const visitorfeedbacks = require('./routes/visitorfeedbacks.js');
const users = require('./routes/users.js');
const user_blogs = require('./routes/user_blogs.js');
const blog_comments = require('./routes/blog_comments.js');
const books = require('./routes/books.js');
const periodicals = require('./routes/periodicals.js');
const user_book_reviews = require('./routes/user_book_reviews.js');
// const login = require('./routes/login.js');
// const myPlaintextPassword = 'whip it';
// const players = require('./routes/players.js');
// const fantasyteams = require('./routes/fantasyteams.js');
// const headtoheadmatchups = require('./routes/headtoheadmatchups.js');
// const rotisseriematchups = require('./routes/rotisseriematchups.js');

// const messages = require('./routes/classifieds');
const port = process.env.PORT || 3007;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/../', 'node_modules')));

// app.use('/classifieds',messages);



app.use('/visitor_feedbacks', visitorfeedbacks);
app.use('/users', users);
app.use('/user_blogs', user_blogs);
app.use('/blog_comments', blog_comments);
app.use('/books', books);
app.use('/periodicals', periodicals);
app.use('/user_book_reviews', user_book_reviews);
// app.use('/login', login);
// app.use('/players', players);
// app.use('/fantasyteams', fantasyteams);
// app.use('/headtoheadmatchups', headtoheadmatchups);
// app.use('/rotisseriematchups', rotisseriematchups);



app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



app.listen(port, () => {
  console.log('Listening on port', port);
  console.log('postgreSQL is lit.');
});

module.exports = app;
