const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const cardSchema = new Schema({
  name:       {type: String, required: true},
  type:       {type: String, required: true},
  subType:    {type: String},
  manaCost:   {type: String, required: true},
  action:     {type: String, required: true},
  castRange:  {type: String, required: true},
  target:     {type: String, required: true}
  // schools:    [{
  //   type: {type: String},
  //   cost: {type: Number}
  // }],
  // stats:      {
  //   health:{type: Number},
  //   armor:{type: Number},
  //   defense:{type: String}},
  // abilities:  [{
  //   name: {type: String},
  //   action: {type: String, required: true},
  //   meleeOrRanged: {type: String},
  //   damageType: {type: String},
  //   damageDice: {type: Number},
  //   effectDice: {type: String},
  //   damageDetails : {type: String}
  // }],
  // description:  {type: String}
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card
