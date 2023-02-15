import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

const ClubCard = ({ title, about, venue, time }) => {
  return (
    <Grid item>
      <Stack
        sx={{
          width: "260px",
          height: "180px",
          backgroundColor: "red",
          padding: "10px",
          border: "3px solid black",
          justifyContent: "space-between",
        }}
      >
        <Stack>
          <Typography
            variant="h4"
            color="white"
            sx={{ fontSize: { md: "16px" } }}
          >
            {title}
          </Typography>
          <Typography variant="subtitle1" color="white">
            {about}
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography variant="subtitle1" color="white">
            Venue:{venue}
          </Typography>
          <Typography variant="subtitle1" color="white">
            Time:{time}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default ClubCard;
