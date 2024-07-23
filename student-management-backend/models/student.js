const db = require('../database');

const getAllStudents = (callback) => {
  const sql = 'SELECT * FROM students';
  db.query(sql, callback);
};

const createStudent = (student, callback) => {
  const { name, email, age } = student;
  const sql = 'INSERT INTO students (name, email, age) VALUES (?, ?, ?)';
  db.query(sql, [name, email, age], callback);
};

const updateStudent = (id, student, callback) => {
  const { name, email, age } = student;
  const sql = 'UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?';
  db.query(sql, [name, email, age, id], callback);
};

const deleteStudent = (id, callback) => {
  const sql = 'DELETE FROM students WHERE id = ?';
  db.query(sql, [id], callback);
};

module.exports = {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent
};
