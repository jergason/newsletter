var Newsletter = require('../../models/newsletter')

var R = Ember.Route.extend({
  model: function(params) {
    return Newsletter.find(params.newsletter_id)
  },
  serialize: function(model) {
    return { newsletter_id: model.get('_id') }
  }
})

module.exports = R
