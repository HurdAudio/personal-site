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
const occult_readings = require('./routes/occult_readings.js');
const contemporary_pulps = require('./routes/contemporary_pulps.js');
const vintage_pulps = require('./routes/vintage_pulps.js');
const agatha_awards = require('./routes/agatha_awards.js');
const anthony_awards = require('./routes/anthony_awards.js');
const arthur_c_clark_awards = require('./routes/arthur_c_clark_awards.js');
const barry_awards = require('./routes/barry_awards.js');
const bram_stoker_awards = require('./routes/bram_stoker_awards.js');
const british_science_fiction_association_awards = require('./routes/british_science_fiction_association_awards.js');
const chicago_tribune_heartland_prizes = require('./routes/chicago_tribune_heartland_prizes.js');
const compton_crook_awards = require('./routes/compton_crook_awards.js');
const costa_book_awards = require('./routes/costa_book_awards.js');
const crime_writers_association_new_blood_daggers = require('./routes/crime_writers_association_new_blood_daggers.js');
const desmond_elliott_prizes = require('./routes/desmond_elliott_prizes.js');
const edgar_awards = require('./routes/edgar_awards.js');
const encore_awards = require('./routes/encore_awards.js');
const flannery_oconnor_award_for_short_fictions = require('./routes/flannery_oconnor_award_for_short_fictions.js');
const goodreads_choice_awards = require('./routes/goodreads_choice_awards.js');
const governor_general_literary_awards = require('./routes/governor_general_literary_awards.js');
const hammett_awards = require('./routes/hammett_awards.js');
const hugo_awards = require('./routes/hugo_awards.js');
const international_impac_dublin_awards = require('./routes/international_impac_dublin_awards.js');
const itw_thriller_awards = require('./routes/itw_thriller_awards.js');
const james_tait_black_memorial_prizes = require('./routes/james_tait_black_memorial_prizes.js');
const james_tiptree_jr_literary_awards = require('./routes/james_tiptree_jr_literary_awards.js');
const kiriyama_prizes = require('./routes/kiriyama_prizes.js');
const kirkus_prizes = require('./routes/kirkus_prizes.js');
const kitschies = require('./routes/kitschies.js');
const los_angeles_times_book_prizes = require('./routes/los_angeles_times_book_prizes.js');
const locus_awards = require('./routes/locus_awards.js');
const macavity_awards = require('./routes/macavity_awards.js');
const man_booker_prizes = require('./routes/man_booker_prizes.js');
const mary_mccarthy_prizes = require('./routes/mary_mccarthy_prizes.js');
const mckittrick_prizes = require('./routes/mckittrick_prizes.js');
const minnesota_book_awards = require('./routes/minnesota_book_awards.js');
const mythopoeic_awards = require('./routes/mythopoeic_awards.js');
const national_book_awards = require('./routes/national_book_awards.js');
const national_book_critics_circle_awards = require('./routes/national_book_critics_circle_awards');
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
app.use('/occult_readings', occult_readings);
app.use('/contemporary_pulps', contemporary_pulps);
app.use('/vintage_pulps', vintage_pulps);
app.use('/agatha_awards', agatha_awards);
app.use('/anthony_awards', anthony_awards);
app.use('/arthur_c_clark_awards', arthur_c_clark_awards);
app.use('/barry_awards', barry_awards);
app.use('/bram_stoker_awards', bram_stoker_awards);
app.use('/british_science_fiction_association_awards', british_science_fiction_association_awards);
app.use('/chicago_tribune_heartland_prizes', chicago_tribune_heartland_prizes);
app.use('/compton_crook_awards', compton_crook_awards);
app.use('/costa_book_awards', costa_book_awards);
app.use('/crime_writers_association_new_blood_daggers', crime_writers_association_new_blood_daggers);
app.use('/desmond_elliott_prizes', desmond_elliott_prizes);
app.use('/edgar_awards', edgar_awards);
app.use('/encore_awards', encore_awards);
app.use('/flannery_oconnor_award_for_short_fictions', flannery_oconnor_award_for_short_fictions);
app.use('/goodreads_choice_awards', goodreads_choice_awards);
app.use('/governor_general_literary_awards', governor_general_literary_awards);
app.use('/hammett_awards', hammett_awards);
app.use('/hugo_awards', hugo_awards);
app.use('/international_impac_dublin_awards', international_impac_dublin_awards);
app.use('/itw_thriller_awards', itw_thriller_awards);
app.use('/james_tait_black_memorial_prizes', james_tait_black_memorial_prizes);
app.use('/james_tiptree_jr_literary_awards', james_tiptree_jr_literary_awards);
app.use('/kiriyama_prizes', kiriyama_prizes);
app.use('/kirkus_prizes', kirkus_prizes);
app.use('/kitschies', kitschies);
app.use('/los_angeles_times_book_prizes', los_angeles_times_book_prizes);
app.use('/locus_awards', locus_awards);
app.use('/macavity_awards', macavity_awards);
app.use('/man_booker_prizes', man_booker_prizes);
app.use('/mary_mccarthy_prizes', mary_mccarthy_prizes);
app.use('/mckittrick_prizes', mckittrick_prizes);
app.use('/minnesota_book_awards', minnesota_book_awards);
app.use('/mythopoeic_awards', mythopoeic_awards);
app.use('/national_book_awards', national_book_awards);
app.use('/national_book_critics_circle_awards', national_book_critics_circle_awards);
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
