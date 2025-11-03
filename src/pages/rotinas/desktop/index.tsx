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
    id: "2",
    title: "Reposição de Estoque Semanal",
    finished: false,
    updatedAt: "2025-06-20T09:00:00",
    createdAt: "2025-06-01T08:00:00",
    isFavorite: false,
    deadline: "2025-07-01",
    steps: [
      {
        id: "step1",
        title: "Conferir estoque de polpa de açaí",
        completed: false,
        deadline: "2025-06-24",
        responsible: "Carlos Oliveira",
      },
      {
        id: "step2",
        title: "Solicitar novos insumos ao fornecedor",
        completed: false,
        deadline: "2025-06-25",
        responsible: "Maria Souza",
      },
      {
        id: "step3",
        title: "Registrar entrada no sistema",
        completed: false,
        deadline: "2025-06-26",
        responsible: "Ana Costa",
      },
    ],
    members: [mockMembers[1], mockMembers[2], mockMembers[3]],
  },
  {
    id: "3",
    title: "Limpeza Profunda dos Freezers",
    finished: false,
    updatedAt: "2025-06-21T11:00:00",
    createdAt: "2025-06-05T08:00:00",
    isFavorite: false,
    deadline: "2025-06-28",
    steps: [
      {
        id: "step1",
        title: "Esvaziar freezers",
        completed: false,
        deadline: "2025-06-27",
        responsible: "João Pereira",
      },
      {
        id: "step2",
        title: "Descongelar freezers",
        completed: false,
        deadline: "2025-06-27",
        responsible: "Carlos Oliveira",
      },
      {
        id: "step3",
        title: "Higienizar com solução sanitária",
        completed: false,
        deadline: "2025-06-27",
        responsible: "Maria Souza",
      },
    ],
    members: [mockMembers[2], mockMembers[4], mockMembers[1]],
  },
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
    id: "5",
    title: "Marketing da Semana",
    finished: false,
    updatedAt: "2025-06-23T14:00:00",
    createdAt: "2025-06-10T08:00:00",
    isFavorite: false,
    deadline: "2025-07-01",
    steps: [
      {
        id: "step1",
        title: "Criar postagens para Instagram",
        completed: false,
        deadline: "2025-06-25",
        responsible: "Maria Souza",
      },
      {
        id: "step2",
        title: "Responder mensagens e avaliações",
        completed: false,
        deadline: "2025-06-26",
        responsible: "Ana Costa",
      },
      {
        id: "step3",
        title: "Planejar promoção de final de semana",
        completed: false,
        deadline: "2025-06-27",
        responsible: "João Pereira",
      },
    ],
    members: [mockMembers[1], mockMembers[3], mockMembers[4]],
  },
];

export const RotinasDesktop = () => {
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
        <BaseLayout title="Rotinas" status={[]} users={users}>
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
