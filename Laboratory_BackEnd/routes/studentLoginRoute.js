const express = require('express');
const router = express.Router();

const getStudent = require('../controllers/studentLoginController');

router.route('/:username').get(getStudent);

module.exports = router;