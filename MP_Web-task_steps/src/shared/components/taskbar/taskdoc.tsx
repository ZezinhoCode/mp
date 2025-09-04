import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LinkIcon from "@mui/icons-material/Link";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";

type Attachment = { type: "file" | "link"; name: string };

export const TaskDoc: React.FC = () => {
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [linkInput, setLinkInput] = useState("");

  const handleAddFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAttachments((prev) => [...prev, { type: "file", name: file.name }]);
    }
    setDialogOpen(false);
  };

  const handleAddLink = () => {
    if (linkInput.trim() !== "") {
      setAttachments((prev) => [
        ...prev,
        { type: "link", name: linkInput.trim() },
      ]);
      setLinkInput("");
      setDialogOpen(false);
    }
  };

  const handleRemove = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box p={2} borderRadius={2}>
      <List dense>
        {attachments.map((att, index) => (
          <ListItem
            key={index}
            sx={{
              marginBottom: 1,
              borderRadius: 1,
            }}
            secondaryAction={
              <IconButton
                edge="end"
                onClick={() => handleRemove(index)}
                color="inherit"
              >
                <CloseIcon />
              </IconButton>
            }
          >
            <ListItemIcon>
              {att.type === "file" ? <InsertDriveFileIcon /> : <LinkIcon />}
            </ListItemIcon>
            <ListItemText primary={att.name} />
          </ListItem>
        ))}
      </List>

      <Button
        variant="contained"
        color="inherit"
        fullWidth
        onClick={() => setDialogOpen(true)}
        startIcon={<AddIcon />}
      >
        <Typography>Anexar documento</Typography>
      </Button>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth>
        <DialogTitle>Selecione um Documento ou insira um Link</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <Button disabled={!!linkInput} variant="outlined" component="label">
              Enviar Arquivo
              <input type="file" hidden onChange={handleAddFile} />
            </Button>
            <TextField
              label="Inserir Link"
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancelar</Button>
          <Button onClick={handleAddLink}>Anexar Link</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
