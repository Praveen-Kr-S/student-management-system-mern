const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');
const cors = require('cors');

const db = require('./database');

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/assignments', assignmentRoutes);

// Route to get assignments with student and course details
app.get('/assignments', async (req, res) => {
  const query = `
    SELECT sc.id, s.name AS student_name, c.title AS course_title
    FROM student_courses sc
    JOIN students s ON sc.student_id = s.id
    JOIN courses c ON sc.course_id = c.id
  `;
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});



// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
