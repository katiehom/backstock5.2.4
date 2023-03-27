const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
// const { ensureAuth } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/about', homeController.getAbout)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
// router.get('/account', ensureAuth, todosController.getAccount)
// router.put('/account/:id', ensureAuth, todosController.editAccount)

module.exports = router