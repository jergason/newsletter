var path = require('path')
var express = require('express')
var mongoose = require('mongoose')
var config = require('./config')

exports.createServer = function() {
  return config.resolve(function(newsletter, article) {
    var app = express()

    function allowCrossDomain(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

      // intercept OPTIONS method
      if ('OPTIONS' == req.method) {
        res.send(204)
      }
      else {
        next()
      }
    }

    app.use(express.logger())
    app.use(express.static(path.join(__dirname, 'public')))
    app.use(express.cookieParser())
    app.use(express.session({secret: 'NOTEARSONLYROBOTS'}))
    app.use(express.bodyParser())
    app.use(allowCrossDomain)

    app.get('/newsletters', newsletter.getNewsletters)
    app.post('/newsletters', newsletter.createNewsletter)
    app.put('/newsletters/:newsletterId', newsletter.updateNewsletter)
    app.get('/newsletters/:newsletterId', newsletter.getNewsletter)

    app.get('/articles', article.getArticles)
    app.post('/articles', article.createArticle)
    app.get('/articles/:articleId', article.getArticle)
    app.put('/articles/:articleId', article.updateArticle)

    app.get('articles/import/:username/:password', article.importInstapaperArticles)

    return app
  })
}

if (module == require.main) {
  var app = exports.createServer()
  app.listen(3001)
}
