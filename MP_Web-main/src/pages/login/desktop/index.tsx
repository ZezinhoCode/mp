import {
  useMediaQuery,
  Box,
  Container,
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import React from "react";
import svgBackground from "../../../assets/background.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/maria_pitanga.svg";

export const DesktopLogin: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

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
            Login
          </Typography>

          <Stack spacing={1}>
            <Typography>Nome/Email/Telefone</Typography>
            <TextField placeholder="Login" fullWidth variant="outlined" />
            <Typography>Senha</Typography>
            <TextField placeholder="Digite sua senha" fullWidth variant="outlined"></TextField>
            <Stack mt={2} spacing={1}>
              <Button
                onClick={() => navigate("/")}
                variant="contained"
                color="success"
                fullWidth
              >
                Efetuar login
              </Button>
              <Button
                onClick={() => navigate("/cadastrar")}
                variant="contained"
                fullWidth
              >
                Pedir acesso a plataforma
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
      </Box>
    </Box>
  );
};
