'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();
const cookieSession = require('cookie-session');

const bcrypt = require('bcrypt');
const saltRounds = 12;
const myPlaintextPassword = 'whip it';
const someOtherPlaintextPassword = 'into shape';

router.use(cookieSession({
  name: 'session',
  keys: ['supersecretkey'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

router.use(function (req,res,next) {
  if (req.session.userId) {
    knex('users')
    .where({id:req.session.userId})
    .first()
    .then(function (result) {
      req.user = result;
      next();
    });
  } else {
    next();
  }
});


router.post('/login', (req,res) => {
  console.log("post reached");
  if (!req.body.email || !req.body.password) {
    console.log("ERROR STATE");
    res.sendStatus(403);
  }

  knex('users')
  .where({email: req.body.email})
  .first()
  .then((result) => {
    console.log(result);


    if (!result || (!bcrypt.compareSync(req.body.password,result.hashed_password))) {
      console.log("invalid password");
      req.session = null;
      res.sendStatus(403);
    } else {
      if ((result.first_name === req.body.first_name) && (result.last_name === req.body.last_name) && (result.company_name === req.body.company_name)) {
        req.session.userId = result.id;
        if (result.is_admin) {
          req.session.userId = result.id;
          res.send(result);
        } else {
          console.log("not everything matches up");
          req.session = null;
          res.sendStatus(403);
        }
      }
    }
  });

});

router.get('/', (req, res, next) => {
  knex('users')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {
  knex('users')
    .select()
    .where('id', req.params.id)
    .first()
    .then((user) => {
      if (!user) {
        return next();
      }

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(req.body.password, salt);

  knex('users')
  .insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    company_name: req.body.company_name,
    email: req.body.email,
    hashed_password: hash,
    is_admin: false,
    user_avatar_url: req.body.user_avatar_url
  }, '*')
  .then((result) => {
    // console.log(bcrypt.compareSync(myPlaintextPassword, hash)); //true
    // console.log(bcrypt.compareSync(someOtherPlaintextPassword, hash)); //false
    // console.log(bcrypt.compareSync(myPlaintextPassword, '$2a$12$mrJJzYrcDZYJR8OSfBsRLumSdtlafr6yz.TuwsXmYmih6UGQTuuBm')); // true
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});



router.post('/logout',(req,res,next) => {
  req.session = null;
  res.send();
});


router.patch('/:id', (req, res, next) => {
  var hashed_password;
  if (req.body.password) {
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(myPlaintextPassword, salt);
    knex('users')
    .where('id', req.params.id)
    .update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      company_name: req.body.company_name,
      email: req.body.email,
      hashed_password: hash,
      is_admin: req.body.is_admin,
      user_avatar_url: req.body.user_avatar_url
    }, '*')
      .then((results)=>{
         res.status(200).send(results[0]);
      })
      .catch((err) => {
        next(err);
      });
  } else {
    knex('users')
    .where('id', req.params.id)
    .update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      company_name: req.body.company_name,
      email: req.body.email,
      hashed_password: hashed_password,
      is_admin: req.body.is_admin,
      user_avatar_url: req.body.user_avatar_url
    }, '*')
      .then((results)=>{
         res.status(200).send(results[0]);
      })
      .catch((err) => {
        next(err);
      });
    }
});

router.delete('/:id', (req, res, next) => {
    let record;

      knex('users')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('users')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            first_name: record.first_name,
            last_name: record.last_name,
            company_name: record.company_name,
            email: record.email,
            is_admin: record.is_admin,
            user_avatar_url: record.user_avatar_url,
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
