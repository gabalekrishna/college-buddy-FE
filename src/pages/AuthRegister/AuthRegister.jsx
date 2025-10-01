import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Alert,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

export default function AuthRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setfrom] = useState({
    name: '',
    email: '',
    password: '',
    college: '',
    year: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setfrom({ ...form, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = {
      name: form.name.trim() === '',
      email: form.email.trim() === '',
      password: form.password.trim() === '',
      college: form.college.trim() === '',
      year: form.year.trim() === ''
    };
    setErrors(nextErrors);

    const hasError = Object.values(nextErrors).some(Boolean);
    if (hasError) return;

    try {
      setSubmitting(true);
      setSubmitError('');
      setSubmitSuccess('');
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const message = data?.message || 'Signup failed. Please review your details.';
        throw new Error(message);
      }

      setSubmitSuccess('Account created successfully. You can now sign in.');
      // Navigate back to login after short delay to show success
      setTimeout(() => navigate('/'), 800);
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong while signing up.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: '#eef2f6', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Box sx={{ width: '100%', maxWidth: 520, bgcolor: '#fff', borderRadius: 2, boxShadow: '0 8px 24px rgba(0,0,0,0.08)', p: { xs: 3, sm: 4 } }}>
        {/* Logo + Heading */}
        <Box textAlign="center" mb={2}>
          <img src="https://codedthemes.com/wp-content/uploads/2021/09/berry-logo.svg" alt="Berry Logo" width={36} />
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 1, color: 'text.primary' }}>
            Sign up
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Enter your details to continue
          </Typography>
          <Typography variant="subtitle2" sx={{ mt: 2, color: 'text.secondary', fontWeight: 600 }}>
            Sign up with Email address
          </Typography>
        </Box>

        {/* Form */}
        <form noValidate onSubmit={handleSubmit}>
          {/* Name */}
          <FormControl fullWidth margin="normal" error={!!errors.name}>
            <InputLabel required>Full Name</InputLabel>
            <OutlinedInput
              label="Full Name"
              value={form.name}
              onChange={handleChange('name')}
              size="small"
              placeholder="John Doe"
              required
            />
            {errors.name && (
              <Typography variant="caption" color="error">Name is required</Typography>
            )}
          </FormControl>

          {/* Email */}
          <FormControl fullWidth margin="normal" error={!!errors.email}>
            <InputLabel required>Email Address / Username</InputLabel>
            <OutlinedInput
              label="Email Address / Username"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              size="small"
              placeholder="user@example.com"
              required
            />
            {errors.email && (
              <Typography variant="caption" color="error">Email is required</Typography>
            )}
          </FormControl>

          {/* Password */}
          <FormControl fullWidth margin="normal" error={!!errors.password}>
            <InputLabel required>Password</InputLabel>
            <OutlinedInput
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange('password')}
              size="small"
              placeholder="••••••••"
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((s) => !s)} onMouseDown={(e) => e.preventDefault()} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.password && (
              <Typography variant="caption" color="error">Password is required</Typography>
            )}
          </FormControl>

          {/* College */}
          <FormControl fullWidth margin="normal" error={!!errors.college}>
            <InputLabel required>College</InputLabel>
            <OutlinedInput
              label="College"
              value={form.college}
              onChange={handleChange('college')}
              size="small"
              placeholder="Your College Name"
              required
            />
            {errors.college && (
              <Typography variant="caption" color="error">College is required</Typography>
            )}
          </FormControl>

          {/* Year */}
          <FormControl fullWidth margin="normal" error={!!errors.year}>
            <InputLabel required>Year</InputLabel>
            <OutlinedInput
              label="Year"
              value={form.year}
              onChange={handleChange('year')}
              size="small"
              placeholder="e.g., 2nd Year"
              required
            />
            {errors.year && (
              <Typography variant="caption" color="error">Year is required</Typography>
            )}
          </FormControl>

          {/* Terms */}
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label={<Typography variant="body2">Agree with <Typography component={Link} to="#" sx={{ fontWeight: 600, textDecoration: 'underline', display: 'inline', ml: 0.5 }}>Terms & Condition.</Typography></Typography>}
            sx={{ mt: 1 }}
          />

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

          {/* Submit */}
          <Button
            type="submit"
            fullWidth
            size="large"
            sx={{ mt: 2, bgcolor: '#2f5bd1', color: '#fff', '&:hover': { bgcolor: '#274ab3' }, textTransform: 'none', fontWeight: 600 }}
            disabled={submitting}
          >
            {submitting ? 'Signing Up…' : 'Sign Up'}
          </Button>
        </form>

        <Divider sx={{ my: 2 }} />
        <Box textAlign="center">
          <Typography variant="body2">
            Already have an account?{' '}
            <Typography component={Link} to="/" sx={{ color: '#2f5bd1', textDecoration: 'none', fontWeight: 600, display: 'inline' }}>
              Sign In
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
