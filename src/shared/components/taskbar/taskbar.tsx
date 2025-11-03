import { Box, IconButton, Paper, Stack } from "@mui/material";
import type React from "react";
import { TaskDescription } from "./taskdescription";
import { TaskDoc } from "./taskdoc";
import { TaskDeadline } from "./taskdeadline";
import { TaskMembers } from "./taskmembers";
import { TaskHistory } from "./taskhistory";
import { Close } from "@mui/icons-material";
import type { Istep, Itodo } from "../../interfaces";
import { GroupDescriptionBox } from "./groupdescriptionbox";

interface ItaskbarProps {
  todo: Itodo;
  handleRemoveMember: (userId: string) => void;
  onToggleFavorite: (id: string) => void;
  onToggleStep: (stepId: string) => void;
  onFinish: (todoId: string) => void;
  onDelete: (todoId: string) => void;
  OnSee: (step: Istep) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Taskbar: React.FC<ItaskbarProps> = ({
  todo,
  onToggleFavorite,
  onToggleStep,
  onFinish,
  onDelete,
  isOpen,
  OnSee,
  handleRemoveMember,
  onClose,
}) => {
  return (
    <>
      {isOpen && (
        <Paper>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
          <Stack spacing={0.5} direction="column">
            <TaskDescription
              OnSee={OnSee}
              todo={todo}
              onFinish={onFinish}
              onToggleFavorite={onToggleFavorite}
              onToggleStep={onToggleStep}
              onDelete={onDelete}
            />
            <GroupDescriptionBox></GroupDescriptionBox>
            <TaskDoc showTaskDocTittle={false} />
            <TaskDeadline deadline={todo.deadline!} />
            <TaskMembers
              members={todo.members!}
              handleRemove={handleRemoveMember}
            />
            <Box px={2} pt={1}>
              <TaskHistory onClick={() => alert("Histórico clicado!")} />
            </Box>
          </Stack>
        </Paper>
      )}
    </>
  );
};
