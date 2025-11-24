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
  scale?: number; // Prop opcional para controle externo da escala
}

export const StepsList: React.FC<StepsListProps> = ({
  steps,
  onEdit,
  onDelete,
  onAdd,
  onToggle,
  scale = 0.8, // Valor padrão se não for passado via prop
}) => {
  const [expandedStepId, setExpandedStepId] = useState<string | null>(null);

  const SCALE = scale;

  // Função helper para escalar valores
  const s = (value: number) => value * SCALE;

  const toggleStep = (id: string) => {
    setExpandedStepId((prev) => (prev === id ? null : id));
  };

  const minTwoSteps = steps.length >= 2;

  return (
    // 1. O Paper principal é um contentor flex
    <Paper
      sx={{
        p: s(0.1),
        bgcolor: "#2a2a2a",
        borderRadius: `${s(8)}px`,
        // 2. MUDANÇA: 'height: 100%' foi trocado por 'maxHeight: 100%'
        // Isso permite que o Paper encolha ao tamanho do conteúdo,
        // mas não cresça mais que o espaço disponível.
        maxHeight: "100%",
        // 3. ADIÇÃO: Layout flex vertical para organizar topo, meio (scroll) e fundo.
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {/* 4. O Box interno também precisa ser flex para preencher o Paper */}
      <Box
          pt={s(1.5)} 
          px={s(1.5)} 
          pb={s(2)}
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1, // Permite que este Box cresça
          minHeight: 0, // Necessário para o overflow funcionar
        }}
      >
        {/* 5. TOPO (Título) - Fixo */}
        <Box sx={{ flexShrink: 0 }}>
          <Typography
            fontWeight={400}
            mb={s(1)}
            sx={{
              fontSize: `${s(24)}px`,
              fontFamily: "Roboto, sans-serif",
              color: "white",
            }}
          >
            Defina as etapas da tarefa
          </Typography>
        </Box>

        {/* 6. MEIO (Lista de Etapas) - Cresce e tem scroll */}
        <Stack
          spacing={s(1.5)}
          sx={{
            flexGrow: 1, // Faz a lista ocupar todo o espaço do meio
            overflowY: "auto", // Adiciona scroll SÓ na lista
            pr: s(0.5), // Espaço para a barra de scroll
            mr: s(-0.5), // Compensa o padding
          }}
        >
          {steps.map((step, index) => (
            <Paper
              key={step.id}
              sx={{
                p: s(1.5),
                borderRadius: `${s(4)}px`,
                bgcolor: "#323131",
              }}
            >
              <Box display="flex" width="100%" alignItems="center" gap={s(0.5)}>
                <Typography
                  mr={s(0.5)}
                  sx={{
                    fontSize: `${s(17)}px`,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    color: "#5b5a5a",
                  }}
                >
                  {index + 1}°
                </Typography>
                <FormControlLabel
                  sx={{
                    flex: 1,
                    mr: s(1),
                  }}
                  control={
                    <Checkbox
                      icon={
                        <RadioButtonUncheckedIcon
                          sx={{ fontSize: `${s(24)}px` }}
                        />
                      }
                      checkedIcon={
                        <RadioButtonCheckedIcon
                          sx={{ fontSize: `${s(24)}px` }}
                        />
                      }
                      onChange={() => onToggle(step.id)}
                      checked={step.completed}
                    />
                  }
                  label={
                    <Box>
                      <Typography
                        sx={{
                          fontSize: `${s(16)}px`,
                          fontFamily: "Roboto, sans-serif",
                          fontWeight: 300,
                          color: "white",
                        }}
                      >
                        {step.title}
                      </Typography>
                    </Box>
                  }
                ></FormControlLabel>
                <IconButton
                  sx={{ ml: "auto" }}
                  onClick={() => toggleStep(step.id)}
                  size={
                    SCALE > 1.5 ? "large" : SCALE < 0.75 ? "small" : "medium"
                  }
                >
                  <ExpandMoreIcon
                    sx={{
                      fontSize: `${s(24)}px`,
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
                <Box
                  mt={s(1)}
                  p={s(1)}
                  sx={{
                    bgcolor: "#464242",
                    borderRadius: `${s(4)}px`,
                  }}
                >
                  {step.deadline && (
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: `${s(16)}px`,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 300,
                        color: "white",
                        mb: s(1),
                      }}
                    >
                      Prazo:{" "}
                      {format(new Date(step.deadline), "dd/MM/yy", {
                        locale: ptBR,
                      })}
                    </Typography>
                  )}

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: `${s(16)}px`,
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 300,
                      color: "white",
                      mb: s(1),
                    }}
                  >
                    Responsável: {step.responsible}
                  </Typography>

                  <Stack direction="column" spacing={s(1)} mt={s(1)}>
                    <Button
                      variant="text"
                      onClick={() => onEdit(step.id)}
                      sx={{
                        justifyContent: "center",
                        color: "white",
                        fontSize: `${s(16)}px`,
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 400,
                        textTransform: "none",
                        py: s(0.5),
                        px: s(1),
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    >
                      Editar Etapa
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => onDelete(step.id)}
                      sx={{
                        fontSize: `${s(16)}px`,
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 400,
                        textTransform: "none",
                        py: s(0.75),
                        px: s(1.5),
                      }}
                    >
                      Apagar etapa
                    </Button>
                  </Stack>
                </Box>
              </Collapse>
            </Paper>
          ))}
        </Stack>

        {/* 7. FUNDO (Aviso e Botão) - Fixo */}
        <Box sx={{ flexShrink: 0, pt: s(1) }}>
          {!minTwoSteps && (
            <Typography
              color="error"
              mt={s(1)}
              sx={{
                fontSize: `${s(16)}px`,
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
                textDecoration: "underline",
                color: "#ef4949",
              }}
            >
              OBS: É necessário ao menos duas etapas para criar uma tarefa
            </Typography>
          )}

          <Button
            fullWidth
            sx={{
              mt: s(6.5),
              fontSize: `${s(17)}px`,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              textTransform: "none",
              py: s(0.8),
            }}
            variant="contained"
            color="success"
            onClick={onAdd}
          >
            Adicionar etapa
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};