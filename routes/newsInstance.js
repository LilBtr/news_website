var express = require('express')
var router = express.Router()

const bodyParser = require('body-parser')
const NewsDatabase = require('../helpers/newsDatabase')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET home page. */
router.get('/', function (req, res, next) {
  NewsDatabase.addNews(true, true, false)
  res.render('newsInstance', NewsDatabase.getNews(req.query.postid))
})

router.post('/', urlencodedParser, function (req, res, next) {
  const json = JSON.stringify(req.url)
  res.redirect('/news')
})

module.exports = router

