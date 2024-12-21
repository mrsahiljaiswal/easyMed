import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Import Firebase auth
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <img src="/logo.png" alt="Logo" style={{ height: '40px' }} /> EasyMed
          </Link>
        </Typography>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/medicineDelivery" color="inherit">Medicine Delivery</Button>
          <Button component={Link} to="/appointment" color="inherit">Appointment</Button>
          <Button component={Link} to="/aboutus" color="inherit">About Us</Button>
        </div>
        {user && (
          <div>
            <Avatar
              alt={user.displayName || 'User'}
              src={user.photoURL || "/default-avatar.png"}
              onClick={handleMenuClick}
              sx={{ cursor: 'pointer', marginLeft: 2 }}
            />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
