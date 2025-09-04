import {
  Box,
  Divider,
  Drawer,
  useMediaQuery,
  useTheme,
  Button,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import type React from "react";
import { useSidebarContext, UseThemeContext } from "../../contexts";
import { Profile } from "../profile/profile";
import { HomeButtons } from "./homebuttons";
import { ListButtons } from "./listbuttons";
import { SearchBar } from "../searchbar/searchbar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { DarkMode } from "@mui/icons-material";

export const Sidebar: React.FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggletheme } = UseThemeContext();
  const { isDrawerOpen, toggleDrawerOpen, draweroptions, setdraweroptions } =
    useSidebarContext();

  useEffect(() => {
    setdraweroptions([
      {
        label: "Planejado",
        icon: "home",
        path: "/planejado",
      },
      {
        label: "Atribuído a mim",
        icon: "person",
        path: "/atribuido",
      },
      {
        label: "Minha semana",
        icon: "week",
        path: "/semana",
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
        path: "/teste2",
      },
    ]);
  }, []);

  const listas = [
    {
      id: "1",
      name: "Operações da Loja",
      todos: Array(17).fill(0),
    },
    { id: "2", name: "Marketing e Vendas", todos: [] },
    { id: "3", name: "Financeiro", todos: Array(7).fill(0) },
    { id: "4", name: "Recursos Humanos", todos: Array(21).fill(0) },
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
        >
          <Box flexGrow={1} overflow="hidden">
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

            <Box flex={1}>
              <Box padding={1}>
                <SearchBar height={30} label="Pesquisar" />
              </Box>

              <ListButtons
                lists={listas}
                onListClick={(id) => console.log("Clicou na lista", id)}
              />
            </Box>
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
              startIcon={<AddIcon />}
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                borderRadius: 2,
                fontWeight: 500,
              }}
              onClick={() => console.log("Nova lista clicada")}
            >
              <Typography noWrap>Nova lista</Typography>
            </Button>
          </Box>
        </Box>
      </Drawer>
      <Box height="100%" marginLeft={smDown ? 0 : theme.spacing(28)}>
        <Outlet />
      </Box>
    </Box>
  );
};
