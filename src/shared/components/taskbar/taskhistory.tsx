import { History } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import type React from "react";

interface ITaskHistoryProps {
  onClick: () => void;
}

export const TaskHistory: React.FC<ITaskHistoryProps> = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="inherit"
      fullWidth
      onClick={onClick}
      startIcon={<History />}
      sx={{
        justifyContent: "center",
        textTransform: "none",
        fontWeight: 500,
      }}
    >
      <Typography noWrap>Exibir Histórico</Typography>
    </Button>
  );
};