var App = require('./app')

App.Router.map(function() {
  this.resource('newsletters', function() {
    this.route('show', {path: '/:newsletter_id'})
  })

  this.resource('articles', function() {
    this.route('select_newsletter', {path: '/selectNewsletter'})
    this.route('add_to_newsletter', {path: '/addToNewsletter/:newsletter_id'})
  })
})
