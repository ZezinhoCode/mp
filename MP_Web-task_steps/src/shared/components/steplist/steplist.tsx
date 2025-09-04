import {
  Box,
  Typography,
  Stack,
  IconButton,
  Button,
  Collapse,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import type { Istep } from "../../interfaces";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface StepsListProps {
  steps: Istep[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
  onToggle: (stepId: string) => void;
}

export const StepsList: React.FC<StepsListProps> = ({
  steps,
  onEdit,
  onDelete,
  onAdd,
  onToggle,
}) => {
  const [expandedStepId, setExpandedStepId] = useState<string | null>(null);

  const toggleStep = (id: string) => {
    setExpandedStepId((prev) => (prev === id ? null : id));
  };

  const minTwoSteps = steps.length >= 2;

  return (
    <Paper>
      <Box p={2}>
        <Typography fontWeight={700} mb={2}>
          Defina as Etapas da Tarefa
        </Typography>

        <Stack spacing={1}>
          {steps.map((step, index) => (
            <Paper key={step.id} sx={{ p: 1, borderRadius: 1 }}>
              <Box display="flex" width="100%" alignItems="center">
                <Typography mr={1}>{index + 1}°</Typography>
                <FormControlLabel
                  sx={{
                    flex: 1,
                    mr: 1,
                  }}
                  control={
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                      onChange={() => onToggle(step.id)}
                      checked={step.completed}
                    />
                  }
                  label={
                    <Box>
                      <Typography>{step.title}</Typography>
                    </Box>
                  }
                ></FormControlLabel>
                <IconButton
                  sx={{ ml: "auto" }}
                  onClick={() => toggleStep(step.id)}
                  size="small"
                >
                  <ExpandMoreIcon
                    sx={{
                      transform:
                        expandedStepId === step.id
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition: "0.2s",
                    }}
                  />
                </IconButton>
              </Box>

              <Collapse in={expandedStepId === step.id}>
                <Box mt={1} pl={2}>
                  {step.deadline && (
                    <Typography variant="body2">
                      Prazo:
                      {format(new Date(step.deadline), "dd/MM/yyyy", {
                        locale: ptBR,
                      })}
                    </Typography>
                  )}

                  <Typography variant="body2">
                    Responsável: {step.responsible}
                  </Typography>

                  <Stack direction="column" spacing={1} mt={1}>
                    <Button variant="contained" onClick={() => onEdit(step.id)}>
                      Editar etapa
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => onDelete(step.id)}
                    >
                      Apagar etapa
                    </Button>
                  </Stack>
                </Box>
              </Collapse>
            </Paper>
          ))}
        </Stack>

        {!minTwoSteps && (
          <Typography color="error" mt={2}>
            OBS: É necessário ao menos duas etapas para criar uma tarefa
          </Typography>
        )}

        <Button
          fullWidth
          sx={{ mt: 2 }}
          variant="contained"
          color="success"
          onClick={onAdd}
        >
          Adicionar etapa
        </Button>
      </Box>
    </Paper>
  );
};
