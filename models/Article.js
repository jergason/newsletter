var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = function(db) {
  var ArticleSchema = new Schema({
    url: {type: String},
    title: {type: String},
    createdDateTime: {type: Date, default: function() {return Date.now()}},
    newsletterId: {type: Schema.ObjectId}
  })

  ArticleSchema.index({_id:1, newsletterId: 1})

  return db.model('Article', ArticleSchema)
}
