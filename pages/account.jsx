/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";
import ClubCard from "@/components/ClubCard";
import club from "../lib/data/club";
import Events from "@/components/events";
import React from "react";
import { useRouter } from "next/router";
const Account = () => {
  const router = useRouter();
  React.useEffect(() => {
    if (!localStorage.getItem("token")) router.push("/");
  }, []);
  return (
    <>
      <Stack
        sx={{ paddingTop: "50px", margin: { md: "0 auto", sm: "0 auto" } }}
      >
        <Typography
          variant="h2"
          color="initial"
          textAlign="center"
          sx={{
            textDecoration: "underline",
            fontFamily: "BentonSans Comp Black",
            textTransform: "uppercase",
          }}
        >
          My Profile
        </Typography>
        <Stack
          padding="60px 30px"
          margin="3rem"
          direction={{
            xs: "column",
            md: "row",
          }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{
            xs: 5,
            md: 40,
          }}
          sx={
            {
              // backgroundColor:"black",
              // borderRadius:"20px"
            }
          }
        >
          <Avatar
            src="/clubs/5.png"
            sx={{
              width: {
                xs: 175,
                md: 250,
              },
              height: {
                xs: 175,
                md: 250,
              },
            }}
          >
            P
          </Avatar>
          <Stack
            direction="column"
            spacing={{ xs: 1, md: 3 }}
            // sx={{color:"white"}}
          >
            <Typography variant="h5">Name : Andu Pandu</Typography>
            <Typography variant="h5">Institution : VSSUT</Typography>
            <Typography variant="h5">Branch : CSE</Typography>
            <Typography variant="h5">Graduation Year : 2025</Typography>
          </Stack>
        </Stack>
        <Typography
          variant="h4"
          textAlign="center"
          color="initial"
          sx={{
            fontFamily: "BentonSans Comp Black",
            textTransform: "uppercase",
            marginBottom: "18px",
          }}
        >
          Events Participated
        </Typography>
      </Stack>
      <Events />
    </>
  );
};
export default Account;
