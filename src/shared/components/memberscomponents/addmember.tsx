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
import { SearchMembersDialog } from "./searchmember";
import { useState } from "react";

interface IaddMember {
  members: Iuser[];
  handleRemove: (id: string) => void;
  onClick?: () => void;
}

export const AddMember: React.FC<IaddMember> = ({
  members,
  handleRemove,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Paper sx={{pt: (0.1), px: (2), pb: (2), bgcolor: '#2a2a2a', borderRadius: '8px' }}>
      <Box p={2}>
        <Typography 
          fontWeight={400} 
          mb={0.1}
          sx={{ 
            fontSize: '20px',
            fontFamily: 'Roboto, sans-serif',
            color: 'white'
          }}
        >
          Membros
        </Typography>
        <List dense sx={{ mb: 0 }}>
          {members.map((member) => (
            <ListItem
              key={member.id}
              sx={{
                marginBottom: 1,
                borderRadius: '4px',
                bgcolor: '#323131',
                py: 0.5,
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
                <Avatar 
                  sx={{ 
                    bgcolor: member.color || '#f48fb1',
                    fontSize: '12px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    color: 'black',
                    width: 28,
                    height: 28,
                  }}
                >
                  {member.username?.slice(0, 2).toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary={member.username}
                primaryTypographyProps={{
                  sx: {
                    fontSize: '16px',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 400,
                    color: 'white',
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
        <Button
          onClick={handleOpen}
          fullWidth
          variant="contained"
          color="success"
          sx={{ 
            fontSize: '15px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            textTransform: 'none',
            py: 0.8,
          }}
        >
          Adicionar membro
        </Button>
      </Box>
      <SearchMembersDialog
        open={isOpen}
        onClose={handleClose}
        members={members}
      />
    </Paper>
  );
};
