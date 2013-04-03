module.exports = function(Newsletter) {
  return {
    getNewsletters: function(req, res, next) {
      Newsletter.find({}, function(err, newsletters) {
        if (err) return res.send(500)
        if (!newsletters) return res.send(404)
        res.json(newsletters)
      })
    },
    createNewsletter: function(req, res, next) {
      var newsletter = new Newsletter(req.body)
      newsletter.save(function(err, newsletter) {
        if (err) return res.send(500)
        res.json(newsletter)
      })
    },
    getNewsletter: function(req, res, next) {
      var id = req.params.id
      Newsletter.findOne({_id: id}, function(err, newsletter) {
        if (err) return res.send(500)
        if (!newsletter) return res.send(404)
        return res.json(newsletter)
      })
    }
  }
}
