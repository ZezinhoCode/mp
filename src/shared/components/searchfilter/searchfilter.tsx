import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Divider,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { ItodoList, Iuser } from "../../interfaces";

interface IsearchFilterProps {
  status: string[];
  users: Iuser[];
  showUserFilter?: boolean;
  showRoutineFilter?: boolean;
  showRoutine?: boolean;
  handleShowRoutine?: () => void;
}

export const SearchFilter: React.FC<IsearchFilterProps> = ({
  status,
  users,
  showUserFilter = true,
  showRoutineFilter = true,
  showRoutine,
  handleShowRoutine,
}) => {
  const [open, setOpen] = useState(false);

  const mockLists: ItodoList[] = [
    {
      id: "list1",
      name: "Rotinas Semanais da Loja",
      todos: [
        {
          id: "2",
          title: "Reposição de Estoque Semanal",
          finished: false,
          updatedAt: "2025-06-20T09:00:00",
          createdAt: "2025-06-01T08:00:00",
          isFavorite: false,
          deadline: "2025-07-01",
          steps: [
            {
              id: "step1",
              title: "Conferir estoque de polpa de açaí",
              completed: false,
              deadline: "2025-06-24",
              responsible: "Carlos Oliveira",
            },
          ],
          members: [
            {
              id: "u2",
              username: "Ernesto Dalva",
              email: "ernesto@example.com",
              color: "#81d4fa",
            },
            {
              id: "u3",
              username: "Maria Souza",
              email: "maria@example.com",
              color: "#ffab91",
            },
          ],
        },
      ],
    },
    {
      id: "list2",
      name: "Projetos Especiais",
      todos: [
        {
          id: "1",
          title: "Análise de Vendas (2025.2)",
          finished: false,
          updatedAt: "2025-06-17T10:27:00",
          createdAt: "2025-05-01T08:00:00",
          isFavorite: true,
          deadline: "2025-07-31",
          steps: [
            {
              id: "step1",
              title: "Estruturar relatório no Power BI",
              completed: false,
              deadline: "2025-06-28",
              responsible: "Ernesto Dalva",
            },
          ],
          members: [
            {
              id: "u2",
              username: "Ernesto Dalva",
              email: "ernesto@example.com",
              color: "#81d4fa",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Button
        variant="contained"
        color="inherit"
        onClick={() => setOpen(true)}
        sx={{ textTransform: "none" }}
      >
        <Typography>Filtros</Typography>
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Filtros de pesquisa</DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography fontSize={18} variant="subtitle2" gutterBottom>
                Status
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <FormControl fullWidth size="small">
                <Select displayEmpty defaultValue="">
                  <MenuItem disabled value="">
                    Selecione
                  </MenuItem>
                  {status.map((statusItem) => (
                    <MenuItem key={statusItem} value={statusItem}>
                      {statusItem}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography fontSize={18} variant="subtitle2" gutterBottom>
                Data
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <DatePicker
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    size: "small",
                    placeholder: "Selecione a data",
                  },
                }}
              />
            </Grid>

            {showRoutineFilter && (
              <Grid size={{ xs: 12, sm: 4 }}>
                <Typography fontSize={18} variant="subtitle2" gutterBottom>
                  Visualizar Rotinas
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <FormControlLabel
                  label={showRoutine ? "Ocultar rotinas" : "Visualizar rotinas"}
                  control={
                    <Switch
                      onChange={handleShowRoutine}
                      checked={showRoutine}
                    ></Switch>
                  }
                ></FormControlLabel>
              </Grid>
            )}

            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography fontSize={18} variant="subtitle2" gutterBottom>
                Visualizar etapas
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <FormControlLabel
                label={showRoutine ? "Ocultar etapas" : "Visualizar etapas"}
                control={
                  <Switch
                    onChange={handleShowRoutine}
                    checked={showRoutine}
                  ></Switch>
                }
              ></FormControlLabel>
            </Grid>

            {showUserFilter && (
              <Grid size={{ xs: 12, sm: 4 }}>
                <Typography fontSize={18} variant="subtitle2" gutterBottom>
                  Usuário
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <FormControl fullWidth size="small">
                  <Select multiple displayEmpty defaultValue={[]}>
                    <MenuItem disabled value="">
                      Selecione
                    </MenuItem>
                    {users.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.username}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            )}

            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography fontSize={18} variant="subtitle2" gutterBottom>
                Listas
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <FormControl fullWidth size="small">
                <Select displayEmpty defaultValue="">
                  <MenuItem disabled value="">
                    Selecione
                  </MenuItem>
                  {mockLists.map((lists) => (
                    <MenuItem key={lists.id} value={lists.id}>
                      {lists.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} color="inherit">
            Cancelar
          </Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Aplicar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
