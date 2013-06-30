var C = Ember.ObjectController.extend({
  needs: "articles",
  ownArticles: function() {
    var self = this
    return this.get('controllers.articles.content').filter(function(article) {
      return article.get('newsletterId') == self.content.get('_id')
    })
  }.property('controllers.articles.content.@each.newsletterId')
})

module.exports = C
