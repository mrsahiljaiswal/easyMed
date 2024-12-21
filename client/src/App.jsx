import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth'; // Import the Auth component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define a route for the authentication page */}
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
