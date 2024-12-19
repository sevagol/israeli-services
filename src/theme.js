// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6C63FF', // Мягкий фиолетовый
    },
    secondary: {
      main: '#FF6584', // Мягкий розовый
    },
    background: {
      default: '#E8F5E9', // Светло-зеленый фон
      paper: '#FFFFFF', // Белые поверхности
    },
    text: {
      primary: '#333333', // Темно-серый текст
      secondary: '#666666', // Средне-серый текст
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
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

export default theme;
