const express = require('express')
const routes = express.Router()
const Card = require('../models/card')


routes.get('/create', (req, res) => {
  if (req.query.id) {
    Card.findById(req.query.id)
      // render form with this card
      .then(card => res.render('createCard', { card: card }));
  } else {
    res.render('createCard');
  }
});



routes.post('/saveCard', (req, res) => {
  if (req.body.id) {
    console.log(req.body.id)
      Card.findByIdandUpdate(req.body.id, req.body, { setDefaultsOnInsert: true, upsert: true })
      // redirect to the homepage
      .then(() => res.redirect('/'))
      // catch validation errors
      .catch(err => {
        console.log(err);
        res.render('createCard', {
          errors: err.errors,
          card: req.body
        });
      });
    } else {
      new Card(req.body)
        .save()
        // then redirect to the homepage
        .then(() => res.redirect('/'))
        // catch validation errors
        .catch(err => {
          res.render('createCard', {
            errors: err.errors,
            card: req.body
          });
        });
    }

})

module.exports = routes
