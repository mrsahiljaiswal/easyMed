import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Auth from './components/Auth'; // Import Auth component
import Dashboard from './components/dashboard'; // Import Dashboard component
import { auth } from './firebase'; // Import Firebase auth

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Use useEffect to handle the auth state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
      if (loggedInUser) {
        setUser(loggedInUser);
        navigate('/dashboard');
      } else {
        setUser(null);
        navigate('/');
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, [navigate]);  // Dependency array ensures navigate is available

  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
      </Routes>
    </div>
  );
};

const RootApp = () => {
  return (
    <Router> {/* Router is wrapping the entire app */}
      <App />
    </Router>
  );
};

export default RootApp;
