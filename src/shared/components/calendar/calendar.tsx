import { BorderColor } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import type React from "react";
import { useState } from "react";

export const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [confirmedDate, setConfirmedDate] = useState<Date | null>(null);

  const handleChange = (newValue: Date | null) => {
    setSelectedDate(newValue);
  };

  const handleConfirm = () => {
    setConfirmedDate(selectedDate);

    console.log("Data confirmada:", confirmedDate);
  };

  return (
    <Paper sx={{ p: 2, bgcolor: '#2a2a2a', borderRadius: '8px' }}>
      {selectedDate && (
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 2 }}
          >
            <Typography 
              variant="h6"
              sx={{ 
                fontSize: '22px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 600,
                color: 'white'
              }}
            >
              {selectedDate.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })}
            </Typography>
            <IconButton 
              size="small"
              sx={{ 
                color: 'white',
                border: '2.5px solid white',
                borderRadius: '4px',
                padding: '4px',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              <BorderColor fontSize="small" />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 1.5, borderColor: 'white' }}></Divider>
        </>
      )}

      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={selectedDate}
        onChange={handleChange}
        slots={{
          actionBar: () => null,
        }}
        sx={{
          '& .MuiPickersCalendarHeader-label': {
            fontSize: '14px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 500,
            color: 'white',
          },
          '& .MuiDayCalendar-weekDayLabel': {
            fontSize: '14px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            color: 'white',
          },
          '& .MuiPickersDay-root': {
            fontSize: '14px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            color: 'white',
          },
          '& .MuiPickersDay-root.Mui-selected': {
            bgcolor: '#454444',
          },
        }}
      />

      <Button
        variant="contained"
        sx={{ 
          mt: 1.5,
          fontSize: '15px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
          textTransform: 'none',
          py: 0.8,
        }}
        color="success"
        fullWidth
        onClick={handleConfirm}
      >
        Escolher prazo final
      </Button>
    </Paper>
  );
};
