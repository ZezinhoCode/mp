import { useMediaQuery, useTheme } from "@mui/material";
import { AtribuidoAmimMobile } from "./mobile";
import { AtribuidoAmimDesktop } from "./desktop";

export const AtribuidoAmim = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  if (smDown) {
    return <AtribuidoAmimMobile />;
  }
  return <AtribuidoAmimDesktop />;
};
