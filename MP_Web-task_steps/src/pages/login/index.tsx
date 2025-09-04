import { useMediaQuery, useTheme } from "@mui/material";
import type React from "react";
import { MobileLogin } from "./mobile";
import { DesktopLogin } from "./desktop";

export const Login: React.FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  if (smDown) {
    return <MobileLogin />;
  }
  return <DesktopLogin />;
};
