const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/list', studentController.listStudents);

module.exports = router;
