// pages/_app.js
import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.css'; // Импорт глобальных стилей (если необходимо)

/**
 * Создание темы для мягкого минималистичного дизайна
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#6C63FF', // Мягкий фиолетовый
    },
    secondary: {
      main: '#FF6584', // Мягкий розовый
    },
    background: {
      default: '#F5F5F5', // Светло-серый фон
      paper: '#FFFFFF', // Белые поверхности
    },
    text: {
      primary: '#333333', // Темно-серый текст
      secondary: '#666666', // Средне-серый текст
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#333333',
    },
    h6: {
      fontWeight: 500,
      color: '#333333',
    },
    body1: {
      color: '#333333',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '16px',
          padding: '16px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #E0E0E0',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          color: '#6C63FF',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

/**
 * Обертка для приложения с провайдером темы
 */
export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Израильские автоответчики</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline обеспечивает единый базовый стиль */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
