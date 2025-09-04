import { CalendarToday } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import type React from "react";

interface ItaskDeadlineProps {
  deadline: string;
}

export const TaskDeadline: React.FC<ItaskDeadlineProps> = ({ deadline }) => {
  return (
    <Stack direction="column">
      <Box
        alignItems="center"
        justifyContent="center"
        mb={1}
        display="flex"
        gap={2}
      >
        <CalendarToday></CalendarToday>
        <Typography>Prazo Final: {deadline}</Typography>
      </Box>
    </Stack>
  );
};
