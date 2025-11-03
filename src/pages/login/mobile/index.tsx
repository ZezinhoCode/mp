import {
  Box,
  Container,
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/maria_pitanga.svg";
import background from "../../../assets/background.svg";

export const MobileLogin: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column-reverse"
      justifyContent="center"
      alignItems="center"
      width="100%"
      minHeight="100vh"
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

      <Box
        sx={{
          position: "relative",
          flex: 1,
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container sx={{ p: 2 }}>
          <Paper
            elevation={6}
            sx={{
              padding: 4,
              mx: 2,
            }}
          >
            <Typography textAlign="center" variant="h4" gutterBottom>
              Login
            </Typography>

            <Stack>
              <Typography>Nome/Email/Telefone</Typography>
              <TextField type="text" placeholder="Login" fullWidth />
              <Typography>Senha</Typography>
              <TextField
                type="password"
                placeholder="Digite sua senha"
              ></TextField>
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
                <Button
                  onClick={() => navigate("/codigo")}
                  variant="contained"
                  fullWidth
                >
                  Esqueci a senha
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};
