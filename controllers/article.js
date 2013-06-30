module.exports = function(Article) {
  return {
    getArticles: function(req, res, next) {
      Article.find({}, function(err, articles) {
        if (err) return res.send(500)
        if (!articles) return res.send(404)
        res.json(articles)
      })
    },
    createArticle: function(req, res, next) {
      var article = new Article(req.body)
      article.save(function(err, article) {
        if (err) return res.send(500)
        res.json(article)
      })
    },
    getArticle: function(req, res, next) {
      var articleId = req.params.articleId
      Article.findOne({_id: articleId}, function(err, article) {
        if (err) return res.send(500)
        if (!article) return res.send(404)
        return res.json(article)
      })
    },
    updateArticle: function(req, res, next) {
      var articleId = req.params.articleId
      var article = req.body
      delete article._id
      console.log('updating an article that is', article)
      Article.findOneAndUpdate({_id: articleId}, {$set: article}, function(err, updatedArticle) {
        if (err) return res.send(500, err)
        if (!updatedArticle) return res.send(404)
        return res.send(200)
      })
    },
    importInstapaperArticles: function(req, res, next) {
      return res.send(200)
    }
  }
}
