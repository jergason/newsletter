var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = function(db) {
  var ArticleSchema = new Schema({
    url: {type: String},
    title: {type: String},
    dateTime: {type: Date},
    newsletterId: {type: Schema.ObjectId}
  })

  return db.model('Article', ArticleSchema)
}
