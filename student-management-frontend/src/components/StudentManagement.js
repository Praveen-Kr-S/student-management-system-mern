import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <Container>
      <h1 className="mb-4">Student Management</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StudentManagement;
