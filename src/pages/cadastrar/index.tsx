import { useMediaQuery, useTheme } from "@mui/material";
import type React from "react";
import { MobileRegister } from "./mobile/cadastrarmobile";
import { DesktopRegister } from "./desktop/cadastrar";

export const Register: React.FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  if (smDown) {
    return <MobileRegister />;
  }
  return <DesktopRegister />;
};
