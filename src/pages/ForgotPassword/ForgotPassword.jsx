import { Box, Button, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(email.trim() === '');
    if (email.trim()) {
      console.log('Requesting password reset for:', email);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: '#eef2f6', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Box sx={{ width: '100%', maxWidth: 520, bgcolor: '#fff', borderRadius: 2, boxShadow: '0 8px 24px rgba(0,0,0,0.08)', p: { xs: 3, sm: 4 } }}>
        <Box textAlign="center" mb={2}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>Forgot Password</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>Enter your email to receive reset instructions</Typography>
        </Box>
        <form onSubmit={handleSubmit} noValidate>
          <FormControl fullWidth margin="normal" error={error}>
            <InputLabel required>Email Address</InputLabel>
            <OutlinedInput label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} size="small" required />
            {error && (
              <Typography variant="caption" color="error">Email is required</Typography>
            )}
          </FormControl>
          <Button type="submit" fullWidth size="large" sx={{ mt: 2, bgcolor: '#2f5bd1', color: '#fff', '&:hover': { bgcolor: '#274ab3' }, textTransform: 'none', fontWeight: 600 }}>
            Send Reset Link
          </Button>
        </form>
      </Box>
    </Box>
  );
}
