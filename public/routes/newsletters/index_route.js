var Newsletter = require('../../models/newsletter')

var R = Ember.Route.extend({
  model: function() {
    return Newsletter.findAll()
  }
})

module.exports = R
