import { useMediaQuery, useTheme } from "@mui/material";
import { ImportanteMobile } from "./mobile";
import { ImportanteDesktop } from "./desktop";

export const Importante = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  if (smDown) {
    return <ImportanteMobile></ImportanteMobile>;
  }
  return <ImportanteDesktop></ImportanteDesktop>;
};
