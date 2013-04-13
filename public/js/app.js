App = Ember.Application.create({
  LOG_TRANSITIONS: true
})

App.Router.map(function() {
  this.resource('articles', function() {
    this.route('show', {path: ':article_id'})
  })
})

App.Store = DS.Store.create({
  revision: 12
})

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('articles')
  },
})

App.NewslettersRoute = Ember.Route.extend({
  model: function() {
    return App.Newsletter.findAll()
  },
})


App.Newsletter = Ember.Object.extend()
App.Newsletter.reopenClass({
  findAll: function() {
    this.set('allNewsletters', [])
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

App.ArticlesRoute = Ember.Route.extend({
  model: function() {
    return App.Article.findAll()
  }
})

App.ArticlesIndexController = Ember.ArrayController.extend({
})

App.Article = Ember.Object.extend()
App.Article.reopenClass({
  findAll: function() {
    this.set('allArticles', [])
    console.log('findArticles is', this.allArticles)
    var self = this
    $.ajax({
      url: '/articles',
      dataType: 'json',
      success: function(response) {
        console.log('success has begun!')
        self.allArticles = []
        response.forEach(function(article) {
          self.get('allArticles').addObject(App.Article.create(article))
        })
        console.log('self.allArticles is', self.get('allArticles'))
      }
    })
    return this.allArticles
  },
})
