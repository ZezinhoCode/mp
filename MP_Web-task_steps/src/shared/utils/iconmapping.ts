import StarBorderIcon from "@mui/icons-material/StarBorder";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import EventNoteIcon from "@mui/icons-material/EventNote";

import { type SvgIconComponent, CalendarToday } from "@mui/icons-material";

export const iconMapping: Record<string, SvgIconComponent> = {
  calendar: CalendarToday,
  star: StarBorderIcon,
  home: HomeIcon,
  stats: QueryStatsIcon,
  event: EventNoteIcon,
};
