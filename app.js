var path = require('path')
var express = require('express')
var mongoose = require('mongoose')
var config = require('./config')

exports.createServer = function() {
  return config.resolve(function(newsletter, article) {
    var app = express()

    app.use(express.static(path.join(__dirname, 'public')))
    app.use(express.bodyParser())

    app.get('/newsletters', newsletter.getNewsletters)
    app.post('/newsletters', newsletter.createNewsletter)
    app.get('/newsletters/:newsletterId', newsletter.getNewsletter)

    app.get('/articles', article.getArticles)
    app.post('/articles', article.createArticle)
    app.get('/articles/:articleId', article.getArticle)

    return app
  })
}

if (module == require.main) {
  var app = exports.createServer()
  app.listen(3001)
}
