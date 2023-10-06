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
    res.render('login', { login: '', incorrectPassword: '' })
  }
})

router.post('/', function (req, res, next) {
  const login = req.body.login
  const password = req.body.password

  if (DatabaseManager.checkLogin(login)) {
    if (DatabaseManager.checkUser(login, password)) {
      if (req.body.rememberMe === 'on') {
        const id = makeid(20)
        DatabaseManager.setID(login, password, login + id)
        res.cookie('user', login + id)
        res.redirect('/login')
      } else {
        res.send('You are Authorized')
      }
    } else {
      res.render('login', { login: login, incorrectPassword: 'visible' })
    }
  } else {
    res.render('login', { login: login, incorrectPassword: '' })
  }
})

module.exports = router

