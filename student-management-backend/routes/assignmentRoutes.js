const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

router.post('/', assignmentController.assignCourseToStudent);
router.get('/', assignmentController.getAssignments);

module.exports = router;
