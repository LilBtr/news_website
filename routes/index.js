var express = require('express')
var router = express.Router()

const bodyParser = require('body-parser')
const NewsDatabase = require('../helpers/newsDatabase')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET home page. */
router.get('/', function (req, res, next) {
  NewsDatabase.addNews('title', 'https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg', 'text')
  res.render('index')
})

router.post('/', urlencodedParser, function (req, res, next) {
  res.send(JSON.stringify(NewsDatabase.getNewsList()))
})

module.exports = router

