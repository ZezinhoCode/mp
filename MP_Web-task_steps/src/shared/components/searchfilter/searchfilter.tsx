import { Box, FormControl, MenuItem, Select, Stack } from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { Iuser } from "../../interfaces";
import type React from "react";
import { SearchBar } from "../searchbar/searchbar";

interface IsearchFilterProps {
  status: string[];
  users: Iuser[];
}

export const SearchFilter: React.FC<IsearchFilterProps> = ({
  status,
  users,
}) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Box
        display="flex"
        alignItems="center"
        sx={{
          borderRadius: 1,
          px: 1,
          py: 0.5,
        }}
      >
        <SearchBar height={35} label="Pesquisar por nome"></SearchBar>
      </Box>

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
            Status
          </MenuItem>
          {status.map((statusItem) => (
            <MenuItem key={statusItem} value={statusItem}>
              {statusItem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <DatePicker
        slotProps={{
          textField: {
            variant: "outlined",
            size: "small",
            placeholder: "Data",
            InputProps: {
              sx: {
                borderRadius: 1,
                height: 36,

                fontSize: "0.85rem",
              },
            },
          },
        }}
      />

      <FormControl variant="outlined" size="small">
        <Select
          displayEmpty
          value=""
          sx={{
            borderRadius: 1,
            fontSize: "0.85rem",
            height: 36,
            minWidth: 120,
          }}
        >
          <MenuItem disabled value="">
            Usuário
          </MenuItem>
          {users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.username}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};
