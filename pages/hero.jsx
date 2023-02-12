import styles from "../styles/hero.module.css";
import Typography from "@mui/material/Typography";



const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.intro}>
        <Typography variant="h3" color="initial" maxWidth={"380px"}>
          THE ANNUAL TECHNO-CULTURAL FEST OF VSSUT
        </Typography>
        <img src="./theme.png" alt="Fest Poster" />
      </div>
      <div className={styles.theme}>
        <div className={styles.text}>
          <Typography variant="h3" color="initial">
            MARVEL AT VSSUT
          </Typography>
          <Typography variant="h6" color="initial">
            lorem ddte dtd dfe
          </Typography>
        </div>
        <img src="./festposter.png" alt="Theme" />
      </div>

    </div>
  );
};
export default Hero;