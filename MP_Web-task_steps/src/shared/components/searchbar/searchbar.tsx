import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import type React from "react";

interface ISearchBarProps {
  label: string;
  searchValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: number | string;
  height?: number | string;
}

export const SearchBar: React.FC<ISearchBarProps> = ({
  label,
  searchValue,
  onChange,
  width,
  height,
}) => {
  return (
    <TextField
      value={searchValue}
      onChange={onChange}
      placeholder={label}
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "5px",
          width: { width },
          height: { height },
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};
