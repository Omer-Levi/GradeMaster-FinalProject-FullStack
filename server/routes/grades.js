const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

router.post('/save', gradeController.saveGrades);
router.get('/export', gradeController.exportGrades);

module.exports = router;
