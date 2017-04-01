'use strict';

const express = require('express');
const knex = require('../../knex');
const Cookies = require('cookies');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('books')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('books')
    .select()
    .where('id', req.params.id)
    .first()
    .then((book) => {
      if (!book) {
        return next();
      }

      res.send(book);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  knex('books')
  .insert({
    author: req.body.author,
    title: req.body.title,
    cover_url: req.body.cover_url,
    author_url: req.body.author_url,
    publisher: req.body.publisher,
    publication_date: req.body.publication_date,
    edition: req.body.edition,
    part_of_series: req.body.part_of_series,
    name_of_series: req.body.name_of_series,
    number_in_series: req.body.number_in_series,
    number_of_pages: req.body.number_of_pages,
    author_gender: req.body.author_gender,
    author_nationality: req.body.author_nationality,
    description: req.body.description
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('books')
  .where('id', req.params.id)
  .update({
    author: req.body.author,
    title: req.body.title,
    cover_url: req.body.cover_url,
    author_url: req.body.author_url,
    publisher: req.body.publisher,
    publication_date: req.body.publication_date,
    edition: req.body.edition,
    part_of_series: req.body.part_of_series,
    name_of_series: req.body.name_of_series,
    number_in_series: req.body.number_in_series,
    number_of_pages: req.body.number_of_pages,
    author_gender: req.body.author_gender,
    author_nationality: req.body.author_nationality,
    description: req.body.description
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

      knex('books')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('books')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            author: record.author,
            title: record.title,
            cover_url: record.cover_url,
            author_url: record.author_url,
            publisher: record.publisher,
            publication_date: record.publication_date,
            edition: record.edition,
            part_of_series: record.part_of_series,
            name_of_series: record.name_of_series,
            number_in_series: record.number_in_series,
            number_of_pages: record.number_of_pages,
            author_gender: record.author_gender,
            author_nationality: record.author_nationality,
            description: record.description,
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
