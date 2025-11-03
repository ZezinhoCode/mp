import { useMediaQuery, useTheme } from "@mui/material";
import { MinhaSemanaMobile } from "./mobile";
import { MinhaSemanaDesktop } from "./desktop";

export const MinhaSemana = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  if (smDown) {
    return <MinhaSemanaMobile></MinhaSemanaMobile>;
  }
  return <MinhaSemanaDesktop></MinhaSemanaDesktop>;
};
