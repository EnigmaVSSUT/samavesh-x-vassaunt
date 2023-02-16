import { c } from "@/lib/data/club";
import useClubEvents from "@/lib/store/useClubEvents";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import ClubCard from "@/components/ClubCard";
import { Typography, Grid, Avatar } from "@mui/material";

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
        sx={{
          justifyContent: "space-between",
          padding: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          margin: { xs: "0 auto", md: "0px" },
        }}
      >
        <Stack>
          <Typography
            variant="h2"
            color="initial"
            sx={{
              textDecoration: "underline",
              fontFamily: "BentonSans Comp Black",
              textTransform: "uppercase",
            }}
          >
            {club.name}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            sx={{
              fontFamily: "BentonSans Comp Black",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            {club.about}
          </Typography>
        </Stack>
        <Stack
          alignItems={{
            xs: "center",
            md: "start",
          }}
        >
          <Typography
            variant="h4"
            color="initial"
            sx={{
              marginBottom: "30px",
              fontFamily: "BentonSans Comp Black",
              textTransform: "uppercase",
            }}
          >
            POINT OF CONTACT
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: { lg: "row", md: "row", sm: "coloumn" },
              margin: { md: "0", sm: "0 auto" },
            }}
          >
            {club.poc &&
              club.poc.map((e) => (
                <Stack
                  sx={{ alignItems: "center", marginRight: "10px" }}
                  key={e.name}
                >
                  <Avatar>N</Avatar>
                  <Typography variant="subtitle1" color="initial">
                    {e.name}
                  </Typography>
                  <Typography variant="caption" color="initial">
                    {e.designation}
                  </Typography>
                  <Typography variant="caption" color="initial">
                    {e.contactNo}
                  </Typography>
                </Stack>
              ))}
          </Stack>
        </Stack>
      </Stack>

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
              <Grid Item xs={8} sm={6} md={4} lg={3} key={e.title} margin="8px">
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
