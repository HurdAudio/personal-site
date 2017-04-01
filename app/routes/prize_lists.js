'use strict';

const express = require('express');
const knex = require('../../knex');
const Cookies = require('cookies');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('prize_lists')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('prize_lists')
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
  knex('prize_lists')
  .insert({
    prize_1: req.body.prize_1,
    prize_2: req.body.prize_2,
    prize_3: req.body.prize_3,
    prize_4: req.body.prize_4,
    prize_5: req.body.prize_5,
    prize_6: req.body.prize_6,
    prize_7: req.body.prize_7,
    prize_8: req.body.prize_8,
    prize_9: req.body.prize_9,
    prize_10: req.body.prize_10
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('prize_lists')
  .where('id', req.params.id)
  .update({
    prize_1: req.body.prize_1,
    prize_2: req.body.prize_2,
    prize_3: req.body.prize_3,
    prize_4: req.body.prize_4,
    prize_5: req.body.prize_5,
    prize_6: req.body.prize_6,
    prize_7: req.body.prize_7,
    prize_8: req.body.prize_8,
    prize_9: req.body.prize_9,
    prize_10: req.body.prize_10
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

      knex('prize_lists')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('prize_lists')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            prize_1: record.prize_1,
            prize_2: record.prize_2,
            prize_3: record.prize_3,
            prize_4: record.prize_4,
            prize_5: record.prize_5,
            prize_6: record.prize_6,
            prize_7: record.prize_7,
            prize_8: record.prize_8,
            prize_9: record.prize_9,
            prize_10: record.prize_10,
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
