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
    <Paper sx={{ p: 2 }}>
      {selectedDate && (
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 2, p: 1 }}
          >
            <Typography variant="h6">
              {selectedDate.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })}
            </Typography>
            <IconButton size="small">
              <BorderColor />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 1 }}></Divider>
        </>
      )}

      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={selectedDate}
        onChange={handleChange}
        slots={{
          actionBar: () => null,
        }}
      />

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        color="success"
        fullWidth
        onClick={handleConfirm}
      >
        Escolher prazo final
      </Button>
    </Paper>
  );
};
