// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    name: 'index',
    compnent: [''],

    title: 'Index page',

    data: {},
  })
})

router.get('/home', function (req, res) {
  res.render('home', {
    name: 'home',
    compnent: [''],

    title: 'Home page',

    data: {},
  })
})

router.get('/logout', function (req, res) {
  res.render('logout', {
    name: 'logout',
    compnent: [''],

    title: 'Logout page',

    data: {},
  })
})

// Підключіть файли роутів
const test = require('./test')
// Підключіть інші файли роутів, якщо є
const auth = require('./auth')

const user = require('./user')

// Об'єднайте файли роутів за потреби
router.use('/', test)
// Використовуйте інші файли роутів, якщо є
router.use('/', auth)

router.use('/', user)

// Експортуємо глобальний роутер
module.exports = router
