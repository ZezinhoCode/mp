import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import type React from "react";
import { SearchBar, SearchFilter } from "../components";
import type { Iuser } from "../interfaces";
import type { ReactNode } from "react";
import { Add } from "@mui/icons-material";
import { useTodoContext } from "../contexts/todocontext";

interface Ilayout {
  title: string;
  status: string[];
  users: Iuser[];
  children: ReactNode;
  showUserFilter?: boolean;
  showRoutineFilter?: boolean;
  showRoutine?: boolean;
  handleShowRoutine?: () => void;
}

export const BaseLayout: React.FC<Ilayout> = ({
  title,
  showUserFilter,
  showRoutineFilter,
  showRoutine,
  handleShowRoutine,
  status,
  users,
  children,
}) => {
  const { handleOpenCreateTodoPage } = useTodoContext();
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ ml: 7 }} variant="h4">
          {title}
        </Typography>
        <FormControl variant="outlined" size="small">
          <Select
            displayEmpty
            value=""
            sx={{
              borderRadius: 1,
              fontSize: "0.85rem",
              height: 36,
              minWidth: 100,
            }}
          >
            <MenuItem disabled value="">
              Modo todo
            </MenuItem>
            <MenuItem value="todo ">teste</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Stack mt={4} spacing={1}>
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          sx={{
            borderRadius: 1,
            px: 1,
            py: 0.5,
          }}
        >
          <SearchBar height={35} label="Pesquisar por nome"></SearchBar>
          <SearchFilter
            showRoutine={showRoutine}
            showRoutineFilter={showRoutineFilter}
            showUserFilter={showUserFilter}
            handleShowRoutine={handleShowRoutine}
            status={status}
            users={users}
          />
        </Box>
      </Stack>

      <Stack direction="column" spacing={2} mt={2}>
        {children}
      </Stack>
      <Button
        color="inherit"
        variant="contained"
        fullWidth
        startIcon={<Add />}
        sx={{
          justifyContent: "flex-start",
          textTransform: "none",
          borderRadius: 2,
          fontWeight: 500,
        }}
        onClick={handleOpenCreateTodoPage}
      >
        <Typography noWrap>Adicione uma nova tarefa</Typography>
      </Button>
    </Box>
  );
};
