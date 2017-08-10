const express = require('express')
const routes = express.Router()
const Card = require('../models/card')

routes.get('/', (req, res)=>{

  Card.find()
  // then show my contacts
    .then(cards => res.render('home', { card: cards }))
      // handle errors
    .catch(err => res.send('there was an error :('));
})

routes.get('/deleteCard', (req, res)=>{
  Card.findById(req.query.id)
    .remove()
    // then redirect to the homepage
    .then(() => res.redirect('/'));
})



module.exports = routes
