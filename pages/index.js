// pages/index.js
import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import ServiceTable from '../components/ServiceTable';
import CallFlowDialog from '../components/CallFlowDialog';
import { services } from '../data/services';

/**
 * Главная страница приложения
 */
const Home = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  /**
   * Обработчик клика по сервису
   * @param {Object} service - Выбранный сервис
   */
  const handleServiceClick = (service) => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  /**
   * Обработчик закрытия диалога
   */
  const handleClose = () => {
    setDialogOpen(false);
    setSelectedService(null);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Структуры израильских автоответчиков
      </Typography>
      <Box mt={4}>
        <ServiceTable services={services} onServiceClick={handleServiceClick} />
      </Box>
      {selectedService && (
        <CallFlowDialog
          open={dialogOpen}
          onClose={handleClose}
          service={selectedService}
        />
      )}
    </Container>
  );
};

export default Home;
