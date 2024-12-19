// pages/index.js
import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import ServiceTable from '../components/ServiceTable';
import CallFlowDialog from '../components/CallFlowDialog';
import Footer from '../components/Footer';
import FeedbackForm from '../components/FeedbackForm'; // Компонент формы отзыва
import { services } from '../data/services'; // Импортируем services

const Home = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false); // Состояние для формы отзыва

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setSelectedService(null);
  };

  const handleFeedbackOpen = () => {
    setFeedbackOpen(true);
  };

  const handleFeedbackClose = () => {
    setFeedbackOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Структура израильских автоответчиков
      </Typography>
      <Box mt={4} mb={4}>
        <ServiceTable services={services} onServiceClick={handleServiceClick} />
      </Box>
      <Box textAlign="center" mb={4}>
        <Button variant="outlined" color="secondary" onClick={handleFeedbackOpen}>
          Оставить отзыв
        </Button>
      </Box>
      <CallFlowDialog
        open={dialogOpen}
        onClose={handleClose}
        service={selectedService}
      />
      <FeedbackForm open={feedbackOpen} onClose={handleFeedbackClose} />
      <Footer />
    </Container>
  );
};

export default Home;
