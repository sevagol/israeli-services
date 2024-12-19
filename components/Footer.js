// components/Footer.js
import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { Facebook, Twitter, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  const siteUrl = 'https://services.sevagol.xyz'; // Замените на ссылку вашего сайта
  const siteTitle = 'Израильские автоответчики';
  const siteDescription = 'Узнайте о структурах автоответчиков различных сервисов !';

  const shareData = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}&quote=${encodeURIComponent(siteDescription)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(siteTitle)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${siteTitle} - ${siteUrl}`)}`,
  };

  return (
    <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
      <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Facebook />}
          href={shareData.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Twitter />}
          href={shareData.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<WhatsApp />}
          href={shareData.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </Button>
      </Stack>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Все права защищены.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
