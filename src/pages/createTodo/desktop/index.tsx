import {
  Box,
  Dialog,
  TextField,
  Grid,
  Button,
  IconButton,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { Calendar, StepsList, TaskDoc } from "../../../shared/components";
import type { Iuser, Itodo } from "../../../shared/interfaces";
import { AddMember } from "../../../shared/components/memberscomponents/addmember";
import { Close, Edit } from "@mui/icons-material";
import { useTodoContext } from "../../../shared/contexts/todocontext";

const mockMembers: Iuser[] = [
  {
    id: "u1",
    username: "Vai pra cima Maria Pitanga",
    email: "maria@example.com",
    color: "#f48fb1",
  },
  {
    id: "u2",
    username: "Tales Ximenes",
    email: "joao@example.com",
    color: "#81d4fa",
  },
];

const initialTodo: Itodo = {
  id: "1",
  title: "Fazer Análise de Dados das Vendas (2025.1)",
  finished: false,
  updatedAt: "2025-06-17T10:27:00",
  createdAt: "2025-05-01T08:00:00",
  isFavorite: false,
  deadline: "2025-07-31",
  steps: [
    {
      id: "step1",
      title: "Apurar dados referente aos primeiros 3 meses de 2025",
      completed: false,
      deadline: "2025-07-27",
      responsible: "Ricardo Emanuel Bezerra",
    },
  ],
  members: mockMembers,
};

export const CreateTodo = () => {
  const { isOpen, handleCloseTodoPage } = useTodoContext();
  const [todo, setTodo] = useState<Itodo>(initialTodo);

  const handleDone = () => {
    setTodo((prev) => ({ ...prev, finished: !prev.finished }));
  };

  const handleToggleStep = (stepId: string) => {
    setTodo((prev) => ({
      ...prev,
      steps: prev.steps.map((step) =>
        step.id === stepId ? { ...step, completed: !step.completed } : step
      ),
    }));
  };

  const handleFinish = (todoId: string) => {
    alert(`Tarefa ${todoId} finalizada!`);
  };

  const handleDelete = (todoId: string) => {
    alert(`Tarefa ${todoId} apagada!`);
  };

  const handleClick = () => {};

  return (
    <Dialog 
      onClose={handleCloseTodoPage} 
      open={isOpen} 
      maxWidth={false}
      PaperProps={{
        sx: {
          width: '850px',
          height: '650px',
          maxWidth: '95vw',
          bgcolor: '#222222',
          borderRadius: '8px',
        }
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "10px 18px",
          minHeight: "auto",
        }}
      >
        <IconButton 
          onClick={handleCloseTodoPage}
          sx={{ 
            color: 'white',
            border: '3px solid white',
            borderRadius: '4px',
            padding: '4px',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <Box sx={{ padding: "0 25px 25px 25px" }}>
        <Stack spacing={2}>
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <TextField
                fullWidth
                placeholder="Criar nova tarefa"
                variant="standard"
                InputProps={{
                  disableUnderline: false,
                  sx: {
                    color: 'white',
                    fontSize: '22px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    '&::before': {
                      borderBottom: '1px solid white',
                    },
                    '&::after': {
                      borderBottom: '1px solid white',
                    },
                  }
                }}
                sx={{ 
                  flex: 1,
                  mr: 2,
                }}
              />
              <IconButton 
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
                <Edit fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
          <Grid container spacing={1.5}>
            <Grid size={{ xs: 12, md: 6 }}>
              <StepsList
                onEdit={handleFinish}
                onDelete={handleDelete}
                onToggle={handleToggleStep}
                onAdd={handleDone}
                steps={todo.steps}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Calendar />
            </Grid>
          </Grid>
          <Grid container spacing={1.5}>
            <Grid size={{ xs: 12, md: 6 }}>
              <AddMember
                members={mockMembers}
                onClick={handleClick}
                handleRemove={handleDelete}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TaskDoc />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => alert("Atividade criada!")}
            sx={{
              py: 1,
              fontSize: '16px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
              textTransform: 'none',
            }}
          >
            Criar atividade
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};