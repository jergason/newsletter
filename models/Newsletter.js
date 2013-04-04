var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = function(db) {
  var NewsletterSchema = new Schema({
    createdDateTime: {type: Date, default: function() { return Date.now() }},
    sentDateTime: {type: Date},
    readDateTime: {type: Date},
    user: {type: Schema.ObjectId, index: true}
  })

  return db.model('Newsletter', NewsletterSchema)
}
