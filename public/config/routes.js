var App = require('./app')

App.Router.map(function() {
  this.resource('newsletters', function() {
    this.route('show', {path: '/:newsletter_id'})
  })

  this.resource('articles')
})
