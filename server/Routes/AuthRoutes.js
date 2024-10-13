const express = require('express')
const router = express.Router()
const User = require('../Models/Users')
const {registerUser,loginUser, dashboard} = require('../Controllers/AuthController')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/dashboard',dashboard, async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  })

module.exports = router
