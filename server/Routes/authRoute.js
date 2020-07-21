const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../DBConnect');
const jwt = require('jsonwebtoken');

router.post(`/login`, async (req, res, next) => {
  try {
    const { inputEmail, inputPassword } = req.body;

    console.log(inputEmail, inputPassword);

    const query = {
      text: 'select * from users where email = $1',
      values: [inputEmail],
    };
    const found = await pool.query(query);

    const { user_id, email, first_name, password } = found.rows[0];

    const match = await bcrypt.compare(inputPassword, password);

    if (match) {
      const payload = {
        user_id,
        email,
        first_name,
      };

      const token = await jwt.sign(payload, process.env.JWT_SECRET);

      res.header('Authorization', `bearer${token}`).json({ user: payload });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(504);
  }
});

module.exports = router;
