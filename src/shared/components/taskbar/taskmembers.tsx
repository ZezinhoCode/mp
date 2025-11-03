import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import type { Iuser } from "../../interfaces";
import type React from "react";
import { Close, PersonAdd } from "@mui/icons-material";
import { useMemo, useState } from "react";

interface ItaskMembersProps {
  members: Iuser[];
  handleRemove: (userId: string) => void;
}

export const TaskMembers: React.FC<ItaskMembersProps> = ({
  members,
  handleRemove,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const maxVisible = 2;

  const visibleMembers = useMemo(() => members.slice(0, maxVisible), [members]);
  const remainingCount = useMemo(
    () => Math.max(members.length - maxVisible, 0),
    [members]
  );

  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  return (
    <Box p={2} borderRadius={2}>
      <List dense>
        {visibleMembers.map((member) => (
          <ListItem
            key={member.id}
            sx={{
              marginBottom: 1,
              borderRadius: 1,
            }}
            secondaryAction={
              <IconButton
                onClick={() => handleRemove(member.id!)}
                edge="end"
                color="inherit"
              >
                <Close />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>{member.username?.slice(0, 2).toUpperCase()}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={member.username} />
          </ListItem>
        ))}
      </List>

      {remainingCount > 0 && (
        <Box
          mt={1}
          gap={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            padding: "4px 8px",
            borderRadius: 1,
          }}
        >
          <Button
            fullWidth
            variant="contained"
            size="small"
            onClick={handleDialogOpen}
          >
            Exibir mais {remainingCount}
          </Button>
          <Paper>
            <IconButton size="medium">
              <PersonAdd />
            </IconButton>
          </Paper>
        </Box>
      )}

      <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth>
        <DialogTitle>Todos os Membros</DialogTitle>
        <DialogContent dividers>
          <List dense>
            {members.map((member) => (
              <ListItem
                key={member.id}
                secondaryAction={
                  <IconButton
                    onClick={() => handleRemove(member.id!)}
                    edge="end"
                    color="inherit"
                  >
                    <Close />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>{member.username?.slice(0, 2).toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={member.username} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
