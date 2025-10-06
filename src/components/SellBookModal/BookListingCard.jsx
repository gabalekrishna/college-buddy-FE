import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Avatar,
  Divider,
  Button,
  Stack
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SellIcon from '@mui/icons-material/Sell';

const BookListingCard = ({ listing }) => {
  const {
    title,
    author,
    course,
    description,
    condition,
    price,
    imageUrl,
    seller,
    isSold,
    createdAt,
  } = listing;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        position: 'relative',
        bgcolor: '#fff',
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        sx={{
          width: { xs: '100%', sm: 150 },
          height: 200,
          objectFit: 'cover',
          borderRadius: 2,
        }}
      />

      {/* Content */}
      <Box sx={{ flex: 1 }}>
        <CardContent sx={{ p: 0 }}>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>

          <Typography variant="subtitle2" color="text.secondary">
            by {author} {course && ` | Course: ${course}`}
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            {description?.substring(0, 120)}{description?.length > 120 && '...'}
          </Typography>

          {/* Tags */}
          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <Chip label={`Condition: ${condition}`} size="small" color="info" />
            <Chip
              icon={<SellIcon />}
              label={`₹${price}`}
              color="success"
              size="small"
            />
            {isSold && (
              <Chip
                label="Sold"
                size="small"
                color="error"
                variant="outlined"
              />
            )}
          </Stack>
        </CardContent>

        <Divider sx={{ my: 2 }} />

        {/* Seller Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar>{seller.name?.charAt(0)}</Avatar>
          <Box>
            <Typography fontWeight={500}>{seller.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              <SchoolIcon fontSize="small" sx={{ mr: 0.5 }} />
              {seller.college} | Year: {seller.year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <CalendarTodayIcon fontSize="small" sx={{ mr: 0.5 }} />
              Posted on {formatDate(createdAt)}
            </Typography>
            {seller.isVerified && (
              <Chip
                label="Verified Seller"
                size="small"
                color="primary"
                icon={<CheckCircleIcon />}
                sx={{ mt: 0.5 }}
              />
            )}
          </Box>
        </Box>

        {/* Optional CTA */}
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            disabled={isSold}
            fullWidth
          >
            {isSold ? 'Sold Out' : 'View Details'}
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default BookListingCard;
