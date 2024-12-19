// components/CallFlowDialog.js
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  Stack,
  IconButton,
  Box,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { callFlows } from '../data/callFlows';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const CallFlowDialog = ({ open, onClose, service }) => {
  const [currentNodeId, setCurrentNodeId] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (service && open) {
      const initialId = '1'; // Начальный узел
      setCurrentNodeId(initialId);
      setHistory([initialId]);
    } else {
      // Если сервис не выбран или диалог закрыт, сбрасываем состояние
      setCurrentNodeId(null);
      setHistory([]);
    }
  }, [service, open]);

  // Используем optional chaining для безопасного доступа к service.phone
  const currentCallFlow = callFlows[service?.phone] || {};
  const currentNode = currentCallFlow[currentNodeId] || {};

  /**
   * Обработчик клика по опции
   * @param {String} optionKey - Ключ выбранной опции
   */
  const handleOptionClick = async (optionKey) => {
    const nextNodeId = optionKey;
    if (currentCallFlow[nextNodeId]) {
      setLoading(true);
      // Здесь можно добавить дополнительные действия при переходе
      setCurrentNodeId(nextNodeId);
      setHistory((prev) => [...prev, nextNodeId]);
      setLoading(false);
    } else {
      // Конец структуры вызова
      setLoading(true);
      setCurrentNodeId(null);
      setHistory((prev) => [...prev, null]);
      setLoading(false);
    }
  };

  /**
   * Обработчик кнопки "Назад"
   */
  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const previousNodeId = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setCurrentNodeId(previousNodeId);
    }
  };

  /**
   * Обработчик закрытия диалога
   */
  const handleClose = () => {
    onClose();
    setCurrentNodeId(null);
    setHistory([]);
  };

  // Добавляем условный рендеринг: если service отсутствует, не рендерим содержимое
  if (!service) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      fullScreen={isMobile}
      aria-labelledby="call-flow-dialog-title"
    >
      <DialogTitle
        id="call-flow-dialog-title"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
        }}
      >
        {/* Левая область: кнопка "назад" или пустой контейнер */}
        <Box sx={{ width: '40px' }}>
          {history.length > 1 ? (
            <IconButton aria-label="назад" onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
          ) : null}
        </Box>

        {/* Центральная область: заголовок */}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
          {service?.name}
        </Typography>

        {/* Правая область: кнопка закрытия */}
        <IconButton aria-label="закрыть" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {currentNode.question ? (
          <>
            <Box mb={3}>
              <Typography variant="subtitle1">{currentNode.question}</Typography>
            </Box>
            <Stack spacing={2}>
              {Object.entries(currentNode.options).map(([key, label]) => (
                <Button
                  key={key}
                  variant="contained"
                  onClick={() => handleOptionClick(key)}
                  fullWidth
                  size="large"
                  disabled={loading}
                  sx={{
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    padding: '12px 16px',
                    backgroundColor: theme.palette.primary.main,
                    color: '#FFFFFF',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  <Box
                    sx={{
                      minWidth: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      color: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '16px',
                      fontWeight: 'bold',
                    }}
                  >
                    {key}
                  </Box>
                  {label}
                </Button>
              ))}
            </Stack>
          </>
        ) : (
          <Typography variant="subtitle1">Спасибо!</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CallFlowDialog;
