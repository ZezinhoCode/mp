import { Close } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import type React from "react";
import type { Iuser } from "../../interfaces";

interface IaddMember {
  members: Iuser[];
  handleRemove: (id: string) => void;
  onClick: () => void;
}

export const AddMember: React.FC<IaddMember> = ({
  members,
  handleRemove,
  onClick,
}) => {
  return (
    <Paper>
      <Box p={2} borderRadius={2}>
        <Typography fontWeight={700} mb={2}>
          Membros
        </Typography>
        <List dense>
          {members.map((member) => (
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
        <Button onClick={onClick} fullWidth variant="contained" color="success">
          Adicionar membro
        </Button>
      </Box>
    </Paper>
  );
};
