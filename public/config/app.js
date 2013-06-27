require('../vendor/jquery')
require('../vendor/handlebars')
require('../vendor/ember')
require('../vendor/ember-model')
// require ember-model to load it into global scope
require('../vendor/adapter')

var App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  location: 'history'
})

module.exports = App
