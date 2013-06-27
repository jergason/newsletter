require('./ember-model')

var NewsletterAdapter = Ember.RESTAdapter.extend({
  // just override buildUrl to remove the trailing .json from the url
  buildURL: function(klass, id) {
    var url = this._super(klass, id)
    return url.split('.json')[0]
  }
})

Ember.NewsletterAdapter = NewsletterAdapter
