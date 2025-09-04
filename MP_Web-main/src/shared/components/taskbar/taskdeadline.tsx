import { CalendarToday } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import type React from "react";

interface ItaskDeadlineProps {
  deadline: string;
  onClick: () => void;
}

export const TaskDeadline: React.FC<ItaskDeadlineProps> = ({
  deadline,
  onClick,
}) => {
  return (
    <Paper sx={{ display: "flex", flexDirection: "column" }}>
      <Box display="flex" gap={2} mb={1}>
        <CalendarToday></CalendarToday>
        <Typography>Prazo Final: {deadline}</Typography>
      </Box>
      <Button onClick={onClick} variant="contained">
        Lembrar-me
      </Button>
    </Paper>
  );
};
