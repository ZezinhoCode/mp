import {
  Box,
  Container,
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import type React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/maria_pitanga.svg";
import background from "../../../assets/background.svg";

const unidades = [
  { label: "Aldeota" },
  { label: "Maraponga" },
  { label: "Cambeba" },
];

export const MobileRegister: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column-reverse"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box width="100%">
        <img
          src={logo}
          alt="maria pitanga"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Container sx={{ mb: 2, p: 3 }}>
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
            <Autocomplete
              freeSolo
              options={unidades}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Unidade" />
              )}
            />

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
    </Box>
  );
};
