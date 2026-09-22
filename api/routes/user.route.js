const { Router } = require("express");
const { auth } = require('../middleware/auth')
const { getUsers, userRegister, userLogin, getMe } = require("../controllers/user.controller");
const router = Router()

router.get('/', getUsers)
router.post('/register', userRegister)
router.post('/login', userLogin)
router.get('/me', auth, getMe)

module.exports = router
