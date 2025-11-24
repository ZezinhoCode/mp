import {
  Box,
  Dialog,
  TextField,
  Grid,
  Button,
  IconButton,
  DialogTitle,
  Stack,
  Paper,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { Calendar, StepsList, TaskDoc } from "../../../shared/components";
import type { Iuser, Itodo } from "../../../shared/interfaces";
import { AddMember } from "../../../shared/components/memberscomponents/addmember";
import { Close, Edit as EditIcon } from "@mui/icons-material";
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
          height: '9650px',
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
          padding: "4px 20px 2px 12px",
          minHeight: "auto",
        }}
      >
        <IconButton 
          onClick={handleCloseTodoPage}
          size="small"
          sx={{ 
            color: 'white',
            padding: '4px',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          <Close fontSize="small" /> 
        </IconButton>
      </DialogTitle>

      <Box sx={{ 
        paddingTop: 0,
        paddingLeft: '20px',
        paddingRight: '20px', 
        paddingBottom: '20px',
        height: 'calc(100% - 40px)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', // IMPORTANTE: Container precisa ser relative
      }}>
        <Stack spacing={1} sx={{ height: '100%' }}>
          
          <Paper
            sx={{
              py: 1.2,
              px: 1.8,
              bgcolor: "#2a2a2a",
              borderRadius: '8px',
              flexShrink: 0,
            }}
          >
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <TextField
                fullWidth
                placeholder="Criar nova tarefa"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    color: 'white',
                    fontSize: '20px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                  }
                }}
                sx={{ 
                  flex: 1,
                  mr: 1.5,
                }}
              />
              <IconButton 
                size="small"
                sx={{ 
                  color: 'white',
                  border: '2px solid white',
                  borderRadius: '4px',
                  padding: '3px',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                <EditIcon sx={{ fontSize: '18px' }} /> 
              </IconButton>
            </Stack>
            <Divider 
              sx={{ 
                borderColor: 'white',
                mt: 0.8,
              }} 
            />
          </Paper>
          
          {/* SOLUÇÃO: Remover gap e usar margem negativa */}
          <Box sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection: 'column',
            // Removemos o gap e usamos margem negativa para "puxar" os componentes para cima
            marginTop: '-8px' // Ajuste este valor conforme necessário
          }}>
            <Grid container spacing={1.5} sx={{ flexGrow: 1 }}>
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
            
            <Grid container spacing={1.5} sx={{ 
              flexGrow: 1,
              // Adicionamos uma margem superior negativa para reduzir o espaço
              marginTop: '-98px' // Ajuste este valor conforme necessário
            }}>
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
          </Box>
          
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => alert("Atividade criada!")}
            sx={{
              position: 'absolute', // Posicionamento absoluto
            bottom: 20, // Distância do fundo - AJUSTE ESTE VALOR
            left: 0,
            right: 0,
            py: 0.8,
            fontSize: '16px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            textTransform: 'none',
            zIndex: 10, // Garante que fica acima dos outros componentes
            }}
          >
            Criar atividade
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};