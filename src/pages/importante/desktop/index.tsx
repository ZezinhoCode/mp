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
    id: "u1",
    username: "Ernesto Dalva",
    email: "ernesto@example.com",
    color: "#81d4fa",
  },
  {
    id: "u2",
    username: "Maria Souza",
    email: "maria@example.com",
    color: "#f48fb1",
  },
  {
    id: "u3",
    username: "Carlos Oliveira",
    email: "carlos@example.com",
    color: "#a5d6a7",
  },
  {
    id: "u4",
    username: "Ana Costa",
    email: "ana@example.com",
    color: "#ffcc80",
  },
  {
    id: "u5",
    username: "João Pereira",
    email: "joao@example.com",
    color: "#ce93d8",
  },
];

const initialTodoList: Itodo[] = [
  {
    id: "4",
    title: "Gestão Financeira Semanal",
    finished: false,
    updatedAt: "2025-06-22T15:00:00",
    createdAt: "2025-06-08T08:00:00",
    isFavorite: true,
    deadline: "2025-06-30",
    steps: [
      {
        id: "step1",
        title: "Fechar caixa da semana",
        completed: false,
        deadline: "2025-06-28",
        responsible: "Ana Costa",
      },
      {
        id: "step2",
        title: "Pagar fornecedores",
        completed: false,
        deadline: "2025-06-29",
        responsible: "Ernesto Dalva",
      },
      {
        id: "step3",
        title: "Atualizar planilha de vendas",
        completed: false,
        deadline: "2025-06-29",
        responsible: "Maria Souza",
      },
    ],
    members: [mockMembers[0], mockMembers[1], mockMembers[3]],
  },
  {
    id: "2",
    title: "Planejamento Estratégico de Marketing (2025.2)",
    finished: false,
    updatedAt: "2025-07-02T14:45:00",
    createdAt: "2025-06-01T09:00:00",
    isFavorite: true,
    deadline: "2025-08-15",
    steps: [
      {
        id: "step1",
        title: "Coletar métricas de campanhas anteriores",
        completed: true,
        deadline: "2025-06-10",
        responsible: "Maria Souza",
      },
      {
        id: "step2",
        title: "Analisar concorrência no mercado digital",
        completed: false,
        deadline: "2025-06-20",
        responsible: "João Pereira",
      },
      {
        id: "step3",
        title: "Definir público-alvo e personas",
        completed: false,
        deadline: "2025-07-01",
        responsible: "Maria Souza",
      },
      {
        id: "step4",
        title: "Montar cronograma de execução",
        completed: false,
        deadline: "2025-07-15",
        responsible: "João Pereira",
      },
    ],
    members: mockMembers,
  },
];

export const ImportanteDesktop = () => {
  const [todos, setTodos] = useState<Itodo[]>(initialTodoList);

  const users = [
    { id: "1", username: "Maria Pitanga" },
    { id: "2", username: "Tales Ximenes" },
    { id: "3", username: "Joana Prado" },
  ];

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
          showRoutineFilter={false}
          title="Importante"
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
