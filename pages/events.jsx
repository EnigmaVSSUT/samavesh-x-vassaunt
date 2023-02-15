import EventCard from "@/components/events/EventCard";
import timeline from "@/lib/data/timeline";
import useEventTimelineStore from "@/lib/store/useEventTimelineStore";
import {
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const TabPanel = () => {
  const [activeTab, setActiveTab] = useEventTimelineStore((state) => [
    state.activeTab,
    state.setActiveTab,
  ]);
  // const theme = useTheme()
  const greaterThanLg = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    noSsr: true,
  });

  const handleChange = (e, v) => {
    setActiveTab(v);
  };

  return (
    <Tabs
      orientation={greaterThanLg ? "vertical" : "horizontal"}
      value={activeTab}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      sx={{
        "& .MuiTabs-scrollButtons": {
          width: "20px",
        },
      }}
    >
      <Tab
        label={
          <Typography variant={activeTab === 0 ? "ACH2" : "ACH3"}>
            DAY : 1
          </Typography>
        }
      />
      <Tab
        label={
          <Typography variant={activeTab === 1 ? "ACH2" : "ACH3"}>
            DAY : 2
          </Typography>
        }
      />
      <Tab
        label={
          <Typography variant={activeTab === 2 ? "ACH2" : "ACH3"}>
            DAY : 3
          </Typography>
        }
      />
    </Tabs>
  );
};

const TabPanelType = () => {
  const [typeActiveTab, setTypeActiveTab] = useEventTimelineStore((state) => [
    state.typeActiveTab,
    state.setTypeActiveTab,
  ]);
  // const theme = useTheme()
  // const greaterThanLg = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
  //   noSsr: true,
  // });

  const handleChange = (e, v) => {
    setTypeActiveTab(v);
  };

  return (
    <Tabs
      orientation="horizontal"
      value={typeActiveTab}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      sx={{
        "& .MuiTabs-scrollButtons": {
          width: "20px",
        },
      }}
    >
      <Tab
        label={
          <Typography variant={typeActiveTab === 0 ? "ACH2" : "ACH3"}>
            Technical
          </Typography>
        }
      />
      <Tab
        label={
          <Typography variant={typeActiveTab === 1 ? "ACH2" : "ACH3"}>
            Cultural
          </Typography>
        }
      />
      <Tab
        label={
          <Typography variant={typeActiveTab === 2 ? "ACH2" : "ACH3"}>
            Fun
          </Typography>
        }
      />
      <Tab
        label={
          <Typography variant={typeActiveTab === 3 ? "ACH2" : "ACH3"}>
            EXHIBITION
          </Typography>
        }
      />
    </Tabs>
  );
};

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

const EventContainer = ({ timeline: { events, day } }) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.main
        direction="row"
        key={day}
        initial={{
          x: 700,
          opacity: 0,
          y: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          y: 0,
        }}
        exit={{
          x: -300,
          opacity: 0,
        }}
        transition={{
          ease: "linear",
        }}
        style={{
          position: "relative",
        }}
      >
        <Stack
          direction="row"
          gap="24px"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          {events.map((e) => (
            <EventCard event={e} key={e.name} />
          ))}
          <Day day={day + 1} />
        </Stack>
      </motion.main>
    </AnimatePresence>
  );
};

const TabContent = () => {
  const activeTab = useEventTimelineStore((state) => state.activeTab);

  return (
    <Stack
      flexGrow={1}
      sx={{
        padding: {
          xs: "20px",
          md: "32px",
        },
      }}
    >
      <EventContainer timeline={timeline[activeTab]} />
    </Stack>
  );
};

const Events = () => {
  const activeTab = useEventTimelineStore((state) => state.activeTab);

  return (
    <Stack
      sx={{
        padding: {
          xs: "20px",
          md: "32px",
        },
      }}
      position="sticky"
      top="100px"
    >
      <Typography variant="ACH1" textAlign="center">
        <TabPanelType />
      </Typography>
      <Stack
        direction={{
          xs: "column",
          lg: "row",
        }}
        sx={{
          padding: {
            xs: "20px",
            md: "32px",
          },
        }}
        alignItems={{
          xs: "center",
          lg: "start",
        }}
      >
        <TabPanel />
        <EventContainer timeline={timeline[activeTab]} />
      </Stack>
    </Stack>
  );
};

export default Events;
