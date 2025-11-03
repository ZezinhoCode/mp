import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";

import { useCallback, useState } from "react";

import { format } from "date-fns";
import { TodolistComponent, Taskbar } from "../../../shared/components";
import type { Iuser, Itodo, Istep } from "../../../shared/interfaces";
import { BaseLayout } from "../../../shared/layout";
import { CreateTodo } from "../../createTodo/desktop";

const mockMembers: Iuser[] = [
  {
    id: "u2",
    username: "Ernesto dalva",
    email: "ernesto@example.com",
    color: "#81d4fa",
  },
];

const initialTodoList: Itodo[] = [
  {
    id: "1",
    title: "Fazer Análise de Dados das Vendas (2025.2)",
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
        deadline: "2026-05-15",
        responsible: "Ernesto dalva",
      },
      {
        id: "step2",
        title: "https://exemplo.com/AnaliseTrimestre2025.1",
        completed: false,
        deadline: "2025-05-20",
        responsible: "Ernesto dalva",
      },
      {
        id: "step3",
        title: "Estruturar Power BI",
        completed: false,
        deadline: "2025-06-05",
        responsible: "Ernesto dalva",
      },
      {
        id: "step4",
        title: "Desenvolver apresentação no PowerPoint",
        completed: false,
        deadline: "2025-06-10",
        responsible: "Ernesto dalva",
      },
    ],
    members: mockMembers,
  },
];

export const AtribuidoAmimDesktop = () => {
  const [todos, setTodos] = useState<Itodo[]>(initialTodoList);

  const users = [
    { id: "1", username: "Maria Pitanga" },
    { id: "2", username: "Tales Ximenes" },
    { id: "3", username: "Joana Prado" },
  ];

  //const statusList = ["Concluído", "Em andamento", "Pendente"];
  const [selectedTodo, setSelectedTodo] = useState<Itodo | null>();
  const [isSelecTed, setIsSelected] = useState("");
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState<Istep | null>();
  const [isStepDialogOpen, setStepDialogOpen] = useState(false);

  const handleToggleFavorite = useCallback(
    (todoId: string) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === todoId ? { ...todo, isFavorite: !todo.isFavorite } : todo
        )
      );
    },
    [todos]
  );

  const handleViewStep = (step: Istep) => {
    setSelectedStep(step);
    setStepDialogOpen(true);
  };

  const handleCloseStepDialog = () => {
    setSelectedStep(null);
    setStepDialogOpen(false);
  };

  const handleToggleStep = useCallback(
    (stepId: string) => {
      setSelectedTodo((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          steps: prev.steps.map((step) =>
            step.id === stepId ? { ...step, completed: !step.completed } : step
          ),
        };
      });
    },
    [selectedTodo]
  );

  const handleDone = (todoId: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, finished: !todo.finished } : todo
      )
    );
  };

  const handleRemoveMember = (userId: string) => {
    console.log("membro removido");
  };

  const handleDelete = (todoId: string) => {};

  const handleOpenModal = (todo: Itodo) => {
    setIsSelected(todo.id);
    setSelectedTodo(todo);
    setIsmodalOpen(true);
  };

  const handleCloseModal = (todo: Itodo) => {
    setIsSelected("");
    setSelectedTodo(null);
    setIsmodalOpen(false);
  };

  return (
    <Box ml={8} display="flex">
      <Box flex={1} mr={2}>
        <BaseLayout
          showUserFilter={false}
          title="Atribuido a mim"
          status={[]}
          users={users}
        >
          <TodolistComponent
            handleClick={handleOpenModal}
            isTodoSelected={isSelecTed}
            Items={todos}
            handleDone={handleDone}
            handleToggleFavorite={handleToggleFavorite}
          />
        </BaseLayout>
      </Box>

      {selectedTodo && (
        <Box width="350px" overflow="hidden">
          <Taskbar
            OnSee={handleViewStep}
            onDelete={handleDelete}
            handleRemoveMember={handleRemoveMember}
            onToggleFavorite={handleToggleFavorite}
            onToggleStep={handleToggleStep}
            onFinish={handleDone}
            todo={selectedTodo}
            isOpen={isModalOpen}
            onClose={() => handleCloseModal(selectedTodo)}
          />
        </Box>
      )}

      {selectedStep && (
        <Dialog open={isStepDialogOpen} onClose={handleCloseStepDialog}>
          <DialogTitle>Detalhes do passo</DialogTitle>
          <DialogContent dividers>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar>
                {selectedStep.responsible?.slice(0, 2).toUpperCase()}
              </Avatar>
              <Typography>{selectedStep.responsible} - Responsável</Typography>
            </Stack>

            <Typography>
              Prazo: {format(new Date(selectedStep.deadline!), "dd/MM/yyyy")}
            </Typography>
            <Typography>Descrição: {selectedStep.title}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseStepDialog}>
              <Typography>Fechar</Typography>
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <CreateTodo />
    </Box>
  );
};
