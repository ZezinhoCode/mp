import {
  Box,
  Divider,
  Drawer,
  useMediaQuery,
  useTheme,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { useSidebarContext, UseThemeContext } from "../../contexts";
import { Profile } from "../profile/profile";
import { HomeButtons } from "./homebuttons";
import { ListButtons } from "./listbuttons";
import { SearchBar } from "../searchbar/searchbar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { DarkMode, Logout } from "@mui/icons-material";

export const Sidebar: React.FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggletheme } = UseThemeContext();
  const { isDrawerOpen, toggleDrawerOpen, draweroptions, setdraweroptions } =
    useSidebarContext();

  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  useEffect(() => {
    setdraweroptions([
      {
        label: "Planejado",
        icon: "home",
        path: "/teste2",
      },
      {
        label: "Atribuído a mim",
        icon: "person",
        path: "/atribuido-a-mim",
      },
      {
        label: "Minha semana",
        icon: "week",
        path: "/minha-semana",
      },
      {
        label: "Rotinas",
        icon: "routines",
        path: "/rotinas",
      },
      {
        label: "Importante",
        icon: "star",
        path: "/importante",
      },
      {
        label: "Relatórios",
        icon: "stats",
        path: "/relatorios",
      },
    ]);
  }, []);

  const listas = [
    {
      id: "1",
      name: "Lançamentos",
      todos: Array(17).fill(0),
    },
    { id: "2", name: "Lago Jacarey", todos: [] },
    { id: "3", name: "Aeroporto", todos: Array(7).fill(0) },
    { id: "4", name: "Aldeota", todos: Array(21).fill(0) },
    { id: "5", name: "Teste 5", todos: Array(21).fill(0) },
    { id: "6", name: "Teste 6", todos: Array(21).fill(0) },
    { id: "7", name: "Teste 7", todos: Array(21).fill(0) },
    { id: "8", name: "Teste 8", todos: Array(21).fill(0) },
    { id: "9", name: "Teste 9", todos: Array(21).fill(0) },
    { id: "10", name: "Teste 10", todos: Array(21).fill(0) },
  ];

  return (
    <Box>
      <Drawer
        onClose={toggleDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        open={isDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
          overflow="hidden"
        >
          <Box>
            <Box width="100%" padding={1} height={theme.spacing(8)}>
              <Profile username="Ernesto" userEmail="ernesto@gmail.com" />
            </Box>

            <Box padding={1}>
              {draweroptions.map((drawerOption) => (
                <HomeButtons
                  onClick={smDown ? toggleDrawerOpen : undefined}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  to={drawerOption.path}
                  key={drawerOption.path}
                />
              ))}
            </Box>

            <Divider />

            <Box padding={1}>
              <SearchBar height={30} label="Pesquisar" />
            </Box>
          </Box>

          <Box
            sx={{
              overflowY: "auto",
              flex: 1,
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#555" : "#bbb",
                borderRadius: "8px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#777" : "#999",
              },
            }}
          >
            <ListButtons
              lists={listas}
              onListClick={(id) => console.log("Clicou na lista", id)}
            />
          </Box>

          <Box padding={1} sx={{ mt: "auto" }}>
            <Button
              fullWidth
              startIcon={<AddIcon />}
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                borderRadius: 2,
                fontWeight: 500,
                mb: 1,
              }}
              onClick={() => console.log("Nova lista clicada")}
            >
              <Typography noWrap>Nova lista</Typography>
            </Button>

            <Divider sx={{ my: 1 }} />
          </Box>

          <Box padding={1}>
            <Button
              fullWidth
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                borderRadius: 2,
                fontWeight: 500,
              }}
              startIcon={<DarkMode />}
              onClick={toggletheme}
            >
              <Typography noWrap>Trocar tema</Typography>
            </Button>

            <Button
              fullWidth
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                borderRadius: 2,
                fontWeight: 500,
              }}
              startIcon={<Logout />}
              onClick={() => setOpenLogoutDialog(true)}
            >
              <Typography noWrap>Sair</Typography>
            </Button>
          </Box>
        </Box>
      </Drawer>
      <Box height="100%" marginLeft={smDown ? 0 : theme.spacing(28)}>
        <Outlet />
      </Box>

      <Dialog
        open={openLogoutDialog}
        onClose={() => setOpenLogoutDialog(false)}
      >
        <DialogTitle>Confirmar Saída</DialogTitle>
        <DialogContent>
          <Typography>Tem certeza que deseja sair?</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => setOpenLogoutDialog(false)}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setOpenLogoutDialog(false);
              localStorage.clear();
              window.location.href = "/login";
            }}
            color="primary"
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
