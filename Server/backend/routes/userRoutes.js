const express = require('express')
const router = express.Router()

const { registerUser, loginUser, self, apply } = require('../controllers/userController')
const { protect } = require('../middleware/authUserMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/self', protect, self)
router.post('/apply', protect, apply)

module.exports = router