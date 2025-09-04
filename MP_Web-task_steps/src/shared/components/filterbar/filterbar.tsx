import { Box, Chip, Stack } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import type React from "react";
import { CalendarToday, Close } from "@mui/icons-material";

export interface IFilter {
  id: string;
  type: string;
  label: string;
}

interface FilterBarProps {
  filters: IFilter[];
  onDelete: (id: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filters, onDelete }) => {
  const getIcon = (type: IFilter["type"]) => {
    switch (type) {
      case "date":
        return <CalendarToday />;
      case "member":
      case "status":
        return <GroupIcon />;
      default:
        return undefined;
    }
  };

  return (
    <Box display="flex" flexWrap="wrap" alignItems="center">
      {filters.map((filter) => (
        <Stack sx={{ ml: 1 }}>
          <Chip
            key={filter.id}
            icon={getIcon(filter.type)}
            label={filter.label}
            onDelete={() => onDelete(filter.id)}
            deleteIcon={<Close />}
            sx={{
              borderRadius: 1,
              backgroundColor: "#16AF49",
              color: "white",

              ".MuiChip-icon": {
                fontSize: 13,
                color: "white",
              },

              ".MuiChip-deleteIcon": {
                fontSize: 15,
                color: "white",
                "&:hover": {
                  color: "#e0e0e0",
                },
              },
            }}
          />
        </Stack>
      ))}
    </Box>
  );
};
