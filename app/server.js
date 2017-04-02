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
const user_book_review_comments = require('./routes/user_book_review_comments.js');
const blogs = require('./routes/blogs.js');
const user_blog_reading_lists = require('./routes/user_blog_reading_lists.js');
const user_periodical_reading_lists = require('./routes/user_periodical_reading_lists.js');
const user_technical_reading_lists = require('./routes/user_technical_reading_lists.js');
const user_reading_lists = require('./routes/user_reading_lists.js');
const prize_lists = require('./routes/prize_lists.js');
const interrupts = require('./routes/interrupts.js');
const female_author_selections = require('./routes/female_author_selections.js');
const crime_series = require('./routes/crime_series.js');
const backlog_ebooks = require('./routes/backlog_ebooks.js');
const science_fiction_series = require('./routes/science_fiction_series.js');
const free_selections = require('./routes/free_selections.js');
const inserts = require('./routes/inserts.js');
const literary_journals = require('./routes/literary_journals.js');
const bizarro_fictions = require('./routes/bizarro_fictions.js');
const genre_journals = require('./routes/genre_journals.js');
const classics = require('./routes/classics.js');
const compendiums = require('./routes/compendiums.js');
const male_author_selections = require('./routes/male_author_selections.js');
const backlog_physical_books = require('./routes/backlog_physical_books.js');
const non_fictions = require('./routes/non_fictions.js');
const anthologies = require('./routes/anthologies.js');
const roulettes = require('./routes/roulettes.js');
const graphic_novels = require('./routes/graphic_novels.js');
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
app.use('/user_book_review_comments', user_book_review_comments);
app.use('/blogs', blogs);
app.use('/user_blog_reading_lists', user_blog_reading_lists);
app.use('/user_periodical_reading_lists', user_periodical_reading_lists);
app.use('/user_technical_reading_lists', user_technical_reading_lists);
app.use('/user_reading_lists', user_reading_lists);
app.use('/prize_lists', prize_lists);
app.use('/interrupts', interrupts);
app.use('/female_author_selections', female_author_selections);
app.use('/crime_series', crime_series);
app.use('/backlog_ebooks', backlog_ebooks);
app.use('/science_fiction_series', science_fiction_series);
app.use('/free_selections', free_selections);
app.use('/inserts', inserts);
app.use('/literary_journals', literary_journals);
app.use('/bizarro_fictions', bizarro_fictions);
app.use('/genre_journals', genre_journals);
app.use('/classics', classics);
app.use('/compendiums', compendiums);
app.use('/male_author_selections', male_author_selections);
app.use('/backlog_physical_books', backlog_physical_books);
app.use('/non_fictions', non_fictions);
app.use('/anthologies', anthologies);
app.use('/roulettes', roulettes);
app.use('/graphic_novels', graphic_novels);
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
