import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import { Edit, Save, Delete, Close } from "@mui/icons-material";

export const GroupDescriptionBox = () => {
  const [description, setDescription] = useState<string>(
    "MIRO MP: https://miro.com/app/board/uXjVUJ5KevE=/"
  );
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(description);

  const handleSave = () => {
    setDescription(draft.trim());
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(description);
    setIsEditing(false);
  };

  const handleClear = () => {
    setDescription("");
    setDraft("");
  };

  return (
    <Paper
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      {isEditing ? (
        <Stack spacing={1}>
          <TextField
            fullWidth
            multiline
            minRows={2}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <Button
              variant="contained"
              color="success"
              size="small"
              startIcon={<Save />}
              onClick={handleSave}
            >
              Salvar
            </Button>
            <Button
              variant="contained"
              color="inherit"
              size="small"
              startIcon={<Close />}
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              startIcon={<Delete />}
              onClick={handleClear}
            >
              Apagar
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Typography
            sx={{
              whiteSpace: "pre-line",
              wordBreak: "break-word",
              flex: 1,
            }}
          >
            {description || (
              <Typography color="text.secondary" fontStyle="italic">
                Nenhuma descrição adicionada
              </Typography>
            )}
          </Typography>
          <IconButton onClick={() => setIsEditing(true)}>
            <Edit />
          </IconButton>
        </Box>
      )}
    </Paper>
  );
};
