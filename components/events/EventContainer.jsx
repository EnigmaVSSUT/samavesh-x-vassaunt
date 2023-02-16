import { Grid } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import EventCard from "./EventCard";

const EventContainer = ({ events, day }) => {
  // console.log('event container', events)

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.main
        key={day}
        initial={{
          x: 0,
          opacity: 0,
          y: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          y: 0,
        }}
        exit={{
          x: 0,
          opacity: 0,
        }}
        transition={{
          ease: "linear",
        }}
        style={{
          width: "100%",
        }}
      >
        <Grid container spacing={2} padding="16px">
          {events[day].map((e) => (
            <EventCard event={e} key={day + e.name} />
          ))}
        </Grid>
      </motion.main>
    </AnimatePresence>
  );
};

export default EventContainer;
