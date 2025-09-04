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
import { FilterBar, SearchFilter, type IFilter } from "../components";
import type { Iuser } from "../interfaces";
import type { ReactNode } from "react";
import { Add } from "@mui/icons-material";

interface Ilayout {
  title: string;
  filters: IFilter[];
  status: string[];
  users: Iuser[];
  children: ReactNode;
}

export const BaseLayout: React.FC<Ilayout> = ({
  title,
  filters,
  status,
  users,
  children,
}) => {
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
        <FilterBar
          filters={filters}
          onDelete={(id) => console.log("Remove filtro:", id)}
        />
        <SearchFilter status={status} users={users} />
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
        onClick={() => console.log("Nova lista clicada")}
      >
        <Typography noWrap>Nova lista</Typography>
      </Button>
    </Box>
  );
};
