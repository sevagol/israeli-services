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

  return (
    <TableContainer component={Paper} elevation={3} sx={{ borderRadius: '16px' }}>
      <Table aria-label="services table" size={isMobile ? 'small' : 'medium'}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Название сервиса</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Номер телефона</Typography>
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
