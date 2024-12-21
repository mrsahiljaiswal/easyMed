import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', marginTop: 'auto' }}>
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          {/* Left Side: Logo and Company Name */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit">
              <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
                <img src="/logo.png" alt="EasyMed Logo" style={{ height: '40px', marginRight: '10px' }} />
                EasyMed
              </Link>
            </Typography>
            <Typography variant="body2" color="inherit" sx={{ marginTop: '10px' }}>
              Your health, our priority. Fast and reliable healthcare services.
            </Typography>
          </Grid>

          {/* Center: Useful Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" sx={{ marginBottom: '15px' }}>
              Useful Links
            </Typography>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li><Link href="/aboutus" color="inherit" sx={{ textDecoration: 'none' }}>About Us</Link></li>
              <li><Link href="/appointment" color="inherit" sx={{ textDecoration: 'none' }}>Appointments</Link></li>
              <li><Link href="/medicineDelivery" color="inherit" sx={{ textDecoration: 'none' }}>Medicine Delivery</Link></li>
            </ul>
          </Grid>

          {/* Right Side: Contact Information */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" sx={{ marginBottom: '15px' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="inherit">
              <Link href="mailto:support@easymed.com" color="inherit" sx={{ textDecoration: 'none' }}>
                support@easymed.com
              </Link>
            </Typography>
            <Typography variant="body2" color="inherit" sx={{ marginTop: '5px' }}>
              +1 800 123 4567
            </Typography>
          </Grid>
        </Grid>
        {/* Bottom Copyright */}
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} EasyMed. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
