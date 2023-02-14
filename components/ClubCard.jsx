import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
const ClubCard = () => {
  return (
    <Grid item lg={4}>
      <Stack
        sx={{
          width: "300px",
          height: "200px",
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
            Nox Code
          </Typography>
          <Typography variant="subtitle1" color="white">
            About club
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography variant="subtitle1" color="white">
            Venue: E-Learning Center
          </Typography>
          <Typography variant="subtitle1" color="white">
            Time: 9.30AM
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default ClubCard;
