const courseModel = require('../models/course');

exports.getAllCourses = (req, res) => {
  courseModel.getAllCourses((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createCourse = (req, res) => {
  const course = req.body;
  courseModel.createCourse(course, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, ...course });
  });
};

exports.updateCourse = (req, res) => {
  const id = req.params.id;
  const course = req.body;
  courseModel.updateCourse(id, course, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, ...course });
  });
};

exports.deleteCourse = (req, res) => {
  const id = req.params.id;
  courseModel.deleteCourse(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Course deleted' });
  });
};
