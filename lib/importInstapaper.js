var request = require('request')
var cheerio = require('cheerio')

function scrapeInstapaper(cb) {
  request({uri: 'http://instapaper.com/u',
    method: 'GET',
    headers: {
      Cookie: 'pfu=346394; pfp=8.Vpa.oTOfm2M4PMRNYhEw07p5rNRWE%2F; pfh=zk6t21sIf9tSzEzLbi6pykgrMx4; pfe=1397917662; __utma=266364758.994080178.1344610070.1366344608.1366380750.43; __utmb=266364758.14.10.1366380750; __utmc=266364758; __utmz=266364758.1344610070.1.1.utmcsr=plus.google.com|utmccn=(referral)|utmcmd=referral|utmcct=/u/0/110981030061712822816/posts/KaSKeg4vQtz'
    }
  }, function(err, res, body) {
    //console.log('error is', err)
    //console.log('res is', res.headers)
    //console.log('body is', body)
    var $ = cheerio.load(body)
    var articles = []
    var articleElements = $('a.tableViewCellTitleLink')
    articleElements.each(function(i, element) {
      articles.push({ url: element.attribs.href, title: element.children[0].data})
    })
    console.log('articles is', articles)
    cb(null, articles)
  })
}

scrapeInstapaper(function(wat){return})

module.exports = scrapeInstapaper
