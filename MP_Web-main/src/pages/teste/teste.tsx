import { Box, Container } from "@mui/material";
import { useState } from "react";

import { TaskDescription, TodoItem } from "../../shared/components/";
import type { Itodo, Iuser } from "../../shared/interfaces";

const mockMembers: Iuser[] = [
  {
    id: "u1",
    username: "Maria Souza",
    email: "maria@example.com",
    color: "#f48fb1",
  },
  {
    id: "u2",
    username: "João Pereira",
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
    },
    {
      id: "step2",
      title: "https://exemplo.com/AnaliseTrimestre2025.1",
      completed: false,
    },
    {
      id: "step3",
      title: "Estruturar Power BI",
      completed: false,
    },
    {
      id: "step4",
      title: "Desenvolver apresentação no PowerPoint",
      completed: false,
    },
  ],
  members: mockMembers,
};

export const TestComponents = () => {
  const [todo, setTodo] = useState<Itodo>(initialTodo);

  const handleToggleFavorite = () => {
    setTodo((prev) => ({ ...prev, isFavorite: !prev.isFavorite }));
  };

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

  return (
    <Container>
      <Box maxWidth={500} mx="auto">
        <TaskDescription
          todo={todo}
          onToggleFavorite={handleToggleFavorite}
          onToggleStep={handleToggleStep}
          onFinish={handleFinish}
          onDelete={handleDelete}
        />
      </Box>
      <TodoItem
        item={todo}
        handleDone={handleDone}
        handleFavorite={handleToggleFavorite}
      ></TodoItem>
    </Container>
  );
};
