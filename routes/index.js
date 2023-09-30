var express = require('express')
var router = express.Router()

const bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
})

router.post('/', urlencodedParser, function (req, res, next) {
  res.send(req.body)
})

module.exports = router

