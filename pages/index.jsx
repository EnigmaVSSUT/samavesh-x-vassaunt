import styles from "../styles/hero.module.css";
import Typography from "@mui/material/Typography";
import Marqueesv from "@/components/marquee";
import Timersv from "@/components/timer";
import Sponsor from "@/components/sponsor";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.intro}>
        <Typography
          variant="h3"
          color="initial"
          maxWidth={"380px"}
          sx={{ fontSize: "2.8rem" }}
        >
          THE ANNUAL
          <br />
          TECHNO-CULTURAL
          <br />
          FEST OF VSSUT
          <br />
          <Timersv />
        </Typography>
        <img src="./theme.png" alt="Fest Poster" />
      </div>
      <Marqueesv />
      <div className={styles.theme}>
        <div className={styles.text}>
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
        </div>
        <img src="./festposter.png" alt="Theme" className={styles.poster} />
      </div>
      <Sponsor />
    </div>
  );
};
export default Hero;
