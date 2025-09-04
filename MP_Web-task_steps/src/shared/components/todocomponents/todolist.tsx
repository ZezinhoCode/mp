import { Box, FormControl, List, MenuItem, Select } from "@mui/material";
import type React from "react";
import type { Itodo } from "../../interfaces";
import { TodoItem } from "./todoItem";

interface ItodoListComponent {
  Items: Itodo[];
  handleDone: (id: string) => void;
  handleToggleFavorite: (id: string) => void;
  isTodoSelected: string;
  handleClick: (todo: Itodo) => void;
}

export const TodolistComponent: React.FC<ItodoListComponent> = ({
  Items,
  handleDone,
  handleToggleFavorite,
  isTodoSelected,
  handleClick,
}) => {
  return (
    <Box>
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
            Hoje
          </MenuItem>
          <MenuItem value="todo ">teste</MenuItem>
        </Select>
      </FormControl>
      <List>
        {Items.map((item) => (
          <TodoItem
            isSelecTed={isTodoSelected}
            handleClick={handleClick}
            handleDone={handleDone}
            handleFavorite={handleToggleFavorite}
            key={item.id}
            item={item}
          ></TodoItem>
        ))}
      </List>
    </Box>
  );
};
