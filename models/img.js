'use strict';

var mongoose = require('mongoose');
var moment = require('moment');

var imgSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true},
  createdAt: { type: String, required: true},
  title: { type: String }
});

var Img = mongoose.model('Img', imgSchema);

module.exports = Img;
