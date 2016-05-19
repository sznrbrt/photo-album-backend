'use strict';

var express = require('express');
var router = express.Router();


var Img = require('../models/img');

router.get('/', (req, res) => {
  res.send('img\n')
});

module.exports = router;
