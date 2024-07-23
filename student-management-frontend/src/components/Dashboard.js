import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const [totals, setTotals] = useState({ students: 0, courses: 0 });

  useEffect(() => {
    axios.get('/students')
      .then(response => setTotals(prev => ({ ...prev, students: response.data.length })))
      .catch(error => console.error('Error fetching students:', error));

    axios.get('/courses')
      .then(response => setTotals(prev => ({ ...prev, courses: response.data.length })))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <Container>
      <h1 className="mb-4">Dashboard</h1>
      <Row>
        <Col>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Students</Card.Title>
              <Card.Text>{totals.students}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Courses</Card.Title>
              <Card.Text>{totals.courses}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
