import React from 'react';
import { Container, Grid, Typography, Button, Box, Link, Card, CardContent, CardMedia } from '@mui/material';
import heroImage from '../assets/hero2.jpg'; // Import the hero image
import hero2Image from '../assets/donate.jpg'; // Import the hero image
import consultantImage from '../assets/consultant.jpg'; // Import the consultant image
import emergencyImage from '../assets/emergency.jpg'; // Import the emergency image
import healthImage from '../assets/health.jpg'; // Import the health image
import medicineImage from '../assets/medicine.jpg'; // Import the medicine image
import painReliefImage from '../assets/spray.jpg'; // Import the pain relief image
import coughSyrupImage from '../assets/coughsyrup.webp'; // Import the cough syrup image
import antibioticImage from '../assets/antibiotic.jpg'; // Import the antibiotic image
import vitaminsImage from '../assets/vitamin.webp'; // Import the vitamins image

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition:'center',
        backgroundSize: 'cover',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        flexDirection: 'column',
        padding: '0 20px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Add a dark overlay
        backgroundBlendMode: 'darken'
      }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Welcome to EasyMed
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          Your health, our priority. Fast and reliable healthcare services.
        </Typography>
        <Button variant="contained" color="primary" component={Link} href="/appointment" sx={{ padding: '10px 20px' }}>
          Book an Appointment
        </Button>
      </Box>

      {/* Our Services Section */}
      <Container sx={{ marginTop: '50px' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '30px', color: 'text.primary' }}>
          Our Services
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {/* Service Boxes */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={consultantImage}
                alt="Consultation"
                sx={{ height: 140, width: '100%' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: 'primary.main' }}>Consultation</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Get expert consultations from doctors at your convenience.</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={medicineImage}
                alt="Medicine Delivery"
                sx={{ height: 140, width: '100%' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: 'primary.main' }}>Medicine Delivery</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Fast and reliable delivery of your prescribed medicines.</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={healthImage}
                alt="Health Monitoring"
                sx={{ height: 140, width: '100%' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: 'primary.main' }}>Health Monitoring</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Monitor your health with our advanced tools and support.</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={emergencyImage}
                alt="Emergency Support"
                sx={{ height: 140, width: '100%' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: 'primary.main' }}>Emergency Support</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Get immediate support during emergencies anytime, anywhere.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Medicinal Products Section with Auto-Scroll */}
      <Container sx={{ marginTop: '50px' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '30px', color: 'text.primary' }}>
          Our Medicinal Products
        </Typography>
        <Box sx={{ overflowX: 'auto', display: 'flex', gap: 3 }}>
          {/* Sample Product Cards */}
          <Card sx={{ minWidth: 250, maxWidth: 250, boxShadow: 3 }}>
            <CardMedia
              component="img"
              image={painReliefImage}
              alt="Pain Reliever"
              sx={{ height: 240, width: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ color: 'primary.main' }}>Pain Reliever</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>$25.99</Typography>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 250, maxWidth: 250, boxShadow: 3 }}>
            <CardMedia
              component="img"
              image={coughSyrupImage}
              alt="Cough Syrup"
              sx={{ height: 240, width: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ color: 'primary.main' }}>Cough Syrup</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>$15.99</Typography>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 250, maxWidth: 250, boxShadow: 3 }}>
            <CardMedia
              component="img"
              image={antibioticImage}
              alt="Antibiotics"
              sx={{ height: 240, width: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ color: 'primary.main' }}>Antibiotics</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>$30.99</Typography>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 250, maxWidth: 250, boxShadow: 3 }}>
            <CardMedia
              component="img"
              image={vitaminsImage}
              alt="Vitamins"
              sx={{ height: 240, width: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            
            <CardContent>
              <Typography variant="h6" sx={{ color: 'primary.main' }}>Vitamins</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>$10.99</Typography>
            </CardContent>
          </Card>

         <Card sx={{ minWidth: 250, maxWidth: 250, boxShadow: 3 }}>
            <CardMedia
              component="img"
              image={painReliefImage}
              alt="Pain Reliever"
              sx={{ height: 240, width: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ color: 'primary.main' }}>Pain Reliever</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>$25.99</Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>

      {/* Donate Poster */}
      <Box sx={{
        backgroundImage: `url(${hero2Image})`,
        backgroundPosition:'center',
        backgroundSize: 'cover',
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'text.primary',
        textAlign: 'center',
        marginTop: '50px',
        flexDirection: 'column',
        padding: '0 20px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Add a dark overlay
        backgroundBlendMode: 'darken'
      }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 , color: "white"}}>
          Support Our Cause
        </Typography>
        <Typography variant="h6"  sx={{ marginBottom: 3 , color: "white" }}>
          Your donations help us provide better healthcare services. Contribute today!
        </Typography>
        <Button variant="contained" color="primary" component={Link} href="/donate" sx={{ padding: '10px 20px' }}>
          Donate Now
        </Button>
      </Box>

    </div>
  );
};

export default Home;
