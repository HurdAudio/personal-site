'use strict';

const express = require('express');
const knex = require('../../knex');
const Cookies = require('cookies');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('user_blog_reading_lists')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('user_blog_reading_lists')
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
  knex('user_blog_reading_lists')
  .insert({
    user_id: req.body.user_id,
    blog_id: req.body.blog_id

  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('user_blog_reading_lists')
  .where('id', req.params.id)
  .update({
    user_id: req.body.user_id,
    blog_id: req.body.blog_id
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

      knex('user_blog_reading_lists')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('user_blog_reading_lists')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            user_id: record.user_id,
            blog_id: record.blog_id,
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
