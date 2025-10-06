import React, { useState } from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Stack,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 500 },
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const conditions = ['New', 'Like New', 'Good', 'Fair', 'Poor'];

const SellBookModal = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    course: '',
    description: '',
    condition: '',
    price: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.price) {
      alert('Title and Price are required');
      return;
    }

    onSubmit(formData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" gutterBottom>
          Sell a Book
        </Typography>

        <Stack spacing={2}>
          <TextField
            required
            name="title"
            label="Title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            name="author"
            label="Author"
            value={formData.author}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            name="course"
            label="Course"
            value={formData.course}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />

          <TextField
            name="condition"
            label="Condition"
            value={formData.condition}
            onChange={handleChange}
            select
            fullWidth
          >
            {conditions.map((cond) => (
              <MenuItem key={cond} value={cond}>
                {cond}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            required
            name="price"
            label="Price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            fullWidth
          />

          <Button variant="outlined" component="label">
            Upload Image
            <input
              type="file"
              name="image"
              accept="image/*"
              hidden
              onChange={handleChange}
            />
          </Button>

          {formData.image && (
            <Typography variant="body2">{formData.image.name}</Typography>
          )}

          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default SellBookModal;
