/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var userSchema = mongoose.Schema({
  local: {
    username: String,
    password: String
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  }
});

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', userSchema);
