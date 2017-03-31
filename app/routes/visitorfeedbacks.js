'use strict';

const express = require('express');
const knex = require('../../knex');
const Cookies = require('cookies');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('visitor_feedbacks')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('visitor_feedbacks')
    .select()
    .where('id', req.params.id)
    .first()
    .then((feedback) => {
      if (!feedback) {
        return next();
      }

      res.send(feedback);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  knex('visitor_feedbacks')
  .insert({
    visitor_name: req.body.visitor_name,
    visitor_email: req.body.visitor_email,
    visitor_message: req.body.visitor_message,
    responded: false
  }, ['id', 'visitor_name', 'visitor_email', 'visitor_message', 'responded', 'created_at', 'updated_at'])
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});




router.patch('/:id', (req, res, next) => {
  knex('visitor_feedbacks')
  .where('id', req.params.id)
  .update({
    visitor_name: req.body.visitor_name,
    visitor_email: req.body.visitor_email,
    visitor_message: req.body.visitor_message,
    responded: req.body.responded
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

      knex('visitor_feedbacks')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('visitor_feedbacks')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            visitor_name: record.visitor_name,
            visitor_email: record.visitor_email,
            visitor_message: record.visitor_message,
            responded: record.responded,
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
