var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('articles')
  }
})

module.exports = IndexRoute
