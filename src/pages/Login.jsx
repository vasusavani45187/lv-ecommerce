import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Link,
  IconButton,
  InputAdornment
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );

    if (matchedUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
      toast.success('Login successful!', { autoClose: 3000 }); // ✅ closes in 3 sec
      navigate('/home');
    } else {
      toast.error('Invalid username or password', { autoClose: 3000 }); // ✅ also 3 sec
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Login to Louis Vuitton
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Box mt={3}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Login
            </Button>
          </Box>

          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              Don’t have an account?{' '}
              <Link href="/signup" underline="hover">
                Sign up
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
