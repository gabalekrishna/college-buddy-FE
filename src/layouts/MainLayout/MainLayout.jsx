import { useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Badge,
  useMediaQuery,
  Paper,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/SpaceDashboardOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

const drawerWidth = 260;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 8,
  backgroundColor: alpha(theme.palette.common.black, 0.04),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.06),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.2, 1.2, 1.2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

function DrawerContent() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Toolbar sx={{ px: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src="https://codedthemes.com/wp-content/uploads/2021/09/berry-logo.svg" alt="Berry" width={24} />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Collage-buddy</Typography>
        </Box>
      </Toolbar>
      <Divider />

      <List sx={{ px: 1 }}>
        <ListItem disablePadding>
          <ListItemButton selected sx={{ borderRadius: 1 }}>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Book Store" />
          </ListItemButton>
        </ListItem>

        <Typography variant="caption" sx={{ px: 2, pt: 2, pb: 1, color: 'text.secondary' }}>Pages</Typography>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon><LockOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Authentication" />
            <ExpandMoreIcon fontSize="small" />
          </ListItemButton>
        </ListItem>

        <Typography variant="caption" sx={{ px: 2, pt: 2, pb: 1, color: 'text.secondary' }}>Utilities</Typography>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon><TextFieldsIcon /></ListItemIcon>
            <ListItemText primary="Typography" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon><ColorLensOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Color" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon><LayersOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Shadow" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon><DescriptionOutlinedIcon /></ListItemIcon>
            <ListItemText primary="Documentation" />
            <ChevronRightIcon fontSize="small" />
          </ListItemButton>
        </ListItem>
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ p: 2 }}>
        <Paper elevation={0} sx={{ p: 2, borderRadius: 2, bgcolor: '#eef2f6' }}>
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>Get Extra Space</Typography>
          <Typography variant="caption" color="text.secondary">28/32 GB</Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default function MainLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mdUp = useMediaQuery('(min-width:960px)');

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = <DrawerContent />;

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <CssBaseline />

      {/* App Bar */}
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          ml: { md: `${drawerWidth}px` },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          bgcolor: '#fff',
        }}
      >
        <Toolbar sx={{ gap: 2 }}>
          {!mdUp && (
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton size="small" sx={{ bgcolor: '#eef2f6' }}>
            <TuneIcon />
          </IconButton>

          <IconButton>
            <Badge color="error" variant="dot">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>

          <IconButton>
            <SettingsRoundedIcon />
          </IconButton>

          <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }} aria-label="navigation sidebar">
        {/* Temporary drawer for mobile */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        {/* Permanent drawer for desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRight: '1px solid', borderColor: 'divider' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 2, bgcolor: '#eef2f6', minHeight: '100vh', width: '100%' }}>
        <Toolbar /> {/* spacer for fixed AppBar */}
        {children}
      </Box>
    </Box>
  );
}
