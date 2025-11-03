import { useMediaQuery, useTheme } from "@mui/material";
import { RotinasMobile } from "./mobile";
import { RotinasDesktop } from "./desktop";

export const Rotinas = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  if (smDown) {
    return <RotinasMobile></RotinasMobile>;
  }
  return <RotinasDesktop></RotinasDesktop>;
};
