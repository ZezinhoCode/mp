import { Box } from "@mui/material";
import { TodolistComponent } from "../../shared/components";
import { BaseLayout } from "../../shared/layout";
import type { Itodo, Iuser } from "../../shared/interfaces";
import { useState } from "react";

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

const initialTodoList: Itodo[] = [
  {
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
  },
  {
    id: "2",
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
  },
];

export const Teste2 = () => {
  const [todos, setTodos] = useState<Itodo[]>(initialTodoList);

  const filters = [
    { id: "1", type: "date", label: "26/06/2025" },
    { id: "2", type: "member", label: "Tales Ximenes" },
    { id: "3", type: "status", label: "Vai pra cima Maria Pitanga" },
  ];

  const users = [
    { id: "1", username: "Maria Pitanga" },
    { id: "2", username: "Tales Ximenes" },
    { id: "3", username: "Joana Prado" },
  ];

  const statusList = ["Concluído", "Em andamento", "Pendente"];

  const handleToggleFavorite = (todoId: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, isFavorite: !todo.isFavorite } : todo
      )
    );
  };

  const handleDone = (todoId: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, finished: !todo.finished } : todo
      )
    );
  };

  return (
    <Box ml={8} padding={3} maxWidth={900}>
      <BaseLayout
        title="Importante"
        status={statusList}
        filters={filters}
        users={users}
      >
        <TodolistComponent
          Items={todos}
          handleDone={handleDone}
          handleToggleFavorite={handleToggleFavorite}
        />
      </BaseLayout>
    </Box>
  );
};
