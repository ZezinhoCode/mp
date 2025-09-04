import { Avatar, ButtonBase, Stack, Typography } from "@mui/material";
import { useState } from "react";

interface Iprofile {
  username: string;
  userEmail: string;
}

export const Profile: React.FC<Iprofile> = ({ username, userEmail }) => {
  const [avatarSrc, setAvatarSrc] = useState<string | undefined>(undefined);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ButtonBase
      component="label"
      role={undefined}
      aria-label="Avatar-image"
      tabIndex={-1}
      sx={{
        borderRadius: "40px",
        "&:has(:focus-visible)": {
          outline: "2px solid",
          outlineOffset: "2px",
        },
      }}
    >
      <Avatar
        sx={{ width: 60, height: 60 }}
        alt="Upload new Avatar"
        src={avatarSrc}
      />
      <input
        onChange={handleAvatarChange}
        type="file"
        accept="image/*"
        style={{
          border: 0,
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          whiteSpace: "nowrap",
          width: "1px",
        }}
      />
      <Stack mx={1} direction="column">
        <Typography>{username}</Typography>
        <Typography>{userEmail}</Typography>
      </Stack>
    </ButtonBase>
  );
};
