import styles from "../styles/hero.module.css";
import Typography from "@mui/material/Typography";
import Marqueesv from "@/components/marquee";
import Timersv from "@/components/timer";
import Sponsor from "@/components/sponsor";
import { Box } from "@mui/system";
import Speakers from "@/components/speakers";
const Hero = () => {
  return (
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
          <Typography variant="h3" color="initial" sx={{ fontSize: "2.5rem" }}>
            MARVEL AT VSSUT
          </Typography>
          <Typography variant="nav" color="initial" sx={{ color: "#4D4544" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique senectus et netus et malesuada fames ac turpis. Amet est
            placerat in egestas erat imperdiet sed euismod nisi. Nulla aliquet
            porttitor lacus luctus accumsan tortor posuere ac.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Amet est placerat in
            egestas erat imperdiet sed euismod nisi. Nulla aliquet porttitor
            lacus luctus accumsan tortor posuere ac.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore.
          </Typography>
        </Box>
        <img src="./festposter.png" alt="Theme" className={styles.poster} />
      </div>
      <div id="speakers"></div>
      <Speakers />
      <div id="sponsor"></div>
      <Sponsor />
    </Box>
  );
};
export default Hero;
