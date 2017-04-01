'use strict';

const express = require('express');
const knex = require('../../knex');
const Cookies = require('cookies');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('blogs')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('blogs')
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
  knex('blogs')
  .insert({
    blog_name: req.body.blog_name,
    blog_author: req.body.blog_author,
    blog_url: req.body.blog_url,
    blog_img_url: req.body.blog_img_url,
    blog_rss_url: req.body.blog_rss_url

  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('blogs')
  .where('id', req.params.id)
  .update({
    blog_name: req.body.blog_name,
    blog_author: req.body.blog_author,
    blog_url: req.body.blog_url,
    blog_img_url: req.body.blog_img_url,
    blog_rss_url: req.body.blog_rss_url
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

      knex('blogs')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('blogs')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            blog_name: record.blog_name,
            blog_author: record.blog_author,
            blog_url: record.blog_url,
            blog_img_url: record.blog_img_url,
            blog_rss_url: record.blog_rss_url,
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
