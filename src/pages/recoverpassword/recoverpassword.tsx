import background from "../../assets/background.svg";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const RecoverPassword = () => {
  const navigate = useNavigate();
  return (
    <Box
      width="100%"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            maxWidth: 400,
          }}
        >
          <Typography textAlign="center" variant="h4" gutterBottom>
            Definição de senha
          </Typography>

          <Stack spacing={1}>
            <Typography>nova senha</Typography>
            <TextField
              placeholder="Digite sua nova senha"
              fullWidth
              variant="outlined"
            />
            <Typography>confirmar senha</Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="confirme sua senha"
            />
            <Stack mt={2} spacing={1}>
              <Button
                color="success"
                onClick={() => navigate("/cadastrar")}
                variant="contained"
                fullWidth
              >
                Confirmar
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
