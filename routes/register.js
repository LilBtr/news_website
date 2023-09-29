var express = require('express')
const DatabaseManager = require('../helpers/databasemanager')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('register', { login: '', similarLogin: '', agreement: '' })
})

router.post('/', function (req, res, next) {
  const login = req.body.login
  const password = req.body.password
  const confirmPassword = req.body.confirmPassword

  if (login.length >= 3) {
    if (DatabaseManager.checkLogin(login)) {
      res.render('register', { login: login, similarLogin: 'visible', agreement: '' })
    } else {
      if (password.length >= 8) {
        if (password === confirmPassword) {
          if (req.body.agreement === 'on') {
            DatabaseManager.addUser(login, password)
            res.redirect('/login')
          } else {
            res.render('register', {
              login: login,
              similarLogin: '',
              agreement: 'visible',
            })
          }
        } else {
          res.render('register', { login: login, similarLogin: '', agreement: '' })
        }
      } else {
        res.render('register', { login: login, similarLogin: '', agreement: '' })
      }
    }
  } else {
    res.render('register', { login: login, similarLogin: 'visible', agreement: '' })
  }
})

module.exports = router

