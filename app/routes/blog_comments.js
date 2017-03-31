'use strict';

const express = require('express');
const knex = require('../../knex');
const Cookies = require('cookies');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('blog_comments')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('blog_comments')
    .select()
    .where('id', req.params.id)
    .first()
    .then((blog) => {
      if (!blog) {
        return next();
      }

      res.send(blog);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  knex('blog_comments')
  .insert({
    author_first_name: req.body.author_first_name,
    author_last_name: req.body.author_last_name,
    author_email: req.body.author_email,
    blog_post: req.body.blog_post,
    authorization_status: req.body.authorization_status,
    comment_title: req.body.comment_title,
    comment_body: req.body.comment_body
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('blog_comments')
  .where('id', req.params.id)
  .update({
    author_first_name: req.body.author_first_name,
    author_last_name: req.body.author_last_name,
    author_email: req.body.author_email,
    blog_post: req.body.blog_post,
    authorization_status: req.body.authorization_status,
    comment_title: req.body.comment_title,
    comment_body: req.body.comment_body
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

      knex('blog_comments')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('blog_comments')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            author_first_name: record.author_first_name,
            author_last_name: record.author_last_name,
            author_email: record.author_email,
            blog_post: record.blog_post,
            authorization_status: record.authorization_status,
            comment_title: record.comment_title,
            comment_body: record.comment_body,
            created_at: record.created_at,
            updated_at: record.updated_at,
          };

          res.send(obj);
        })
        .catch((err) => {
          next(err);
        });
    });




module.exports = router;
