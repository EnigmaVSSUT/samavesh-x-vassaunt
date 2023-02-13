import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const EventTitle = ({ label }) => {
  return (
    <Typography
      variant="ACTitle"
      color="white"
      sx={{
        padding: "4px 10px",
        backgroundColor: "primary.main",
        width: "fit-content",
        borderRadius: "4px",
      }}
    >
      {label}
    </Typography>
  );
};

const EventDetails = ({ time, date, venue, organizer }) => {
  return (
    <Stack color="white">
      <Typography variant="ACLabel">Time: {time}</Typography>
      <Typography variant="ACLabel">{date}</Typography>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="ACLabel">Venue: {venue}</Typography>
        <Typography variant="ACLabel">Organized by: {organizer}</Typography>
      </Stack>
    </Stack>
  );
};

const EventCard = ({ event }) => {
  return (
    <Stack padding="11px 14px" gap="24px" bgcolor="black">
      <Stack gap="8px">
        <Image
          src={event.poster}
          alt={event.name}
          width={300}
          height={400}
          sx={{
            width: "100%",
          }}
        />
        <EventTitle label={event.name} />
      </Stack>
      <EventDetails
        date={event.date}
        organizer={event.organizer}
        time={event.time}
        venue={event.venue}
      />
    </Stack>
  );
};

export default EventCard;
