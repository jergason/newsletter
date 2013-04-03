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
      var id = req.params.id
      Article.findOne({_id: id}, function(err, article) {
        if (err) return res.send(500)
        if (!article) return res.send(404)
        return res.json(article)
      })
    }
  }
}
