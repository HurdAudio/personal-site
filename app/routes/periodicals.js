'use strict';

const express = require('express');
const knex = require('../../knex');
const Cookies = require('cookies');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('periodicals')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('periodicals')
    .select()
    .where('id', req.params.id)
    .first()
    .then((entity) => {
      if (!entity) {
        return next();
      }

      res.send(entity);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  knex('periodicals')
  .insert({
    name: req.body.name,
    issue: req.body.issue,
    editor: req.body.editor,
    editor_url: req.body.editor_url,
    edition: req.body.edition,
    publication_date: req.body.publication_date,
    pages: req.body.pages,
    img_url: req.body.img_url,
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
  knex('periodicals')
  .where('id', req.params.id)
  .update({
    name: req.body.name,
    issue: req.body.issue,
    editor: req.body.editor,
    editor_url: req.body.editor_url,
    edition: req.body.edition,
    publication_date: req.body.publication_date,
    pages: req.body.pages,
    img_url: req.body.img_url,
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

      knex('periodicals')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('periodicals')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            name: record.name,
            issue: record.issue,
            editor: record.editor,
            editor_url: record.editor_url,
            edition: record.edition,
            publication_date: record.publication_date,
            pages: record.pages,
            img_url: record.img_url,
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
