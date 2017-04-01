'use strict';

const express = require('express');
const knex = require('../../knex');
const Cookies = require('cookies');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('user_technical_reading_lists')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('user_technical_reading_lists')
    .select()
    .where('id', req.params.id)
    .first()
    .then((review) => {
      if (!review) {
        return next();
      }

      res.send(review);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  knex('user_technical_reading_lists')
  .insert({
    user_id: req.body.user_id,
    periodical_or_book: req.body.periodical_or_book,
    books_id: req.body.books_id,
    periodical_id: req.body.periodical_id,
    user_book_reviews_id: req.body.user_book_reviews_id,
    is_completed: req.body.is_completed

  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('user_technical_reading_lists')
  .where('id', req.params.id)
  .update({
    user_id: req.body.user_id,
    periodical_or_book: req.body.periodical_or_book,
    books_id: req.body.books_id,
    periodical_id: req.body.periodical_id,
    user_book_reviews_id: req.body.user_book_reviews_id,
    is_completed: req.body.is_completed
  }, '*')
    .then((results)=>{
       res.status(200).send(results[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/:id', (req, res, next) => {
    let record;

      knex('user_technical_reading_lists')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('user_technical_reading_lists')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            user_id: record.user_id,
            periodical_or_book: record.periodical_or_book,
            books_id: record.books_id,
            periodical_id: record.periodical_id,
            user_book_reviews_id: record.user_book_reviews_id,
            is_completed: record.is_completed,
            created_at: record.created_at,
            updated_at: record.updated_at
          };

          res.send(obj);
        })
        .catch((err) => {
          next(err);
        });
    });




module.exports = router;
