// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    name: 'index',
    compnent: [''],

    title: 'Home page',

    data: {},
  })
})

// Підключіть файли роутів
const test = require('./test')
// Підключіть інші файли роутів, якщо є
const auth = require('./auth')

// Об'єднайте файли роутів за потреби
router.use('/', test)
// Використовуйте інші файли роутів, якщо є
router.use('/', auth)

// Експортуємо глобальний роутер
module.exports = router
