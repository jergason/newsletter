require('../vendor/ember-model')
var attr = Ember.attr
var hasMany = Ember.hasMany
var Article = require('./article')

var Newsletter = Ember.Model.extend({
  _id: attr(),
  createdDateTime: attr(Date),
  sentDateTime: attr(Date),
  readDateTime: attr(Date),
  userId: attr(),
  articles: hasMany(Article, 'articleIds')
})


Newsletter.primaryKey = '_id'
Newsletter.url = '/newsletters'
Newsletter.adapter = Ember.NewsletterAdapter.create()
module.exports = Newsletter
