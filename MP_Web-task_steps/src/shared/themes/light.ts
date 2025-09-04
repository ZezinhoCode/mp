import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#DFDFDF",
      light: "#ffffff",
      dark: "#ffffff",
      contrastText: "#000000",
    },

    background: {
      default: "#fef7f7",
      paper: "#ffffff",
    },
  },

  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
  },

  typography: {
    allVariants: {
      color: "black",
    },
  },
});
