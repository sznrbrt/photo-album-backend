'use strict';

var express = require('express');
var router = express.Router();


var Album = require('../models/album');

router.get('/', (req, res) => {
  Album.getAll((err, albums) => {
    res.status(err ? 400 : 200).send(err || albums);
  })
});

router.get('/:id', (req, res) => {
  Album.getOneById(req.params.id, (err, album) => {
    res.status(err ? 400 : 200).send(err || album);
  })
});

router.post('/', (req, res) => {
  Album.createOne(req.body, (err, album) => {
    res.status(err ? 400 : 200).send(err || album);
  })
});

router.put('/:albumId/addToAlbum/:imgId', (req, res) => {
  Album.addImgToAlbum(req.params.albumId, req.params.imgId, (err) => {
    res.status(err ? 400 : 200).send(err || 'Image added to the album!');
  })
});

router.delete('/:albumId/removeFromAlbum/:imgId', (req, res) => {
  Album.removeImgFromAlbumById(req.params.albumId, req.params.imgId, (err) => {
    res.status(err ? 400 : 200).send(err || 'Image removed from the album!');
  })
});

router.put('/:albumId', (req, res) => {
  Album.editOneById(req.params.albumId, req.body, (err, newAlbumObj) => {
    res.status(err ? 400 : 200).send(err || newAlbumObj);
  })
});

router.delete('/:albumId', (req, res) => {
  Album.deleteOneById(req.params.albumId, (err) => {
    res.status(err ? 400 : 200).send(err || 'You have deleted one album!');
  })
});

module.exports = router;
