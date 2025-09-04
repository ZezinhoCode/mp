import StarBorderIcon from "@mui/icons-material/StarBorder";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PersonOutline from "@mui/icons-material/PersonOutline";
import ViewWeekOutlined from "@mui/icons-material/ViewWeekOutlined";
import AutorenewOutlined from "@mui/icons-material/AutorenewOutlined";

import { type SvgIconComponent, CalendarToday } from "@mui/icons-material";

export const iconMapping: Record<string, SvgIconComponent> = {
  calendar: CalendarToday,
  star: StarBorderIcon,
  home: HomeIcon,
  stats: QueryStatsIcon,
  event: EventNoteIcon,
  person: PersonOutline,
  week: ViewWeekOutlined,
  routines: AutorenewOutlined,
};