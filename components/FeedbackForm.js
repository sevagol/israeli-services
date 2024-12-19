// components/FeedbackForm.js
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const FeedbackForm = ({ open, onClose }) => {
  const [feedback, setFeedback] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!feedback.trim()) {
      setError('Пожалуйста, оставьте отзыв.');
      return;
    }

    try {
      await axios.post('/api/feedback', { feedback });
      setFeedback('');
      setSnackbarOpen(true);
      onClose();
    } catch (err) {
      setError('Произошла ошибка при отправке отзыва. Пожалуйста, попробуйте позже.');
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleCloseDialog = () => {
    setFeedback('');
    setError('');
    onClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ position: 'relative' }}>
          Оставить отзыв
          <IconButton
            aria-label="закрыть"
            onClick={handleCloseDialog}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            label="Ваш отзыв"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            error={Boolean(error)}
            helperText={error}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Отмена</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Отправить
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Спасибо за ваш отзыв!
        </Alert>
      </Snackbar>
    </>
  );
};

export default FeedbackForm;
