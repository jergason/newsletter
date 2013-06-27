var Article = require('../models/article')
var R = Ember.Route.extend({
  model: function() {
    return Article.findAll()
  }
})

module.exports = R
