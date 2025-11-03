import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import background from "../../assets/background.svg";
import { useNavigate } from "react-router-dom";

export const GetPasswordCode = () => {
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
            Recuperar senha
          </Typography>

          <Stack spacing={1}>
            <Typography>Email</Typography>
            <TextField
              placeholder="Digite seu email"
              fullWidth
              variant="outlined"
            />
            <Stack mt={2} spacing={1}>
              <Button
                color="success"
                onClick={() => navigate("/recuperar-senha")}
                variant="contained"
                fullWidth
              >
                Enviar código
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
