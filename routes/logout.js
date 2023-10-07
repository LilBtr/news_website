var express = require('express')
const DatabaseManager = require('../helpers/usersDatabase')
const makeid = require('../helpers/makeid')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  const userCookies = req.cookies.user

  if (userCookies !== undefined && userCookies !== null && DatabaseManager.getName(userCookies) != null) {
    res.clearCookie('user')
    res.redirect('/')
  } else {
    res.render('index', { login: 'anonymous', permission: 'anonymous' })
  }
})

module.exports = router

