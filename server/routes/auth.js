const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');

//Register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
