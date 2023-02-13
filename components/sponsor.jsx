import { EmailOutlined } from "@mui/icons-material";
import { Stack, Typography, Box, Container, Button } from "@mui/material";
import Link from "next/link";
import Sponsorlist from "./sponsorlist";
const Sponsor = () => {
  return (
    <Stack
      // padding='10px 32px'
      alignItems="flex-start"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "25px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px 0",
          gap: "20px",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "45px", lineHeight: "52px" }}>
          Sponsors
        </Typography>
        {/* <Sponsorlist />   */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "40px",
            background: "#C0000A",
            borderRadius: "8px",
            width: "70vw",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: "flex-start",
              padding: "0px",
              gap: "40px",
            }}
          >
            <Typography
              variant="h3"
              color="#fff"
              sx={{
                fontSize: "2rem",
                display: "flex",
                alignItems: "left",
                textAlign: "left",
              }}
            >
              SPONSOR US
            </Typography>
            <Typography variant="nav" color="#fff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique senectus et netus et malesuada fames ac turpis. Amet est
              placerat in egestas erat imperdiet sed euismod nisi. Nulla aliquet
              porttitor lacus luctus accumsan tortor posuere ac. Amet est
              placerat in egestas erat imperdiet sed euismod nisi. Nulla aliquet
              porttitor lacus luctus accumsan tortor posuere ac.
              <br />
            </Typography>
          </Box>
          <Link href="/login">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#410001",
                fontFamily: "Product sans",
                textTransform: "inherit",
                fontWeight: "600",
                marginTop: "10px",
              }}
            >
              <EmailOutlined sx={{ marginRight: "5px" }} /> Contact Us
            </Button>
          </Link>
        </Box>
      </Box>
    </Stack>
  );
};
export default Sponsor;
