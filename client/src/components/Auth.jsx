import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, Alert, Paper, Avatar, CircularProgress } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Auth = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [googleUser, setGoogleUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  
  // Utility to clear error messages after 5 seconds
  const clearError = () => setTimeout(() => setError(''), 5000);

  // Handle user registration
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error message
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate('/'); // Redirect to home after registration
    } catch (error) {
      setError(error.message);
      clearError();
    } finally {
      setLoading(false);
    }
  };

  // Handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error message
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate('/'); // Redirect to home after login
    } catch (error) {
      setError(error.message);
      clearError();
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(''); // Reset error message
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);
      setGoogleUser(user);
      navigate('/'); // Redirect to home after Google Sign-In
    } catch (error) {
      setError(error.message);
      clearError();
    } finally {
      setLoading(false);
    }
  };

  return (

    
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" gutterBottom>
            {isRegistering ? 'Register' : 'Login'}
          </Typography>

          {/* Registration/Login Form */}
          <form onSubmit={isRegistering ? handleRegister : handleLogin} style={{ width: '100%' }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ marginTop: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : isRegistering ? 'Register' : 'Login'}
            </Button>
          </form>

          {/* Error Alert */}
          {error && (
            <Alert severity="error" sx={{ marginTop: 2 }}>
              {error}
            </Alert>
          )}

          {/* Google Sign-In */}
          <Box sx={{ marginTop: 2 }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleGoogleSignIn}
              fullWidth
              disabled={loading}
            >
              {googleUser ? (
                <>
                  <Avatar
                    src={googleUser.photoURL}
                    alt={googleUser.displayName}
                    sx={{ width: 24, height: 24, marginRight: 1 }}
                  />
                  {googleUser.displayName}
                </>
              ) : (
                'Sign in with Google'
              )}
            </Button>
          </Box>

          {/* Toggle Register/Login */}
          <Box sx={{ marginTop: 2 }}>
            <Button
              variant="text"
              onClick={() => setIsRegistering(!isRegistering)}
              fullWidth
            >
              {isRegistering ? 'Already have an account? Login' : 'Don’t have an account? Register'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Auth;
