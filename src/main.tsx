import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AppSidebarProvider } from "./shared/contexts";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "date-fns/locale";
import { AppThemeProvider } from "./shared/contexts/themecontext";
import { TodoContextProvider } from "./shared/contexts/todocontext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
        <AppSidebarProvider>
          <TodoContextProvider>
            <App />
          </TodoContextProvider>
        </AppSidebarProvider>
      </LocalizationProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
