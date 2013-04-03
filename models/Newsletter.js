var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = function(db) {
  var NewsletterSchema = new Schema({
    createdDateTime: {type: Date},
    sentDateTime: {type: Date},
    readDateTime: {type: Date},
    articles: [Schema.ObjectId],
    user: {type: Schema.ObjectId, index: true}
  })

  return db.model('Newsletter', NewsletterSchema)
}
