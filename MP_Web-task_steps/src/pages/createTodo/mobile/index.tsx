import { Box, Dialog, TextField } from "@mui/material";
import { useState } from "react";
import { Calendar, StepsList, TaskDoc } from "../../../shared/components";
import type { Iuser, Itodo } from "../../../shared/interfaces";
import { AddMember } from "../../../shared/components/memberscomponents/addmember";

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
      deadline: "2025-05-15",
      responsible: "Maria Souza",
    },
    {
      id: "step2",
      title: "https://exemplo.com/AnaliseTrimestre2025.1",
      completed: false,
      deadline: "2025-05-20",
      responsible: "João Pereira",
    },
    {
      id: "step3",
      title: "Estruturar Power BI",
      completed: false,
      deadline: "2025-06-05",
      responsible: "Maria Souza",
    },
    {
      id: "step4",
      title: "Desenvolver apresentação no PowerPoint",
      completed: false,
      deadline: "2025-06-10",
      responsible: "João Pereira",
    },
  ],
  members: mockMembers,
};

export const CreateMobileTodo = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [todo, setTodo] = useState<Itodo>(initialTodo);

  const handleClose = () => {
    setIsOpen(false);
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

  const handleClick = () => {};

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <TextField disabled label="Criar nova tarefa"></TextField>
      <Box p={2} display="flex" flexWrap="wrap">
        <StepsList
          onEdit={handleFinish}
          onDelete={handleDelete}
          onToggle={handleToggleStep}
          onAdd={handleDone}
          steps={todo.steps}
        />
        <Calendar />
        <AddMember
          members={mockMembers}
          onClick={handleClick}
          handleRemove={handleDelete}
        />
        <TaskDoc></TaskDoc>
      </Box>
    </Dialog>
  );
};
