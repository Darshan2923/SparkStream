const express = require('express')
const { registerUser } = require('../controllers/userControllers')

const router = express.Router();

router.route('/login').post(authUser);

router.post('/', registerUser);

module.exports = router;