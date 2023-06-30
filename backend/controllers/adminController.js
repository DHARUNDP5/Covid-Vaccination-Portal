const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Centre = require('../models/centreModel')
const Apply = require('../models/applyModel')

const loginAdmin = asyncHandler(async (req, res) => {

  const { email, password } = req.body

  if(!email || !password){
    res.status(400)
    throw new Error('Invalid credentials (Check Email and Password)')
  }

  if ((email === process.env.adminEmail) && (password === process.env.adminPassword)) {
    res.json({
      email: email,
      token: generateToken(process.env.adminId),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials (Check Email and Password)')
  }
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

const addCentre = asyncHandler(async (req, res) => {

  const { name, state, district, cityName, pincode, doorNumber, opening, closing} = req.body

  if(!name || !state || !district || !cityName || !pincode || !doorNumber || !opening || !closing){
    res.status(400)
    throw new Error('Please add all fields')
  }

  const centre = await Centre.create(req.body)

  if (centre) {
    res.status(201).json({ centre })
  } else {
    res.status(400)
    throw new Error('Invalid centre data')
  }

})

const removeCentre = asyncHandler(async (req, res) => {

  const centre = await Centre.findById( req.params.id )

  if (centre) {
    await centre.remove()
    res.status(200).json({ id: req.params.id })
  } else {
    res.status(400)
    throw new Error('Invalid centre data')
  }

})

const centreDetails= asyncHandler(async (req, res) => {

  const centre = await Centre.find().select('-_id')

  res.status(200).json({ centre })

})

const dosageDetails= asyncHandler(async (req, res) => {

  const apply = await Apply.aggregate([{ $group : { _id: '$centre', count: {$sum : 1} } }])

  res.status(200).json({ apply})

})

module.exports = { loginAdmin, addCentre, removeCentre, centreDetails, dosageDetails }