import CategoryTabSelector from "@/components/events/CategoryTabSelector";
import DayTabSelector from "@/components/events/DayTabSelector";
import EventCard from "@/components/events/EventCard";
import EventContainer from "@/components/events/EventContainer";
import timeline from "@/lib/data/timeline";
import useEventTimelineStore from "@/lib/store/useEventTimelineStore";
import {
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const Day = ({ day }) => {
  return (
    <Typography
      variant="ACH1"
      fontSize={250}
      textAlign="center"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "transparent",
        WebkitTextStrokeColor: "#857370",
        WebkitTextStrokeWidth: "1px",
        zIndex: -1,
      }}
    >
      DAY : {day}
    </Typography>
  );
};

const Events = () => {
  const [activeDay, events] = useEventTimelineStore((state) => [
    state.activeDay,
    state.events,
  ]);

  return (
    <Stack
      sx={{
        padding: {
          xs: "20px",
          md: "32px",
        },
      }}
      top="100px"
    >
      <Typography variant="ACH1" textAlign="center">
        Event Timeline
      </Typography>
      <Stack padding="16px" gap="20px" alignItems="center" width="100%">
        <CategoryTabSelector />
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          sx={{
            width: "100%",
          }}
          alignItems={{
            xs: "center",
            lg: "start",
          }}
        >
          <DayTabSelector />
          <EventContainer events={events} day={activeDay} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Events;
