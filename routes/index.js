var express = require('express')
var router = express.Router()

const bodyParser = require('body-parser')
const NewsDatabase = require('../helpers/newsDatabase')
const DatabaseManager = require('../helpers/usersDatabase')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET home page. */
router.get('/', function (req, res, next) {
  const userCookies = req.cookies.user
  const userLogin = DatabaseManager.getName(userCookies)

  if (userCookies !== undefined && userCookies !== null && userLogin !== null) {
    if (userLogin === 'admin') {
      res.render('index', { login: userLogin, permission: 'admin' })
    } else {
      res.render('index', { login: userLogin, permission: 'user' })
    }
  } else {
    res.render('index', { login: 'anonymous', permission: 'anonymous' })
  }
})

router.post('/', urlencodedParser, function (req, res, next) {
  switch (req.body.action) {
    case 'getNewsList':
      res.send(JSON.stringify(NewsDatabase.getNewsList()))
    case 'removeNews':
      NewsDatabase.removeNews(req.body.id)
      res.send(JSON.stringify({ status: 'OK' }))
    case 'getNews':
      res.send(JSON.stringify(NewsDatabase.getNews(req.body.id)))
    default:
      if (typeof req.body['add'] !== 'undefined') {
        NewsDatabase.addNews(req.body.title, req.body.image, req.body.text)
      } else if (typeof req.body['change'] !== 'undefined') {
        NewsDatabase.changeNews(req.body.change, {
          title: req.body.title,
          image: req.body.image,
          text: req.body.text,
        })
      }
  }
  res.redirect('/')
})

module.exports = router

