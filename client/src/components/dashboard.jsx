import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import Firebase auth

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  // Function to handle log out
  const handleLogout = async () => {
    try {
      await auth.signOut();  // Sign out the user
      navigate('/');  // Redirect to login page
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div>
      <h1>Welcome to Dashboard, {user.displayName || 'User'}!</h1>
      <p>Email: {user.email}</p>
      {user.photoURL && <img src={user.photoURL} alt="User Avatar" />}
      
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
