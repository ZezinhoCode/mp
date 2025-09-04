import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Autocomplete,
} from "@mui/material";
import logo from "../../../assets/maria_pitanga.svg";
import svgBackground from "../../../assets/background.svg";
import type React from "react";
import { useNavigate } from "react-router-dom";

export const DesktopRegister: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const unidades = [{ label: "Aldeota" }, { label: "Maraponga" }, { label: "Cambeba" }];

  return (
    <Box display="flex" height="100vh" width="100vw">
      {!mdDown && (
        <Box
          component="img"
          src={logo}
          alt="maria pitanga"
          sx={{
            width: "50%",
            objectFit: "cover",
          }}
        />
      )}

      <Box
        sx={{
          position: "relative",
          flex: 1,
          backgroundImage: `url(${svgBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={6}
            sx={{
              padding: 4,
              maxWidth: 400,
              width: "100%",
            }}
          >
            <Typography textAlign="center" variant="h4" gutterBottom>
              Cadastre-se
            </Typography>

            <Stack spacing={1}>
              <Typography>Nome</Typography>
              <TextField
                placeholder="Digite seu nome"
                fullWidth
                variant="outlined"
              />
              <Typography>Email</Typography>
              <TextField
                placeholder="Digite seu email"
                fullWidth
                variant="outlined"
              />
              <Typography>Celular</Typography>
              <TextField
                placeholder="Digite seu celular"
                fullWidth
                variant="outlined"
              />
              <Typography>Unidade</Typography>
              <Autocomplete
                options={unidades}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Selecione sua Unidade"
                  />
                )}
              />
              <Typography>Senha</Typography>
              <TextField
                type="password"
                placeholder="Digite sua senha"
                fullWidth
                variant="outlined"
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
                  Ir para Login
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};
