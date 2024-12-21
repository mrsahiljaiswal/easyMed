import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Menu, MenuItem, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Import Firebase auth
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null); // User state
  const [loading, setLoading] = useState(true); // Loading state for user details
  const [anchorEl, setAnchorEl] = useState(null); // Menu anchor state
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((loggedInUser) => {
      setUser(loggedInUser); // Set the user when logged in
      setLoading(false); // Stop loading once user details are fetched
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  // Handle the menu open and close
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle logout
  const handleLogout = () => {
    auth.signOut();
    navigate('/');
    setAnchorEl(null); // Close menu after logout
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
            <span style={{}}>easy</span>Med<span>.</span>
          </Link>
        </Typography>

        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/medicineDelivery" color="inherit">Medicine Delivery</Button>
          <Button component={Link} to="/appointment" color="inherit">Appointment</Button>
          <Button component={Link} to="/aboutus" color="inherit">About Us</Button>

          {/* Profile Avatar */}
          {loading ? (
            <CircularProgress color="inherit" size={30} sx={{ marginLeft: 2 }} />
          ) : user ? (
            <div>
              <Avatar
                alt={user.displayName || 'User'}
                src={user.photoURL || '/default-avatar.png'}
                onClick={handleMenuClick}
                sx={{ cursor: 'pointer' }}
              />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
               
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button component={Link} to="/" color="inherit">
              Login
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
