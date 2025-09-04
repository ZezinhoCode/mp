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
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/maria_pitanga.svg";

export const MobileLogin: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      flexDirection="column-reverse"
      mt={4}
      justifyContent="center"
      alignItems="center"
    >
      <img
        src={logo}
        alt="maria pitanga"
        height={mdDown ? "700rem" : "874rem"}
      />

      <Container sx={{ mb: 2, ml: 8 }}>
        <Paper
          elevation={6}
          sx={{
            padding: 4,
          }}
        >
          <Typography textAlign="center" variant="h4" gutterBottom>
            Login
          </Typography>

          <Stack>
            <Typography>Nome/Email/Telefone</Typography>
            <TextField label="input" type="text" fullWidth />
            <Typography>Senha</Typography>
            <TextField type="password" label="Senha"></TextField>
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
  );
};
