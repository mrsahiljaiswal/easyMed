import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Menu, MenuItem, CircularProgress, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Import Firebase auth
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [user, setUser] = useState(null); // User state
  const [loading, setLoading] = useState(true); // Loading state for user details
  const [anchorEl, setAnchorEl] = useState(null); // Menu anchor state
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer open/close state
  const navigate = useNavigate();

  // Check if the screen size is small (useMediaQuery hook)
  const isMobile = useMediaQuery('(max-width: 600px)'); 

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
      {/* Profile Section in Sidebar */}
      {loading ? (
        <CircularProgress color="inherit" size={30} sx={{ marginLeft: 2 }} />
      ) : user ? (
        <ListItem button onClick={handleMenuClick}>
          <Avatar
            alt={user.displayName || 'User'}
            src={user.photoURL || '/default-avatar.png'}
            sx={{ marginRight: 2 }}
          />
          <ListItemText primary="Profile" />
        </ListItem>
      ) : (
        <ListItem button component={Link} to="/">
          <ListItemText primary="Login" />
        </ListItem>
      )}
      
      {/* Menu items */}
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

      {/* Logout Button in Sidebar */}
      {user && (
        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      )}
    </List>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }} >
          <Link to="/home" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
            easyMed.
          </Link>
        </Typography>

        {/* Desktop Menu (NavLinks) */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
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
        )}

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
          sx={{
            width: '300px', // Increased sidebar width
            '& .MuiDrawer-paper': {
              width: '300px', // Same width for the paper (sidebar)
            }
          }}
        >
          {mobileMenuItems}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
