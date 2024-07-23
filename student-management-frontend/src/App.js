import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import StudentManagement from './components/StudentManagement';
import CourseList from './components/CourseList';
import CourseAssignment from './components/CourseAssignment';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/students" element={<StudentManagement />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/assignments" element={<CourseAssignment />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
