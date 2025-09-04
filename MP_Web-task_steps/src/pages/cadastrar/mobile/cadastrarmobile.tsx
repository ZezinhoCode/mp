import {
  Box,
  Container,
  Paper,
  Typography,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import type React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/maria_pitanga.svg";

export const MobileRegister: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      mt={4}
      justifyContent="center"
      alignItems="center"
    >
      <Container sx={{ mb: 2 }}>
        <Paper
          sx={{
            padding: 4,
          }}
        >
          <Typography textAlign="center" variant="h4" gutterBottom>
            Cadastre-se
          </Typography>
          <Stack>
            <Typography>Nome</Typography>
            <TextField label="Nome" fullWidth />
            <Typography>Email</Typography>
            <TextField label="Email" fullWidth />
            <Typography>Celular</Typography>
            <TextField label="Celular" fullWidth />
            <Typography>Unidade</Typography>
            <FormControl fullWidth>
              <InputLabel id="unidade-label">Unidade</InputLabel>
              <Select labelId="unidade-label" label="Unidade">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <Stack mt={2} spacing={1}>
              <Button
                onClick={() => navigate("/")}
                variant="contained"
                color="success"
                fullWidth
              >
                Prosseguir
              </Button>
              <Button
                onClick={() => navigate("/login")}
                variant="contained"
                fullWidth
              >
                Voltar
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
      <img src={logo} alt="maria pitanga" height="500rem" />
    </Box>
  );
};
