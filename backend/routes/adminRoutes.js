const express = require('express')
const router = express.Router()

const { loginAdmin, addCentre, removeCentre, dosageDetails, centreDetails } = require('../controllers/adminController')
const { protectAdmin } = require('../middleware/authAdminMiddleware')

router.post('/login', loginAdmin)
router.post('/addCentre', protectAdmin, addCentre)
router.delete('/removeCentre/:id', protectAdmin, removeCentre)
router.get('/dosageDetails', protectAdmin, dosageDetails)
router.get('/centreDetails', centreDetails)

module.exports = router