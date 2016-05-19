'use strict';

var mongoose = require('mongoose');
var moment = require('moment');

var imgSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true},
  createdAt: { type: String, required: true},
  title: { type: String }
});

imgSchema.statics.getAll = function(cb){
  Img.find({}, (err, imgs) => {
    cb(err, imgs)
  })
}

imgSchema.statics.getOneById = function(imgId, cb){
  Img.findById(imgId, (err, img) => {
    cb(err, img);
  })
}

imgSchema.statics.createOne = function(imgObj, cb){
  imgObj.createdAt = new Date();
  var img = new Img(imgObj);
  img.save(cb);
}

imgSchema.statics.deleteOneById = function(imgId, cb){
  Img.findByIdAndRemove(imgId, cb);
}

imgSchema.statics.editOneById = function(imgId, newImgObj, cb) {
  Img.findByIdAndUpdate(imgId, { $set: newImgObj }, {new: true}, cb);
}


var Img = mongoose.model('Img', imgSchema);

module.exports = Img;
