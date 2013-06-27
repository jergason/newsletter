var ArticlesController = Ember.ArrayController.extend({
  unassignedArticles: function() {
    return this.filter(function(article) {
      return article.get('newsletterId') == null
    })
  }.property('content.@each.newsletterId'),
  assignedArticles: function() {
    return this.filter(function(article) {
      return article.get('newsletterId') != null
    })
  }.property('content.@each.newsletterId'),
  addToNewsletter: function(article) {

  }
})

module.exports = ArticlesController
