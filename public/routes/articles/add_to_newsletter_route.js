var Newsletter = require('../../models/newsletter')
console.log('$ is', $)
var R = Ember.Route.extend({
  model: function(params) {
    return Newsletter.find(params.newsletter_id)
  },

  serialize: function(model) {
    return { newsletter_id: model.get('_id') }
  },

  events: {
    addToNewsletter: function(article) {
      console.log('CALLING ADD TO NEWSLETTER')
      var newsletter = this.modelFor(this.routeName)
      article.set('newsletterId', newsletter.get('_id'))
      newsletter.save()
      article.save()
    },
    sendNewsletter: function(newsletter) {
      console.log('calling send')
      return $.ajax({
        url: '/newsletters/' + newsletter.get('_id') + '/send',
        method: 'POST',
        //data: newsletter.toJSON()
      })
    },
    error: function(reason, transition) {
      console.log('in error handler, errors are', arguments)
    }
  }
})

module.exports = R
