import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Darktheme, LightTheme } from "../themes";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";

interface IThemecontextData {
  themename: "light" | "dark";
  toggletheme: () => void;
}

interface childrenprop {
  children: ReactNode;
}

const ThemeContext = createContext({} as IThemecontextData);

export const UseThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<childrenprop> = ({ children }) => {
  const [themename, setThemeName] = useState<"light" | "dark">("light");

  const toggletheme = useCallback(() => {
    setThemeName((odlThemeName) =>
      odlThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themename === "light") return LightTheme;
    return Darktheme;
  }, [themename]);

  return (
    <ThemeContext.Provider value={{ themename, toggletheme }}>
      <ThemeProvider theme={theme}>
        <Box height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
