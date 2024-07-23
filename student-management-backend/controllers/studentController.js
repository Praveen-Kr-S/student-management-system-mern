const studentModel = require('../models/student');

exports.getAllStudents = (req, res) => {
  studentModel.getAllStudents((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createStudent = (req, res) => {
  const student = req.body;
  studentModel.createStudent(student, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, ...student });
  });
};

exports.updateStudent = (req, res) => {
  const id = req.params.id;
  const student = req.body;
  studentModel.updateStudent(id, student, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, ...student });
  });
};

exports.deleteStudent = (req, res) => {
  const id = req.params.id;
  studentModel.deleteStudent(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Student deleted' });
  });
};
