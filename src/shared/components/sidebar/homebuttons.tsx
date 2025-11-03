import { Box, Button, Icon, Stack, Typography } from "@mui/material";
import type React from "react";
import { iconMapping } from "../../utils";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IHomeButtonProps {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}

export const HomeButtons: React.FC<IHomeButtonProps> = ({
  to,
  label,
  icon,
  onClick,
}) => {
  const IconComponent = iconMapping[icon];
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <Box width="100%">
      <Stack direction="column">
        <Button
          fullWidth
          onClick={handleClick}
          startIcon={IconComponent ? <IconComponent /> : <Icon>{icon}</Icon>}
          sx={(theme) => ({
            justifyContent: "flex-start",
            textTransform: "none",
            backgroundColor: match
              ? theme.palette.mode === "dark"
                ? "#6f6f6fff"
                : theme.palette.grey[100]
              : "transparent",
            borderRadius: 2,
            fontWeight: 500,
            minWidth: 0,
            flexGrow: 1,
          })}
        >
          <Typography variant="body1" noWrap>
            {label}
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
};
