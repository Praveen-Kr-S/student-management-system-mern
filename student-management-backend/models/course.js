const db = require('../database');

const getAllCourses = (callback) => {
  const sql = 'SELECT * FROM courses';
  db.query(sql, callback);
};

const createCourse = (course, callback) => {
  const { title, price } = course;
  const sql = 'INSERT INTO courses (title, price) VALUES (?, ?)';
  db.query(sql, [title, price], callback);
};

const updateCourse = (id, course, callback) => {
  const { title, price } = course;
  const sql = 'UPDATE courses SET title = ?, price = ? WHERE id = ?';
  db.query(sql, [title, price, id], callback);
};

const deleteCourse = (id, callback) => {
  const sql = 'DELETE FROM courses WHERE id = ?';
  db.query(sql, [id], callback);
};

module.exports = {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse
};
