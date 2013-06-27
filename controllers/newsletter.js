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
      var id = req.params.newsletterId
      Newsletter.findOne({_id: id}, function(err, newsletter) {
        if (err) return res.send(500)
        if (!newsletter) return res.send(404)
        return res.json(newsletter)
      })
    },
    updateNewsletter: function(req, res, next) {
      var newsletterId = req.params.newsletterId
      var newsletter = req.body
      //delete newsletter._id
      console.log('updating a newsletter that is', newsletter)
      Newsletter.findOneAndUpdate({_id: newsletterId}, {$set: newsletter}, function(err, updatedNewsletter) {
        if (err) return res.send(500)
        if (!updatedNewsletter) return res.send(404)
        return res.send(200)
      })
    }
  }
}
