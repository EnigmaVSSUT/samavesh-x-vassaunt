import { Stack, Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import logo from "/pictures/Enigmalogo.png";
import svlogo from "/pictures/svlogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const Footer = () => {
  return (
    <Stack
      // padding='10px 32px'
      alignItems="center"
      sx={{ overflowX: "hidden" }}
    >
      <Box
        sx={{
          backgroundColor: "#C0000A",
          width: "100vw",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            alignItems: {
              xs: "center",
              md: "flex-start",
            },
            padding: "32px",
            gap: "10px",
            color: "#ffffff",
          }}
        >
          <Image src={svlogo} alt="IMAGE" height={163} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: {
                xs: "center",
                md: "flex-start",
              },
              marginTop: {
                xs: "10px",
                md: "0px",
              },
              padding: "0px",
              gap: "60px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "8px",
              }}
            >
              <Typography variant="nav" sx={{ fontSize: "1.1rem" }}>
                <Link href="/#theme">THEME</Link>
              </Typography>
              <Typography variant="nav" sx={{ fontSize: "1.1rem" }}>
                <Link href="/events">EVENTS</Link>
              </Typography>
              <Typography variant="nav" sx={{ fontSize: "1.1rem" }}>
                <Link href="/#speakers">SPEAKERS</Link>
              </Typography>
              <Typography variant="nav" sx={{ fontSize: "1.1rem" }}>
                <Link href="/#sponsors">SPONSORS</Link>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "13px",
              }}
            >
              <Typography variant="nav" sx={{ fontSize: "1.1rem" }}>
                FOLLOW OUR SOCIALS
              </Typography>
              <Typography variant="nav" sx={{ fontSize: "1.1rem" }}>
                <Link href="https://instagram.com/samavesh.vssut?igshid=YmMyMTA2M2Y=">
                  <InstagramIcon />
                </Link>
                <Link href="www.twitter.com">
                  {" "}
                  <TwitterIcon />
                </Link>
                <Link href="www.youtube.com">
                  {" "}
                  <YouTubeIcon />
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#000000",
          width: "100vw",
          height: "158.17px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="nav" sx={{ color: "#ffffff" }}>
          MADE WITH LOVE BY
        </Typography>
        <Image src={logo} alt="IMAGE" height={60} />
        <Typography variant="nav" sx={{ color: "#ffffff" }}>
          ENIGMA VSSUT
        </Typography>
      </Box>
    </Stack>
  );
};

export default Footer;
