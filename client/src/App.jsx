import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './layouts/MainLayout'; // Import Layout component
import Auth from './components/Auth'; // Import Auth component
import { auth } from './firebase'; // Import Firebase auth
import Home from './pages/Home';
const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <AuthHandler setUser={setUser} />
      <Routes>
        <Route path="/" element={<Auth setUser={setUser} />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

const AuthHandler = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
      if (loggedInUser) {
        setUser(loggedInUser);
        navigate('/home');
      } else {
        setUser(null);
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate, setUser]);

  return null;
};

export default App;
