import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
  AvatarGroup,
  Tooltip,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import type { Itodo } from "../../interfaces";
import { format } from "date-fns";

interface ItodoItem {
  item: Itodo;
  handleDone: (id: string) => void;
  handleFavorite: (id: string) => void;
}

export const TodoItem: React.FC<ItodoItem> = ({
  item,
  handleDone,
  handleFavorite,
}) => {
  return (
    <Paper>
      <ListItem
        sx={{
          borderRadius: 2,
          mb: 1,
        }}
        secondaryAction={
          <IconButton onClick={() => handleFavorite(item.id)}>
            {item.isFavorite ? (
              <StarIcon sx={{ color: "yellow" }} />
            ) : (
              <StarBorderIcon sx={{ color: "yellow" }} />
            )}
          </IconButton>
        }
      >
        <ListItemIcon>
          <IconButton onClick={() => handleDone(item.id)}>
            {item.finished ? (
              <CheckCircleIcon color="success" />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
          </IconButton>
        </ListItemIcon>

        <ListItemText
          primary={
            <Typography sx={{ fontWeight: "bold" }} noWrap>
              {item.title}
            </Typography>
          }
          secondary={
            <Box display="flex" alignItems="center" gap={1} mt={0.5}>
              <Typography color="green" fontWeight="bold" variant="body2">
                {item.finished ? "Concluído" : "Em progresso"}
              </Typography>

              {item.deadline && (
                <>
                  <CalendarTodayIcon sx={{ fontSize: 16 }} />
                  <Typography variant="body2">
                    {format(new Date(item.deadline), "dd/MM/yyyy")}
                  </Typography>
                </>
              )}

              <LocationOnIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2">Unidade Aldeota</Typography>
            </Box>
          }
        />

        {item.members && item.members.length > 0 && (
          <AvatarGroup max={4} sx={{ mr: 1 }}>
            {item.members.map((m) => (
              <Tooltip title={m.username} key={m.id}>
                <Avatar sx={{ bgcolor: m.color, fontSize: 15 }}>
                  {m
                    .username!.split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </Avatar>
              </Tooltip>
            ))}
          </AvatarGroup>
        )}
      </ListItem>
    </Paper>
  );
};
