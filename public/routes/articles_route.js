var Article = require('../models/article')
var Newsletter = require('../models/newsletter')
var R = Ember.Route.extend({
  model: function() {
    return Article.findAll()
  },
  events: {
    addToNewsletter: function() {
      console.log('called addToNewsletter on the daddy route')
      // show the popup for selecting a newsletter to add articles to
      // TODO: somehow keep track of what article was added so it does that
      // automatically?
      // Need to pass same stuff in as the model hook expects
      this.transitionTo('articles.select_newsletter')

    }
  }
})

module.exports = R
