import { Box, Paper, Typography } from '@mui/material';
import MainLayout from '../../layouts/MainLayout/MainLayout';

export default function Dashboard() {
  return (
    <MainLayout>
      {/* Top spacing is handled by MainLayout Toolbar spacer */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 360px' }, gap: 2 }}>
        {/* Main content column */}
        <Box>
          {/* Large primary card (e.g., Total Growth chart area placeholder) */}
          <Paper elevation={0} sx={{ p: 2, borderRadius: 2, bgcolor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Primary Card</Typography>
            <Typography variant="h5" sx={{ mt: 0.5 }}>Main Content Placeholder</Typography>
            <Box sx={{ height: 420, mt: 2, bgcolor: '#f6f8fb', borderRadius: 1 }} />
          </Paper>

          {/* Secondary grid under the main card */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2, mt: 2 }}>
            <Paper elevation={0} sx={{ p: 2, borderRadius: 2, bgcolor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', minHeight: 180 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Secondary Card A</Typography>
              <Box sx={{ height: 120, mt: 2, bgcolor: '#f6f8fb', borderRadius: 1 }} />
            </Paper>
            <Paper elevation={0} sx={{ p: 2, borderRadius: 2, bgcolor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', minHeight: 180 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Secondary Card B</Typography>
              <Box sx={{ height: 120, mt: 2, bgcolor: '#f6f8fb', borderRadius: 1 }} />
            </Paper>
          </Box>
        </Box>

        {/* Right sidebar column */}
        <Box>
          <Paper elevation={0} sx={{ p: 2, borderRadius: 2, bgcolor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', minHeight: 480 }}>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Right Sidebar</Typography>
            <Typography variant="h6" sx={{ mt: 0.5 }}>List/Widgets Placeholder</Typography>
            <Box sx={{ mt: 2, display: 'grid', gap: 1.5 }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Box key={i} sx={{ p: 1.5, borderRadius: 1, bgcolor: '#f6f8fb', minHeight: 56 }} />
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </MainLayout>
  );
}
