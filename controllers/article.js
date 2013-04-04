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
    }
  }
}
