require('../vendor/ember-model')

var Article = Ember.Model.extend({
  _id: Em.attr(),
  url: Em.attr(),
  title: Em.attr(),
  createdDateTime: Em.attr(Date),
  newsletterId: Em.attr(),
  userId: Em.attr()
})

Article.primaryKey = '_id'
Article.url = '/articles'
Article.adapter = Ember.NewsletterAdapter.create()
module.exports = Article
