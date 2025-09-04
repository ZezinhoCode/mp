import {
  Box,
  IconButton,
  Typography,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import type { Itodo } from "../../interfaces";
import { TaskStep } from "..";

interface TaskDescriptionProps {
  todo: Itodo;
  onToggleFavorite: (id: string) => void;
  onToggleStep: (stepId: string) => void;
  onFinish: (todoId: string) => void;
  onDelete: (todoId: string) => void;
}

export const TaskDescription: React.FC<TaskDescriptionProps> = ({
  todo,
  onToggleFavorite,
  onToggleStep,
  onFinish,
  onDelete,
}) => {
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight="bold">{todo.title}</Typography>
        <IconButton onClick={() => onToggleFavorite(todo.id)}>
          {todo.isFavorite ? (
            <StarIcon htmlColor="#fdd835" />
          ) : (
            <StarBorderIcon htmlColor="#fdd835" />
          )}
        </IconButton>
      </Box>

      <Typography variant="body2" color="gray" mb={1}>
        Última alteração às{" "}
        {format(new Date(todo.updatedAt), "HH:mm 'de' dd/MM/yyyy", {
          locale: ptBR,
        })}
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <TaskStep steps={todo.steps} onToggle={onToggleStep} />

      <Box mt={2} display="flex" flexDirection="column" gap={1}>
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={() => onFinish(todo.id)}
        >
          Finalizar Tarefa
        </Button>
        <Button
          variant="contained"
          color="inherit"
          fullWidth
          onClick={() => onDelete(todo.id)}
        >
          Apagar Tarefa
        </Button>
      </Box>
    </Paper>
  );
};
