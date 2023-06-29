const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Apply = require('../models/applyModel')
const Centre = require('../models/centreModel')

const registerUser = asyncHandler(async (req, res) => {

  const { name, email, dob, password, aadharNumber, photo, mobileNumber, state, district, cityName, pincode, doorNumber } = req.body

  if (!name || !email || !dob || !password || !aadharNumber || !photo || !mobileNumber || !state || !district || !cityName || !pincode || !doorNumber) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  const userExistsEmail = await User.findOne({ email })

  if (userExistsEmail) {
    res.status(400)
    throw new Error('User email id already exists')
  }

  const userExistsAadhar = await User.findOne({ aadharNumber })

  if (userExistsAadhar) {
    res.status(400)
    throw new Error('User aadhar number already exists')
  }

  const userExistsMobile = await User.findOne({ mobileNumber })

  if (userExistsMobile) {
    res.status(400)
    throw new Error('User mobile number already exists')
  }
  
  var rePassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

  if (!rePassword.test(password)) {
    res.status(400)
    throw new Error('Password does not satisfy the given conditions')
  }

  var reEmail = /\S+@\S+\.\S+/

  if (!reEmail.test(email)) {
    res.status(400)
    throw new Error('Email is not valid')
  }

  if (aadharNumber.length!=12 || !aadharNumber.isNumber()) {
    res.status(400)
    throw new Error('Aadhar number is invalid')
  }

  if (mobileNumber.length!=10 || !mobileNumber.isNumber()) {
    res.status(400)
    throw new Error('Only Indian mobile numbers with 10 digit is allowed')
  }

  if (pincode.length!=10 || !pincode.isNumber()) {
    res.status(400)
    throw new Error('Pincode must be a 6-digit number')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({ name, email, dob, password: hashedPassword, aadharNumber, photo, mobileNumber, state, district, cityName, pincode, doorNumber })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }

})

const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials (Check Email and Password)')
  }
})

const self = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

const apply = asyncHandler(async (req, res) => {

  const { date, centreId } = req.body

  if(!date || !centreId){
    res.status(400)
    throw new Error('Please add all details')
  }

  const user = await Apply.find({ $and: [ { user: req.user.id }, { date: date } ] })

  if(user.length>0){
    res.status(400)
    throw new Error('User has already applied for this date')
  }

  const count = await Apply.find({ date: date}).count()

  if(count>=10){
    res.status(400)
    throw new Error('The slot for this day has been filled')
  }

  const centreIdValid = await Centre.find({ _id: centreId })

  if(!centreIdValid){
    res.status(400)
    throw new Error('The centre is invalid')
  }

  const apply = await Apply.create({ user:req.user.id, centre: centreId, date: date })

  if (apply) {
    res.json({ date: apply.date })
  } else {
    res.status(400)
    throw new Error('Invalid application data')
  }
})

module.exports = { registerUser, loginUser, self, apply }