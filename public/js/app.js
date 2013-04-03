App = Ember.Application.create({
  LOG_TRANSITIONS: true
})

App.Router.map(function() {
  this.route('newsletters')
  // put your routes here
})

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('newsletters')
  },
})

App.NewslettersRoute = Ember.Route.extend({
  model: function() {
    return App.Newsletter.findAll()
  },
})


App.Newsletter = Ember.Object.extend()
App.Newsletter.reopenClass({
  allNewsletters: [],
  findAll: function() {
    this.allNewsletters = []
    var self = this
    $.ajax({
      url: '/newsletters',
      dataType: 'json',
      success: function(response) {
        console.log('response is', response)
        self.allNewsletters = response
      }
    })
    return this.allNewsletters
  },
})
