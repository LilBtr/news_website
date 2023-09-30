var express = require('express')
var router = express.Router()

const bodyParser = require('body-parser')
const NewsDatabase = require('../helpers/newsDatabase')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET home page. */
router.get('/', function (req, res, next) {
  NewsDatabase.addNews('THIS IS TITLE', 'https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg', 
  `loremLorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat, ratione earum, quisquam
  necessitatibus voluptas culpa similique, quia harum accusamus soluta numquam error non laboriosam!
  Repudiandae dolorum repellat culpa quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat, ratione earum, quisquam
  necessitatibus voluptas culpa similique, quia harum accusamus soluta numquam error non laboriosam!
  Repudiandae dolorum repellat culpa quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat, ratione earum, quisquam
  necessitatibus voluptas culpa similique, quia harum accusamus soluta numquam error non laboriosam!
  Repudiandae dolorum repellat culpa quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat, ratione earum, quisquam
  necessitatibus voluptas culpa similique, quia harum accusamus soluta numquam error non laboriosam!
  Repudiandae dolorum repellat culpa quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat, ratione earum, quisquam
  necessitatibus voluptas culpa similique, quia harum accusamus soluta numquam error non laboriosam!
  Repudiandae dolorum repellat culpa quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat, ratione earum, quisquam
  necessitatibus voluptas culpa similique, quia harum accusamus soluta numquam error non laboriosam!
  Repudiandae dolorum repellat culpa quaerat.`)
  res.render('newsInstance', NewsDatabase.getNews(req.query.postid))
})

router.post('/', urlencodedParser, function (req, res, next) {
  const json = JSON.stringify(req.url)
  res.redirect('/news')
})

module.exports = router

