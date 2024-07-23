const assignmentModel = require('../models/assignment');

exports.assignCourseToStudent = (req, res) => {
  const assignment = req.body;
  assignmentModel.assignCourseToStudent(assignment, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, ...assignment });
  });
};

exports.getAssignments = (req, res) => {
  assignmentModel.getAssignments((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};