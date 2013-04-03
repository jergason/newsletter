var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = function(db) {
  var UserSchema = new Schema({
    email: {type: String},
    hashedPassword: {type: String},
    createdDateTime: {type: Date},
  })

  return db.model('User', UserSchema)
}
