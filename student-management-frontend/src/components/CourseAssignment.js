import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Table } from 'react-bootstrap';

const CourseAssignment = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios.get('/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));

    axios.get('/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));

    fetchAssignments();
  }, []);

  const fetchAssignments = () => {
    axios.get('/assignments')
      .then(response => setAssignments(response.data))
      .catch(error => console.error('Error fetching assignments:', error));
  };

  const handleAssignCourse = () => {
    axios.post('/assignments', { student_id: studentId, course_id: courseId })
      .then(response => {
        console.log('Course assigned:', response.data);
        fetchAssignments(); // Fetch the updated assignments
      })
      .catch(error => console.error('Error assigning course:', error));
  };

  return (
    <Container>
      <h1 className="mb-4">Assign Course to Student</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Student</Form.Label>
          <Form.Control as="select" value={studentId} onChange={(e) => setStudentId(e.target.value)}>
            <option value="">Select Student</option>
            {students.map(student => (
              <option key={student.id} value={student.id}>{student.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Course</Form.Label>
          <Form.Control as="select" value={courseId} onChange={(e) => setCourseId(e.target.value)}>
            <option value="">Select Course</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>{course.title}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={handleAssignCourse}>Assign Course</Button>
      </Form>

      <h2 className="mt-4">Assigned Courses</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Student</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map(assignment => (
            <tr key={assignment.id}>
              <td>{assignment.student_name}</td>
              <td>{assignment.course_title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CourseAssignment;
