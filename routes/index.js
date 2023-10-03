var express = require('express')
var router = express.Router()

const bodyParser = require('body-parser')
const NewsDatabase = require('../helpers/newsDatabase')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET home page. */
router.get('/', function (req, res, next) {
  NewsDatabase.addNews('TITLE', 'https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg', 'textLorem, ipsum dolor sit amet conspisicing elipisicing elipisicing eliectetur adipisicing elit. Libero quaerat, ratione earum, quisquam necessitatibus voluptas culpa similique, quia pisicing elipisicing elipisicing elipisicing elipisicing elipisicing elihar11042-GettyImages-1164615296.jpeg', 'textLorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat, ratione earum, quisquam necessitatibus voluptas culpa similique, quia harum acc11042-GettyImages-1164615296.jpeg', 'textLorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat, ratione earum, quisquam necessitatibus voluptas culpa similique, quia harum acc11042-GettyImages-1164615296.jpeg', 'textLorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat, ratione earum, quisquam necessitatibus voluptas culpa similique, quia harum acc11042-GettyImages-1164615296.jpeg', 'textLorem, ipsum dolor sit amet consectepisicing elipisicing elipisicing elipisicing elipisicing elipisicing elipisicing elipisicing elipisicing elitur adipisicing elit. Libero quaerat, ratione earum, quisquam necessitatibus voluptas culpa similique, quia harum acc11042-GettyImages-1164615296.jpeg', 'textLorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat, ratione earum, quisquam necessitatibus voluptas culpa similique, quia harum accum accusamus soluta numquam error non laboriosam! Repudiandae dolorum repellat culpa quaerat.')
  res.render('index')
})

router.post('/', urlencodedParser, function (req, res, next) {
  if (req.body.action === 'getNewsList') {
    res.send(JSON.stringify(NewsDatabase.getNewsList()))
  }
  if (req.body.action === 'removeNews') {
    NewsDatabase.removeNews(req.body.id)
    res.send(JSON.stringify({status: 'OK'}))
  }
})

module.exports = router

