import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Alert,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  Divider
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function AuthLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simple validation
    setEmailError(email.trim() === '');
    setPasswordError(password.trim() === '');

    if (email.trim() === '' || password.trim() === '') return;

    try {
      setSubmitting(true);
      setSubmitError('');
      setSubmitSuccess('');
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const message = data?.message || 'Login failed. Please check your credentials.';
        throw new Error(message);
      }

      // Optionally store token if returned
      if (data?.token) {
        localStorage.setItem('auth_token', data.token);
      }

      setSubmitSuccess('Logged in successfully.');
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong while logging in.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: '#eef2f6', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 520,
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          p: { xs: 3, sm: 4 }
        }}
      >
      {/* Logo */}
      <Box textAlign="center" mb={2}>
        <img src="https://codedthemes.com/wp-content/uploads/2021/09/berry-logo.svg" alt="Berry Logo" width={36} />
        <Typography variant="h4" sx={{ fontWeight: 700, mt: 1, color: 'text.primary' }}>
          Hi, Welcome Back
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Enter your credentials to continue
        </Typography>
      </Box>

      <form noValidate onSubmit={handleLogin}>
        {/* Email */}
        <FormControl fullWidth margin="normal" error={emailError}>
          <InputLabel required>Email Address / Username</InputLabel>
          <OutlinedInput
            label="Email Address / Username"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            required
          />
          {emailError && (
            <Typography variant="caption" color="error">
              Email is required
            </Typography>
          )}
        </FormControl>

        {/* Password */}
        <FormControl fullWidth margin="normal" error={passwordError}>
          <InputLabel required>Password</InputLabel>
          <OutlinedInput
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((show) => !show)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {passwordError && (
            <Typography variant="caption" color="error">
              Password is required
            </Typography>
          )}
        </FormControl>

        {/* Checkbox + Link */}
        <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} color="primary" />}
            label="Keep me logged in"
          />
          <Typography component={Link} to="/forgot-password" sx={{ textDecoration: 'none', fontSize: 14, color: '#2f5bd1' }}>
            Forgot Password?
          </Typography>
        </Grid>

        {/* Alerts */}
        {submitError && (
          <Alert severity="error" sx={{ mt: 1 }}>
            {submitError}
          </Alert>
        )}
        {submitSuccess && (
          <Alert severity="success" sx={{ mt: 1 }}>
            {submitSuccess}
          </Alert>
        )}

        {/* Sign In */}
        <Button
          type="submit"
          fullWidth
          size="large"
          sx={{
            mt: 2,
            bgcolor: '#2f5bd1',
            color: '#fff',
            '&:hover': { bgcolor: '#274ab3' },
            textTransform: 'none',
            fontWeight: 600
          }}
          disabled={submitting}
        >
          {submitting ? 'Signing In…' : 'Sign In'}
        </Button>
      </form>

      {/* Footer */}
      <Divider sx={{ my: 2 }} />
      <Box textAlign="center">
        <Typography variant="body2">
          Don't have an account?{' '}
          <Typography component={Link} to="/register" sx={{ color: '#2f5bd1', textDecoration: 'none', fontWeight: 600, display: 'inline' }}>
            Sign Up
          </Typography>
        </Typography>
      </Box>

      </Box>

      {/* Social buttons (outside card) */}
      {/* <Box sx={{ width: '100%', maxWidth: 520, mt: 2 }}>
        <Grid container spacing={1}>
          {['Firebase', 'Auth0', 'AWS', 'Supabase'].map((provider) => (
            <Grid item xs={6} sm={3} key={provider}>
              <Button
                variant="outlined"
                fullWidth
                size="small"
                sx={{ textTransform: 'none', bgcolor: '#fff', borderColor: '#e6e9ef', color: 'text.primary' }}
              >
                {provider}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </Box>
  );
}
