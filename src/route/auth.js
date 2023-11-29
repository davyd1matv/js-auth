// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

const { User } = require('../class/user')

router.get('/singup', function (req, res) {
  return res.render('singup', {
    name: 'singup',
    component: ['back-button', 'field', 'field-password'],

    title: 'Singup page',

    data: {
      role: [
        { value: User.USER_ROLE.USER, text: 'Користвувач' },
        {
          value: User.USER_ROLE.ADMIN,
          text: 'Адміністратор',
        },
        {
          value: User.USER_ROLE.DEVELOPER,
          text: 'Розробник',
        },
      ],
    },
  })
})

// Підключіть файли роутів

// const test = require('./test')

// Підключіть інші файли роутів, якщо є
// const auth = require('./auth')

// Об'єднайте файли роутів за потреби
// router.use('/', auth)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
