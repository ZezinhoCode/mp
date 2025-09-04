import { Menu } from "@mui/icons-material";
import { Badge, Box, Button, Stack, Typography } from "@mui/material";
import type React from "react";
import type { ItodoList } from "../../interfaces";

interface ListButtonsProps {
  lists: ItodoList[];
  onListClick: (listId: string) => void;
}

export const ListButtons: React.FC<ListButtonsProps> = ({
  lists,
  onListClick,
}) => {
  return (
    <Box width="100%" overflow="hidden">
      <Stack direction="column">
        {lists.map((todolist) => (
          <Box
            key={todolist.id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            px={1}
          >
            <Button
              onClick={() => onListClick(todolist.id)}
              startIcon={<Menu />}
              sx={{
                textTransform: "none",
                justifyContent: "flex-start",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                flexGrow: 1,
                minWidth: 0,
              }}
            >
              <Typography variant="body1" noWrap>
                {todolist.name}
              </Typography>
            </Button>

            <Badge
              badgeContent={todolist.todos!.length}
              sx={{
                mr: 3,
                "& .MuiBadge-badge": {
                  backgroundColor: "#555",
                  color: "white",
                  fontSize: "0.50rem",
                  minWidth: 20,
                  height: 20,
                  borderRadius: "50%",
                },
              }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
