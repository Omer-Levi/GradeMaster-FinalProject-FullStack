const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

router.post('/create', classController.createClass);
router.get('/list', classController.listClasses);

module.exports = router;
