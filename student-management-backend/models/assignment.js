const db = require('../database');

const assignCourseToStudent = (assignment, callback) => {
  const { student_id, course_id } = assignment;
  const sql = 'INSERT INTO student_courses (student_id, course_id) VALUES (?, ?)';
  db.query(sql, [student_id, course_id], callback);
};

const getAssignments = (callback) => {
  const sql = `
    SELECT s.name AS student_name, c.title AS course_title 
    FROM student_courses sc
    JOIN students s ON sc.student_id = s.id
    JOIN courses c ON sc.course_id = c.id
  `;
  db.query(sql, callback);
};

module.exports = {
  assignCourseToStudent,
  getAssignments
};
