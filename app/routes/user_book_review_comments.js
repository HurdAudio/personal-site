'use strict';

const express = require('express');
const knex = require('../../knex');
const Cookies = require('cookies');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('user_book_review_comments')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('user_book_review_comments')
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
  knex('user_book_review_comments')
  .insert({
    user_book_review_id: req.body.user_book_review_id,
    comment_author_first_name: req.body.comment_author_first_name,
    comment_author_last_name: req.body.comment_author_last_name,
    comment_author_email: req.body.comment_author_email,
    comment_title: req.body.comment_title,
    comment_body: req.body.comment_body,
    authorization_status: req.body.authorization_status

  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('user_book_review_comments')
  .where('id', req.params.id)
  .update({
    user_book_review_id: req.body.user_book_review_id,
    comment_author_first_name: req.body.comment_author_first_name,
    comment_author_last_name: req.body.comment_author_last_name,
    comment_author_email: req.body.comment_author_email,
    comment_title: req.body.comment_title,
    comment_body: req.body.comment_body,
    authorization_status: req.body.authorization_status
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

      knex('user_book_review_comments')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('user_book_review_comments')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            user_book_review_id: record.user_book_review_id,
            comment_author_first_name: record.comment_author_first_name,
            comment_author_last_name: record.comment_author_last_name,
            comment_author_email: record.comment_author_email,
            comment_title: record.comment_title,
            comment_body: record.review_title,
            authorization_status: record.authorization_status,
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
