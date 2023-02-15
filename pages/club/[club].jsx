import { c } from "@/lib/data/club";
import useClubEvents from "@/lib/store/useClubEvents";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import ClubCard from "@/components/ClubCard";
import { Typography, Grid } from "@mui/material";

const ClubPage = () => {
  const router = useRouter();
  const [club, getClubData] = useClubEvents((state) => [
    state.club,
    state.getClubData,
  ]);

  useEffect(() => {
    if (!router.isReady) return;
    getClubData(router.query.club);
  }, [router.isReady]);

  useEffect(() => {
    console.log(club);
  }, [club]);

  return (
    <>
      <Stack
        sx={{ padding: "15px" }}
        alignItems={{ xs: "center", sm: "center", md: "start" }}
      >
        <Typography variant="h4" color="initial" marginBottom="3vmax">
          Events
        </Typography>
        <Grid container spacing={2} maxWidth="100vw" justifyContent="center">
          {club.events &&
            club.events.map((e) => (
              <Grid Item xs={8} sm={6} md={4} lg={3} margin="8px">
                <ClubCard
                  title={e.title}
                  venue={e.venue}
                  time={e.time}
                  about={e.about}
                />
              </Grid>
            ))}
        </Grid>
      </Stack>
    </>
  );
};

export default ClubPage;
