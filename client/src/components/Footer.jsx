import React from 'react';
import { Box, Container, Grid, Typography, Link, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, padding: '40px 0', marginTop: 'auto' }}>
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          {/* Left Side: Logo and Company Name */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary">
              <Link href="/" color="text.primary" style={{ textDecoration: 'none' }}>
                EasyMed
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
              Your health, our priority. Fast and reliable healthcare services.
            </Typography>
          </Grid>

          {/* Center: Useful Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" sx={{ marginBottom: '15px' }}>
              Useful Links
            </Typography>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li><Link href="/aboutus" color="text.primary" sx={{ textDecoration: 'none' }}>About Us</Link></li>
              <li><Link href="/appointment" color="text.primary" sx={{ textDecoration: 'none' }}>Appointments</Link></li>
              <li><Link href="/medicinedelivery" color="text.primary" sx={{ textDecoration: 'none' }}>Medicine Delivery</Link></li>
              <li><Link href="/home" color="text.primary" sx={{ textDecoration: 'none' }}>Home</Link></li>
              <li><Link href="/kys" color="text.primary" sx={{ textDecoration: 'none' }}>Know Your Symptoms</Link></li>
              <li><Link href="/cart" color="text.primary" sx={{ textDecoration: 'none' }}>Cart</Link></li>
              <li><Link href="/donate" color="text.primary" sx={{ textDecoration: 'none' }}>Donate</Link></li>
            </ul>
          </Grid>

          {/* Right Side: Contact Information */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" sx={{ marginBottom: '15px' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link href="mailto:support@easymed.com" color="text.secondary" sx={{ textDecoration: 'none' }}>
                support@easymed.com
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: '5px' }}>
              +1 800 123 4567
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Copyright */}
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} easyMed. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
