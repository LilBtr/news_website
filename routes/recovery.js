var express = require('express')
const DatabaseManager = require('../helpers/usersDatabase')
const makeid = require('../helpers/makeid')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  const userCookies = req.cookies.user

  if (userCookies !== undefined && userCookies !== null && DatabaseManager.getName(userCookies) != null) {
    res.redirect('/')
  } else {
    res.render('recovery', { login: req.body.login, incorrectLogin: '', password: 'Ждите пароль...' })
  }
})

router.post('/', function (req, res, next) {
  if (DatabaseManager.checkLogin(req.body.login)) {
    if (req.body.login === 'admin') {
      res.render('recovery', { login: req.body.login, incorrectLogin: '', password: 'access denied' })
    } else {
      res.render('recovery', {
        login: req.body.login,
        incorrectLogin: '',
        password: DatabaseManager.getPassword(req.body.login),
      })
    }
  } else {
    res.render('recovery', { login: req.body.login, incorrectLogin: 'visible', password: 'Ждите пароль...' })
  }
})

module.exports = router

