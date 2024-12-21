import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Menu, MenuItem, CircularProgress, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Import Firebase auth
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [user, setUser] = useState(null); // User state
  const [loading, setLoading] = useState(true); // Loading state for user details
  const [anchorEl, setAnchorEl] = useState(null); // Menu anchor state
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer open/close state
  const [showDesktopLinks, setShowDesktopLinks] = useState(true); // State to control visibility of desktop links
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
    navigate('/'); // Redirect to home or login page
    setAnchorEl(null); // Close menu after logout
  };

  // Handle drawer toggle for mobile menu
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
    setShowDesktopLinks(!open); // Hide desktop links when drawer opens
  };

  const menuItems = (
    <div>
      <Button component={Link} to="/home" color="inherit">Home</Button>
      <Button component={Link} to="/KYS" color="inherit">KYS</Button>
      <Button component={Link} to="/MedicineDelivery" color="inherit">Medicine Delivery</Button>
      <Button component={Link} to="/Appointment" color="inherit">Appointment</Button>
      <Button component={Link} to="/Aboutus" color="inherit">About Us</Button>
    </div>
  );

  const mobileMenuItems = (
    <List>
      <ListItem button component={Link} to="/home">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/KYS">
        <ListItemText primary="KYS" />
      </ListItem>
      <ListItem button component={Link} to="/MedicineDelivery">
        <ListItemText primary="Medicine Delivery" />
      </ListItem>
      <ListItem button component={Link} to="/Appointment">
        <ListItemText primary="Appointment" />
      </ListItem>
      <ListItem button component={Link} to="/Aboutus">
        <ListItemText primary="About Us" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }} >
          <Link to="/home" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
          easyMed.</Link>
        </Typography>

       
        <div style={{ display: showDesktopLinks ? 'flex' : 'none', gap: '20px', alignItems: 'center' }}>
          {menuItems}

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

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', sm: 'none' } }} // Only show on mobile screens
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {mobileMenuItems}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
