// components/ServiceTable.js
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Link,
  useMediaQuery,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

/**
 * Компонент таблицы сервисов
 * @param {Array} services - Список сервисов
 * @param {Function} onServiceClick - Обработчик клика по сервису
 */
const ServiceTable = ({ services, onServiceClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return (
      <Grid container spacing={2}>
        {services.map((service) => (
          <Grid item xs={12} key={service.id}>
            <Card onClick={() => onServiceClick(service)} sx={{ cursor: 'pointer', borderRadius: '16px' }}>
              <CardContent>
                <Typography variant="h6" color="primary">
                  {service.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Телефон: {service.phone}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '16px' }}>
      <Table aria-label="services table" size={isMobile ? 'small' : 'medium'}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Сервис</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Телефон</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id} hover>
              <TableCell>
                <Link
                  component="button"
                  variant="body1"
                  onClick={() => onServiceClick(service)}
                >
                  {service.name}
                </Link>
              </TableCell>
              <TableCell>{service.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ServiceTable;
