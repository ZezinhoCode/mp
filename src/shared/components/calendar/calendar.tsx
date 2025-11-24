// --- ALTERAÇÃO 4: Importado EditIcon em vez de BorderColor ---
import { Edit as EditIcon } from "@mui/icons-material";
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

// 1. Interface de props com 'scale'
interface CalendarProps {
  scale?: number;
}

export const Calendar: React.FC<CalendarProps> = ({ scale = 0.7 }) => { // 2. Valor padrão
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [confirmedDate, setConfirmedDate] = useState<Date | null>(null);

  // 3. Função de escala
  const SCALE = scale;
  const s = (value: number) => value * SCALE;

  const handleChange = (newValue: Date | null) => {
    setSelectedDate(newValue);
  };

  const handleConfirm = () => {
    setConfirmedDate(selectedDate);
    console.log("Data confirmada:", confirmedDate);
  };

  return (
    <Paper
      sx={{
        pt: s(2), px: s(2), pb: s(2),
        bgcolor: "#2a2a2a",
        borderRadius: `${s(8)}px`,
        height: "72.5%", 
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 7. TOPO (Data selecionada) - Fixo */}
      {selectedDate && (
        <Box sx={{ flexShrink: 0 }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: s(2) }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: `${s(40)}px`,
                fontFamily: "Roboto, sans-serif",
                fontWeight: 600,
                color: "white",
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
                color: "white",
                border: `${s(2.5)}px solid white`,
                borderRadius: `${s(4)}px`,
                padding: `${s(10)}px`,
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {/* --- ALTERAÇÃO 5: Ícone trocado para EditIcon --- */}
              <EditIcon sx={{ fontSize: `${s(20)}px` }} />
            </IconButton>
          </Box>
          <Divider sx={{ mb: s(1.5), borderColor: "white" }}></Divider>
        </Box>
      )}

      {/* 8. MEIO (Calendário) - Cresce para ocupar o espaço */}
      <Box 
        sx={{ 
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: 0,
        }}
      >
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={selectedDate}
          onChange={handleChange}
          dayOfWeekFormatter={(date) =>
            date.toLocaleDateString('pt-BR', { weekday: 'long' }).substring(0, 3)
          }
          slots={{
            actionBar: () => null,
          }}
          sx={{
            "& .MuiPickersCalendarHeader-label": {
              fontSize: `${s(19)}px`,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 500,
              color: "white",
              textTransform: 'capitalize'
            },
            "& .MuiDayCalendar-weekDayLabel": {
              fontSize: `${s(19)}px`,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              color: "white",
              width: `${s(52)}px`,
              height: `${s(36)}px`,
              textTransform: 'capitalize'
            },
            "& .MuiPickersDay-root": {
              fontSize: `${s(19)}px`,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              color: "white",
              width: `${s(52)}px`,
              height: `${s(33)}px`,
            },
            "& .MuiPickersDay-root.Mui-selected": {
              bgcolor: "#454444",
            },
            "& .MuiPickersLayout-contentWrapper": {
              justifyContent: 'center'
            }
          }}
        />
      </Box>

      {/* 10. FUNDO (Botão) - Fixo */}
      <Button
        variant="contained"
        sx={{
          mt: s(1.5),
          fontSize: `${s(21.9)}px`,
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          textTransform: "none",
          py: s(0.8),
          flexShrink: 0,
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