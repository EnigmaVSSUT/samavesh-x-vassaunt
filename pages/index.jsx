import styles from "../styles/hero.module.css";
import Typography from "@mui/material/Typography";
import Marqueesv from "@/components/marquee";
import Timersv from "@/components/timer";
import Sponsor from "@/components/sponsor";
import { Box } from "@mui/system";
import Speakers from "@/components/speakers";
import Organisers from "@/components/organisers";
import { Button } from "@mui/material";
import Link from "next/link";
import AppContext from "context/AppContext";
import React from "react";
const Hero = () => {
  const { isAuthenticated, paymentStatus } = React.useContext(AppContext);
  return (
    <>
      <div id="home"></div>
      <Box
        className={styles.hero}
        sx={{
          marginTop: {
            xs: "30px",
            lg: "0px",
          },
        }}
      >
        <Box
          className={styles.intro}
          sx={{
            justifyContent: {
              xs: "center",
              lg: "space-between",
            },
          }}
        >
          <Typography
            variant="h3"
            color="initial"
            sx={{
              fontSize: {
                xs: "2.5rem",
                md: "2.8rem",
              },
              maxWidth: { xs: "300px", md: "380px" },
            }}
          >
            THE ANNUAL
            <br />
            TECHNO-CULTURAL
            <br />
            FEST OF VSSUT
            <Timersv />
            <Link href={!paymentStatus ? "/PaymentPage" : "/ticketgen"}>
              <Button
                variant="contained"
                sx={{ bottom: "20px", fontSize: "20px", padding: "10px 50px" }}
              >
                Collect&nbsp;&nbsp; your&nbsp;&nbsp; ticket
              </Button>
            </Link>
          </Typography>
          <img src="./theme.png" alt="Fest Poster" className={styles.poster1} />
        </Box>
        <Marqueesv />
        <div className={styles.theme}>
          <Box
            className={styles.text}
            sx={{
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <div id="theme"></div>
            <Typography
              variant="h3"
              color="initial"
              sx={{ fontSize: "2.5rem" }}
            >
              MARVEL AT VSSUT
            </Typography>
            <Typography variant="nav" color="initial" sx={{ color: "#4D4544" }}>
              Marvel Cinematic Universe, fondly known as MCU, is an essence of
              childhood where it takes even an adult to the nostalgia of falling
              in love with their superheroes all over again. Be it Ironman,
              Deadpool, Groot or Captain America, their fanbase knows no age
              restrictions. The marvellous love for those friendly superheroes
              would just increase with time as one learns about their pure
              intentions and morals for which they fight against injustice.
            </Typography>
          </Box>
          <img src="./festposter.png" alt="Theme" className={styles.poster} />
        </div>
        <div id="speakers"></div>
        <Speakers />
        <div id="organisers"></div>
        <Organisers />
        <div id="sponsors"></div>
        <Sponsor />
      </Box>
    </>
  );
};
export default Hero;
