import type React from "react";
import type { Iuser } from "../../interfaces";
import { useMemo, useState } from "react";
import { Search, PersonAdd } from "@mui/icons-material";
import {
  Box,
  TextField,
  InputAdornment,
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Dialog,
  DialogContent,
} from "@mui/material";

interface ISearchMemberDialogProps {
  open: boolean;
  onClose: () => void;
  members: Iuser[];
  onAdd?: (member: Iuser) => void;
  showSearch?: boolean;
}

export const SearchMembersDialog: React.FC<ISearchMemberDialogProps> = ({
  open,
  onClose,
  members,
  onAdd,
  showSearch = true,
}) => {
  const [search, setSearch] = useState("");

  const filteredMembers = useMemo(() => {
    return members.filter((member) =>
      member.username?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, members]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogContent dividers sx={{ p: 2 }}>
        {showSearch && (
          <TextField
            placeholder="Filtrar por nome"
            variant="outlined"
            size="small"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        )}

        <Box sx={{ maxHeight: 300, overflowY: "auto" }}>
          <List disablePadding>
            {filteredMembers.map((member) => (
              <ListItem
                key={member.id}
                secondaryAction={
                  <IconButton edge="end" onClick={() => onAdd!(member)}>
                    <PersonAdd />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  {member.photo ? (
                    <Avatar src={member.photo} />
                  ) : (
                    <Avatar sx={{ bgcolor: member.color }}>
                      {member.username
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </Avatar>
                  )}
                </ListItemAvatar>
                <ListItemText primary={member.username} />
              </ListItem>
            ))}
          </List>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
